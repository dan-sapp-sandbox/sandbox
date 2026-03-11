import Section from "../Section";
import DataVisualizations from "./DataVisualizations";

const ChartsSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/charts",
    demoURL: "/data-visualization",
    title: "Interactive Data Visualization",
    description:
      "Client-side data visualization system for exploring datasets through multiple chart types and dynamic data import.",
    features: [
      "Multiple Chart Types: Line, bar, and other common visualizations",
      "Reusable Chart Components",
      "Dynamic Dataset Loading: Import JSON and CSV data (WIP)",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Network measurement analytics charts" },
      { where: "Enterprise Applications", what: "Sales and operational dashboards" },
    ],
    isReversed: true,
  };

  return (
    <Section config={config}>
      <div className="relative h-full w-full xs:w-80 sm:w-140 md:w-140 lg:w-200 xl:w-250 flex flex-col justify-center items-center p-2 md:p-4">
        <DataVisualizations />
      </div>
    </Section>
  );
};

export default ChartsSection;
