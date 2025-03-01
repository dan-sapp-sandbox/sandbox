import Loading from "../loading";
import PokemonCard from "./containers/PokemonCard";
import TriviaCard from "./containers/TriviaCard";
import BastionCard from "./containers/BastionCard";
import BernoulliCard from "./containers/BernoulliCard";
import { Suspense } from "react";

export default async function ProjectsPage() {
  return (
    <div className="background mx-auto max-w-6xl my-4 px-2 md:px-6 pb-16 md:pb-0">
      <Suspense fallback={<Loading />}>
        <div className="bg-slate-500 p-2 mb-2 rounded">
          <span className="text-white text-4xl px-2">
            React
          </span>
          <PokemonCard />
        </div>
        <div className="bg-slate-500 p-2 mb-2 rounded">
          <span className="text-white text-4xl p-2">
            Python & Django
          </span>
          <TriviaCard />
          <BernoulliCard />
        </div>
        <div className="bg-slate-500 p-2 mb-2 rounded">
          <span className="text-white text-4xl p-2">
            Flutter & Go
          </span>
          <BastionCard />
        </div>
      </Suspense>
    </div>
  );
}
