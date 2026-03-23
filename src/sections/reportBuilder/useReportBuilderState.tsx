import { useState, type ReactNode } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { type Descendant } from "slate";
import { Text } from "@react-pdf/renderer";

export interface ReportSection {
  id: string;
  type: string;
  styles?: {
    [key: string]: string | number;
  };
  content?: Descendant[];
  pdfContent?: ReactNode;
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
    content: [{ type: "paragraph", children: [{ text: "Weekly Report on Persian Gulf" }] }],
    pdfContent: <Text key="title">Weekly Report on Persian Gulf</Text>,
  },
  {
    id: "date",
    styles: {
      fontSize: 14,
    },
    type: "text",
    content: [{ type: "paragraph", children: [{ text: "March 23, 2026" }] }],
    pdfContent: <Text key="date">March 23, 2026</Text>,
  },
  {
    id: "2",
    type: "text",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: `Following U.S. and Israeli strikes, Iran has effectively restricted or halted shipping through the Strait of
              Hormuz, using threats, mines, and attacks on vessels—causing tanker traffic to collapse and disrupting roughly
              20% of global oil supply. This has triggered a sharp spike in oil prices, stranded ships, and rising global
              economic concerns, while international disagreements over how to respond have complicated efforts to reopen the
              critical waterway.`,
          },
        ],
      },
    ],
    pdfContent: (
      <Text key="text">
        Following U.S. and Israeli strikes, Iran has effectively restricted or halted shipping through the Strait of
        Hormuz, using threats, mines, and attacks on vessels—causing tanker traffic to collapse and disrupting roughly
        20% of global oil supply. This has triggered a sharp spike in oil prices, stranded ships, and rising global
        economic concerns, while international disagreements over how to respond have complicated efforts to reopen the
        critical waterway.
      </Text>
    ),
  },
  {
    id: "4",
    type: "image",
    imageUrl: "/hormuz.png",
  },
  {
    id: "5",
    type: "text",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: `The U.S. airstrikes hit over 90 Iranian military targets on Kharg Island—such as missile sites and naval
              facilities—while deliberately avoiding the critical oil export infrastructure that handles most of Iran’s crude
              shipments. Since then, the island has remained operational but highly tense, with ongoing threats of further
              strikes or even a possible U.S. attempt to seize or blockade it, given its importance to both Iran’s economy and
              global oil markets.`,
          },
        ],
      },
    ],
    pdfContent: (
      <Text key="3">
        The U.S. airstrikes hit over 90 Iranian military targets on Kharg Island—such as missile sites and naval
        facilities—while deliberately avoiding the critical oil export infrastructure that handles most of Iran’s crude
        shipments. Since then, the island has remained operational but highly tense, with ongoing threats of further
        strikes or even a possible U.S. attempt to seize or blockade it, given its importance to both Iran’s economy and
        global oil markets.
      </Text>
    ),
  },
  {
    id: "6",
    type: "image",
    imageUrl: "/light-chart.png",
  },
  {
    id: "7",
    type: "text",
    content: [
      {
        type: "paragraph",
        children: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis massa vitae justo laoreet suscipit. Aliquam erat volutpat. Curabitur ac lorem eget velit fermentum consectetur. Fusce id risus at nunc vehicula volutpat. Quisque at ligula a nibh tincidunt luctus. Sed dignissim, purus vel gravida pharetra, nisl nisl malesuada urna, in malesuada nisi purus sit amet quam.",
          },
        ],
      },
    ],
    pdfContent: (
      <Text key="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis massa vitae justo laoreet suscipit.
        Aliquam erat volutpat. Curabitur ac lorem eget velit fermentum consectetur. Fusce id risus at nunc vehicula
        volutpat. Quisque at ligula a nibh tincidunt luctus. Sed dignissim, purus vel gravida pharetra, nisl nisl
        malesuada urna, in malesuada nisi purus sit amet quam.
      </Text>
    ),
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
