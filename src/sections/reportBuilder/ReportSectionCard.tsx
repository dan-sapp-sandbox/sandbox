import { useState, type MouseEvent } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Grip } from "lucide-react";
import { type ReportSection } from "./useReportBuilderState";

const ReportSectionCard = ({ section }: { section: ReportSection }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: section.id });

  // TODO: ability to delete section
  // TODO: ability to add text section
  // TODO: ability to hide section
  // TODO: add text editor tip tap?

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.8 : 1,
  };

  const handleSectionClick = (e: MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const getPreview = (section: ReportSection) => {
    switch (section.type) {
      case "text":
        return <span className="max-w-25 text-xs md:text-sm truncate">{section.content}</span>;
      case "image":
        return <img className="h-20" src={section.imageUrl} />;
      default:
        return section.content;
    }
  };
  const getEditor = (section: ReportSection) => {
    switch (section.type) {
      case "text":
        return <span className="max-w-100 text-xs md:text-sm truncate">{section.content}</span>;
      case "image":
        return <img className="w-full" src={section.imageUrl} />;
      default:
        return section.content;
    }
  };

  const sectionDisplay = isExpanded ? getEditor(section) : getPreview(section);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={cn(
        "p-2 md:py-4 md:px-2 rounded-xl border shadow-sm w-full gap-2 flex flex-row justify-between",
        "bg-(--background) border-(--border-alt) text-(--card-foreground) overflow-hidden w-full",
        isDragging ? "opacity-80" : "",
      )}
    >
      <div {...listeners} className="cursor-grab active:cursor-grabbing flex justify-center items-center">
        <Grip className="h-4 w-4" />
      </div>
      <div className="flex-1 flex flex-row justify-between cursor-pointer" onClick={handleSectionClick}>
        {sectionDisplay}
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </div>
    </div>
  );
};

export default ReportSectionCard;
