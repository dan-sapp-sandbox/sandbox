import { useState, type ReactNode, useRef, useEffect, Suspense, type RefObject } from "react";
import { ExternalLink } from "lucide-react";
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

const Section = ({
  resizeRef,
  config,
  children,
}: {
  resizeRef?: RefObject<HTMLDivElement | null>;
  config: ISectionConfig;
  children: ReactNode | ReactNode[];
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    });

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  const isLg = useMediaQuery("(min-width: 1024px)");
  const { title, description, features, githubURL, usedPreviously, isReversed, demoURL } = config;
  const handleOpenGithubLink = () => {
    window.open(githubURL, "_blank", "noopener,noreferrer");
  };
  const handleOpenDemoLink = () => {
    window.open(demoURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={resizeRef}
      className={cn(
        "flex justify-center w-full lg:h-220 overflow-hidden text-(--text)",
        isReversed
          ? "lg:flex-row-reverse bg-linear-to-b from-(--section-bg-reverse-1) via-(--section-bg-reverse-2) to-(--section-bg-reverse-3)"
          : "",
        isReversed ? "" : "lg:flex-row bg-linear-to-b from-(--section-bg-1) via-(--section-bg-2) to-(--section-bg-3)",
      )}
    >
      <div
        className={cn(
          `h-full w-full flex flex-col justify-between gap-6 lg:gap-8 max-w-400 p-4 lg:p-12`,
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div className="w-full lg:max-w-120 shrink-0 flex flex-col gap-2 rounded-2xl">
          <div className="mb-2 lg:mb-4 flex flex-row items-center gap-2 cursor-pointer lg:cursor-default">
            <span className="text-lg lg:text-3xl font-bold">{title}</span>
          </div>
          <div className="flex flex-col justify-between gap-2 lg:gap-4 h-full">
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
            <div className="border-t border-(--text)/40 pt-3 mt-2 flex flex-row gap-10">
              <LinkButton label="Code" onClick={handleOpenGithubLink} />
              <LinkButton label="Live Demo" onClick={handleOpenDemoLink} />
            </div>
          </div>
        </div>
        <div
          ref={ref}
          style={{ display: isLg ? "flex" : "none" }}
          className="p-8 h-full flex-1 flex flex-col lg:flex-row justify-between bg-(--demo-bg) rounded-xl"
        >
          {visible && isLg && <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>}
        </div>
      </div>
    </div>
  );
};

const LinkButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover)"
  >
    <span className="text-xs lg:text-base">{label}</span>
    <ExternalLink className="size-3 lg:size-5" />
  </button>
);

export default Section;
