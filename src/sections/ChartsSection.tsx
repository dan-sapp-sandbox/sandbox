import { ExternalLink } from "lucide-react";
import Card from "@/components/Card";

const ChartsSection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  return (
    <Card>
      <div className="bg-emerald-900 h-150 w-225 flex flex-col justify-center items-center">
        <span className="text-3xl">Charts here</span>
      </div>
      <div className="flex flex-col gap-12">
        <span className="text-2xl font-bold">Charts</span>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Chart Features:</span>
          <div className="ml-6">
            <span className="font-bold">Different Chart Types: </span>
            <span className="">WIP</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">Allow import/export json, csv: </span>
            <span className="">WIP</span>
          </div>
          <div className="ml-6">
            <span className="font-bold">chart.js plotly.js: </span>
            <span className="">WIP</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Used in previous projects:</span>
          <span className="ml-6">- ooni chart at EDF</span>
          <span className="ml-6">- sales data at various</span>
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
    </Card>
  );
};

export default ChartsSection;
