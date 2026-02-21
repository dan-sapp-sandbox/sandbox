import TaskBoard from "./TaskBoard";
import Section from "../Section";

const DndSection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/blob/main/src/sections/DndSection.tsx";
  const demoURL = "/drag-and-drop";
  const title = "Drag and Drop";
  const features = ["Reorder Cards Within Column", "Move Card Between Columns"];
  const usedPreviously = [
    { where: "EarthDaily Federal", what: "Report Builder" },
    { where: "EarthDaily Federal", what: "Image Analysis App" },
    { where: "Stellar", what: "Scheduling Feature" },
  ];

  return (
    <Section title={title} features={features} usedPreviously={usedPreviously} demoURL={demoURL} githubURL={githubURL}>
      <TaskBoard />
    </Section>
  );
};

export default DndSection;
