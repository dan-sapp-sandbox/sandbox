import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import Column from "./Column";
import TaskCard from "./TaskCard";
import useTaskBoardState from "./useTaskBoardState";

const TaskBoard = () => {
  const taskBoardState = useTaskBoardState();

  return (
    <div className="h-full min-h-100 w-full p-2 md:p-6 bg-(--background)">
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={taskBoardState.handleDragStart}
        onDragEnd={taskBoardState.handleDragEnd}
        onDragCancel={taskBoardState.handleDragCancel}
      >
        <div className="grid grid-cols-3 gap-1 md:gap-6 h-full w-full">
          <Column title="Todo" id="todo" tasks={taskBoardState.board.todo} />
          <Column title="In Progress" id="inProgress" tasks={taskBoardState.board.inProgress} />
          <Column title="Done" id="done" tasks={taskBoardState.board.done} />
        </div>
        <DragOverlay>
          {taskBoardState.activeTask ? (
            <TaskCard id={taskBoardState.activeTask.id} content={taskBoardState.activeTask.content} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default TaskBoard;
