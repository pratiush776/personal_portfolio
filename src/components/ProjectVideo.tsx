import React from "react";

interface ProjectVideoProps {
  theme?: string;
  path: string;
}

const ProjectVideo: React.FC<ProjectVideoProps> = ({ theme, path }) => {
  return (
    <div
      className={`h-[100%] 
         ${theme === "light" ? "bg-[#E6E6E6]" : "bg-black"}`}
    >
      <div className="max-w-sm w-full rounded-md overflow-hidden shadow-lg bg-white">
        {/* The video section */}
        <div className="relative">
          <video className="w-full h-auto" controls>
            <source src={path} type="video/mp4" />
            {/* Fallback text if the browser doesn't support video */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideo;
