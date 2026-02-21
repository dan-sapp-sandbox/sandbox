import DataGrid from "@/components/DataGrid";
import Section from "../Section";
// import useUserMgmtState from "./useUserMgmtState";

const UserMgmtSection = () => {
  // const userMgmtState = useUserMgmtState();
  const githubURL = "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/userMgmt";
  const title = "Auth and Content Management Systems";
  const features = ["Auth0: WIP", "Sticky Header: Scroll while keeping header visible", "Form Modal: WIP"];
  const usedPreviously = [{ where: "Various", what: "Design" }];

  return (
    <Section title={title} features={features} usedPreviously={usedPreviously} githubUrl={githubURL} reversed={true}>
      <div className="h-70 md:h-125 w-full flex flex-col justify-center items-center p-px md:p-2">
        <DataGrid />
      </div>
    </Section>
  );
};

export default UserMgmtSection;
