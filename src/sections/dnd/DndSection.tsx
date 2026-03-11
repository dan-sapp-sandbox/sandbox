import TaskBoard from "./TaskBoard";
import Section from "../Section";

const DndSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/dnd",
    demoURL: "/drag-and-drop",
    title: "Kanban Task Board",
    description: "Interactive workflow board demonstrating drag-and-drop task organization across multiple stages.",
    features: [
      "Kanban Board: Three-stage workflow layout",
      "Drag & Drop: Reorder tasks within columns",
      "Cross-Column Movement: Move tasks between workflow stages",
      "Real-time State Updates: UI reflects task position instantly",
    ],
    usedPreviously: [
      { where: "EarthDaily Federal", what: "Report builder workflow interface" },
      { where: "EarthDaily Federal", what: "Image analysis task organization" },
      { where: "Stellar", what: "Scheduling workflow management" },
    ],
  };

  return (
    <Section config={config}>
      <TaskBoard />
    </Section>
  );
};

export default DndSection;
