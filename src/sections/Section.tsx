import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/useMediaQuery";
import { cn } from "@/lib/utils";
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
  const isLg = useMediaQuery("(min-width: 1024px)");
  const { title, description, features, githubURL, usedPreviously, isReversed, demoURL } = config;
  const [expanded, setExpanded] = useState(false);
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const handleOpenDemoLink = () => {
    window.open(demoURL, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="w-full max-w-400 lg:h-[50vh] transition-colors duration-300 overflow-hidden">
      <CardContent
        className={cn(
          `h-full w-full p-0 flex flex-col justify-between gap-6`,
          `${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`,
        )}
      >
        <div className="lg:max-w-100 xl:max-w-110 shrink-0 flex flex-col gap-2 p-4 lg:p-8 bg-(--card-section-text-bg) rounded-2xl">
          <div
            onClick={() => !isLg && setExpanded(!expanded)}
            className="mb-2 lg:mb-4 flex flex-row items-center gap-2 cursor-pointer lg:cursor-default"
          >
            <span className="text-lg lg:text-2xl font-bold">{title}</span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 flex lg:hidden" />
            ) : (
              <ChevronDown className="h-4 w-4 flex lg:hidden" />
            )}
          </div>
          <div className={`${expanded || isLg ? "flex flex-col justify-between gap-2 lg:gap-4 h-full" : "hidden"}`}>
            <div className="flex flex-col gap-2">
              <span className="text-xs lg:text-sm text-muted-foreground">{description}</span>
              <div className="flex flex-col lg:gap-2">
                <span className="text-sm lg:text-sm font-bold">Features:</span>
                <ul className="ml-4 lg:ml-6 list-disc text-xs lg:text-sm">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {usedPreviously?.length && (
                <div className="flex flex-col lg:gap-2">
                  <span className="text-sm lg:text-sm font-bold">Production Experience:</span>
                  <ul className="ml-4 lg:ml-6 list-disc text-xs lg:text-sm">
                    {usedPreviously.map((use, i) => (
                      <li key={i}>
                        <span className="text-sm lg:text-sm font-bold">{use.where}: </span>
                        <span className="text-xs lg:text-sm">{use.what}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="border-t border-(--text)/50 pt-3 mt-2 flex flex-row gap-10">
              <LinkButton label="Code" onClick={handleOpenGithubLink} />
              <LinkButton label="Live Demo" onClick={handleOpenDemoLink} />
            </div>
          </div>
        </div>
        <div className="h-full flex-1 p-0 flex flex-col lg:flex-row justify-between">{children}</div>
      </CardContent>
    </Card>
  );
};

const LinkButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200"
  >
    <span className="text-xs lg:text-sm">{label}</span>
    <ExternalLink className="size-3 lg:size-5" />
  </button>
);

export default Section;
