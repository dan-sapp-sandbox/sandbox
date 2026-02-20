import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DataGrid from "@/components/DataGrid";
// import useUserMgmtState from "./useUserMgmtState";

const UserMgmtSection = () => {
  // const userMgmtState = useUserMgmtState();
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/userMgmt";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 rounded-xl border shadow-md transition-colors duration-300">
      <CardContent className="h-full w-full p-0 flex flex-col-reverse md:flex-row justify-between">
        <div className="h-100 md:h-150 w-full md:w-225 flex flex-col justify-center items-center p-px md:p-2">
          <DataGrid />
        </div>
        <div className="flex flex-col gap-3 md:gap-12 p-3 md:p-8">
          <span className="text-lg md:text-2xl font-bold md-2 md:mb-4">Auth and Content Management Systems</span>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Auth Features:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Auth0: </span>
              <span className="">WIP</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Data Table Features:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Sticky Header: </span>
              <span className="">Scroll while keeping header visible</span>
            </div>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Form Modal: </span>
              <span className="">WIP</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="md:text-lg font-bold">Used in previous projects:</span>
            <div className="ml-2 md:ml-6">
              <span className="text-sm md:text-sm font-bold">Used Most Places </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-16">
            <div onClick={handleOpenGithubLink} className={linkStyles}>
              <span>Code</span>
              <ExternalLink className="size-3 md:size-5" />
            </div>
            <div
              // onClick={handleOpenGithubLink}
              className={linkStyles}
            >
              <span>Open app in new tab</span>
              <ExternalLink className="size-3 md:size-5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserMgmtSection;
