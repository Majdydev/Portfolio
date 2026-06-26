"use client";
import React from "react";
import { motion } from "framer-motion";

function IconShield() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 2L4 5v6c0 5 4 9.74 8 11 4-1.26 8-6 8-11V5l-8-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Features({ lang }: { lang: string }) {
  const isAr = lang === "ar";

  const featuresList = [
    {
      titleEn: "Stealth & Survival",
      titleAr: "التسلل والبقاء",
      descEn:
        "Hide inside lockers and coordinate your moves carefully to escape the wife's terrifying patrol route.",
      descAr:
        "الاختباء داخل الخزائن وتنسيق حركاتك بدقة للهرب من مسار دورية الزوجة المرعب.",
      icon: <IconShield />,
    },
    {
      titleEn: "Toy Gun Defense",
      titleAr: "دفاع بمسدس لعبة",
      descEn:
        "Stun or distract her momentarily by firing plastic toy bullets. Use your limited ammo wisely.",
      descAr:
        "صدمها أو شتت انتباهها مؤقتًا بإطلاق رصاصات بلاستيكية من مسدس اللعبة. استغل ذخيرتك المحدودة بذكاء.",
      icon: <IconTarget />,
    },
    {
      titleEn: "Puzzle & Search",
      titleAr: "ألغاز وبحث",
      descEn:
        "Rummage through drawers, find keycards, and search for the hidden anniversary gift to resolve the conflict.",
      descAr:
        "فتش الأدراج، واعثر على بطاقات العبور، وابحث عن هدية ذكرى الزواج المفقودة لإنهاء الخلاف.",
      icon: <IconSearch />,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-[#050505] to-[#000000]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <h2
            className={`text-3xl font-black text-white tracking-tight ${
              isAr ? "text-right" : "text-left"
            }`}
          >
            {isAr ? "مميزات اللعب" : "Gameplay Features"}
          </h2>
          <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-red-800 to-transparent" />
        </div>
        <p
          className={`text-gray-300 text-sm mt-1 mb-10 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          {isAr
            ? "استكشف أسلوب اللعب المثير لتفادي المصير المحتوم"
            : "Dive into mechanics that define your struggle for survival"}
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl p-8 bg-[#121214] border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(220,38,38,0.15)] flex flex-col justify-between h-full shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-[0.02] rounded-xl transition-opacity duration-300" />
              <div>
                <div className="relative flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:text-red-400 group-hover:bg-red-600/20 transition-colors duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-white tracking-wide">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
