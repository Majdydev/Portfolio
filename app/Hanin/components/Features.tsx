"use client";
import React from "react";

function IconShield() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2L4 5v6c0 5 4 9.74 8 11 4-1.26 8-6 8-11V5l-8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Features({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  return (
    <section className="section-padding bg-gradient-to-b from-black/50 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <h2
            className={`text-3xl font-black ${
              isAr ? "text-right" : "text-left"
            }`}
          >
            {isAr ? "مميزات اللعب" : "Gameplay Features"}
          </h2>
          <div className="hidden md:block h-1 flex-1 bg-gradient-to-r from-red-600 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative project-card flex flex-col gap-5 bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-200">
                <IconShield />
              </div>
              <h3 className="font-bold text-lg text-white">
                {isAr ? "التسلل والبقاء" : "Stealth & Survival"}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {isAr
                ? "الاختباء داخل الخزائن للهرب من نظر الزوجة."
                : "Hide inside lockers to escape the wife's sight."}
            </p>
          </div>

          <div className="group relative project-card flex flex-col gap-5 bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-200">
                <IconTarget />
              </div>
              <h3 className="font-bold text-lg text-white">
                {isAr ? "دفاع بمسدس لعبة" : "Toy Gun Defense"}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {isAr
                ? "صدمها أو صرف انتباهها بإطلاق رصاصات بلاستيكية."
                : "Stun or distract her by shooting plastic bullets."}
            </p>
          </div>

          <div className="group relative project-card flex flex-col gap-5 bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-200">
                <IconSearch />
              </div>
              <h3 className="font-bold text-lg text-white">
                {isAr ? "ألغاز وبحث" : "Puzzle & Search"}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {isAr
                ? "التفتيش في الأدراج للعثور على الهدية المفقودة."
                : "Rummage through drawers to find the hidden anniversary gift."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
