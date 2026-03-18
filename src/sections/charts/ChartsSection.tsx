import type { Theme } from "@/components/themeToggle/useTheme";
import Section from "../Section";
import DataVisualizations from "./DataVisualizations";
import { useResizeObserver } from "@/components/useResizeObserver";

const ChartsSection = ({ theme }: { theme: Theme }) => {
  const { ref, size } = useResizeObserver();
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/charts",
    demoURL: "/data-visualization",
    title: "Data Visualization",
    description: "Tool for visualizing datasets",
    features: [
      "Line Chart",
      "Zoom and Pan",
      "Hover for Data Tooltip",
      // "Dynamic Dataset Loading: Import JSON and CSV data (WIP)",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Network Availability Analytics" },
      { where: "Enterprise Applications", what: "Sales and Operational Dashboards" },
    ],
  };

  return (
    <Section resizeRef={ref} config={config}>
      <DataVisualizations key={`${theme}-${size.width}-${size.height}`} />
    </Section>
  );
};

export default ChartsSection;
