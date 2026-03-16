import { DndContext, closestCorners, TouchSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import Column from "./Column";
import useReportBuilderState from "./useReportBuilderState";
import { PDFViewer } from "@react-pdf/renderer";
import PdfPreview from "./PdfPreview";

const ReportBuilder = () => {
  const taskBoardState = useReportBuilderState();

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
    <div className="relative p-4 h-full min-h-100 w-full flex flex-row justify-between gap-8">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={taskBoardState.handleDragStart}
        onDragEnd={taskBoardState.handleDragEnd}
        onDragCancel={taskBoardState.handleDragCancel}
      >
        <div className="w-1/3 max-w-100 h-full overflow-y-auto scrollbar-hide">
          <Column reportState={taskBoardState.reportState} setReportState={taskBoardState.setReportState} />
        </div>
      </DndContext>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <PdfPreview reportState={taskBoardState.reportState} />
      </PDFViewer>
    </div>
  );
};

export default ReportBuilder;
