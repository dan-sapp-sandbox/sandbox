import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MTG Deck Builder",
  description: "Software Engineering Portfolio",
};

export default function MtgLayout({ children }: { children: ReactNode }) {
  return <main className="container my-6">{children}</main>;
}
