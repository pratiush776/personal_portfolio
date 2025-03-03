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
        `h-[12%] w-[90vw] p-10 m-auto flex justify-between align-middle fixed top-0
          }` + className
      )}
    >
      <div className="h-auto w-auto bg-transparent cursor-pointer">
        <Switch
          className="bg-black"
          onCheckedChange={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          checked={theme === "dark"}
        />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a href="/CV.pdf" download>
              <Image
                src={downloadBtn}
                alt="CV"
                className="h-7 w-7 opacity-60 dark:bg-[#ffff] rounded-full"
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
