"use client";

import Hero from "@/components/Hero";
import { useRef } from "react";
import NavPrimary from "@/components/NavPrimary";
import Content from "@/components/content";

export default function Home() {
  const scrollTextRef = useRef(null);

  return (
    <main className="bg-[#E6E6E6] dark:bg-black h-screen overflow-auto snap-y snap-mandatory">
      <div className="snap-center">
        <NavPrimary className="relative z-30" />
        <Hero ref={scrollTextRef} />
      </div>
      <Content />
    </main>
  );
}
