"use client";
import React, { forwardRef, useEffect, useRef } from "react";
import { cn } from "lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface NavProps {
  className?: string;
}

const Nav = forwardRef<HTMLDivElement, NavProps>(({ className }, ref) => {
  const navContainerRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis for smooth scrolling.
  useEffect(() => {
    lenisRef.current = new Lenis({
      // Adjust settings as needed.
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup on unmount.
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // Use GSAP for indicator and nav items animations.
  useGSAP(() => {
    if (navContainerRef.current && indicatorRef.current) {
      const navItems = Array.from(
        navContainerRef.current.children
      ) as HTMLElement[];
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const positions = navItems.map((item) => {
        const rect = item.getBoundingClientRect();
        return rect.left - containerRect.left + rect.width / 2;
      });

      gsap.set(indicatorRef.current, { x: positions[0] });
      const totalScroll = window.innerHeight * (positions.length - 1);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: navContainerRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: true,
        },
      });

      tl.to(indicatorRef.current, {
        x: positions[0] - indicatorRef.current.offsetWidth / 2,
        duration: 0.001,
        ease: "none",
        onUpdate: () => {
          navItems.forEach((item, idx) => {
            if (idx === 0) {
              gsap.to(item, { scale: 1.2, duration: 0.5, overwrite: "auto" });
            } else {
              gsap.to(item, { scale: 0.9, duration: 0.5, overwrite: "auto" });
            }
          });
        },
      });

      for (let i = 1; i < positions.length; i++) {
        tl.to(indicatorRef.current, {
          x: positions[i],
          duration: 1,
          ease: "power2.out",
          onUpdate: () => {
            navItems.forEach((item, idx) => {
              if (idx === i) {
                gsap.to(item, { scale: 1.2, duration: 0.5, overwrite: "auto" });
              } else {
                gsap.to(item, { scale: 0.9, duration: 0.5, overwrite: "auto" });
              }
            });
          },
        });
      }
    }
  });

  // Scroll handler using Lenis.
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 w-screen  flex justify-center items-end p-[1.5rem] box-border",
        className
      )}
    >
      <div className="relative flex flex-col">
        <ul
          ref={navContainerRef}
          className="grid grid-cols-4 gap-5 place-items-center relative"
        >
          <a href="#" onClick={(e) => handleScroll(e, "#content")}>
            <li className="scale-[1.2] font-light">About</li>
          </a>
          <a href="#" onClick={(e) => handleScroll(e, "#projects")}>
            <li className="font-light">Projects</li>
          </a>
          <a href="#" onClick={(e) => handleScroll(e, "#skills")}>
            <li className="font-light">Skills</li>
          </a>
          <a href="#" onClick={(e) => handleScroll(e, "#contact")}>
            <li className="font-light">Contact</li>
          </a>
        </ul>
        <div
          ref={indicatorRef}
          className="mt-5 h-2 w-2 rounded-full bg-[#F5EFEB] "
        ></div>
      </div>
    </div>
  );
});

Nav.displayName = "Nav";
export default Nav;
