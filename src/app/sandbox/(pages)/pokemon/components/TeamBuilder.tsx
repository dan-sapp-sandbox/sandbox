"use client";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Components from "@/app/components";
import { getPokemon } from "../api/pokemon";
import { iPokemon } from "../api/types";
import PokemonCard from "./PokemonCard";
import Team from "./Team";
import Filters from "./Filters";
import Analysis from "./Analysis";
import { VirtuosoGrid } from "react-virtuoso";

export default function PokemonPage(
  { pokemonData }: { pokemonData: iPokemon[] },
): JSX.Element {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => await getPokemon(),
    initialData: pokemonData,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const [team, updateTeam] = useState<iPokemon[]>([]);
  const [filterTypes, updateFilterTypes] = useState<string[]>([]);
  if (isLoading) {
    return <Components.Loading />;
  }

  const filterPokemon = (pokemon: iPokemon[], filters: string[]) => {
    return pokemon?.filter((x: iPokemon) => {
      if (!filters.length) return true;
      const types = x.types.map((type) => type);
      return filters.some((type) => types.includes(type));
    });
  };

  const filteredPokemon = useMemo(() => filterPokemon(data, filterTypes), [data, filterTypes]);
  return (
    <div className="relative bg-sky-800 h-[calc(100vh-73px)] md:h-[calc(100vh-64px)]">
      <Team teamData={team} updateTeam={updateTeam} />
      <Analysis team={team} />
      <Filters
        filterTypes={filterTypes}
        updateFilterTypes={updateFilterTypes}
      />
      <VirtuosoGrid
        className="!h-[48rem] sm:!h-[47rem] md:!h-[45.5rem] lg:!h-[43rem] xl:!h-[44rem] 2xl:!h-[41rem]"
        data={filteredPokemon}
        totalCount={filteredPokemon.length}
        components={{
          List: (props) => (
            <div
              {...props}
              className="gap-1 mt-2 mx-1 grid grid-flow-row grid-cols-3 sm:grid-cols-5 
          md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-12"
            />
          ),
        }}
        itemContent={(_, pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            updateTeam={updateTeam}
            team={team}
            isTeam
          />
        )}
      />
    </div>
  );
}
