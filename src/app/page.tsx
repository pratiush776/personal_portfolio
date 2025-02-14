"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeInOnScroll } from "lib/animation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const [theme, setTheme] = useState("light");

  const navRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const scrollTextRef = useRef(null);

  return (
    <main>
      <Hero theme={theme} ref={scrollTextRef} />
      <div className="relative">
        <Nav ref={navRef} theme={theme} />
        <div className="">
          <About ref={aboutRef} theme={theme} className="" />
          <Projects theme={theme} ref={projectsRef} className="" />
          <Skills ref={skillsRef} theme={theme} className="" />
        </div>
      </div>
    </main>
  );
}
