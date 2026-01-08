export interface ArticleSection {
  type: "heading" | "paragraph" | "list" | "link";
  content?: string;
  items?: string[];
  href?: string;
  linkText?: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "20250401",
    title: "運営会社変更のお知らせ",
    date: "2025/4/1",
    category: "news",
    sections: [
      { type: "heading", content: "運営会社変更のお知らせ" },
      { type: "paragraph", content: "2025年4月1日より、イエリーの運営会社が変更となりました。" },
      { type: "paragraph", content: "新運営会社: ラスエステート株式会社" },
      { type: "paragraph", content: "今後ともイエリーをよろしくお願いいたします。" },
    ],
  },
  {
    slug: "SLiW5y-L",
    title: "イエリー正式リリースから1周年",
    date: "2025/3/4",
    category: "news",
    sections: [
      { type: "heading", content: "イエリー正式リリースから1周年" },
      { type: "paragraph", content: "イエリーは正式リリースから1周年を迎えました。" },
      { type: "paragraph", content: "多くのお客様にご利用いただき、誠にありがとうございます。" },
      { type: "paragraph", content: "今後もより良いサービスを提供できるよう努めてまいります。" },
    ],
  },
  {
    slug: "guide",
    title: "イエリーでのお部屋探しから引っ越しまで解説ガイド",
    date: "2022/10/15",
    category: "knowledge",
    sections: [
      { type: "heading", content: "イエリーのLINE公式アカウントの友だち追加" },
      { type: "paragraph", content: "こちらのサイトからLINE公式アカウントの友だち追加を行います。LINE公式アカウントのメニューの「チャットでお部屋探しを相談」をクリックし、お部屋の探し方・入居希望日を入力します。" },
      { type: "heading", content: "お部屋探し" },
      { type: "paragraph", content: "イエリーでのお部屋の探し方は2つあります。" },
      { type: "paragraph", content: "1つ目はお客様でお部屋を探す方法です。自分でお部屋を探したい人向けで、仲介手数料が0円もしくは税別０.２ヶ月になります。SUUMOなどで見つけた気になるお部屋を探して頂き、お部屋のURLをLINE公式アカウントに送信します。送信頂いたお部屋の募集状況・紹介可否をイエリーにて確認します。" },
      { type: "paragraph", content: "2つ目はイエリーがお部屋を提案する方法です。お部屋探しが苦手な方やお部屋探しの時間ない人向けで、仲介手数料賃料0.5ヶ月分になります。条件を教えて頂ければ、イエリーからお部屋のご紹介をさせていただきます。" },
      { type: "heading", content: "内見" },
      { type: "paragraph", content: "イエリーと日時を調整し、実際にお部屋を内見します。入居後、トラブルが発生しないように内見時事前にお部屋をきちんと確認しておくことが重要です。お部屋の雰囲気だけでなく、設備や物件周辺も確認しましょう。またイエリーでは内見前に初期費用のお見積りをご提示します。" },
      { type: "heading", content: "入居申込" },
      { type: "paragraph", content: "お部屋が気に入ったら、入居の申込をします。お部屋によって、紙での申込み・Webフォームでの申込みなど様々です。" },
      { type: "paragraph", content: "身分証や収入証明などが必要書類になります。必要書類はお部屋によって異なりますので、イエリーから案内があります。" },
      { type: "heading", content: "入居審査" },
      { type: "paragraph", content: "入居審査は保証会社審査・オーナー審査の２つあります。現在、ほとんどのお部屋は家賃保証会社の利用が必須です。収入に応じて家賃が高い場合、連帯保証人を求められる場合もあります。" },
      { type: "heading", content: "契約" },
      { type: "paragraph", content: "問題なく入居審査が完了すれば、賃料発生日をオーナーと相談します。どのお部屋も入居申し込みから2,3週間での賃料発生を求められます。お部屋に応じて交渉可能なので、イエリーに相談しましょう。" },
      { type: "paragraph", content: "そして重要説明事項・契約内容の説明を実施し、契約締結です。契約に際しての必要物は、印鑑や住民票などお部屋に応じて様々なので、イエリーから案内があります。初期費用のお振込・火災保険加入・家賃口座の設定など必要事項も対応しましょう。" },
      { type: "heading", content: "鍵受取り" },
      { type: "paragraph", content: "お引越しの前日以降に鍵の受け取りをします。鍵の受領証に押印が必要な場合があるので、印鑑を持参しましょう。" },
      { type: "heading", content: "お引っ越し" },
      { type: "paragraph", content: "鍵を受け取ったら、引っ越しです。荷物を搬入する前に現況確認をきちんとしましょう。退去の際に証明できるように、傷や設備の故障などしっかり写真・動画に記録しておくことをおすすめします。" },
    ],
  },
  {
    slug: "taikyo",
    title: "2ヶ月前退去通知の注意事項",
    date: "2022/5/7",
    category: "knowledge",
    sections: [
      { type: "heading", content: "2ヶ月前退去通知の注意事項" },
      { type: "paragraph", content: "賃貸物件を退去する際は、通常1〜2ヶ月前に退去通知を行う必要があります。" },
      { type: "paragraph", content: "契約書をよく確認し、退去通知の期限を把握しておきましょう。" },
      { type: "paragraph", content: "退去通知が遅れると、余分な家賃が発生する可能性があります。" },
    ],
  },
  {
    slug: "naiken",
    title: "内見のポイント",
    date: "2022/4/15",
    category: "questions",
    sections: [
      { type: "heading", content: "内見のポイント" },
      { type: "paragraph", content: "内見時には以下のポイントを確認しましょう。" },
      { type: "list", items: ["日当たり・風通し", "収納スペース", "水回りの状態", "周辺環境", "騒音"] },
    ],
  },
  {
    slug: "keychange_cleaning",
    title: "鍵交換・クリーニング費用について",
    date: "2022/4/10",
    category: "questions",
    sections: [
      { type: "heading", content: "鍵交換・クリーニング費用について" },
      { type: "paragraph", content: "入居時に発生する鍵交換費用やクリーニング費用について説明します。" },
      { type: "paragraph", content: "これらの費用は初期費用に含まれることが多いです。" },
    ],
  },
  {
    slug: "initialcost",
    title: "初期費用の内訳",
    date: "2022/4/5",
    category: "knowledge",
    sections: [
      { type: "heading", content: "初期費用の内訳" },
      { type: "paragraph", content: "賃貸物件の初期費用は主に以下で構成されます。" },
      { type: "list", items: ["敷金（家賃1〜2ヶ月分）", "礼金（家賃0〜2ヶ月分）", "仲介手数料", "前払い家賃", "火災保険料", "保証会社費用", "鍵交換費用"] },
    ],
  },
  {
    slug: "release",
    title: "イエリーリリースのお知らせ",
    date: "2022/3/1",
    category: "news",
    sections: [
      { type: "heading", content: "イエリーリリースのお知らせ" },
      { type: "paragraph", content: "イエリーが正式リリースしました。" },
      { type: "paragraph", content: "仲介手数料0円または賃料0.3ヶ月分の賃貸仲介サービスをぜひご利用ください。" },
    ],
  },
];

export const categories = [
  { slug: "questions", name: "お部屋探しの疑問" },
  { slug: "knowledge", name: "お役立ち情報" },
  { slug: "property", name: "おすすめ物件" },
  { slug: "news", name: "イエリーニュース" },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}
