import Viewer from "./Viewer";
import Section from "../Section";

const ComponentLibrarySection = () => {
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/storybook";
  const title = "Component Library";
  const features = ["Ensure components look good in all themes"];
  const usedPreviously = [{ where: "Various", what: "Design" }];

  const Demo = () => <Viewer />;
  return (
    <Section title={title} Demo={Demo} features={features} usedPreviously={usedPreviously} githubUrl={githubURL} />
  );
};

export default ComponentLibrarySection;
