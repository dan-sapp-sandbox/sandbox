import Background from "@/components/Background";
import PokemonCard from "./components/PokemonCard";
import TriviaCard from "./components/TriviaCard";

export default async function ProjectsPage() {
  return (
    <>
      <Background />
      <div className="mx-auto max-w-6xl px-6">
        <TriviaCard />
        <PokemonCard />
      </div>
    </>
  );
}
