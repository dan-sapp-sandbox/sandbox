import type { Theme } from "@/components/themeToggle/useTheme";
import Section from "../Section";
import DataVisualizations from "./DataVisualizations";
import { useResizeObserver } from "@/components/useResizeObserver";

const ChartsSection = ({ theme }: { theme: Theme }) => {
  const { ref, size } = useResizeObserver();
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/charts",
    demoURL: "/data-visualization",
    title: "Interactive Data Visualization",
    description:
      "Client-side data visualization system for exploring datasets through multiple chart types and dynamic data import.",
    features: [
      "Multiple Chart Types: Line, bar, and other common visualizations",
      "Zoom and Pan",
      "Hover for Data Tooltip",
      "Reusable Chart Components",
      "Dynamic Dataset Loading: Import JSON and CSV data (WIP)",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Network measurement analytics charts" },
      { where: "Enterprise Applications", what: "Sales and operational dashboards" },
    ],
  };

  return (
    <Section resizeRef={ref} config={config}>
      <DataVisualizations key={`${theme}-${size.width}-${size.height}`} />
    </Section>
  );
};

export default ChartsSection;
