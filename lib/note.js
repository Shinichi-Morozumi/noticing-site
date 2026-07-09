/* Minimal note.com RSS reader — no external deps.
   Set NOTE_USERNAME in the environment (e.g. "haruka_ns").
   Feed URL pattern: https://note.com/<username>/rss                        */

const USERNAME = process.env.NOTE_USERNAME || "";

function pick(block, tag) {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  if (!m) return "";
  return m[1]
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function firstImage(html) {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : "";
}

export async function getNoteArticles(limit = 6) {
  if (!USERNAME) return { username: "", articles: [] };
  const url = `https://note.com/${USERNAME}/rss`;
  try {
    const res = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0 (noticing-site RSS)" },
      next: { revalidate: 3600 }, // refresh hourly
    });
    if (!res.ok) return { username: USERNAME, articles: [] };
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];
    const articles = items.slice(0, limit).map((it) => {
      const title = stripTags(pick(it, "title"));
      const link = pick(it, "link");
      const pub = pick(it, "pubDate");
      const enc = pick(it, "content:encoded") || pick(it, "description");
      const media = (it.match(/<media:thumbnail[^>]*>([^<]+)<\/media:thumbnail>/i) || [])[1] || "";
      const encl = (it.match(/<enclosure[^>]+url=["']([^"']+)["']/i) || [])[1] || "";
      const thumb = media || encl || firstImage(enc);
      const excerpt = stripTags(enc).slice(0, 90);
      const date = pub ? new Date(pub) : null;
      return {
        title,
        link,
        thumb,
        excerpt,
        dateLabel: date
          ? `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`
          : "",
      };
    });
    return { username: USERNAME, articles };
  } catch (e) {
    return { username: USERNAME, articles: [] };
  }
}
