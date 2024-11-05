"use client";

import { ReactNode } from "react";
import PokemonCard from "./PokemonCard";
import { iPokemon } from "../api/types";

interface TeamProps {
  teamData: iPokemon[] | [];
  updateTeam: (newTeam: iPokemon[]) => void;
}
export default function Team({ teamData, updateTeam }: TeamProps): ReactNode {
  let emptySlots: ReactNode[] = [];
  for (let i = 0; i < 6 - teamData.length; i++) {
    emptySlots = emptySlots.concat(
      <PokemonCard
        key={i}
        team={teamData}
        isTeam
      />,
    );
  }
  return (
    <div className="mx-1 py-1 md:py-2 gap-1 grid grid-flow-row grid-cols-6 sticky top-0 bg-sky-800">
      {teamData.map((pokemon: iPokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          updateTeam={updateTeam}
          team={teamData}
          isTeam
        />
      ))}
      {emptySlots}
    </div>
  );
}
