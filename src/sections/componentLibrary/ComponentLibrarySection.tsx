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
      <CardContent className="h-full w-full p-0 flex flex-row justify-between">
        <div className="flex flex-col gap-12 p-8">
          <span className="text-2xl font-bold">Component Library</span>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Features:</span>
            <div className="ml-6">
              <span className="">Ensure components look good in all themes</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Used in previous projects:</span>
            <div className="ml-6">
              <span className="font-bold">Used Most Places</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-16">
            <div onClick={handleOpenGithubLink} className={linkStyles}>
              <span>Code</span>
              <ExternalLink className="size-5" />
            </div>
            <div
              // onClick={handleOpenGithubLink}
              className={linkStyles}
            >
              <span>Open app in new tab</span>
              <ExternalLink className="size-5" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <Viewer />
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentLibrarySection;
