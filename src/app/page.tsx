import ProfileCard from "./components/ProfileCard";
import TriviaCard from "./components/TriviaCard";
import PokemonCard from "./components/PokemonCard";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto mt-2 min-w-80">
      <main className="gap-2 grid grid-flow-row grid-cols-12 mx-2">
        <ProfileCard />
        <div className="ml-2 col-span-12 font-bold text-zinc-200 text-2xl">
          Projects
        </div>
        <TriviaCard />
        <PokemonCard />
      </main>
    </div>
  );
}
