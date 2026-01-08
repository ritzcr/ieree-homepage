import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "利用規約 | イエリー",
  description: "イエリーの利用規約",
};

export default function TosPage() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">利用規約</h1>

            <div className="card prose prose-sm max-w-none">
              <h2 className="text-lg font-bold mt-6 mb-4">第1条（適用）</h2>
              <p className="mb-4">
                本規約は、ラスエステート株式会社（以下「当社」といいます。）が提供するサービス「イエリー」（以下「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さまには、本規約に従って本サービスをご利用いただきます。
              </p>

              <h2 className="text-lg font-bold mt-6 mb-4">第2条（利用登録）</h2>
              <p className="mb-4">
                本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
              </p>

              <h2 className="text-lg font-bold mt-6 mb-4">第3条（禁止事項）</h2>
              <p className="mb-4">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="list-disc pl-5 mb-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサービスの運営を妨害する行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>

              <h2 className="text-lg font-bold mt-6 mb-4">第4条（本サービスの提供の停止等）</h2>
              <p className="mb-4">
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>

              <h2 className="text-lg font-bold mt-6 mb-4">第5条（免責事項）</h2>
              <p className="mb-4">
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </p>

              <h2 className="text-lg font-bold mt-6 mb-4">第6条（サービス内容の変更等）</h2>
              <p className="mb-4">
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>

              <h2 className="text-lg font-bold mt-6 mb-4">第7条（利用規約の変更）</h2>
              <p className="mb-4">
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              </p>

              <h2 className="text-lg font-bold mt-6 mb-4">第8条（準拠法・裁判管轄）</h2>
              <p className="mb-4">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
              </p>

              <p className="text-sm text-gray-600 mt-8">以上</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
