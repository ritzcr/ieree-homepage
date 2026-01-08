import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "イエリー",
  description: "自分でお部屋を探すと仲介手数料0円or賃料0.3ヶ月分の賃貸仲介サービス",
  openGraph: {
    title: "イエリー",
    description: "自分でお部屋を探すと仲介手数料0円or賃料0.3ヶ月分の賃貸仲介サービス",
    siteName: "イエリー",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "OLKxYo9gkj6WtCZjiu12hIcVQGYW2DkaMEo2jANZsa8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
