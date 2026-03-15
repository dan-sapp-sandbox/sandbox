import ReportBuilder from "./ReportBuilder";
import Section from "../Section";

const ReportBuilderSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/reportBuilder",
    demoURL: "/report-builder",
    title: "Report Builder",
    description:
      "Interactive single-column report builder with live PDF preview. Drag-and-drop to reorder report sections and instantly see the updated PDF.",
    features: [
      "Drag & Drop: Reorder sections within the column",
      "Live PDF Preview: PDF updates instantly as you reorder sections",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Report Builder" },
      { where: "Stellar", what: "Scheduling workflow management" },
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
