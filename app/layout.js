import "./globals.css";

export const metadata = {
  title: "noticing. — 中堅看護師のための内省",
  description:
    "Gibbsリフレクティブサイクル × AI。あの日の関わりを、もう一度、患者さんの側から。経験を振り返り、自分で考え続けられる看護師のための内省ツール。",
  openGraph: {
    title: "noticing. — 中堅看護師のための内省",
    description:
      "あの日の関わりを、もう一度、患者さんの側から。Gibbs×AIの内省ツール。",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f7f4ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
