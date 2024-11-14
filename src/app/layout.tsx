import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppBar from "@/components/AppBar"

export const metadata: Metadata = {
  title: "Dan Sapp Portfolio",
  description: "Software Engineering Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-800 antialiased">
        <AppBar/>
        {children}
      </body>
    </html>
  );
}
