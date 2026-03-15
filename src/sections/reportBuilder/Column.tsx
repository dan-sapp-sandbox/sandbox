import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import ReportSectionCard from "./ReportSectionCard";
import type { ReportSection } from "./useReportBuilderState";

const Column = ({ title, reportState }: { title?: string; reportState: ReportSection[] }) => {
  return (
    <div className="bg-(--column-bg) rounded md:rounded-2xl shadow p-1 md:p-4 h-full transition-colors max-w-150">
      {title && (
        <h2 className="text-(--card-foreground) font-semibold text-sm md:text-lg mb-1 md:mb-4 w-full text-center">
          {title}
        </h2>
      )}

      <SortableContext items={reportState.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-2 md:space-y-3 h-full">
          {reportState.map((section) => (
            <ReportSectionCard key={section.id} section={section} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default Column;
