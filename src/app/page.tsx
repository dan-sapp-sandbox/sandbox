import ProfileCard from "./components/ProfileCard";
import LogoList from "./components/LogoList";
import Background from "@/components/Background";

export default function Portfolio() {
  return (
    <>
      <Background />
      <div className="max-w-6xl mx-auto mt-2 min-w-80 z-10 relative pt-4 lg:pt-36">
        <main className="gap-2 grid grid-flow-row grid-cols-12 mx-2">
          <div className="col-span-12 rounded justify-center mb-2">
            <div className="grid grid-cols-12 gap-8 p-6">
              <ProfileCard />
              <LogoList />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
