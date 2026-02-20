import type { JSX } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
interface ISectionProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  features: string[];
  githubUrl: string;
  usedPreviously: {
    where: string;
    what: string;
  }[];
  reversed?: boolean;
}

const Section = ({ title, features, githubUrl, usedPreviously, reversed, children }: ISectionProps) => {
  const handleOpenGithubLink = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 border transition-colors duration-300">
      <CardContent
        className={`h-full w-full p-0 flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"}  justify-between`}
      >
        <div className="flex flex-col gap-2 md:gap-12 p-4 md:p-8">
          <span className="text-lg md:text-2xl font-bold md-2 md:mb-4">{title}</span>
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
            <div
              // onClick={handleOpenGithubLink}
              className={linkStyles}
            >
              <span className="text-xs md:text-sm">Open app in new tab</span>
              <ExternalLink className="size-3 md:size-5" />
            </div>
          </div>
        </div>
        <div className="h-full w-full md:min-w-200 flex flex-col justify-center items-center">{children}</div>
      </CardContent>
    </Card>
  );
};

export default Section;
