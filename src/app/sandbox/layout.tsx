import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dan Sapp Sandbox",
  description: "Software Engineering Portfolio",
};

export default function SandboxLayout(
  { children }: { children: JSX.Element },
) {
  return children;
}
