"use client";
import { Card, CardContent } from "@/components/ui/card";
import { iPokemon } from "../api/types";
import { Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

interface PokemonCardProps {
  pokemon?: iPokemon;
  updateTeam?: (newTeam: iPokemon[]) => void;
  team: iPokemon[];
  isTeam?: boolean;
}

export default function PokemonCard(
  { pokemon, updateTeam, team, isTeam }: PokemonCardProps,
): JSX.Element {
  // const router = useRouter();
  // const searchParams = useSearchParams();

  const png = `data:image/png;base64,${pokemon?.imageBlob}`;
  const alreadyOnTeam = team.find((member) => member.name === pokemon?.name);

  function clickHandler(pokemon: iPokemon): void {
    if (!pokemon) return;

    let newTeam: iPokemon[];
    if (alreadyOnTeam) {
      newTeam = team.filter((member) => member.pokedexId !== pokemon.pokedexId);
    } else {
      newTeam = team.length < 6 ? [...team, pokemon] : team;
    }

    updateTeam?.(newTeam);

    // const updatedIds = newTeam.map((member) => member.pokedexId);
    // const params = new URLSearchParams(searchParams.toString());

    // if (updatedIds.length > 0) {
    //   params.set("ids", updatedIds.join(","));
    // } else {
    //   params.delete("ids");
    // }

    // router.replace(`?${params.toString()}`, undefined);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card
        className={`col-span-1 bg-slate-400 rounded-lg justify-center items-center 
        active:bg-sky-200 ${
          (team.length < 6 || alreadyOnTeam || isTeam) &&
          "cursor-pointer hover:bg-sky-100"
        }
        ${(alreadyOnTeam && !isTeam) && "bg-indigo-200"}`}
        onClick={() => pokemon && clickHandler(pokemon)}
      >
        <CardContent className="p-0">
          {pokemon
            ? (
              /* eslint-disable-next-line */
              <img
                className={isTeam
                  ? "mx-auto min-w-12 max-w-14 sm:max-w-16 md:max-w-24 lg:max-w-36 xl:max-w-42 2xl:h-48"
                  : "mx-auto min-w-12 max-w-12 sm:max-w-16 md:max-w-20 2xl:max-w-24"}
                src={png}
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
