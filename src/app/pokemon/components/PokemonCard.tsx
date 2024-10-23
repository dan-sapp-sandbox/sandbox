"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { iPokemon } from "../api/types";
import { ReactNode, Suspense } from "react";
import Image from "next/image";

interface PokemonCardProps {
  pokemon?: iPokemon;
  updateTeam?: (newTeam: iPokemon[]) => void;
  team: iPokemon[];
  isTeam?: boolean;
}
export default function PokemonCard(
  { pokemon, updateTeam, team }: PokemonCardProps,
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
  // TODO: fix sizing on empty ones
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card
        className={`col-span-1 bg-slate-50 rounded-lg justify-center items-center 
        hover:bg-sky-100 active:bg-sky-200 cursor-pointer box-content
        ${alreadyOnTeam ? "border-blue-400 border-4 bg-slate-100" : ""}`}
        onClick={() => pokemon && makeNewTeam(pokemon)}
      >
        <CardHeader className="p-0 pt-1">
          <CardTitle className="capitalize mx-auto text-xs lg:text-lg lg:font-bold">
            {pokemon?.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {frontSprite
            ? (
              <Image
                className="mx-auto max-w-24 lg:max-w-32 "
                src={frontSprite}
                alt=""
                width={400}
                height={400}
              />
            )
            : <div className="my-1 h-16 sm:h-28 md:h-32"></div>}
        </CardContent>
      </Card>
    </Suspense>
  );
}
