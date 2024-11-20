import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software Engineering Portfolio",
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
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
