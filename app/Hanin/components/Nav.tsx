"use client";
import React from "react";

export default function Nav({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (l: string) => void;
}) {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 lg:px-12 bg-black/40 backdrop-blur-sm border-b border-gray-800/50">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border border-red-500/50 shadow-lg shadow-red-600/20">
          <span className="text-white font-black text-xl">ح</span>
        </div>
        <div>
          <div className="text-base font-bold text-white">Hanin</div>
          <div className="text-xs text-gray-400">حنين</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="px-4 py-2 rounded-lg bg-red-600/10 border border-red-500/30 text-sm font-medium text-red-400 hover:bg-red-600/20 hover:border-red-500/60 transition-all duration-200 hover:shadow-lg hover:shadow-red-600/10"
          aria-label="Toggle language"
        >
          {lang === "en" ? "العربية" : "English"}
        </button>
      </div>
    </nav>
  );
}
