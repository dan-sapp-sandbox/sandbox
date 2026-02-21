import Viewer from "./Viewer";
import Section from "../Section";

const ComponentLibrarySection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/storybook";
  const demoURL = "/component-library";
  const title = "Component Library";
  const features = ["Ensure components look good in all themes"];
  const usedPreviously = [{ where: "Various", what: "Design" }];

  return (
    <Section title={title} features={features} usedPreviously={usedPreviously} demoURL={demoURL} githubURL={githubURL}>
      <Viewer />
    </Section>
  );
};

export default ComponentLibrarySection;
