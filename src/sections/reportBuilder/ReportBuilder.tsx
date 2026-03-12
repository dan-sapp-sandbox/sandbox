import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import Column from "./Column";
import ReportSectionCard from "./ReportSectionCard";
import useTaskBoardState from "./useReportBuilderState";
import PdfPreview from "./PdfPreview";
import { PDFViewer } from "@react-pdf/renderer";

const ReportBuilder = () => {
  const taskBoardState = useTaskBoardState();

  return (
    <div className="h-full min-h-100 w-full rounded-2xl p-4 flex flex-row justify-between">
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={taskBoardState.handleDragStart}
        onDragEnd={taskBoardState.handleDragEnd}
        onDragCancel={taskBoardState.handleDragCancel}
      >
        <div className="h-full overflow-y-auto scrollbar-hide bg-(--alt-card-bg)">
          <Column reportState={taskBoardState.reportState} />
        </div>
        <DragOverlay>
          {taskBoardState.activeSection ? (
            <ReportSectionCard id={taskBoardState.activeSection.id} content={taskBoardState.activeSection.content} />
          ) : null}
        </DragOverlay>
      </DndContext>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <PdfPreview reportState={taskBoardState.reportState} />
      </PDFViewer>
    </div>
  );
};

export default ReportBuilder;
