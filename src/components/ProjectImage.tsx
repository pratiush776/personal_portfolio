import React from "react";
import Image from "next/image";

interface ProjectImageProps {
  theme?: string;
  path: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ theme, path }) => {
  return (
    <div className="relative h-[100%] aspect-[9/16]">
      <Image
        src={path}
        alt="Project Image"
        className="w-full h-auto object-cover rounded-2xl"
        fill
        sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
      />
    </div>
  );
};

export default ProjectImage;
