import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Components from "./components";

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
      <body>
        <Components.AppBar />
        <div id="content">
          {children}
        </div>
        <Components.BottomNav />
      </body>
    </html>
  );
}
