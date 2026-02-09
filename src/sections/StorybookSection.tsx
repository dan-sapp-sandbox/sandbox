import { ExternalLink } from "lucide-react";
import Card from "@/components/Card";

const StorybookSection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  return (
    <Card>
      <div className="flex flex-col gap-12">
        <span className="text-2xl font-bold">Component Library</span>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Features:</span>
          <span className="ml-6">- Storybook</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Used in previous projects:</span>
          <span className="ml-6">- most places</span>
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
      <div className="bg-yellow-700 h-150 w-225 flex flex-col justify-center items-center">
        <span className="text-3xl">Storybook here</span>
      </div>
    </Card>
  );
};

export default StorybookSection;
