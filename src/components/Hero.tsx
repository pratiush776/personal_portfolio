import React, { forwardRef } from "react";
import Image from "next/image";
import toggleBtn from "/public/icons/toggle_icon.png";
import downloadBtn from "/public/icons/download_icon.webp";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  theme?: string;
  className?: string;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ theme, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          ` h-screen w-screen z-20 relative flex items-center justify-center flex-col ${
            theme === "light" ? "bg-[#E6E6E6]" : "bg-black"
          }`,
          className
        )}
      >
        <div className="h-[10vh] w-[90vw] p-10 m-auto flex justify-between align-middle fixed top-0">
          <Image
            src={toggleBtn}
            alt="theme toggle"
            className="h-10 w-10"
          ></Image>
          <Image
            src={downloadBtn}
            alt="CV"
            className="h-7 w-7 opacity-60"
          ></Image>
        </div>
        <div className=" h-[80vh] w-screen flex flex-col justify-center items-center ">
          <h1 className="tracking-wider">Pratiush Karki</h1>
          <h2 className="tracking-wider opacity-60">Software Developer</h2>
        </div>
        <h3 ref={ref} className="tracking-wider text-center opacity-40">
          Scroll
        </h3>
      </div>
    );
  }
);

export default Hero;
