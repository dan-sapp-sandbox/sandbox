import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DataGrid from "@/components/DataGrid";
import { cn } from "@/lib/utils";
// import useUserMgmtState from "./useUserMgmtState";

const UserMgmtSection = () => {
  // const userMgmtState = useUserMgmtState();
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/userMgmt";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  console.log(cn("bg-red-500", "p-4"));
  return (
    <Card
      className="w-full max-w-400 min-h-100 flex flex-row justify-between rounded-xl border
           shadow-md transition-colors duration-300"
    >
      <CardContent className="h-full w-full p-0 flex flex-row justify-between">
        <div className="h-150 w-225 flex flex-col justify-center items-center">
          <DataGrid />
        </div>
        <div className="flex flex-col gap-12 p-8">
          <span className="text-2xl font-bold">Auth and Content Management Systems</span>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Auth Features:</span>
            <div className="ml-6">
              <span className="font-bold">Auth0: </span>
              <span className="">WIP</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Data Table Features:</span>
            <div className="ml-6">
              <span className="font-bold">Sticky Header: </span>
              <span className="">Scroll while keeping header visible</span>
            </div>
            <div className="ml-6">
              <span className="font-bold">Form Modal: </span>
              <span className="">WIP</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Used in previous projects:</span>
            <div className="ml-6">
              <span className="font-bold">Used Most Places </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-16">
            <div
              onClick={handleOpenGithubLink}
              className="flex flex-row items-center gap-2 cursor-pointer text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-200"
            >
              <span>Code</span>
              <ExternalLink className="size-5" />
            </div>
            <div
              // onClick={handleOpenGithubLink}
              className="flex flex-row items-center gap-2 cursor-pointer text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-200"
            >
              <span>Open app in new tab</span>
              <ExternalLink className="size-5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserMgmtSection;
