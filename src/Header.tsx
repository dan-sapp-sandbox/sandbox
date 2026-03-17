import ThemeToggle from "./components/themeToggle";
import { ExternalLink, Download } from "lucide-react";

const Header = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox";
  const linkedInURL = "https://www.linkedin.com/in/dan-sapp-744145b6/";
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const handleOpenLinkedInLink = () => {
    window.open(linkedInURL, "_blank", "noopener,noreferrer");
  };
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `/Dan Sapp Resume.pdf`;
    link.download = "Dan Sapp Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const linkStyles = "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover)";
  return (
    <div className="px-8 h-14 w-full flex flex-row justify-between items-center bg-(--header-bg)">
      <div className="flex flex-row items-center gap-16">
        <div onClick={handleDownloadResume} className={linkStyles}>
          <span className="text-xs md:text-base">Resume</span>
          <Download className="size-3 md:size-5" />
        </div>
        <div onClick={handleOpenLinkedInLink} className={linkStyles}>
          <span className="text-xs md:text-base">LinkedIn</span>
          <ExternalLink className="size-3 md:size-5" />
        </div>
        <div onClick={handleOpenGithubLink} className={linkStyles}>
          <span className="text-xs md:text-base">GitHub</span>
          <ExternalLink className="size-3 md:size-5" />
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
