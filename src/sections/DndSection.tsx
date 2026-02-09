import { SectionWrapper } from "./SectionWrapper";

const DndSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-12">
        <span className="text-2xl font-bold">Drag and Drop</span>
        <span>dnd</span>
        <span>Jira clone?</span>
        <span>Link to code</span>
      </div>
      <div className="bg-amber-900 h-180 w-320 flex flex-col justify-center items-center">
        <span className="text-3xl">Drag and Drop here</span>
      </div>
    </SectionWrapper>
  );
};

export default DndSection;
