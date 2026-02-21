import DataGrid from "@/sections/userMgmt/dataGrid/DataGrid";
import Section from "../Section";

const UserMgmtSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/userMgmt",
    demoURL: "/user-management",
    title: "Auth and Content Management Systems",
    features: ["Auth0: WIP", "Sticky Header: Scroll while keeping header visible", "Form Panel: Edit/Delete Users"],
    usedPreviously: [{ where: "Various", what: "Users, Inventory, etc." }],
    isReversed: true,
  };

  return (
    <Section config={config}>
      <div className="h-70 md:h-125 w-full flex flex-col justify-center items-center p-px md:p-2">
        <DataGrid />
      </div>
    </Section>
  );
};

export default UserMgmtSection;
