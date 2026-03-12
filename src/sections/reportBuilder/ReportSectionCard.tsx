import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

const ReportSectionCard = ({ id, content }: { id: string; content: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "p-2 md:p-4 rounded-xl border cursor-grab active:cursor-grabbing shadow-sm truncate",
        "bg-(--background) border-(--border-alt) text-(--card-foreground) text-xs md:text-sm",
        isDragging ? "opacity-80" : "",
      )}
    >
      {content}
    </div>
  );
};

export default ReportSectionCard;
