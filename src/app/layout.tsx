import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/app/fonts/fontUtils";

export const metadata: Metadata = {
  title: "Dan Sapp Portfolio",
  description: "Software Engineering Portfolio",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-500 ${geistSans.variable} ${geistMono.variable} antialiased container`}
      >
        {children}
      </body>
    </html>
  );
}
