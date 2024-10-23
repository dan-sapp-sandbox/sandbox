"use client";

import { ReactNode } from "react";
import PokemonCard from "./PokemonCard";
import { iPokemon } from "../api/types";

// @refresh reset
interface TeamProps {
  teamData: iPokemon[];
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
    <>
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
    </>
  );
}
