"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay, FaGamepad } from "react-icons/fa";

export default function Hero({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  return (
    <section className="section-padding pt-28 lg:pt-36 bg-gradient-to-b from-[#0a0000] via-[#050505] to-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: isAr ? 40 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`flex-1 ${isAr ? "text-right" : "text-left"}`}
        >
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(220,38,38,0.2)]">
              Hanin
            </span>
            <span className="text-gray-300 text-2xl block mt-2 font-ar font-bold">
              {isAr ? "حنين" : "Survival Horror Experience"}
            </span>
          </h1>

          <div className="mt-6 h-1.5 w-20 bg-gradient-to-r from-red-600 to-red-800 rounded-full" />

          <p className="mt-6 text-xl text-gray-200 font-medium max-w-xl leading-relaxed">
            {isAr
              ? "ذكرى زواج تحولت إلى معركة للبقاء."
              : "A wedding anniversary turned into a fight for survival."}
          </p>

          <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
            {isAr
              ? "أنت تلعب دور الزوج. بعد شراء هدية ذكرى زواج، تفعل الزوجة شيئًا غير متوقعٌ وتبدأ في مطاردتك. عليك الهرب والاختباء داخل الخزائن والدفاع باستخدام مسدس لعبة يطلق رصاصات بلاستيكية، أثناء البحث في الأدراج عن الهدية الضائعة."
              : "You play as the husband. After buying a wedding anniversary gift, your wife somehow misses it, snaps, and tries to hunt you down. You must escape her, hide inside lockers, and defend yourself using a toy gun that shoots plastic bullets, all while searching the drawers to find the misplaced gift and clear the misunderstanding."}
          </p>

          <div
            className={`mt-8 flex flex-wrap ${
              isAr ? "justify-end" : "justify-start"
            } gap-4`}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#payment"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-red-900/40"
            >
              <FaGamepad />
              <span>{isAr ? "اشترِ الآن" : "Buy Now"}</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery"
              className="inline-block border border-white/20 text-gray-200 hover:bg-[#121214] hover:text-white hover:border-red-500 px-8 py-3 rounded-lg transition-all duration-200 font-semibold"
            >
              {isAr ? "معرض الصور" : "Gallery & Media"}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-800 to-red-600 rounded-xl blur-xl opacity-35 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-red-950/40">
              <div className="relative w-full h-80 sm:h-[26rem] overflow-hidden">
                <Image
                  src="/images/Splash.jpg"
                  alt="Hanin Game Splash"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 rounded-full bg-red-700 hover:bg-red-600 border border-red-500/50 flex items-center justify-center shadow-lg shadow-black/80 text-white cursor-pointer transition-colors duration-300"
                  >
                    <FaPlay className="ml-1 text-lg" />
                  </motion.div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-black via-red-950/20 to-black border-t border-red-950/40">
                <p className="text-sm text-gray-300 font-medium font-mono flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                  {isAr
                    ? "🎬 لقطة اللعبة السينمائية"
                    : "🎬 Cinematic Game Splash"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
