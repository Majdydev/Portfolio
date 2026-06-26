"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";

export default function Gallery({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const totalImages = 8;
  const images = Array.from({ length: totalImages }).map(
    (_, i) => `/images/GameScreenShot/${i + 1}.JPG`
  );

  const handleNext = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % totalImages);
    }
  };

  const handlePrev = () => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + totalImages) % totalImages);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setActiveIdx(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  return (
    <section
      id="gallery"
      className="section-padding bg-gradient-to-b from-[#000000] to-[#0a0000]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <h2
            className={`text-3xl font-black text-white tracking-tight ${
              isAr ? "text-right" : "text-left"
            }`}
          >
            {isAr ? "لقطات من اللعبة" : "Screenshots & Gallery"}
          </h2>
          <div className="hidden md:block h-[2px] flex-1 bg-gradient-to-r from-red-800 to-transparent" />
        </div>
        <p
          className={`text-gray-300 text-sm mt-1 mb-10 ${
            isAr ? "text-right" : "text-left"
          }`}
        >
          {isAr
            ? "اكتشف لحظات التشويق والرعب المباشرة من داخل اللعبة"
            : "Experience actual gameplay and atmospheric environments first-hand"}
        </p>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveIdx(i)}
              className="group relative overflow-hidden rounded-xl border border-red-950/40 hover:border-red-600/50 transition-all duration-300 aspect-[16/9] bg-black cursor-pointer shadow-lg hover:shadow-[0_10px_20px_rgba(220,38,38,0.15)]"
            >
              <Image
                src={src}
                alt={`Hanin Game Screenshot ${i + 1}`}
                fill
                sizes="(max-w-768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-108 filter brightness-[0.8] group-hover:brightness-100"
              />
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Zoom Action Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-red-700/80 text-white p-3 rounded-full border border-red-500/40 backdrop-blur-sm shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                  <FaSearchPlus className="text-sm md:text-base" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Carousel */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center select-none"
            onClick={() => setActiveIdx(null)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(220, 38, 38, 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 z-50 text-white bg-black/40 border border-white/10 p-3.5 rounded-full cursor-pointer transition-all duration-200"
              onClick={() => setActiveIdx(null)}
              aria-label="Close lightbox"
            >
              <FaTimes className="text-lg sm:text-xl" />
            </motion.button>

            {/* Main Carousel Wrapper */}
            <div
              className="relative w-full max-w-5xl px-4 aspect-[16/9] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Navigation Arrow */}
              <motion.button
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-6 z-40 text-white bg-black/40 hover:bg-red-700/60 border border-white/10 p-3.5 rounded-full cursor-pointer transition-all duration-300"
                onClick={handlePrev}
                aria-label="Previous screenshot"
              >
                <FaChevronLeft className="text-base sm:text-lg" />
              </motion.button>

              {/* Central Image Panel */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-red-900/30 shadow-[0_0_50px_rgba(220,38,38,0.25)] bg-[#050505]">
                <Image
                  src={images[activeIdx]}
                  alt={`Hanin Game Screenshot Zoomed ${activeIdx + 1}`}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Right Navigation Arrow */}
              <motion.button
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-6 z-40 text-white bg-black/40 hover:bg-red-700/60 border border-white/10 p-3.5 rounded-full cursor-pointer transition-all duration-300"
                onClick={handleNext}
                aria-label="Next screenshot"
              >
                <FaChevronRight className="text-base sm:text-lg" />
              </motion.button>
            </div>

            {/* Bottom Panel Indicators */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <span className="font-mono text-xs sm:text-sm text-gray-300 bg-red-950/20 border border-red-900/30 px-3.5 py-1 rounded-full">
                {activeIdx + 1} / {totalImages}
              </span>

              {/* Indicator dots */}
              <div className="flex gap-2.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeIdx
                        ? "bg-red-600 w-6 shadow-[0_0_10px_rgba(220,38,38,0.7)]"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
