import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "イエリーの仲介手数料はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "自分でお部屋を見つけた場合は仲介手数料0円（広告料のある物件）または賃料0.3ヶ月分（税別・広告料のない物件）です。イエリーがお部屋を探す場合は賃料0.5ヶ月分（税別）です。一般的な不動産会社の1ヶ月分と比べて最大100%の節約になります。",
      },
    },
    {
      "@type": "Question",
      name: "他社で内見・申込した物件を契約できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "マナー違反でございますので、お断りさせて頂いております。他社でご相談中の物件を弊社経由に切り替えた場合、結果的にお客様の契約に支障をきたす可能性があります。",
      },
    },
    {
      "@type": "Question",
      name: "内見前の先行申込はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "物件に応じて可能でございます。入居確度の低いものや合理的な事情がないものは貸主・弊社の負担を考え、お断りしております。",
      },
    },
    {
      "@type": "Question",
      name: "賃料発生日・初期費用の交渉は可能でしょうか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ご要望にお応えできるよう努めさせていただきます。合理的な範囲を超えた要望はお受けしておりません。繁忙期など交渉を全くできないケースもございますので、予算に余裕を持ったお引越しのご検討をお願い致します。",
      },
    },
    {
      "@type": "Question",
      name: "どんな物件が紹介可能でしょうか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基本的にどの不動産会社も宅建業者がアクセスできるレインズ・atbbという業者間データベースから物件を探しています。そのデータベースに掲載されていれば、ご紹介可能です。一部、特定の不動産会社でしか扱えない物件がございますので、予めご了承ください。",
      },
    },
    {
      "@type": "Question",
      name: "対応エリアはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "東京23区内の賃貸物件に対応しています。管理費込み賃料が1人入居の場合9万円以上、2人入居の場合14万円以上、3人以上入居の場合18万円以上が条件となります。",
      },
    },
    {
      "@type": "Question",
      name: "なぜ仲介手数料を安くできるのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "イエリーは駅前の目立つ店舗を構えず、格安の事務所からオンラインで集客しています。また、貸主から広告料を受け取れる物件では仲介手数料を0円にしています。固定費の削減分をお客様に還元することで、安い仲介手数料を実現しています。",
      },
    },
    {
      "@type": "Question",
      name: "外国語での対応は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。日本語と繁体字中国語（台湾華語）に対応しています。台湾出身のスタッフが在籍しており、契約書の説明から入居後のサポートまで母語で対応可能です。",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 px-4 text-center">
          <Image
            src="/images/hero.webp"
            alt="イエリー"
            width={400}
            height={143}
            className="mx-auto mb-6"
            priority
          />
          <Link
            href="https://lin.ee/RcmX68V"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            LINEでお部屋探しを相談
          </Link>
        </section>

        {/* Service Overview */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-8">
              サービス概要
            </h2>
            <p className="text-center mb-8">
              イエリーはご利用方法に応じて
              <br />
              仲介手数料が異なります。
            </p>

            {/* Option 1 */}
            <div className="card mb-6">
              <div className="bg-[#F5C83C] -mx-6 -mt-6 px-6 py-3 mb-4 rounded-t-md">
                <p className="font-bold text-center">①お客様がお部屋を探す場合</p>
              </div>
              <Image
                src="/images/option1.webp"
                alt="仲介手数料 0円 or 税別 0.3ヶ月"
                width={662}
                height={253}
                className="w-full mb-4"
              />
              <p className="font-bold mb-2">お客様イメージ</p>
              <ul className="text-sm space-y-1">
                <li>自分でお部屋を探したい方</li>
                <li>仲介手数料を下げたい方</li>
                <li>お部屋探しに慣れている方</li>
              </ul>
            </div>

            {/* Option 2 */}
            <div className="card mb-6">
              <div className="bg-[#F5C83C] -mx-6 -mt-6 px-6 py-3 mb-4 rounded-t-md">
                <p className="font-bold text-center">②イエリーがお部屋を探す場合</p>
              </div>
              <Image
                src="/images/option2.webp"
                alt="仲介手数料 賃料 0.5ヶ月分+税"
                width={667}
                height={253}
                className="w-full mb-4"
              />
              <p className="font-bold mb-2">お客様イメージ</p>
              <ul className="text-sm space-y-1">
                <li>お部屋探しが苦手な方</li>
                <li>お部屋探しに慣れていない方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-8">
              ご利用条件
            </h2>
            <p className="text-center mb-4">ご利用条件は下記となっております。</p>
            <div className="card">
              <ul className="space-y-2 text-sm">
                <li>①東京２３区内であること</li>
                <li>②管理費込み賃料が下記を満たすこと</li>
                <li className="ml-4">１人入居の場合：９万円以上</li>
                <li className="ml-4">２人入居の場合：１４万円以上</li>
                <li className="ml-4">３人以上入居の場合：１８万円以上</li>
                <li>③入居希望日が１.５ヶ月以内であること</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reasons */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-8">
              仲介手数料が０円or０.３ヶ月（税別）の理由
            </h2>

            {/* Reason 1 */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">理由１</h3>
              <p className="text-sm mb-4">
                仲介会社（不動産会社）は貸主から広告料を頂ける場合があります。
                広告料があれば仲介手数料０円、広告料がなければ仲介手数料０.３ヶ月(税別)、
                わかりやすい賃貸仲介サービスです。
              </p>
              <p className="text-xs text-gray-600 mb-4">
                ※敷金礼金など貸主からの初期費用の請求は別途ございます
                <br />
                ※仲介手数料は 0.３ヶ月分（最低3万円）となります。
                <br />
                ※家賃10万円以下の場合は計算上3万円未満となるため、最低手数料を適用いたします。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card p-0 overflow-hidden">
                  <Image
                    src="/images/price1.webp"
                    alt="広告料のある物件の場合 仲介手数料0円"
                    width={689}
                    height={317}
                    className="w-full"
                  />
                </div>
                <div className="card p-0 overflow-hidden">
                  <Image
                    src="/images/price2.webp"
                    alt="広告料のない物件の場合 仲介手数料税別0.3ヶ月"
                    width={689}
                    height={317}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">理由２</h3>
              <p className="text-sm mb-4">
                お客様にお部屋を探していただいたり、内見は現地集合だったり、
                お安い仲介手数料を実現するため、お客様にご協力いただく部分がございます。
              </p>
              <p className="text-sm mb-4">予め、利用ガイドラインを一読ください。</p>
              <Link href="/guideline" className="btn-outline">
                サービス利用ガイドライン →
              </Link>
            </div>

            {/* Reason 3 */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">理由３</h3>
              <p className="text-sm">
                イエリーは他の不動産会社と異なり、集客のために駅前に目立つように店舗を構えず、
                格安の事務所を借り、オンラインで集客しています。
                イエリーは固定費を削減しお客様に還元することでお安い仲介手数料の実現に努めています。
              </p>
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-8">
              利用の流れ
            </h2>

            <div className="space-y-4">
              <div className="card flex items-start gap-4">
                <Image
                  src="/images/flow-icon.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-bold mb-2">LINE公式アカウント友だち追加</p>
                  <p className="text-sm">
                    下記のリンクからLINE公式アカウント友だち追加の上、「チャットでお部屋探しを相談」をクリックしてください。
                  </p>
                </div>
              </div>

              <div className="card flex items-start gap-4">
                <Image
                  src="/images/flow-icon.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-bold mb-2">お部屋探し</p>
                  <p className="text-sm">
                    お客様に合った方法をご選択の上、物件探しをしてください。イエリーが物件の募集状況などを確認します。
                  </p>
                </div>
              </div>

              <div className="card flex items-start gap-4">
                <Image
                  src="/images/flow-icon.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-bold mb-2">内見</p>
                  <p className="text-sm">
                    気になった物件の内見にご案内します。入居確度が低い物件の内見はご遠慮ください。内見は現地集合、移動は公共交通機関のご利用をお願いしております。
                  </p>
                </div>
              </div>

              <div className="card flex items-start gap-4">
                <Image
                  src="/images/flow-icon.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-bold mb-2">入居審査のお申込</p>
                  <p className="text-sm">
                    気に入った物件に入居審査のお申し込みをします。物件に応じてお申込方法が異なりますのでイエリーよりご案内させていただきます。
                  </p>
                </div>
              </div>

              <div className="card flex items-start gap-4">
                <Image
                  src="/images/flow-icon.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-bold mb-2">初期費用のお振込・ご契約</p>
                  <p className="text-sm">
                    審査通過後、弊社事務所にてご契約締結をさせていただきます。敷金礼金などの初期費用・仲介手数料などの初期費用のお振込もお願い致します。
                  </p>
                </div>
              </div>

              <div className="card flex items-start gap-4">
                <Image
                  src="/images/flow-icon.webp"
                  alt=""
                  width={60}
                  height={60}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="font-bold mb-2">鍵の引き渡し</p>
                  <p className="text-sm">
                    ご契約開始日もしくは前日に、鍵の引き渡しを行います。鍵の引き渡しは弊社事務所で行います。
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="https://lin.ee/RcmX68V"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                LINEでお部屋探しを相談
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mx-auto block w-fit mb-8">
              よくある質問
            </h2>

            <div className="space-y-4">
              <div className="card">
                <p className="font-bold mb-2">Q.他社で内見・申込した物件を契約できますか？</p>
                <p className="text-sm">
                  マナー違反でございますので、お断りさせて頂いております。もし他社でご相談中の物件を弊社経由に切り替えた場合、結果的にお客様の契約に支障をきたす可能性があります。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">Q.内見前の先行申込はできますか？</p>
                <p className="text-sm">
                  物件に応じて可能でございます。入居確度の低いものや合理的な事情がないものは貸主・弊社の負担を考え、お断りしております。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">Q.賃料発生日・初期費用の交渉は可能でしょうか？</p>
                <p className="text-sm">
                  ご要望にお応えできるよう努めさせていただきます。合理的な範囲を超えた要望はお受けしておりません。繁忙期など交渉を全くできないケースもございますので、予算に余裕を持ったお引越しのご検討をお願い致します。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">Q.どんな物件が紹介可能でしょうか？</p>
                <p className="text-sm">
                  基本的にどの不動産会社も宅建業者がアクセスできるレインズ・atbbという業者間データベースから物件を探しています。そのデータベースに掲載されていれば、ご紹介可能です。一部、特定の不動産会社でしか扱えない物件がございますので、予めご了承ください。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
