import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "サービス利用ガイドライン | イエリー",
  description: "イエリーのサービス利用ガイドライン",
};

const guidelines = [
  {
    title: "他不動産にご相談中の物件はNGです",
    content:
      "他社で内見・お申込した物件を弊社経由でご契約頂くことは、NGになります。お客様の契約にご迷惑をかける可能性もあるので、ご注意ください。",
  },
  {
    title: "ご契約場所は弊社事務所となります",
    content:
      "審査通過後、原則弊社事務所にてご契約締結をさせていただきます。敷金礼金などの初期費用・仲介手数料などの初期費用のお振込も迅速なご対応をお願い致します。",
  },
  {
    title: "合理的な事情がない複数申込はNGです",
    content:
      "1番手のお申込がある際の別物件へのお申込はご遠慮頂いております。やむを得ない事情がある場合は、お気軽にご相談ください。",
  },
  {
    title: "内見数の削減・エリア限定にご協力お願いします",
    content:
      "入居確度の低い物件の内見はご遠慮ください。内見前に図面の情報などで物件の取捨選択をお願いします。内見エリアの限定にもご協力お願い致します。",
  },
  {
    title: "内見は現地集合/移動は公共機関を利用ください",
    content:
      "仲介手数料をお安くしている分、社用車のご用意はございません。ご負担おかけし大変恐れ入りますが、ご理解お願いいたします。",
  },
  {
    title: "採寸/設備確認はお客様自身での実施をお願いします",
    content:
      "内見の際、お客様ご自身で物件内の採寸・インターネット回線など設備確認をお願い致します。測り忘れによる別日での再内見は実施しておりません。",
  },
];

export default function GuidelinePage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="section-title text-center mx-auto block w-fit mb-8">
              サービス利用ガイドライン
            </h1>

            <p className="text-center text-sm mb-8">
              低価格賃貸仲介サービス品質維持のため
              <br />
              下記のガイドラインをお守りください。
              <br />
              ご負担お掛けしてしまう内容も含まれますが、何卒ご理解頂けますと幸いです。
              <br />
              ご協力いただけない場合、サービスの提供を辞退させていただくケースもございます。
            </p>

            <div className="space-y-4">
              {guidelines.map((guideline, index) => (
                <div key={index} className="card">
                  <h3 className="font-bold mb-2">{guideline.title}</h3>
                  <p className="text-sm">{guideline.content}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="https://lin.ee/RcmX68V"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                LINEでお部屋探しを相談
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
