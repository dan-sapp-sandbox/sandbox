import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export type ColumnId = "todo" | "inProgress" | "done";

export type Task = {
  id: string;
  content: string;
};

export type BoardState = Record<ColumnId, Task[]>;

const initialData: BoardState = {
  todo: [
    { id: "1", content: "Setup project" },
    { id: "2", content: "Design UI" },
  ],
  inProgress: [{ id: "3", content: "Build drag & drop" }],
  done: [{ id: "4", content: "Create repo" }],
};

export interface ITaskBoardState {
  board: BoardState;
  setBoard: Dispatch<SetStateAction<BoardState>>;
  findColumn: (taskId: string) => ColumnId | null;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragCancel: () => void;
  activeTask: Task | null;
}

const useTaskBoardState = (): ITaskBoardState => {
  const [board, setBoard] = useState<BoardState>(initialData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const findColumn = (taskId: string): ColumnId | null => {
    for (const column of Object.keys(board) as ColumnId[]) {
      if (board[column].some((task) => task.id === taskId)) {
        return column;
      }
    }
    return null;
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const taskId = active.id as string;

    const column = findColumn(taskId);
    if (!column) return;

    const task = board[column].find((t) => t.id === taskId) || null;
    setActiveTask(task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const sourceColumn = findColumn(activeId);
    const destinationColumn = findColumn(overId) || (overId as ColumnId);

    if (!sourceColumn || !destinationColumn) return;

    // Same column reorder
    if (sourceColumn === destinationColumn) {
      const items = board[sourceColumn];
      const oldIndex = items.findIndex((t) => t.id === activeId);
      const newIndex = items.findIndex((t) => t.id === overId);

      setBoard((prev) => ({
        ...prev,
        [sourceColumn]: arrayMove(items, oldIndex, newIndex),
      }));
      return;
    }

    // Move between columns
    const sourceItems = [...board[sourceColumn]];
    const destItems = [...board[destinationColumn]];
    const taskIndex = sourceItems.findIndex((t) => t.id === activeId);
    const [movedTask] = sourceItems.splice(taskIndex, 1);

    destItems.push(movedTask);

    setBoard((prev) => ({
      ...prev,
      [sourceColumn]: sourceItems,
      [destinationColumn]: destItems,
    }));
  };

  const handleDragCancel = () => {
    setActiveTask(null);
  };

  return { board, setBoard, findColumn, handleDragStart, handleDragEnd, handleDragCancel, activeTask };
};

export default useTaskBoardState;
