import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppBar from "@/components/AppBar";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Dan Sapp Portfolio",
  description: "Software Engineering Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="en">
      <body
        style={{ background: "#1f093d" }}
      >
        <AppBar />
        <div
          style={{
            height: "calc(100vh - 85px)",
            overflowY: "scroll",
            scrollbarWidth: "none",
          }}
        >
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
