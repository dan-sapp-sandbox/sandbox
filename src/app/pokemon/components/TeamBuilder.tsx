"use client";
import { iPokemon } from "../api/types";
import PokemonCard from "./PokemonCard";
import { ReactNode, useState } from "react";
import Team from "./Team";
import { useQuery } from "@tanstack/react-query";
import Filters from "./Filters";
import Analysis from "./Analysis";
import { getPokemon } from "../api/pokemon";

export default function PokemonPage(
  { pokemonData }: { pokemonData: iPokemon[] },
): ReactNode {
  const [team, updateTeam] = useState([] as iPokemon[]);
  const [filterTypes, updateFilterTypes] = useState([] as string[]);
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => await getPokemon(),
    initialData: pokemonData,
    staleTime: 1000 * 60 * 60 * 24,
  });
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="relative">
      <div className="flex mb-2 justify-center items-center font-bold xs:text-4xl lg:text-4xl">
        <span className="font-bold xs:text-4xl lg:text-4xl text-zinc-200">
          Pokemon Team Builder
        </span>
      </div>
      <div className="mx-auto py-1 gap-1 grid grid-flow-row grid-cols-6 sticky top-0 bg-purple-950">
        <Team teamData={team} updateTeam={updateTeam} />
      </div>
      <Analysis team={team} />
      <div className="md:my-6 py-1 sticky top-16 bg-purple-950">
        <Filters
          filterTypes={filterTypes}
          updateFilterTypes={updateFilterTypes}
        />
      </div>
      <div className="gap-1 mt-2 mx-1 grid grid-flow-row grid-cols-6 sm:grid-cols-7 
        md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 2xl:grid-cols-11 3xl:grid-cols-12">
        {data?.filter((x: iPokemon) => {
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
