import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "イエリー | 仲介手数料0円〜0.3ヶ月の賃貸仲介 | 東京23区",
    template: "%s | イエリー",
  },
  description:
    "東京23区の賃貸仲介サービス。自分でお部屋を探すと仲介手数料0円、イエリー経由でも賃料0.3ヶ月分（税別）。繁体字中国語対応。ラスエステート株式会社運営。",
  keywords: [
    "賃貸",
    "仲介手数料無料",
    "仲介手数料0円",
    "東京",
    "部屋探し",
    "賃貸仲介",
    "仲介手数料安い",
  ],
  openGraph: {
    title: "イエリー | 仲介手数料0円〜0.3ヶ月の賃貸仲介",
    description:
      "東京23区の賃貸仲介サービス。自分でお部屋を探すと仲介手数料0円、イエリー経由でも賃料0.3ヶ月分（税別）。",
    siteName: "イエリー",
    url: "https://ieree.com",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://ieree.com",
  },
  verification: {
    google: "OLKxYo9gkj6WtCZjiu12hIcVQGYW2DkaMEo2jANZsa8",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ieree.com/#organization",
      name: "イエリー",
      url: "https://ieree.com",
      logo: "https://ieree.com/images/logo.webp",
      description:
        "仲介手数料0円〜0.3ヶ月分の賃貸仲介サービス。東京23区対応。繁体字中国語対応。",
      parentOrganization: {
        "@type": "Organization",
        name: "ラスエステート株式会社",
        url: "https://ras-estate.com",
        telephone: "03-6403-9686",
        address: {
          "@type": "PostalAddress",
          streetAddress: "日本橋大伝馬町13-7 日本橋大富ビル2F",
          addressLocality: "中央区",
          addressRegion: "東京都",
          postalCode: "103-0011",
          addressCountry: "JP",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ieree.com/#website",
      name: "イエリー",
      url: "https://ieree.com",
      publisher: { "@id": "https://ieree.com/#organization" },
      inLanguage: ["ja", "zh-Hant"],
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://ieree.com/#realestate",
      name: "イエリー（ラスエステート株式会社）",
      url: "https://ieree.com",
      description:
        "東京23区の賃貸仲介。仲介手数料0円〜0.3ヶ月分。宅地建物取引業免許: 東京都知事（1）第111381号",
      areaServed: {
        "@type": "City",
        name: "東京23区",
      },
      priceRange: "仲介手数料0円〜賃料0.3ヶ月分",
      knowsLanguage: ["ja", "zh-Hant"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
