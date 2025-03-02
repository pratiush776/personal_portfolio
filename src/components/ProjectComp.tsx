import React from "react";
import Image from "next/image";
import ProjectVideo from "./ProjectVideo";
import ProjectImage from "./ProjectImage";
import { LinkPreview } from "./ui/link-preview";

interface ProjectAssets {
  logo: string;
  video?: string[];
  img?: string[];
}

interface ProjectCompProps {
  title: string;
  description: string;
  sources: ProjectAssets;
  stack: string[];
  link: string;
}

const ProjectComp: React.FC<ProjectCompProps> = ({
  title,
  description,
  sources,
  stack,
  link,
}) => {
  return (
    <div className="relative p-[1rem] h-[60vh] aspect-[9/16] rounded-3xl bg-gray-500 z-0 flex flex-col justify-evenly text-sm text-[#ebeff1] md:snap-center md:snap-always">
      {/* -----------------logo---------------- */}
      <div className="absolute w-[100%] h-[20%] top-[0] flex items-center justify-center gap-[1rem] ">
        <div className="relative h-[6vh] bg-white w-fit rounded-full aspect-square">
          <Image
            src={sources.logo}
            fill
            alt="logo"
            className="object-contain rounded-full"
            sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
          />
        </div>
        <h1 className="text-center w-[40%] text-wrap text-xl text-[#093257ea] font-bold tracking-wide">
          {title}
        </h1>
      </div>
      {/* -------------gallery--------------- */}
      <div className="absolute top-[20%] h-[60%] overflow-y-auto flex flex-col py-[2rem]">
        {sources.video?.length || sources.img?.length ? (
          <div className="min-h-[60%] flex overflow-x-auto gap-[2rem] w-[80%] mx-auto mb-[2rem]">
            {/* Videos */}
            {sources.video?.map((vid, i) => (
              <ProjectVideo path={vid} key={i} />
            ))}

            {/* Images */}
            {sources.img?.map((im, i) => (
              <ProjectImage path={im} key={i} />
            ))}
          </div>
        ) : (
          ""
        )}

        {/* -------------description--------------- */}
        <p className="font-light w-[90%] text-wrap">{description}</p>
      </div>
      {/* ---------------end of middle section------------- */}

      <div className="h-[20%] py-2 w-[90%] bottom-0 absolute flex flex-col gap-5 ">
        <ul className="flex gap-2 font-light text-nowrap overflow-auto">
          {stack.map((tech, index) => (
            <li key={index}>
              {tech}
              {index == stack.length - 1 ? " " : " . "}
            </li>
          ))}
        </ul>
        <LinkPreview
          url={link}
          className="h-[30%] w-[20%] p-1 px-10 rounded-2xl bg-[#a3c4dd96] cursor-pointer hover:bg-[#ffffffe0] hover:text-[#46494b96] hover:font-medium transition flex justify-center items-center"
        >
          Demo
        </LinkPreview>
      </div>
    </div>
  );
};

ProjectComp.displayName = "ProjectComp";
export default ProjectComp;
