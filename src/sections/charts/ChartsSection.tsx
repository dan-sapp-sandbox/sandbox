import Section from "../Section";
import DataVisualizations from "./DataVisualizations";

const ChartsSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/charts",
    demoURL: "/data-visualization",
    title: "Data Visualization",
    features: ["Different Chart Types: Line, etc", "Allow import/export JSON, CSV: WIP"],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "OONI Chart" },
      { where: "Various", what: "Sales Data" },
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
