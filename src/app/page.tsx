import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">イエリー</h1>
          <p className="text-lg mb-2">自分でお部屋を探すと</p>
          <p className="text-2xl font-bold mb-6">仲介手数料</p>
          <div className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-black mb-8">
            <span className="text-5xl md:text-6xl">0</span>
            <span className="text-xl">円</span>
            <span className="text-xl">or 税別</span>
            <span className="text-5xl md:text-6xl">0.3</span>
            <span className="text-xl">ヶ月</span>
          </div>
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
              <div className="text-center mb-4">
                <p className="text-sm mb-2">仲介手数料</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-black">０</span>
                  <span className="text-lg">円 or 税別</span>
                  <span className="text-5xl font-black">０.３</span>
                  <span className="text-lg">ヶ月</span>
                </div>
              </div>
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
              <div className="text-center mb-4">
                <p className="text-sm mb-2">仲介手数料 賃料</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-black">０.５</span>
                  <span className="text-lg">ヶ月分+税</span>
                </div>
              </div>
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
                <div className="card text-center">
                  <p className="text-sm mb-2">広告料のある物件の場合</p>
                  <p className="text-xs mb-1">仲介手数料</p>
                  <p className="text-4xl font-black">０<span className="text-lg">円</span></p>
                </div>
                <div className="card text-center">
                  <p className="text-sm mb-2">広告料のない物件の場合</p>
                  <p className="text-xs mb-1">仲介手数料 税別</p>
                  <p className="text-4xl font-black">０.３<span className="text-lg">ヶ月</span></p>
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
              <div className="card">
                <p className="font-bold mb-2">LINE公式アカウント友だち追加</p>
                <p className="text-sm">
                  下記のリンクからLINE公式アカウント友だち追加の上、「チャットでお部屋探しを相談」をクリックしてください。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">お部屋探し</p>
                <p className="text-sm">
                  お客様に合った方法をご選択の上、物件探しをしてください。イエリーが物件の募集状況などを確認します。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">内見</p>
                <p className="text-sm">
                  気になった物件の内見にご案内します。入居確度が低い物件の内見はご遠慮ください。内見は現地集合、移動は公共交通機関のご利用をお願いしております。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">入居審査のお申込</p>
                <p className="text-sm">
                  気に入った物件に入居審査のお申し込みをします。物件に応じてお申込方法が異なりますのでイエリーよりご案内させていただきます。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">初期費用のお振込・ご契約</p>
                <p className="text-sm">
                  審査通過後、弊社事務所にてご契約締結をさせていただきます。敷金礼金などの初期費用・仲介手数料などの初期費用のお振込もお願い致します。
                </p>
              </div>

              <div className="card">
                <p className="font-bold mb-2">鍵の引き渡し</p>
                <p className="text-sm">
                  ご契約開始日もしくは前日に、鍵の引き渡しを行います。鍵の引き渡しは弊社事務所で行います。
                </p>
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
