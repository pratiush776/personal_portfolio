"use client";

import Hero from "@/components/Hero";
import NavPrimary from "@/components/NavPrimary";
import Content from "@/components/content";
import { ReactLenis } from "lenis/react";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Pratiush Karki</title>
        <meta
          name="description"
          content="Computer Engineer Developer Portfolio"
        />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Pratiush Karki" />
        <meta
          property="og:description"
          content="Computer Engineer Developer Portfolio"
        />
        <meta property="og:image" content="/favicon.png" />
        {/* <meta property="og:url" content="https://your-domain.com" /> */}
        <meta property="og:type" content="website" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="Web Developer" />
        <meta name="twitter:title" content="Pratiush Karki" />
        <meta
          name="twitter:description"
          content="Computer Engineer Developer Portfolio"
        />
        <meta name="twitter:image" content="/favicon.png" />
      </Head>
      <ReactLenis root options={{ lerp: 0.75 }}>
        <main className="bg-[#E6E6E6] dark:bg-[#555454] scroll-smooth">
          <div className=" flex justify-center">
            <NavPrimary className="relative z-30" />
            <Hero />
          </div>
          <Content />
        </main>
      </ReactLenis>
    </>
  );
}
