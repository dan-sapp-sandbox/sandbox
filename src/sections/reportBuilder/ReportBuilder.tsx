import { lazy } from "react";
import { DndContext, closestCorners, TouchSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import Column from "./Column";
import useTaskBoardState from "./useReportBuilderState";
import { PDFViewer } from "@react-pdf/renderer";
const PdfPreview = lazy(() => import("./PdfPreview"));

const ReportBuilder = () => {
  const taskBoardState = useTaskBoardState();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),
  );

  return (
    <div className="relative h-full min-h-100 w-full rounded-2xl p-4 flex flex-row justify-between gap-8">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={taskBoardState.handleDragStart}
        onDragEnd={taskBoardState.handleDragEnd}
        onDragCancel={taskBoardState.handleDragCancel}
      >
        <div className="w-1/3 max-w-100 h-full overflow-y-auto scrollbar-hide bg-(--alt-card-bg)">
          <Column reportState={taskBoardState.reportState} />
        </div>
      </DndContext>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <PdfPreview reportState={taskBoardState.reportState} />
      </PDFViewer>
    </div>
  );
};

export default ReportBuilder;
