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
      id="skills"
      ref={ref}
      className={cn(
        `h-screen w-screen flex justify-center items-center pt-[25vh] `,
        className
      )}
    >
      <div className="h-[100%] w-[100%] flex justify-center items-center">
        <ul className="flex flex-col w-[50%] font-light justify-center leading-loose  gap-[2%] h-[60vh] ">
          {mySkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

Skills.displayName = "Skills";
export default Skills;
