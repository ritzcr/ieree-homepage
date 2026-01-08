"use client";

import Link from "next/link";

interface HeaderProps {
  variant?: "default" | "articles";
}

export default function Header({ variant = "default" }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5C83C]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-wider">
          イエリー
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/articles"
            className="text-sm font-medium hover:opacity-70 transition-opacity"
          >
            イエリーお部屋探しメディア
          </Link>
          <Link
            href="https://lin.ee/RcmX68V"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            LINEでお部屋を相談！
          </Link>
        </div>
      </div>
    </header>
  );
}
