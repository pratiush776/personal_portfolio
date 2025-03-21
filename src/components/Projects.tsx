import React, { forwardRef, useRef } from "react";
import ProjectComp from "./ProjectComp";
import { cn } from "lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProjectsProps {
  className?: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if (containerRef.current) {
        gsap.from(containerRef.current.children, {
          autoAlpha: 0,
          x: "20vw",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef?.current,
            start: "top center",
          },
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          horizontal: true,
        });
      }
    });
    return (
      <div
        id="projects"
        ref={ref}
        className={cn(
          `h-screen w-screen justify-center items-center pt-[25vh] box-border`,
          className
        )}
      >
        <div
          ref={containerRef}
          className="h-[100%] p-10 flex gap-[6%]  w-screen overflow-auto justify-evenly items-center md:snap-x md:snap-mandatory"
        >
          <ProjectComp
            title="HomeDoc"
            description="Home Doc is a health insight platform powered by AI (Llama3), designed to provide a Symptom Checker for quick, preliminary health assessments. Users can input their age, gender, and symptoms to receive personalized insights, with the reminder to consult a healthcare professional for definitive diagnoses.

This project began as a concept app during a hackathon, where I collaborated with two teammates. Although we couldn't complete it in time, I later took the initiative to finish the prototype independently. My primary role was implementing the AI functionality, but I also developed the frontend and backend, transforming it into a comprehensive personal project."
            stack={["Llama3", "Node", "React", "Express"]}
            sources={{ logo: "/projects_assets/HomeDoc/logo.png" }}
            link="https://homedoc-backend.onrender.com/"
          />
          <ProjectComp
            title="Business Card"
            description="I created a digital business card for an actual local busniess. The was a digital business card which could be scanned as a QR Code then the customers would be directed to this webpage when all the details and links were available to them in a neat and friendly manner."
            stack={["React", "CSS", "JS"]}
            sources={{ logo: "/projects_assets/WhiskItAll/logo.png" }}
            link="https://whisk-it-all-business.web.app/"
          />
          <ProjectComp
            title="Room Mates"
            description="This is an app that enables its users to manage household chores among their groups by adding each others in groups and creating tasks."
            stack={["Node", "JS", "NEDB Promises", "Express"]}
            sources={{
              logo: "/projects_assets/RoomMates/logo.png",
              img: [
                "/projects_assets/RoomMates/login.png",
                "/projects_assets/RoomMates/dashboard.png",
                "/projects_assets/RoomMates/admin.png",
              ],
            }}
            link="https://roommatesapp-production.up.railway.app/"
          />
        </div>
      </div>
    );
  }
);

Projects.displayName = "Projects";
export default Projects;
