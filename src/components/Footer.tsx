import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5C83C] py-8 border-t border-black/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="font-bold text-lg mb-2">ラスエステート株式会社</h3>
            <p className="text-sm">東京都知事（1）第111381号</p>
            <p className="text-sm">
              〒103-0011 東京都中央区日本橋大伝馬町１３－７日本橋大富ビル２Ｆ
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/tos" className="text-sm hover:underline">
              利用規約
            </Link>
            <Link href="/privacypolicy" className="text-sm hover:underline">
              プライバシーポリシー
            </Link>
          </div>
        </div>
        <p className="text-center text-sm mt-8">
          &copy; 2025 RAS ESTATE Inc.
        </p>
      </div>
    </footer>
  );
}
