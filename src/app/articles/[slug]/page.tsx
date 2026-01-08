import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug, categories, getArticlesByCategory } from "@/data/articles";
import ArticleContent from "@/components/ArticleContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Check if it's a category page
  const category = categories.find((c) => c.slug === slug);
  if (category) {
    return {
      title: `${category.name} | イエリーお部屋探しメディア`,
      description: `${category.name}に関する記事一覧`,
    };
  }

  // Article page
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "記事が見つかりません | イエリー",
    };
  }

  return {
    title: `${article.title} | イエリーお部屋探しメディア`,
    description: article.title,
  };
}

export function generateStaticParams() {
  const articleParams = articles.map((article) => ({
    slug: article.slug,
  }));

  const categoryParams = categories.map((category) => ({
    slug: category.slug,
  }));

  return [...articleParams, ...categoryParams];
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  // Check if it's a category page
  const category = categories.find((c) => c.slug === slug);
  if (category) {
    const categoryArticles = getArticlesByCategory(slug);
    return (
      <>
        <Header variant="articles" />
        <main className="pt-16 min-h-screen">
          <section className="py-12 px-4">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold text-center mb-8">
                #{category.name}
              </h1>
              <div className="space-y-4">
                {categoryArticles.length > 0 ? (
                  categoryArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="card block hover:shadow-lg transition-shadow"
                    >
                      <p className="text-sm text-gray-600 mb-1">{article.date}</p>
                      <p className="font-bold">{article.title}</p>
                    </Link>
                  ))
                ) : (
                  <p className="text-center text-gray-600">
                    このカテゴリの記事はまだありません。
                  </p>
                )}
              </div>
              <div className="text-center mt-8">
                <Link href="/articles" className="btn-outline">
                  記事一覧に戻る
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // Article page
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  // Get recent articles for sidebar
  const recentArticles = articles.slice(0, 4);

  return (
    <>
      <Header variant="articles" />
      <main className="pt-16 min-h-screen">
        {/* Article Header */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <p className="text-center font-bold text-lg">イエリーでの</p>
              <p className="text-center font-bold text-lg">{article.title}</p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <article className="flex-1">
                <p className="text-sm text-gray-600 mb-4">{article.date}</p>
                <ArticleContent sections={article.sections} />
              </article>

              {/* Sidebar */}
              <aside className="lg:w-72">
                <div className="card sticky top-20">
                  <h3 className="font-bold mb-4">新着記事</h3>
                  <div className="space-y-3">
                    {recentArticles.map((recentArticle) => (
                      <Link
                        key={recentArticle.slug}
                        href={`/articles/${recentArticle.slug}`}
                        className="block hover:opacity-70 transition-opacity"
                      >
                        <p className="text-xs text-gray-600">
                          {recentArticle.date}
                        </p>
                        <p className="text-sm">{recentArticle.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4">
          <div className="max-w-md mx-auto">
            <div className="card text-center">
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
              <Link
                href="https://lin.ee/RcmX68V"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                イエリーでお部屋を相談！
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
