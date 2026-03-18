import ReportBuilder from "./ReportBuilder";
import Section from "../Section";

const ReportBuilderSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/reportBuilder",
    demoURL: "/report-builder",
    title: "Report Builder",
    description: "Used in conjuction with other tools to generate a customizable report with a live pdf preview.",
    features: [
      "Expand Sections to use Rich Text Editor",
      "Sections Drag & Drop: Reorder sections",
      "Live PDF Preview: PDF updates instantly as you reorder sections",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Report Builder" },
      { where: "Stellar", what: "Boat Rental Scheduling App" },
    ],
    isReversed: true,
  };

  return (
    <Section config={config}>
      <div className="bg-(--card-section-text-bg) h-full w-full rounded-2xl">
        <ReportBuilder />
      </div>
    </Section>
  );
};

export default ReportBuilderSection;
