import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/useMediaQuery";
interface ISectionConfig {
  title: string;
  description?: string;
  features: string[];
  githubURL: string;
  demoURL: string;
  usedPreviously?: {
    where: string;
    what: string;
  }[];
  isReversed?: boolean;
}

const Section = ({ config, children }: { config: ISectionConfig; children: ReactNode | ReactNode[] }) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const { title, description, features, githubURL, usedPreviously, isReversed, demoURL } = config;
  const [expanded, setExpanded] = useState(false);
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const handleOpenDemoLink = () => {
    window.open(demoURL, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="w-full max-w-400 min-h-100 md:h-[50vh] border-none transition-colors duration-300 overflow-hidden">
      <CardContent
        className={`h-full w-full p-0 flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}  justify-between`}
      >
        <div className="md:w-105 shrink-0 flex flex-col gap-2 p-2 md:p-8">
          <div
            onClick={() => !isMd && setExpanded(!expanded)}
            className="mb-2 md:mb-4 flex flex-row items-center gap-2 cursor-pointer md:cursor-default"
          >
            <span className="text-lg md:text-2xl font-bold">{title}</span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 flex md:hidden" />
            ) : (
              <ChevronDown className="h-4 w-4 flex md:hidden" />
            )}
          </div>
          <div className={`${expanded || isMd ? "flex flex-col gap-2 md:gap-4" : "hidden"}`}>
            <span className="text-xs md:text-sm text-muted-foreground">{description}</span>
            <div className="flex flex-col md:gap-2">
              <span className="text-sm md:text-sm font-bold">Features:</span>
              <ul className="ml-4 md:ml-6 list-disc text-xs md:text-sm">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            {usedPreviously?.length && (
              <div className="flex flex-col md:gap-2">
                <span className="text-sm md:text-sm font-bold">Production Experience:</span>
                <ul className="ml-4 md:ml-6 list-disc text-xs md:text-sm">
                  {usedPreviously.map((use) => (
                    <li key={use.where}>
                      <span className="text-sm md:text-sm font-bold">{use.where}: </span>
                      <span className="text-xs md:text-sm">{use.what}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="border-t border-(--text)/50 pt-3 mt-2 flex flex-row gap-10">
              <LinkButton label="Code" onClick={handleOpenGithubLink} />
              <LinkButton label="Live Demo" onClick={handleOpenDemoLink} />
            </div>
          </div>
        </div>
        <div className="h-full w-full p-0 flex flex-col md:flex-row justify-between">{children}</div>
      </CardContent>
    </Card>
  );
};

const LinkButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200"
  >
    <span className="text-xs md:text-sm">{label}</span>
    <ExternalLink className="size-3 md:size-5" />
  </button>
);

export default Section;
