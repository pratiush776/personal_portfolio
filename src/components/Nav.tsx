"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface NavProps {
  className?: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Nav = forwardRef<HTMLDivElement, NavProps>(({ className }, ref) => {
  const navContainerRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (navContainerRef.current && indicatorRef.current) {
      // Get all nav item elements.
      const navItems = Array.from(
        navContainerRef.current.children
      ) as HTMLElement[];

      // Compute each nav item's center (relative to the container)
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const positions = navItems.map((item) => {
        const rect = item.getBoundingClientRect();
        return rect.left - containerRect.left + rect.width / 2;
      });

      // Set the indicator's initial position (centered under the first nav item)
      gsap.set(indicatorRef.current, {
        x: positions[0],
      });

      // Create a timeline that moves the indicator to each nav item's center.
      // The total scroll distance is computed as a multiple of the viewport height
      // (adjust this multiplier as needed to match your scroll snap/section setup).
      const totalScroll = window.innerHeight * (positions.length - 1);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: navContainerRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: true,
          // markers: true, // Remove markers when debugging is done.
        },
      });

      tl.to(indicatorRef.current, {
        x: positions[0] - indicatorRef.current.offsetWidth / 2,
        duration: 0.001,
        ease: "none",
        onUpdate: () => {
          navItems.forEach((item, idx) => {
            if (idx === 0) {
              gsap.to(item, {
                scale: 1.2,
                duration: 0.5,
                overwrite: "auto",
              });
            } else {
              gsap.to(item, {
                scale: 0.9,
                duration: 0.5,
                overwrite: "auto",
              });
            }
          });
        },
      });

      // For each subsequent nav item, add a tween to move the indicator.
      for (let i = 1; i < positions.length; i++) {
        tl.to(indicatorRef.current, {
          x: positions[i],
          duration: 1, // duration here is relative to scroll progress
          ease: "power2.out",
          onUpdate: () => {
            navItems.forEach((item, idx) => {
              if (idx === i) {
                gsap.to(item, {
                  scale: 1.2,
                  duration: 0.5,
                  overwrite: "auto",
                });
              } else {
                gsap.to(item, {
                  scale: 0.9,
                  duration: 0.5,
                  overwrite: "auto",
                });
              }
            });
          },
        });
      }
    }
  });
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 h-[25vh] w-screen flex justify-center items-end p-10",
        className
      )}
    >
      <div className="relative flex flex-col">
        {/* Grid layout for nav items */}
        <ul
          ref={navContainerRef}
          className="grid grid-cols-4 gap-5 place-items-center relative "
        >
          <a href="#about">
            <li className=" font-light">About</li>
          </a>
          <a href="#projects">
            <li className="font-light">Projects</li>
          </a>
          <a href="#skills">
            <li className="font-light">My Skills</li>
          </a>
          <a href="#contact">
            <li className="font-light">Contact</li>
          </a>
        </ul>
        {/* Indicator circle, absolutely positioned relative to the ul */}
        <div
          ref={indicatorRef}
          className="mt-5 h-2 w-2 rounded-full bg-[#484747] dark:bg-white"
        ></div>
      </div>
    </div>
  );
});

// display name for debugging purposes
Nav.displayName = "Nav";

export default Nav;
