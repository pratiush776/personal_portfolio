import { cn } from "lib/utils";
import React, { forwardRef } from "react";

interface AboutProps {
  className?: string;
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ className }, ref) => {
  return (
    <div
      id="about"
      ref={ref}
      className={cn(` w-screen flex justify-center items-center`, className)}
    >
      <div className=" flex justify-center w-[100%]">
        <p className="w-[50%] font-light leading-loose">
          I’m Pratiush Karki, a computer science developer based in USA. Driven
          by insatiable curiosity and a passion for continuous learning, I
          tackle challenges with innovative problem-solving and a collaborative
          spirit for salable and impactful technology solutions.
        </p>
      </div>
    </div>
  );
});

About.displayName = "About";
export default About;
