import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ id, content }: { id: string; content: string }) => {
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
      className={`p-4 rounded-xl border cursor-grab active:cursor-grabbing shadow-sm
        bg-(--background) border-(--border-alt) text-(--card-foreground)
      ${isDragging ? "opacity-80" : ""}`}
    >
      {content}
    </div>
  );
};

export default TaskCard;
