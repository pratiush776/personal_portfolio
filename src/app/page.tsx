"use client";

import Hero from "@/components/Hero";
import { useRef } from "react";
import NavPrimary from "@/components/NavPrimary";
import Content from "@/components/content";

export default function Home() {
  const scrollTextRef = useRef(null);

  return (
    <main className="bg-[#E6E6E6] dark:bg-[#555454] h-screen overflow-auto snap-y snap-mandatory">
      <div className="snap-center flex justify-center">
        <NavPrimary className="relative z-30" />
        <Hero ref={scrollTextRef} className="" />
      </div>
      <Content />
    </main>
  );
}
