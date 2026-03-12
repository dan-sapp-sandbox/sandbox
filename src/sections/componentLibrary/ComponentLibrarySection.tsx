import Viewer from "./Viewer";
import Section from "../Section";
import { useResizeObserver } from "@/components/useResizeObserver";

const ComponentLibrarySection = () => {
  const { ref, size } = useResizeObserver();
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/storybook",
    demoURL: "/component-library",
    title: "UI Component Library",
    description:
      "Component development environment for testing reusable UI elements across themes and application contexts.",
    features: [
      "Reusable UI Components: Shared building blocks for applications",
      "Theme Support: Validate components across multiple themes",
      "Component Playground: Preview UI elements in isolation",
    ],
    usedPreviously: [
      { where: "Enterprise Applications", what: "Shared UI component libraries" },
      { where: "Internal Tools", what: "Reusable interface components" },
    ],
  };

  return (
    <Section resizeRef={ref} config={config}>
      <Viewer key={`${size.width}-${size.height}`} />
    </Section>
  );
};

export default ComponentLibrarySection;
