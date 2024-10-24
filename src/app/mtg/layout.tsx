import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MTG Deck Builder",
  description: "Software Engineering Portfolio",
};

export default function MtgLayout({ children }: { children: ReactNode }) {
  console.log("env", process.env.DATABASE_URL);
  return <main className="container my-6">{children}</main>;
}
