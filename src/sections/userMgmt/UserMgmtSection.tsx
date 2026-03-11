import DataGrid from "@/sections/userMgmt/dataGrid/DataGrid";
import Section from "../Section";

const UserMgmtSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/userMgmt",
    demoURL: "/user-management",
    title: "Auth and Content Management Systems",
    description:
      "Administrative interface for managing application users, including authentication, profile editing, and account lifecycle management.",
    features: [
      "User Table: Searchable list of application users",
      "Detail Panel: Edit user profiles and manage account status",
      "Authentication: Auth0 integration (WIP)",
      "Sticky Table Header: Maintain column context while scrolling",
    ],
    usedPreviously: [
      { where: "Enterprise Applications", what: "User administration dashboards" },
      { where: "Internal Tools", what: "Inventory and resource management systems" },
    ],
    isReversed: true,
  };

  return (
    <Section config={config}>
      <div className="h-full w-full flex flex-col justify-center items-center p-px md:p-2">
        <DataGrid />
      </div>
    </Section>
  );
};

export default UserMgmtSection;
