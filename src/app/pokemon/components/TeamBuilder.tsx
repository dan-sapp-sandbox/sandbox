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
    <div>
      <div className="flex mb-4 justify-center items-center font-bold xs:text-4xl lg:text-4xl">
        <span className="font-bold xs:text-4xl lg:text-4xl text-zinc-200">
          Pokemon Team Builder
        </span>
      </div>
      <div className="mx-3 gap-2 grid grid-flow-row grid-cols-3 md:grid-cols-6">
        <Team teamData={team} updateTeam={updateTeam} />
      </div>
      <Analysis team={team} />
      <div className="xs:text-lg lg:text-3xl xs:my-2 lg:my-3 font-bold">
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
