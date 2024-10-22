"use client";
import { iPokemon } from "../api/types";
import PokemonCard from "./PokemonCard";
import { ReactNode, useState } from "react";
import Team from "./Team";
// import { useQuery } from "@tanstack/react-query";
import Filters from "./Filters";
import Analysis from "./Analysis";
// import { getPokemon } from "../api/pokemon";

export default function PokemonPage(
  { pokemonData }: { pokemonData: iPokemon[] },
): ReactNode {
  const [team, updateTeam] = useState([] as iPokemon[]);
  const [filterTypes, updateFilterTypes] = useState([] as string[]);
  // const { data, isLoading } = useQuery({
  //   queryKey: ["pokemon"], //TODO: use when you write the services
  //   queryFn: async () => await getPokemon(),
  //   initialData: pokemonData,
  //   staleTime: 9999999,
  // });
  // if (isLoading) return <div>Loading</div>;
  return (
    <div className="mt-8">
      <div className="flex justify-center items-center font-bold xs:text-4xl lg:text-4xl">
        <span className="font-bold xs:text-4xl lg:text-4xl">
          Pokemon Team Builder
        </span>
      </div>
      <div className="xs:text-xl lg:text-3xl xs:py-1 md:py-3 font-bold mx-auto text-center">
        Current Team
      </div>
      <div className="mx-3 gap-2 grid grid-flow-row grid-cols-3 md:grid-cols-6">
        <Team teamData={team} updateTeam={updateTeam} />
      </div>
      <Analysis team={team} />
      <div className="xs:text-lg lg:text-3xl xs:my-2 lg:my-6 font-bold">
        List
      </div>
      <div className="md:mb-6">
        <div className="gap-2 grid grid-flow-row grid-cols-6">
          <Filters
            filterTypes={filterTypes}
            updateFilterTypes={updateFilterTypes}
          />
        </div>
      </div>
      <div className="gap-2 mt-2 mx-1 grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-9">
        {pokemonData?.filter((x) => {
          if (!filterTypes.length) return true;
          const types = x.types.map((type) => type);
          return filterTypes.some((type) => types.includes(type));
        }).map((entry: iPokemon, index: number) => (
          <PokemonCard
            key={index}
            pokemon={entry}
            updateTeam={updateTeam}
            team={team}
          />
        ))}
      </div>
    </div>
  );
}
