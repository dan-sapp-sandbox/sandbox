import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software Engineering Portfolio",
};

export default function ProjectsLayout({ children }: { children: JSX.Element }) {
  return (
    <main
      style={{
        height: "calc(100vh - 70px)",
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
    >
      {children}
    </main>
  );
}
