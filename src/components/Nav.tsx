"use client";
import React, { forwardRef, useRef } from "react";
import { cn } from "lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface NavProps {
  className?: string;
}

const Nav = forwardRef<HTMLDivElement, NavProps>(({ className }, ref) => {
  // const tl = gsap.timeline();

  const aboutRef = useRef<HTMLLIElement>(null);
  const projectRef = useRef<HTMLLIElement>(null);
  const skillsRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (circleRef.current) {
  //     tl.to(circleRef.current, {
  //       scrollTrigger: {
  //         trigger: "#projects", // Ensure an element with id="projects" exists.
  //         start: "top top",
  //         end: "bottom center",
  //         scrub: true,
  //         toggleActions: "play reverse play reverse",
  //       },
  //       scale: 2,
  //       duration: 1,
  //       ease: "power3.out",
  //     });
  //   }
  // }, []);

  return (
    <div
      ref={ref}
      className={cn(
        ` z-10 h-[25vh] w-screen top-0 
        flex justify-center items-end`,
        className
      )}
    >
      <div>
        <ul className="inset flex gap-5 items-center justify-center font-light text-sm">
          <li ref={aboutRef} className="font-semibold text-lg">
            About
          </li>
          <li ref={projectRef} className="">
            Projects
          </li>
          <li ref={skillsRef} className="">
            Skills
          </li>
          <li ref={contactRef} className="">
            Contact
          </li>
        </ul>
        <div
          ref={circleRef}
          className="h-2 w-2 rounded-full bg-grey dark:bg-white m-5"
        ></div>
      </div>
    </div>
  );
});

// display name for debugging purposes
Nav.displayName = "Nav";

export default Nav;
