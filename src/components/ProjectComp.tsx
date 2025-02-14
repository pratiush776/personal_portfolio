import React from "react";
import Image from "next/image";
import ProjectVideo from "./ProjectVideo";
import ProjectImage from "./ProjectImage";

interface ProjectAssets {
  logo: string;
  video?: string[];
  img?: string[];
}

interface ProjectCompProps {
  theme?: string;
  title: string;
  description: string;
  sources: ProjectAssets;
  stack: string[];
  link: string;
}

const ProjectComp: React.FC<ProjectCompProps> = ({
  theme,
  title,
  description,
  sources,
  stack,
  link,
}) => {
  let accent = theme === "light" ? "bg-[#E6E6E6]" : "bg-black";

  return (
    <div className="relative h-[80%] p-[1rem] aspect-[9/16] rounded-3xl bg-gray-500 z-0 lg:-translate-y-[5%] flex flex-col justify-evenly text-sm text-[#ebeff1]">
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
        <h1 className="text-center text-xl text-[#093257ea] font-bold tracking-wide">
          {title}
        </h1>
      </div>
      {/* -------------gallery--------------- */}
      <div className="absolute top-[20%] h-[60%] overflow-y-auto flex flex-col py-[2rem]">
        {sources.video?.length || sources.img?.length ? (
          <div className="h-[50%] flex overflow-x-auto gap-[2rem] w-[80%] mx-auto mb-[2rem]">
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
        <p className="font-light">{description}</p>
      </div>
      {/* ---------------end of middle section------------- */}

      <div className="h-[20%] bottom-0 absolute flex flex-col gap-5">
        <ul className="flex gap-2 font-light">
          {stack.map((tech, index) => (
            <li key={index}>
              {tech}
              {index == stack.length - 1 ? " " : " . "}
            </li>
          ))}
        </ul>
        <a
          href={link}
          className="p-2 px-4 rounded-2xl max-w-fit bg-[#a3c4dd96] cursor-pointer hover:bg-[#ffffffe0] hover:text-[#46494b96] hover:font-medium transition "
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectComp;
