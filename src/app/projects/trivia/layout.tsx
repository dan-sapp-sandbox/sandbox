import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trivia Game",
  description: "Software Engineering Portfolio",
};

export default function TriviaLayout({ children }: { children: JSX.Element }) {
  return <main>{children}</main>;
}
