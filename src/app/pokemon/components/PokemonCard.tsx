"use client";
import { Card, CardContent } from "@/components/ui/card";
import { iPokemon } from "../api/types";
import { ReactNode, Suspense } from "react";

interface PokemonCardProps {
  pokemon?: iPokemon;
  updateTeam?: (newTeam: iPokemon[]) => void;
  team: iPokemon[];
  isTeam?: boolean;
}
export default function PokemonCard(
  { pokemon, updateTeam, team, isTeam }: PokemonCardProps,
): ReactNode {
  const frontSprite = pokemon?.spriteUrl;
  const alreadyOnTeam = team?.length &&
    team.find((member) => member.name === pokemon?.name);
  function makeNewTeam(pokemon: iPokemon): void {
    if (team.length >= 6 && !alreadyOnTeam) return;
    let newTeam: iPokemon[] = team;
    if (alreadyOnTeam) {
      newTeam = team.filter((member) => member.name !== pokemon.name);
    } else {
      newTeam = [...team, pokemon];
    }
    updateTeam?.(newTeam);
  }
  // TODO: fix so that border doesnt make card bigger
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card
        className={`col-span-1 bg-slate-400 rounded-lg justify-center items-center 
        active:bg-sky-200 ${(team.length < 6|| alreadyOnTeam || isTeam) && 'cursor-pointer hover:bg-sky-100'}
        ${(alreadyOnTeam && !isTeam) ? "bg-indigo-200" : ""}`}
        onClick={() => pokemon && makeNewTeam(pokemon)}
      >
        <CardContent className="p-0">
          {frontSprite
            ? (
              <img
                className={isTeam
                  ? "mx-auto min-w-12 max-w-14 sm:max-w-16 md:max-w-24 lg:max-w-36 xl:max-w-42 2xl:h-48"
                  : "mx-auto min-w-12 max-w-12 sm:max-w-16 md:max-w-20 2xl:max-w-24"}
                src={frontSprite}
                alt="pokemon"
                width={400}
                height={400}
                loading="lazy"
              />
            )
            : (
              <div className="rounded-lg bg-slate-400 py-1 h-12 sm:h-16 md:h-24 lg:h-36 xl:h-42 2xl:h-48">
              </div>
            )}
        </CardContent>
      </Card>
    </Suspense>
  );
}
