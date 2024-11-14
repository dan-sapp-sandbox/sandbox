import ProfileCard from "./components/ProfileCard";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto mt-2 min-w-80">
      <main className="gap-2 grid grid-flow-row grid-cols-12 mx-2">
        <ProfileCard />
      </main>
    </div>
  );
}
