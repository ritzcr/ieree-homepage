import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, categories } from "@/data/articles";

export const metadata: Metadata = {
  title: "イエリーお部屋探しメディア",
  description:
    "イエリーお部屋探しメディアは、お部屋探しのことはもちろん暮らしやお金のことまで住まいや暮らしの悩みを解決する情報をお届けします。",
};

export default function ArticlesPage() {
  return (
    <>
      <Header variant="articles" />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="py-12 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">お部屋探し</h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">メディア</h1>
          <div className="card max-w-md mx-auto">
            <p className="font-bold">お部屋探しの<span className="text-xl">疑問</span>解決</p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-6">
              カテゴリ
            </h2>
            <div className="card">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/articles/${category.slug}`}
                    className="btn-outline text-sm"
                  >
                    #{category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-6">
              すべての記事
            </h2>
            <div className="space-y-4">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="card block hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm text-gray-600 mb-1">{article.date}</p>
                  <p className="font-bold">{article.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Promotion */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-6">
              お部屋探しのおすすめサービス
            </h2>
            <div className="card text-center">
              <p className="font-bold mb-4">おすすめのお部屋探しサービス</p>
              <div className="bg-[#F5C83C] p-4 rounded-lg mb-4">
                <p className="text-sm mb-2">自分でお部屋を探すと</p>
                <p className="font-bold mb-2">仲介手数料</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-black">0</span>
                  <span className="text-sm">円</span>
                  <span className="text-sm">or 税別</span>
                  <span className="text-3xl font-black">0.3</span>
                  <span className="text-sm">ヶ月</span>
                </div>
              </div>
              <Link href="/" className="btn-primary">
                サービスサイトを見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
