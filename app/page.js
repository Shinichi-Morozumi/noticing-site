import Reveal from "./Reveal";
import { getNoteArticles } from "@/lib/note";

export const revalidate = 3600;

const APP_URL = "https://noticing-pi.vercel.app";

export default async function Home() {
  const { username, articles } = await getNoteArticles(6);
  const noteProfile = username ? `https://note.com/${username}` : "https://note.com";

  return (
    <>
      <div className="bgfx" aria-hidden>
        <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
        <div className="blob b4" /><div className="blob b5" />
        <div className="grain" />
      </div>

      <div className="page">
        {/* nav */}
        <nav className="nav">
          <div className="container">
            <a className="logo" href="#top">
              <span className="pulse" />noticing<span className="pd">.</span>
            </a>
            <div className="links">
              <a className="hidephone" href="#why">使う理由</a>
              <a className="hidephone" href="#flow">流れ</a>
              <a className="hidephone" href="#faq">よくある質問</a>
              <a className="hidephone" href="#notes">note</a>
              <a className="cta" href={APP_URL}>やってみる →</a>
            </div>
          </div>
        </nav>

        {/* hero */}
        <header className="hero container" id="top">
          <div className="eyebrow">看護師のリフレクション ・ 経験を、次の一歩へ</div>
          <h1>うまく言えないモヤモヤを、<br />AIと少しずつ、言葉に。</h1>
          <p className="sub">
            <span className="ln">リフレクションは、掘り下げて終わりの内省じゃない。</span>
            <span className="ln">経験から学んで、次に活かすこと。</span>
          </p>
          <p className="sub2">
            <span className="ln">ラダーⅡ〜Ⅳの中堅看護師のための、</span>
            <span className="ln">日々の経験をふり返るリフレクション・ツールです。</span>
          </p>
          <div className="actions">
            <a className="btn solid" href={APP_URL}>まず一回、やってみる →</a>
            <a className="btn line" href="#why">どんなもの？</a>
          </div>
          <div className="note">所要 約10分 ／ 無料・登録不要 ／ 患者さんを特定しない書き方をやさしくご案内します</div>
        </header>

        {/* WHY — the fuzzy モヤモヤ, not a submission deadline */}
        <section className="section" id="why">
          <div className="container">
            <div className="sec-head">
              <div className="k">WHY noticing</div>
              <h2>「なんで続けてるんですか？」<br />そう聞かれて、少し止まった。</h2>
              <p>
                やりがいって何だろう。自分は何を大事に看護しているんだろう。
                忙しさに流されて、そういう問いは、ふわっとしたまま後回しになりがちです。
                noticing. は、その言葉にならないモヤモヤを、AIとの対話でゆっくりほどいていく場所。
                効果や意義はいったん置いて、まず一回、やってみるくらいの気持ちで大丈夫です。
              </p>
            </div>
            <div className="grid g3">
              <Reveal className="card" as="div">
                <div className="num">01</div>
                <h3>「やりがい」がふわっとしている</h3>
                <p>忙しさに流されて、自分が何を大事に看護しているのか、立ち止まって言葉にする機会がない。</p>
              </Reveal>
              <Reveal className="card" as="div" delay={90}>
                <div className="num">02</div>
                <h3>経験が、経験のまま流れていく</h3>
                <p>心に残る場面はあるのに、その意味をたぐり寄せる前に、次の勤務が来てしまう。</p>
              </Reveal>
              <Reveal className="card" as="div" delay={180}>
                <div className="num">03</div>
                <h3>書いても、積み上がらない</h3>
                <p>毎回ゼロから。ふり返りが記録として残らず、自分の成長や看護観として語れない。</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FLOW — how it works, end to end */}
        <section className="section alt" id="flow">
          <div className="container">
            <div className="sec-head">
              <div className="k">FLOW</div>
              <h2>ひとつの経験が、<br />次の一歩に変わるまで。</h2>
              <p>思いつきの反省で終わらせない。きっかけから、あなたの看護観が立ち上がるまで、一本の流れでつながります。</p>
            </div>
            <div className="steps">
              <div className="stp"><div className="idx">1</div><div className="txt"><h3>きっかけ</h3><p>今日ずっと引っかかっている関わり、うまく答えられなかった問い。どんな小さなことでも入口になります。</p></div></div>
              <div className="stp"><div className="idx">2</div><div className="txt"><h3>AIとの対話（記述と感情を、じっくり）</h3><p>まず、その場面を事実として詳しく。それから、そのとき動いた気持ちへ。感情がうまく言葉にならなくても、AIが例を差し出しながら、一緒に探します。急がせません。</p></div></div>
              <div className="stp"><div className="idx">3</div><div className="txt"><h3>気づきが、まとめになる</h3><p>とことん気持ちを出したあとに、一度だけ患者さんの側へ。対話が整理され、あなたの「大事にしたいこと」＝看護観の芽が立ち上がります。</p></div></div>
              <div className="stp"><div className="idx">4</div><div className="txt"><h3>続けるほど、看護観が積み上がる</h3><p>回を重ねるほどまとめは更新され、何回分かを横断して、あなた自身の言葉で語れる看護観の記録に育っていきます。</p></div></div>
            </div>

            <Reveal className="pv-hi" as="div">
              <div className="lab">◑ noticing. が大切にしていること</div>
              <div className="q">とことん気持ちを出したあとに、一度だけ——<br />その人からは、何が見えていたと思いますか？</div>
            </Reveal>
          </div>
        </section>

        {/* GOAL — what you walk away with */}
        <section className="section" id="goal">
          <div className="container">
            <div className="sec-head">
              <div className="k">WHAT YOU GET</div>
              <h2>ふり返りのあとに、持ち帰れるもの。</h2>
            </div>
            <div className="grid g3">
              <div className="card get">
                <div className="num">◎</div>
                <h3>自分の言葉になった経験</h3>
                <p>ふわっとしていたモヤモヤが、少しだけ輪郭を持つ。次に活かせる学びの形になる。</p>
              </div>
              <div className="card get">
                <div className="num">◎</div>
                <h3>多角的な見方</h3>
                <p>自分の視点と、患者さんの視点。两面から見ることで、気づきに深さが生まれる。</p>
              </div>
              <div className="card get">
                <div className="num">◎</div>
                <h3>積み上がる看護観</h3>
                <p>一回きりで終わらない。続けるほど、あなた自身の言葉で語れる記録になる。</p>
              </div>
            </div>
          </div>
        </section>

        {/* app teaser / CTA */}
        <section className="section alt">
          <div className="container">
            <div className="teaser">
              <div className="top">
                <div className="k">TRY THE REFLECTION</div>
                <h3>まず一回、<br />やってみませんか。</h3>
                <p>AIファシリテーターと、あなたのペースで。効果うんぬんより、まず一度やってみる。それくらいの気持ちで大丈夫です。</p>
              </div>
              <div className="btm">
                <a className="btn solid" href={APP_URL}>リフレクションを始める →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ASSURE — free / privacy / safety */}
        <section className="section" id="assure">
          <div className="container">
            <div className="sec-head">
              <div className="k">FREE &amp; SAFE</div>
              <h2>安心して、使うために。</h2>
              <p>お金のことも、プライバシーのことも、はじめる前にはっきりさせておきます。</p>
            </div>
            <div className="grid g3">
              <div className="card">
                <div className="num">￥0</div>
                <h3>無料・登録不要</h3>
                <p>リフレクションの体験は無料です。アカウント登録も要りません。まず気軽に一度どうぞ。</p>
              </div>
              <div className="card">
                <div className="num">◑</div>
                <h3>患者さんを特定しない</h3>
                <p>「80代の患者さん」のように、個人が特定できない書き方をAIがやさしくご案内します。</p>
              </div>
              <div className="card">
                <div className="num">◇</div>
                <h3>あなたのための記録</h3>
                <p>ふり返りは評価や提出のためではなく、まずあなた自身のために。誰かに見せる義務はありません。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section alt" id="faq">
          <div className="container">
            <div className="sec-head">
              <div className="k">FAQ</div>
              <h2>よくある質問。</h2>
            </div>
            <div className="faq">
              <details>
                <summary>誰のためのツールですか？</summary>
                <p>ラダーⅡ〜Ⅳの中堅看護師など、日々の経験を立ち止まってふり返り、次に活かしたい方に向けています。インシデントの反省というより、看護観の発展や自己理解のためのリフレクションです。</p>
              </details>
              <details>
                <summary>お金はかかりますか？</summary>
                <p>リフレクションの体験は無料です。登録も不要で、すぐに始められます。</p>
              </details>
              <details>
                <summary>患者さんの情報を書いても大丈夫ですか？</summary>
                <p>個人が特定できる書き方は避けていただくよう、AIがやさしくご案内します。「◯◯さん」ではなく「80代の患者さん」のように、はかした書き方で進めてください。</p>
              </details>
              <details>
                <summary>提出物やラダー評価に使えますか？</summary>
                <p>まとまった内容は、下書きとして使っていただくこともできます。ただ、noticing. は「提出のため」より、まずあなた自身のために。かしこまらず、日常の中で使ってもらえたら嬉しいです。</p>
              </details>
              <details>
                <summary>ふり返りが苦手で、続けられるか不安です。</summary>
                <p>大丈夫です。まず一回だけ、やってみるところから。感情がうまく言葉にならなくても、AIが例を差し出しながら一緒に探します。急がせません。</p>
              </details>
            </div>
          </div>
        </section>

        {/* COMMUNITY / 募集 */}
        <section className="section" id="community">
          <div className="container">
            <div className="teaser community">
              <div className="top">
                <div className="k">COMMUNITY</div>
                <h3>ひとりで続けるのは、<br />正直しんどい。</h3>
                <p>同じように悩む看護師と、経験を持ち寄って言葉にする——そんな場を、少しずつつくっています。研修やリフレクションの会に関心のある方、いっしょに育ててくれる仲間を探しています。</p>
              </div>
              <div className="btm">
                <a className="btn solid" href={noteProfile} target="_blank" rel="noopener">note で活動を見る →</a>
              </div>
            </div>
          </div>
        </section>

        {/* note feed */}
        <section className="section alt" id="notes">
          <div className="container">
            <div className="sec-head">
              <div className="k">FROM NOTE</div>
              <h2>note に綴っています。</h2>
              <p>看護とリフレクションについての、日々の考えごと。新しい記事は自動でここに並びます。</p>
            </div>

            {articles.length > 0 ? (
              <>
                <div className="notes">
                  {articles.map((a, i) => (
                    <a className="nart" key={i} href={a.link} target="_blank" rel="noopener">
                      {a.thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img className="thumb" src={a.thumb} alt="" loading="lazy" />
                      ) : (
                        <div className="thumb" />
                      )}
                      <div className="meta">
                        <div className="date">{a.dateLabel}</div>
                        <h3>{a.title}</h3>
                        <p>{a.excerpt}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="notes-more">
                  <a className="btn line" href={noteProfile} target="_blank" rel="noopener">note で続きを読む →</a>
                </div>
              </>
            ) : (
              <div className="notes-empty">
                最新記事を準備中です。
                <div style={{ marginTop: 18 }}>
                  <a className="btn line" href={noteProfile} target="_blank" rel="noopener">note を見る →</a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* footer */}
        <footer className="footer">
          <div className="container">
            <div className="logo"><span className="pulse" />noticing<span className="pd">.</span></div>
            <div className="tagline">経験を振り返り、自分で考え続けられる看護師を増やす。</div>
            <div className="links">
              <a href={APP_URL}>リフレクションを体験する</a>
              <a href="#why">使う理由</a>
              <a href="#flow">流れ</a>
              <a href="#faq">よくある質問</a>
              <a href={noteProfile} target="_blank" rel="noopener">note</a>
            </div>
            <div className="cr">© {new Date().getFullYear()} noticing.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
