"use client";
import ProfileCard from "./components/ProfileCard";
import LogoList from "./components/LogoList";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto min-w-80 z-10 relative pt-2 lg:pt-4">
      <main className="gap-2 grid grid-flow-row grid-cols-12">
        <div className="col-span-12">
          <div className="grid grid-cols-12 pb-0 p-4 md:pb-0 md:p-8">
            <ProfileCard />
            <LogoList />
          </div>
        </div>
      </main>
    </div>
  );
}
