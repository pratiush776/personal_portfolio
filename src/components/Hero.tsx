import React, { forwardRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HeroProps {
  className?: string;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        ` h-screen w-screen z-20 relative flex items-center justify-center flex-col`,
        className
      )}
    >
      {/* <div className="h-[12%] w-[90vw] p-10 m-auto flex justify-between align-middle fixed top-0">
          <div className="bg-gray-500 h-6 aspect-[2/1] rounded-3xl p-1 flex cursor-pointer">
            <div className="rounded-full bg-white h-[100%] aspect-square"></div>
          </div>
          <Image
            src={downloadBtn}
            alt="CV"
            className="h-7 w-7 opacity-60"
          ></Image>
        </div> */}
      <div className=" h-[80vh] w-screen flex flex-col justify-center items-center ">
        <h1 className="tracking-wider">Pratiush Karki</h1>
        <h2 className="tracking-wider opacity-60">Software Developer</h2>
      </div>
      <h3 ref={ref} className="tracking-wider text-center opacity-40">
        Scroll
      </h3>
    </div>
  );
});

Hero.displayName = "Hero";
export default Hero;
