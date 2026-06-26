"use client";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Payment from "./components/Payment";

const Page = () => {
  const [lang, setLang] = useState("en");

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "font-ar" : "font-sans"}
    >
      <Nav lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Gallery lang={lang} />
        <Payment lang={lang} />
      </main>
    </div>
  );
};

export default Page;
