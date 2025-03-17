"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import downloadBtn from "/public/icons/download_icon.webp";
import { cn } from "lib/utils";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavPrimaryProps {
  className?: string;
}

const NavPrimary: React.FC<NavPrimaryProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      className={cn(
        `h-auto w-[90vw] p-10 m-auto flex justify-between align-middle fixed top-0 pointer-events-none
          }` + className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="pointer-events-auto ">
            <div className="flex justify-between items-center bg-transparent cursor-pointer">
              <Switch
                className="bg-black pointer-events-auto drop-shadow-md"
                onCheckedChange={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                }}
                checked={theme === "dark"}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toogle Theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="pointer-events-auto ">
            <a
              href="/CV.pdf"
              download
              className="drop-shadow-md overflow-visible"
            >
              <Image
                priority
                src={downloadBtn}
                alt="CV"
                className="h-7 w-7 opacity-60 bg-[#F5EFEB] dark:bg-[#F5EFEB] rounded-full "
              ></Image>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download CV</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

NavPrimary.displayName = "NavPrimary";
export default NavPrimary;
