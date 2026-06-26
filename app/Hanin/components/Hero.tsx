"use client";
import React from "react";

export default function Hero({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  return (
    <section className="section-padding pt-12 lg:pt-32 bg-gradient-to-b from-black via-black to-black/80">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className={`flex-1 ${isAr ? "text-right" : "text-left"}`}>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Hanin
            </span>
            <span className="text-gray-300 text-3xl block mt-2">
              {isAr ? "حنين" : ""}
            </span>
          </h1>

          <div className="mt-6 h-1 w-16 bg-gradient-to-r from-red-600 to-red-500" />

          <p className="mt-6 text-xl text-gray-200 max-w-xl leading-relaxed">
            {isAr
              ? "ذكرى زواج تحولت إلى معركة للبقاء."
              : "A wedding anniversary turned into a fight for survival."}
          </p>

          <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
            {isAr
              ? "أنت تلعب دور الزوج. بعد شراء هدية ذكرى زواج، تفعل الزوجة شيئًا غير متوقعٌ وتبدأ في مطاردتك. عليك الهرب والاختباء داخل الخزائن والدفاع باستخدام مسدس لعبة يطلق رصاصات بلاستيكية، أثناء البحث في الأدراج عن الهدية الضائعة."
              : "You play as the husband. After buying a wedding anniversary gift, your wife somehow misses it, snaps, and tries to hunt you down. You must escape her, hide inside lockers, and defend yourself using a toy gun that shoots plastic bullets, all while searching the drawers to find the misplaced gift and clear the misunderstanding."}
          </p>

          <div
            className={`mt-8 flex ${
              isAr ? "justify-end" : "justify-start"
            } gap-4`}
          >
            <a
              href="#payment"
              className="inline-block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-red-600/50 hover:shadow-xl hover:shadow-red-600/70 hover:scale-105"
            >
              {isAr ? "اشترِ الآن" : "Buy Now"}
            </a>
            <a
              href="#gallery"
              className="inline-block border-2 border-red-600/50 text-red-400 hover:text-red-300 hover:border-red-500 px-8 py-2 rounded-lg transition-all duration-200 font-semibold hover:bg-red-600/5"
            >
              {isAr ? "المعرض" : "Gallery"}
            </a>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-xl blur-xl opacity-20" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
              <img
                src="/images/Splash.jpg"
                alt="Hanin Game Splash"
                className="w-full h-96 object-cover"
              />
              <div className="p-4 bg-gradient-to-r from-black/50 to-black/80 border-t border-gray-700/30">
                <p className="text-sm text-gray-300 font-medium">
                  {isAr ? "🎬 مقطع دعائي رئيسي" : "🎬 Main cinematic trailer"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
