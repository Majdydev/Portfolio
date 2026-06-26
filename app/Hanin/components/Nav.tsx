"use client";
import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Nav({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (l: string) => void;
}) {
  const isAr = lang === "ar";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 lg:px-12 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-200 hover:text-red-500 transition-colors duration-200 font-mono"
        >
          <FaArrowLeft className={isAr ? "rotate-180" : ""} />
          <span>{isAr ? "الرئيسية" : "Back"}</span>
        </Link>
        <div className="h-6 w-[1px] bg-white/10" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-black flex items-center justify-center border border-red-500/40 shadow-lg shadow-black/80">
            <span className="text-white font-black text-lg">ح</span>
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wider">
              Hanin
            </div>
            <div className="text-[10px] text-gray-300 font-ar">حنين</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 font-mono">
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="px-4 py-2 rounded-md bg-[#121214] border border-white/10 text-xs font-semibold text-gray-200 hover:bg-red-950/40 hover:text-white hover:border-red-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.2)]"
          aria-label="Toggle language"
        >
          {lang === "en" ? "العربية" : "English"}
        </button>
      </div>
    </nav>
  );
}
