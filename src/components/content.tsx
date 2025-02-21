"use client";

import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { forwardRef, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div className="relative snap-start">
      <Nav ref={navRef} className="bg-[#E6E6E6] dark:bg-black absolute top-0" />
      <div className="h-[100vh] snap-y snap-mandatory overflow-auto">
        <About ref={aboutRef} className="snap-start snap-always" />
        <Projects ref={projectsRef} className="snap-center snap-always" />
        <Skills ref={skillsRef} className="snap-center snap-always" />
      </div>
    </div>
  );
});

export default Content;
