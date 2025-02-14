import { cn } from "lib/utils";
import React, { forwardRef } from "react";

interface SkillsProps {
  theme?: string;
  className?: string;
}

const mySkills = [
  "React",
  "Node",
  "Express",
  "Next.js",
  "SQL",
  "JS",
  "CSS",
  "Tailwind",
  "Typescript",
  "Python",
];

const Skills = forwardRef<HTMLDivElement, SkillsProps>(
  ({ theme, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `h-screen w-screen flex justify-center items-center p-10 ${
            theme === "light" ? "bg-[#E6E6E6]" : "bg-black"
          }`,
          className
        )}
      >
        <ul className="inset flex flex-col w-[50%] font-light leading-loose justify-center gap-[2%] h-screen pt-[28%] lg:-translate-y-[5%]">
          {mySkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Skills;
