"use client";

import { ReactNode } from "react";
import PokemonCard from "./PokemonCard";
import { Details } from "../api/types";

// @refresh reset
interface TeamProps {
  teamData: Details[];
  updateTeam: (newTeam: Details[]) => void;
}
export default function Team({ teamData, updateTeam }: TeamProps): ReactNode {
  let emptySlots: ReactNode[] = [];
  for (let i = 0; i < 6 - teamData.length; i++) {
    emptySlots = emptySlots.concat(<EmptyCard key={i} />);
  }
  return (
    <>
      {teamData.map((pokemon: Details) => (
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

function EmptyCard(): ReactNode {
  return (
    <div className="col-span-1 flex bg-gray-200 xs:py-1 md:py-5 rounded-lg justify-center items-center border-indigo-500/100">
      <p className="text-center xs:text-xs md:text-2xl xs:my-2 md:my-20 py-5">
        Empty Slot
      </p>
    </div>
  );
}
