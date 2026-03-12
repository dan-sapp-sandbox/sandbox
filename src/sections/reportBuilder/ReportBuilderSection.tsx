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
      "Single Column: All report sections are displayed in one column",
      "Drag & Drop: Reorder sections within the column",
      "Live PDF Preview: PDF updates instantly as you reorder sections",
      "Stable Rendering: Prevents duplication in PDF when sections are reordered",
      "Drag Overlay: Active section follows cursor during drag",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Report Builder" },
      { where: "EarthDaily Federal", what: "Map Widgets" },
      { where: "Stellar", what: "Scheduling workflow management" },
    ],
  };

  return (
    <Section config={config}>
      <ReportBuilder />
    </Section>
  );
};

export default ReportBuilderSection;
