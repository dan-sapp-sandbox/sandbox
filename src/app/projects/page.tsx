import Loading from "../loading";
import PokemonCard from "./components/PokemonCard";
import TriviaCard from "./components/TriviaCard";
import { Suspense } from "react";

export default async function ProjectsPage() {
  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="overflow-scroll background mx-auto max-w-6xl px-6"
    >
      <Suspense fallback={<Loading />}>
        <TriviaCard />
        <PokemonCard />
      </Suspense>
    </div>
  );
}
