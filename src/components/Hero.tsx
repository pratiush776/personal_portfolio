"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const scrollRef = useRef<HTMLHeadingElement>(null);
  let tl = gsap.timeline();
  useGSAP(() => {
    const items = gsap.utils.toArray(
      document.querySelectorAll(".text")
    ) as HTMLElement[];

    tl.fromTo(
      items,
      { autoAlpha: 0, y: "2rem" },
      {
        autoAlpha: (i) => (i !== 0 ? 0.6 : 1),
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
      <div className=" h-[80vh] w-screen flex flex-col justify-center items-center ">
        <h1 className="text tracking-wider text-xl font-normal  opacity-100">
          Pratiush Karki
        </h1>
        <h2 className="text tracking-wider opacity-60">Software Developer</h2>
      </div>
      <h3
        ref={scrollRef}
        className="text tracking-wider text-center opacity-60"
      >
        Scroll
        <p className=" text rotate-180 opacity-60">^</p>
      </h3>
    </div>
  );
};

Hero.displayName = "Hero";
export default Hero;
