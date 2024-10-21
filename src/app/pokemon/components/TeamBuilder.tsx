"use client";
import { Details } from "../api/types";
import PokemonCard from "./PokemonCard";
import { getList, getPokemon } from "../api/pokemon";
import { ReactNode, useState } from "react";
import Team from "./Team";
import { useQuery } from "@tanstack/react-query";
import Filters from "./Filters";
import Analysis from "./Analysis";

// @refresh reset
export default function PokemonPage(
  { pokemonData }: { pokemonData: Details[] },
): ReactNode {
  const [team, updateTeam] = useState([] as Details[]);
  const [filterTypes, updateFilterTypes] = useState([] as string[]);
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon"], //use pokedex number here too
    queryFn: async () => {
      const list = await getList();
      return await getPokemon(list.results);
    },
    initialData: pokemonData,
    staleTime: 9999999,
  });
  if (isLoading) return <div>Loading</div>;
  return (
    <div className="mx-auto mt-8">
      <div className="flex-grow font-semibold mx-auto text-center flex flex-col my-6">
        <h1 className="flex-1 text-4xl">Pokemon Team Builder</h1>
      </div>
      <div className="text-3xl p-6 font-bold">
        Current Team
      </div>
      <div className="gap-2 grid grid-flow-row-dense grid-cols-6">
        <Team teamData={team} updateTeam={updateTeam} />
      </div>
      <div>
        <Analysis team={team} />
        <div id="chart"></div>
      </div>
      <div className="text-3xl my-6 font-bold">
        List
      </div>
      <div className="text-3xl mb-6">
        <div className="gap-2 grid grid-flow-row-dense grid-cols-12">
          <Filters
            filterTypes={filterTypes}
            updateFilterTypes={updateFilterTypes}
          />
        </div>
      </div>
      <div className="gap-2 grid grid-flow-row sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-9">
        {data?.filter((x) => {
          if (!filterTypes.length) return true;
          const types = x.types.map((type) => type.type.name);
          return filterTypes.some((type) => types.includes(type));
        }).map((entry: Details, index: number) => (
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
