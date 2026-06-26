"use client";
import React from "react";

export default function Gallery({ lang }: { lang: string }) {
  const isAr = lang === "ar";
  return (
    <section
      id="gallery"
      className="section-padding bg-gradient-to-b from-black/80 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-2">
          <h2
            className={`text-3xl font-black ${
              isAr ? "text-right" : "text-left"
            }`}
          >
            {isAr ? "صور لقطات" : "Screenshots & Gallery"}
          </h2>
          <div className="hidden md:block h-1 flex-1 bg-gradient-to-r from-red-600 to-transparent" />
        </div>
        <p
          className={`text-gray-400 mt-2 ${isAr ? "text-right" : "text-left"}`}
        >
          {isAr
            ? "اكتشف لحظات التشويق والرعب من اللعبة"
            : "Experience chilling moments from the game"}
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 h-40 bg-gradient-to-br from-gray-900 to-black hover:shadow-lg hover:shadow-red-600/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-600 group-hover:text-red-500 transition-colors duration-300">
                  🎮
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
