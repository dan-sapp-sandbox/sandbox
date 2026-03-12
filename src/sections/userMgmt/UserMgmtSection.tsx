import DataGrid from "@/sections/userMgmt/dataGrid/DataGrid";
import Section from "../Section";

const UserMgmtSection = () => {
  const config = {
    githubURL: "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/sections/userMgmt",
    demoURL: "/user-management",
    title: "User Management Dashboard",
    description:
      "Administrative interface for managing application users, featuring sortable and filterable data tables, profile editing, and account lifecycle management.",

    features: [
      "Interactive Data Table: Client-side sorting and global filtering using TanStack Table",
      "User Dashboard: Summary cards showing total users and role distribution",
      "Detail Panel: Edit user profiles and manage account information",
      "Sticky Table Header: Maintain column context while scrolling large datasets",
      "Responsive Layout: Table and dashboard adapt to mobile and desktop screens",
    ],

    usedPreviously: [
      { where: "Enterprise Applications", what: "User administration and role management dashboards" },
      { where: "Internal Tools", what: "Data-heavy CRUD interfaces and operational management systems" },
    ],
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
