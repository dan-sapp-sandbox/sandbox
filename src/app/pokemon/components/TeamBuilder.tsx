"use client";
import { iPokemon } from "../api/types";
import PokemonCard from "./PokemonCard";
import { ReactNode, useState } from "react";
import Team from "./Team";
import { useQuery } from "@tanstack/react-query";
import Filters from "./Filters";
import Analysis from "./Analysis";
import { getPokemon } from "../api/pokemon";
import { useSearchParams } from "next/navigation";
import { getFilters, getIds } from "./utils";

export default function PokemonPage(
  { pokemonData }: { pokemonData: iPokemon[] },
): ReactNode {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => await getPokemon(),
    initialData: pokemonData,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const searchParams = useSearchParams();
  const paramIds = getIds(searchParams);
  function getPokemonFromId(id: number): iPokemon | undefined {
    return data.find((pokemon) => id === pokemon.pokedexId);
  }
  const initTeam = paramIds
    .map((id) => getPokemonFromId(id))
    .filter((x) => x != undefined);
  const [team, updateTeam] = useState(initTeam);
  const [filterTypes, updateFilterTypes] = useState<string[]>(
    getFilters(searchParams),
  );
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="relative min-h-svh bg-sky-800">
      <div className="flex justify-center items-center font-bold xs:text-4xl lg:text-4xl">
        <span className="my-4 font-bold text-3xl lg:text-4xl text-zinc-300">
          Pokemon Team Builder
        </span>
      </div>
      <Team teamData={team} updateTeam={updateTeam} />
      <Analysis team={team} />
      <Filters
        filterTypes={filterTypes}
        updateFilterTypes={updateFilterTypes}
      />
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
