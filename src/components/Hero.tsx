"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "lib/utils";
import HeroTitle from "./texts/heroTitle";
import Pratiush from "./texts/pratiush";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const scrollRef = useRef<HTMLHeadingElement>(null);
  const tl = gsap.timeline();
  useGSAP(() => {
    const items = gsap.utils.toArray(
      document.querySelectorAll(".text")
    ) as HTMLElement[];

    tl.fromTo(
      items,
      { autoAlpha: 0, y: "1rem" },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    ).fromTo(
      scrollRef.current,
      { y: "0rem" },
      {
        y: "1.2rem",
        ease: "power3.in",
        duration: 1,
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: scrollRef.current,
          toggleActions: "play pause play pause",
        },
      }
    );
  });
  return (
    <div
      className={cn(
        ` h-screen w-screen z-20 relative flex items-center justify-center flex-col`,
        className
      )}
    >
      <Pratiush className="text fill-[#567C8D] dark:fill-slate-200" />
      <div className="h-[80vh] flex flex-col justify-center items-center ">
        <HeroTitle className=" fill-[#567C8D] dark:fill-slate-200 " />
      </div>
      <div
        ref={scrollRef}
        className="text text-center leading-tight opacity-60"
      >
        <p className=" text rotate-180 opacity-80">^</p>
        <p className=" text rotate-180 opacity-60">^</p>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";
export default Hero;
