import Section from "../Section";
import DataVisualizations from "./DataVisualizations";

const ChartsSection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/charts";
  const demoURL = "/data-visualization";
  const title = "Data Visualization";
  const features = ["Different Chart Types: Line, etc", "Allow import/export JSON, CSV: WIP"];
  const usedPreviously = [
    { where: "EarthDaily Federal", what: "OONI Chart" },
    { where: "Various", what: "Sales Data" },
  ];

  return (
    <Section
      title={title}
      features={features}
      usedPreviously={usedPreviously}
      githubURL={githubURL}
      demoURL={demoURL}
      reversed={true}
    >
      <div className="relative h-full w-full xs:w-80 sm:w-140 md:w-140 lg:w-200 xl:w-250 flex flex-col justify-center items-center p-2 md:p-4">
        <DataVisualizations />
      </div>
    </Section>
  );
};

export default ChartsSection;
