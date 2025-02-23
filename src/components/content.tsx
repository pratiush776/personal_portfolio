"use client";

import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { forwardRef, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  className?: string;
}

const Content = forwardRef<HTMLDivElement, HeroProps>(({ className }, ref) => {
  const navRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={cn(`relative snap-start`, className)}>
      <div className="h-[300vh] snap-y snap-mandatory flex flex-col justify-center items-center">
        <Nav
          ref={navRef}
          className="bg-[#e7b79a] dark:bg-[#272525] sticky top-0"
        />
        <About ref={aboutRef} className="h-[75vh] snap-bottom snap-always " />
        <Projects ref={projectsRef} className="snap-center snap-always" />
        <Skills ref={skillsRef} className="snap-center snap-always" />
      </div>
    </div>
  );
});

Content.displayName = "Content";
export default Content;
