import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import type { Task, ColumnId } from "./useTaskBoardState";

const Column = ({ title, tasks, id }: { title: string; tasks: Task[]; id: ColumnId }) => {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`bg-(--foreground) rounded-2xl shadow p-4 h-full transition-colors
      ${isOver ? "bg-(--background)/80" : ""}`}
    >
      <h2 className="text-(--card-foreground) font-semibold text-lg mb-4">{title}</h2>

      <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-3 h-full">
          {tasks.map((task) => (
            <TaskCard key={task.id} id={task.id} content={task.content} />
          ))}

          {tasks.length === 0 && (
            <div className="text-sm text-(--card-foreground) border-2 border-dashed rounded-xl p-4 text-center">
              Drop here
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
};

export default Column;
