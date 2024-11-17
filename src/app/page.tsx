import ProfileCard from "./components/ProfileCard";
import LogoList from "./components/LogoList";
import Background from "@/components/Background";

export default function Portfolio() {
  return (
    <>
      <Background />
      <div className="max-w-6xl mx-auto min-w-80 z-10 relative pt-2 lg:pt-24">
        <main className="gap-2 grid grid-flow-row grid-cols-12">
          <div className="col-span-12">
            <div className="grid grid-cols-12 p-4 md:p-8">
              <ProfileCard />
              <LogoList />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
