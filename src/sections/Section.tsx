import { useState, type JSX } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/useMediaQuery";
interface ISectionConfig {
  title: string;
  features: string[];
  githubURL: string;
  demoURL: string;
  usedPreviously: {
    where: string;
    what: string;
  }[];
  isReversed?: boolean;
}

const Section = ({ config, children }: { config: ISectionConfig; children: JSX.Element | JSX.Element[] }) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const { title, features, githubURL, usedPreviously, isReversed, demoURL } = config;
  const [expanded, setExpanded] = useState(false);
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const handleOpenDemoLink = () => {
    const url = new URL(demoURL, window.location.origin);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 md:h-[50vh] border-none transition-colors duration-300 overflow-hidden">
      <CardContent
        className={`h-full w-full p-0 flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}  justify-between`}
      >
        <div className="min-w-80 flex flex-col gap-2 p-2 md:p-8">
          <div
            onClick={() => !isMd && setExpanded(!expanded)}
            className="md-2 md:mb-4 flex flex-row items-center gap-2 cursor-pointer md:cursor-default"
          >
            <span className="text-lg md:text-2xl font-bold">{title}</span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 flex md:hidden" />
            ) : (
              <ChevronDown className="h-4 w-4 flex md:hidden" />
            )}
          </div>
          <div className={`${expanded || isMd ? "flex flex-col gap-2 md:gap-4" : "hidden"}`}>
            <div className="flex flex-col md:gap-2">
              <span className="text-sm md:text-sm font-bold">Features:</span>
              {features.map((feature, index) => (
                <span key={index} className="ml-2 md:ml-6 text-xs md:text-sm">
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:gap-2">
              <span className="text-sm md:text-sm font-bold">Used in previous projects:</span>
              {usedPreviously.map((use, index) => (
                <div key={index} className="ml-2 md:ml-6">
                  <span className="text-sm md:text-sm font-bold">{use.where}: </span>
                  <span className="text-xs md:text-sm">{use.what}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center gap-16">
              <div onClick={handleOpenGithubLink} className={linkStyles}>
                <span className="text-xs md:text-sm">Code</span>
                <ExternalLink className="size-3 md:size-5" />
              </div>
              <div onClick={handleOpenDemoLink} className={linkStyles}>
                <span className="text-xs md:text-sm">Open in new tab</span>
                <ExternalLink className="size-3 md:size-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full p-0 flex flex-col md:flex-row justify-between">{children}</div>
      </CardContent>
    </Card>
  );
};

export default Section;
