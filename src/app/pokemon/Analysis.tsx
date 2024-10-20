import { ReactNode } from "react";
import { Details } from "./types";
import { Radar } from "@/components/ui/radar";

export type Variable =
  | "hp"
  | "attack"
  | "defense"
  | "specialAttack"
  | "specialDefense"
  | "speed";

type DataItem<T extends string> =
  & {
    [key in T]: number;
  }
  & {
    name: string;
  };
export type Data = DataItem<Variable>;

interface Props {
  team: Details[];
}
export default function Analysis(
  { team }: Props,
): ReactNode {
  const teamStats = team.reduce((acc, pokemon) => {
    return {
      hp: acc.hp + pokemon.stats[0].base_stat,
      attack: acc.attack + pokemon.stats[1].base_stat,
      defense: acc.defense + pokemon.stats[2].base_stat,
      specialAttack: acc.specialAttack + pokemon.stats[3].base_stat,
      specialDefense: acc.specialDefense + pokemon.stats[4].base_stat,
      speed: acc.speed + pokemon.stats[5].base_stat,
    };
  }, {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  });
  const teamTypes = team.map((pokemon) => {
    return pokemon.types.map((type) => type.type.name);
  });
  console.log(teamStats);
  console.log(teamTypes);
  return (
    <Radar
      data={teamStats}
      width={400}
      height={400}
      axisConfig={[
        { title: "Hp", name: "hp", max: 500 },
        { title: "Attack", name: "attack", max: 500 },
        { title: "Defense", name: "defense", max: 500 },
        { title: "SpecialAttack", name: "specialAttack", max: 500 },
        { title: "SpecialDefense", name: "specialDefense", max: 500 },
        { title: "Speed", name: "speed", max: 500 },
      ]}
    />
  );
}
