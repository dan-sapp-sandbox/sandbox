import TaskBoard from "./TaskBoard";
import Section from "../Section";

const DndSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/dnd",
    demoURL: "/drag-and-drop",
    title: "Drag and Drop",
    features: ["Reorder Cards Within Column", "Move Card Between Columns"],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Report Builder" },
      { where: "EarthDaily Federal", what: "Image Analysis App" },
      { where: "Stellar", what: "Scheduling Feature" },
    ],
  };

  return (
    <Section config={config}>
      <TaskBoard />
    </Section>
  );
};

export default DndSection;
