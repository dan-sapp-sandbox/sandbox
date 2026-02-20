import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Viewer from "./Viewer";

const ComponentLibrarySection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/storybook";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 transition-colors duration-300">
      <CardContent className="h-full w-full p-0 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-3 md:gap-12 p-3 md:p-8">
          <span className="text-lg md:text-2xl font-bold md-2 md:mb-4">Component Library</span>
          <div className="flex flex-col gap-2">
            <span className="text-base md:text-lg font-bold">Features:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-base">Ensure components look good in all themes</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base md:text-lg font-bold">Used in previous projects:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-base">Used Most Places</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-8 md:gap-16">
            <div onClick={handleOpenGithubLink} className={linkStyles}>
              <span className="text-xs md:text-sm">Code</span>
              <ExternalLink className="size-3 md:size-5" />
            </div>
            <div
              // onClick={handleOpenGithubLink}
              className={linkStyles}
            >
              <span className="text-xs md:text-sm">Open app in new tab</span>
              <ExternalLink className="size-3 md:size-5" />
            </div>
          </div>
        </div>
        <div className="p-2 md:p-4 overflow-hidden">
          <Viewer />
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentLibrarySection;
