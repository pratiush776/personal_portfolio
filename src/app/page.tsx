"use client";

import Hero from "@/components/Hero";
import NavPrimary from "@/components/NavPrimary";
import Content from "@/components/content";
import { ReactLenis } from "lenis/react";

export default function Home() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <ReactLenis root options={{ lerp: 0.75 }}>
      <main className="bg-[#E6E6E6] dark:bg-[#555454] scroll-smooth">
        <div className=" flex justify-center">
          <NavPrimary className="relative z-30" />
          <Hero className="" />
        </div>
        <Content />
      </main>
    </ReactLenis>
  );
}
