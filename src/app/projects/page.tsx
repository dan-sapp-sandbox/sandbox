import Loading from "../loading";
import PokemonCard from "./components/PokemonCard";
import TriviaCard from "./components/TriviaCard";
import BastionCard from "./components/BastionCard";
import { Suspense } from "react";

export default async function ProjectsPage() {
  return (
    <div className="background mx-auto max-w-6xl px-2 md:px-6 pb-16 md:pb-0">
      <Suspense fallback={<Loading />}>
        <BastionCard />
        <TriviaCard />
        <PokemonCard />
      </Suspense>
    </div>
  );
}
