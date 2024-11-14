import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Trivia Game",
  description: "Software Engineering Portfolio",
};

export default function TriviaLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
