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
  const sectionContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (navRef.current) {
      const sections = sectionContainerRef.current
        ? gsap.utils.toArray(sectionContainerRef.current.children)
        : [];

      ScrollTrigger.create({
        trigger: navRef.current,
        start: "top top",
        endTrigger: skillsRef.current,
        end: "bottom bottom",

        snap: {
          snapTo: 1 / (sections.length - 1),
          directional: false,
          duration: { min: 0.1, max: 0.75 }, // the snap animation should be at least 0.25 seconds, but no more than 0.75 seconds (determined by velocity)
          // delay: 0.125, // wait 0.125 seconds from the last scroll event before doing the snapping
          ease: "power4.out", // the ease of the snap animation ("power3" by default)
        },
      });
      const navItems = gsap.utils.toArray(
        navRef.current.querySelectorAll("li")
      );

      gsap.from(navItems, {
        autoAlpha: 0,
        x: "5rem",
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: navRef.current.children,
          toggleActions: "play none none reverse",
          start: "center center",
          end: "bottom bottom",
          fastScrollEnd: 3000,
        },
        ease: "power.out",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: navRef.current,
          start: "top bottom",
          end: "bottom 25%",
          scrub: 1,
          // toggleActions: "reset none none reverse",
          snap: { snapTo: [0, 1], ease: "power3.out" },
        },
      });
      tl.addLabel("reset")
        .set(navRef.current, {
          x: 0,
        })
        .addLabel("start")
        .from(navRef.current, {
          borderRadius: "5rem",
          autoAlpha: 0,
          x: "100vw",
        })
        .from(sectionContainerRef.current, {
          autoAlpha: 0,
          y: "-2rem",
        });
    }
  });

  return (
    <div ref={ref} className={cn(`relative`, className)}>
      <Nav
        ref={navRef}
        className="nav bg-[#e7b79a] dark:bg-[#272525] sticky top-0"
      />
      <div
        ref={sectionContainerRef}
        className="h-[275vh] flex flex-col justify-center items-center"
      >
        <About ref={aboutRef} className="h-[70vh]" />
        <Projects ref={projectsRef} className=" " />
        <Skills ref={skillsRef} className=" " />
      </div>
    </div>
  );
});

Content.displayName = "Content";
export default Content;
