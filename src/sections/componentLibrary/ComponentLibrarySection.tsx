import Viewer from "./Viewer";
import Section from "../Section";

const ComponentLibrarySection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/storybook",
    demoURL: "/component-library",
    title: "Component Library",
    features: ["Ensure components look good in all themes"],
    usedPreviously: [{ where: "Various", what: "Design" }],
  };

  return (
    <Section config={config}>
      <Viewer />
    </Section>
  );
};

export default ComponentLibrarySection;
