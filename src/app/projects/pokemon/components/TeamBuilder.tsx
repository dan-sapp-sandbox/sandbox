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
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => await getPokemon(),
    initialData: pokemonData,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const [team, updateTeam] = useState<iPokemon[]>([]);
  const [filterTypes, updateFilterTypes] = useState<string[]>([]);
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="relative min-h-svh bg-sky-800">
      <Team teamData={team} updateTeam={updateTeam} />
      <Analysis team={team} />
      <Filters
        filterTypes={filterTypes}
        updateFilterTypes={updateFilterTypes}
      />
      <div className="gap-1 mt-2 mx-1 grid grid-flow-row grid-cols-3 sm:grid-cols-5 
        md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-11 3xl:grid-cols-12">
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
