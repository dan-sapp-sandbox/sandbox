import PokemonCard from "./components/PokemonCard";
import TriviaCard from "./components/TriviaCard";

export default async function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PokemonCard />
      <TriviaCard />
    </div>
  );
}
