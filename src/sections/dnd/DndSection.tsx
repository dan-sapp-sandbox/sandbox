import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TaskBoard from "./TaskBoard";

const DndSection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/blob/main/src/sections/DndSection.tsx";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 border transition-colors duration-300">
      <CardContent className="h-full w-full p-0 flex flex-row justify-between">
        <div className="flex flex-col gap-12 p-8">
          <span className="text-2xl font-bold">Drag and Drop</span>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Features:</span>
            <span className="ml-6">Reorder Cards Within Column</span>
            <span className="ml-6">Move Card Between Columns</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Used in previous projects:</span>
            <div className="ml-6">
              <span className="font-bold">EarthDaily Federal: </span>
              <span className="">Report Builder</span>
            </div>
            <div className="ml-6">
              <span className="font-bold">EarthDaily Federal: </span>
              <span className="">Image Analysis App</span>
            </div>
            <div className="ml-6">
              <span className="font-bold">Stellar: </span>
              <span className="">Scheduling Feature</span>
            </div>
            <div className="ml-6">
              <span className="font-bold">Stellar: </span>
              <span className="">Marina Map</span>
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
        <div className="h-150 w-225 flex flex-col justify-center items-center">
          <TaskBoard />
        </div>
      </CardContent>
    </Card>
  );
};

export default DndSection;
