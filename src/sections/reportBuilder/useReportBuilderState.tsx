import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export interface ReportSection {
  id: string;
  type: string;
  styles?: {
    [key: string]: string | number;
  };
  content?: string;
  imageUrl?: string;
}

const initialReportState: ReportSection[] = [
  {
    id: "title",
    type: "text",
    styles: {
      fontSize: 22,
      fontWeight: "bold",
    },
    content: "Weekly Report on Area of Interest",
  },
  {
    id: "date",
    styles: {
      fontSize: 14,
    },
    type: "text",
    content: "March 11, 2026",
  },
  {
    id: "2",
    type: "text",
    content:
      "Praesent vel turpis eget urna tristique commodo. Integer id leo eget justo vehicula tincidunt. Nulla facilisi. Mauris consequat ligula ut eros finibus, vitae convallis lectus fermentum. Nam cursus, turpis vel tempor placerat, libero sapien varius nunc, et luctus libero sapien a ex. Donec sit amet felis vitae nulla efficitur fermentum.",
  },
  {
    id: "3",
    type: "text",
    content:
      "Fusce mattis magna nec ligula faucibus, at elementum justo sagittis. Sed a tellus id erat luctus blandit. Vivamus ut libero sed elit luctus aliquet. Phasellus non nisi nec lacus posuere elementum. Etiam finibus, odio in vestibulum scelerisque, lectus erat tristique velit, a efficitur odio nisi eget orci. Integer at dolor non arcu feugiat feugiat.",
  },
  {
    id: "4",
    type: "image",
    imageUrl: "/hormuz.png",
  },
  {
    id: "5",
    type: "text",
    content:
      "Nam in lacus et lorem ultricies porttitor. Curabitur at diam ut sem scelerisque tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae eros eget justo viverra mollis. Praesent rhoncus, justo nec ultricies tempus, sapien nulla lacinia ex, id posuere nunc magna non odio. Quisque at mauris vitae mi vulputate mattis.",
  },
  {
    id: "6",
    type: "image",
    imageUrl: "/hormuz2.png",
  },
  {
    id: "7",
    type: "text",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis massa vitae justo laoreet suscipit. Aliquam erat volutpat. Curabitur ac lorem eget velit fermentum consectetur. Fusce id risus at nunc vehicula volutpat. Quisque at ligula a nibh tincidunt luctus. Sed dignissim, purus vel gravida pharetra, nisl nisl malesuada urna, in malesuada nisi purus sit amet quam.",
  },
];

export interface IReportBuilderState {
  reportState: ReportSection[];
  setReportState: Dispatch<SetStateAction<ReportSection[]>>;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragCancel: () => void;
  activeSection: ReportSection | null;
}

const useReportBuilderState = (): IReportBuilderState => {
  const [reportState, setReportState] = useState<ReportSection[]>(initialReportState);
  const [activeSection, setActiveSection] = useState<ReportSection | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const sectionId = event.active.id as string;
    const matchingSection = reportState.find((s) => s.id === sectionId) || null;
    setActiveSection(matchingSection);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveSection(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    const oldIndex = reportState.findIndex((item) => item.id === activeId);
    const newIndex = reportState.findIndex((item) => item.id === overId);

    if (oldIndex === -1 || newIndex === -1) return;

    setReportState((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const handleDragCancel = () => setActiveSection(null);

  return {
    reportState,
    setReportState,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    activeSection,
  };
};

export default useReportBuilderState;
