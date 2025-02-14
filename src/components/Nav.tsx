import React, { forwardRef } from "react";
import { cn } from "lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface NavProps {
  theme?: string;
  className?: string;
}

const Nav = forwardRef<HTMLDivElement, NavProps>(
  ({ theme, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `sticky z-10 h-[25vh] w-screen top-0 p-10
        flex justify-center items-end shadow-2xl
        ${
          theme === "light"
            ? "bg-[#E6E6E6] shadow-[#E6E6E6]"
            : "bg-black shadow-black"
        }`,
          className
        )}
      >
        <ul className="inset flex gap-5">
          <li className="font-semibold">About</li>
          <li className="font-light">Project</li>
          <li className="font-light">Skills</li>
          <li className="font-light">Contact</li>
        </ul>
      </div>
    );
  }
);

// display name for debugging purposes
Nav.displayName = "Nav";

export default Nav;
