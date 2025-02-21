import { cn } from "lib/utils";
import React, { forwardRef } from "react";

interface SkillsProps {
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

const Skills = forwardRef<HTMLDivElement, SkillsProps>(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `h-screen w-screen flex justify-center items-center`,
        className
      )}
    >
      <div className="h-[75vh] w-[100%] flex justify-center items-center">
        <ul className="flex flex-col w-[50%] font-light justify-center leading-loose  gap-[2%] h-[60vh] ">
          {mySkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Skills;
