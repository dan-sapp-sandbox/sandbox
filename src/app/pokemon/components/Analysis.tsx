import { ReactNode } from "react";
import { Details } from "../api/types";
import { Radar } from "@/components/ui/radar";
import { typeColorMap } from "./Filters";

const weaknessesMap: Record<string, string[]> = {
  normal: ["fighting"],
  fighting: ["flying", "psychic", "fairy"],
  flying: ["rock", "electric", "ice"],
  poison: ["ground", "psychic"],
  ground: ["water", "grass", "ice"],
  rock: ["fighting", "ground", "steel", "water", "grass"],
  bug: ["flying", "rock", "fire"],
  ghost: ["ghost", "dark"],
  steel: ["fighting", "ground", "fire"],
  fire: ["ground", "rock", "water"],
  water: ["grass", "electric"],
  grass: ["flying", "poison", "bug", "fire", "ice"],
  electric: ["ground"],
  psychic: ["bug", "ghost", "dark"],
  ice: ["fighting", "rock", "steel", "fire"],
  dragon: ["ice", "dragon", "fairy"],
  dark: ["fighting", "bug", "fairy"],
  fairy: ["poison", "steel"],
};

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
  const teamTypes = team.reduce((acc, pokemon) => {
    let newAcc = acc;
    const type1 = pokemon.types[0].type.name;
    const type2 = pokemon.types[1]?.type.name;
    if (!newAcc.includes(type1)) {
      newAcc = [...newAcc, type1];
    }
    if (type2 && !newAcc.includes(type2)) {
      newAcc = [...newAcc, type2];
    }
    return newAcc;
  }, [] as string[]);

  // TODO: change this to use a hashmap and show number of occurances
  const weaknesses = teamTypes.reduce((acc, type) => {
    let newAcc = acc;
    const newWeaknesses = weaknessesMap[type];
    newWeaknesses.forEach((weakness) => {
      if (!newAcc.includes(weakness)) {
        newAcc = [...newAcc, weakness];
      }
    });
    return newAcc;
  }, [] as string[]);

  const coverageGaps = Object.keys(weaknessesMap).filter((type) => {
    const typeWeaknesses = weaknessesMap[type];
    return !typeWeaknesses.some((weakness) => teamTypes.includes(weakness));
  });
  return (
    <div className="gap-2 grid grid-flow-row-dense grid-cols-12">
      <div className="col-span-4 items-center justify-center">
        <Radar
          data={teamStats}
          width={500}
          height={400}
          axisConfig={[
            { title: "Hp", name: "hp", max: 140 * team.length },
            { title: "Attack", name: "attack", max: 140 * team.length },
            { title: "Defense", name: "defense", max: 140 * team.length },
            { title: "Speed", name: "speed", max: 140 * team.length },
            {
              title: "Special-Attack",
              name: "specialAttack",
              max: 140 * team.length,
            },
            {
              title: "Special-Defense",
              name: "specialDefense",
              max: 140 * team.length,
            },
          ]}
        />
      </div>
      <div className="col-span-8 mt-8">
        <div className="flex flex-wrap my-3">
          <div className="flex text-xl mt-4">
            Pokemon Team Types:
          </div>
          {teamTypes.map((type, index) => (
            <div
              key={index}
              className={`flex px-5 py-3 rounded-3xl m-1 capitalize ${
                typeColorMap[type]
              }`}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap my-3">
          <div className="flex text-xl mt-4">
            Common Vulnerablilities:
          </div>
          {weaknesses.map((type, index) => (
            <div
              key={index}
              className={`flex px-5 py-3 rounded-3xl m-1 capitalize ${
                typeColorMap[type]
              }`}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap my-3">
          <div className="flex text-xl mt-4">
            Offensive Coverage Gaps:
          </div>
          {coverageGaps.map((type, index) => (
            <div
              key={index}
              className={`flex px-5 py-3 rounded-3xl m-1 capitalize ${
                typeColorMap[type]
              }`}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
