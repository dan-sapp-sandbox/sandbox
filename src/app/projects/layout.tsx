import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software Engineering Portfolio",
};

export default function ProjectsLayout(
  { children }: { children: JSX.Element },
) {
  return children;
}
