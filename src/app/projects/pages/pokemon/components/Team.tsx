"use client";
import PokemonCard from "./PokemonCard";
import { iPokemon } from "../api/types";

interface TeamProps {
  teamData: iPokemon[] | [];
  updateTeam: (newTeam: iPokemon[]) => void;
}
export default function Team({ teamData, updateTeam }: TeamProps): JSX.Element {
  let emptySlots: JSX.Element[] = [];
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
    <div
      style={{ top: "-1px" }}
      className="mx-1 py-3 gap-1 grid grid-flow-row grid-cols-6 sticky bg-sky-800"
    >
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
