"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Payment({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const [selectedQR, setSelectedQR] = useState<string | null>(null);

  const whatsappNumber = "21658205786";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isAr ? "مرحبا، أود طلب لعبة Hanin" : "Hi, I'd like to request the Hanin game"
  )}`;
  const emailLink = `mailto:majdabbassi27@gmail.com?subject=${encodeURIComponent(
    isAr ? "طلب لعبة Hanin" : "Hanin Game Request"
  )}&body=${encodeURIComponent(
    isAr ? "مرحبا، أود الحصول على لعبة Hanin" : "Hello, I'd like to get the Hanin game"
  )}`;

  return (
    <section id="payment" className="section-padding bg-gradient-to-b from-black to-red-950/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-2">
          <h2 className={`text-3xl font-black ${isAr ? "text-right" : "text-left"}`}>
            {isAr ? "الدفع والشراء" : "Payment & Purchase"}
          </h2>
          <div className="hidden md:block h-1 flex-1 bg-gradient-to-r from-red-600 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Tunisian Local Payment ── */}
          <div className="project-card bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10">
            <h3 className="font-bold text-lg text-white">
              {isAr ? "الدفع المحلي (تونس)" : "Tunisian Local Payment"}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {isAr
                ? "اتبع الخطوات الثلاث للحصول على اللعبة."
                : "Follow the 3 steps below to get the game."}
            </p>

            {/* ── STEP 1: Contact Me ── */}
            <div className="mt-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-black shrink-0">
                  1
                </div>
                <span className="font-bold text-white text-sm tracking-wide uppercase">
                  {isAr ? "تواصل معي" : "Contact Me"}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-red-600/40 to-transparent" />
              </div>

              <p className="text-gray-400 text-xs mb-4 pl-10">
                {isAr
                  ? "ابدأ بالتواصل عبر WhatsApp أو البريد الإلكتروني لتأكيد طلبك."
                  : "Start by reaching out via WhatsApp or Email to confirm your order."}
              </p>

              <div className="flex gap-3 pl-10">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                >
                  <span>💬</span>
                  {isAr ? "واتساب" : "WhatsApp"}
                </a>
                <a
                  href={emailLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                >
                  <span>📧</span>
                  {isAr ? "البريد" : "Email"}
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-700/40" />

            {/* ── STEP 2: Pay ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-black shrink-0">
                  2
                </div>
                <span className="font-bold text-white text-sm tracking-wide uppercase">
                  {isAr ? "ادفع" : "Pay"}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-red-600/40 to-transparent" />
              </div>

              <p className="text-gray-400 text-xs mb-4 pl-10">
                {isAr
                  ? "امسح رمز QR عبر D17 أو Flouci، ثم أرسل لنا صورة إثبات الدفع."
                  : "Scan the QR code via D17 or Flouci, then send us your payment proof."}
              </p>

              {/* QR Codes */}
              <div className="flex gap-5 items-start pl-10 mb-5">
                <div className="flex-1">
                  <span className="text-red-400 text-xs font-bold block mb-2 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600" />
                    D17
                  </span>
                  <div className="relative group cursor-pointer" onClick={() => setSelectedQR("d17")}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <img
                      src="/images/D17.jpeg"
                      alt="D17 QR Code"
                      className="relative w-32 h-32 rounded-lg border border-gray-700/50 group-hover:border-red-500/50 object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <span className="bg-black/80 px-2 py-1 rounded text-xs text-white font-semibold">
                        {isAr ? "تكبير" : "Zoom"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-red-400 text-xs font-bold block mb-2 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600" />
                    Flouci
                  </span>
                  <div className="relative group cursor-pointer" onClick={() => setSelectedQR("flouci")}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <img
                      src="/images/Flouci.jpeg"
                      alt="Flouci QR Code"
                      className="relative w-32 h-32 rounded-lg border border-gray-700/50 group-hover:border-red-500/50 object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <span className="bg-black/80 px-2 py-1 rounded text-xs text-white font-semibold">
                        {isAr ? "تكبير" : "Zoom"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple payment proof instruction */}
              <div className="pl-10 flex items-center gap-2">
                <span className="text-red-500 text-base">📸</span>
                <p className="text-gray-300 text-sm font-semibold">
                  {isAr ? "أرسل إثبات الدفع" : "Send the payment proof"}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-700/40" />

            {/* ── STEP 3: Get the Link ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-black shrink-0">
                  3
                </div>
                <span className="font-bold text-white text-sm tracking-wide uppercase">
                  {isAr ? "احصل على الرابط" : "Get the Link"}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-red-600/40 to-transparent" />
              </div>
              <p className="text-gray-400 text-xs pl-10">
                {isAr
                  ? "بعد تأكيد الدفع، سنرسل لك رابط تحميل اللعبة مباشرةً عبر واتساب أو البريد الإلكتروني."
                  : "Once payment is confirmed, we'll send you the game download link directly via WhatsApp or Email."}
              </p>
              <div className="pl-10 mt-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-600/20 border border-green-500/40 flex items-center justify-center text-green-400 text-xs">✓</span>
                <span className="text-green-400 text-xs font-semibold">
                  {isAr ? "رابط مباشر وفوري بعد التأكيد" : "Instant direct link after confirmation"}
                </span>
              </div>
            </div>
          </div>

          {/* ── Global Payment ── */}
          <div className="project-card bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 flex flex-col justify-center">
            <h3 className="font-bold text-lg text-white">
              {isAr ? "الدفع العالمي" : "Global Payment"}
            </h3>
            <p className="text-gray-300 mt-3">
              {isAr
                ? "اشترِ عبر Itch.io للحصول على نسخة عالمية."
                : "Purchase via Itch.io for a global build."}
            </p>
            <div className="mt-6">
              <a
                href="https://majdydev.itch.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-red-600/50 hover:shadow-xl hover:shadow-red-600/70 hover:scale-105"
              >
                <span>🎮</span>
                {isAr ? "الشراء على Itch.io" : "Buy on Itch.io"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Zoom Modal */}
      <AnimatePresence>
        {selectedQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedQR(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative bg-black rounded-xl border-2 border-red-600 shadow-2xl shadow-red-600/50 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedQR(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold transition-colors"
              >
                ✕
              </button>
              <div className="p-8 flex flex-col items-center">
                <img
                  src={selectedQR === "d17" ? "/images/D17.jpeg" : "/images/Flouci.jpeg"}
                  alt="Zoomed QR Code"
                  className="w-80 h-80 rounded-lg border border-gray-700"
                />
                <p className="mt-6 text-center text-gray-300">
                  {selectedQR === "d17"
                    ? isAr ? "امسح رمز QR هذا للدفع عبر D17" : "Scan this QR code to pay via D17"
                    : isAr ? "امسح رمز QR هذا للدفع عبر Flouci" : "Scan this QR code to pay via Flouci"}
                </p>
                <button
                  onClick={() => setSelectedQR(null)}
                  className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  {isAr ? "إغلاق" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
