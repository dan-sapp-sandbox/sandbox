"use client";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
import { Details } from "../api/types";
import { ReactNode, Suspense } from "react";
import Image from "next/image";
// import { ChevronsUpDown } from "lucide-react";

interface PokemonCardProps {
  pokemon: Details;
  updateTeam: (newTeam: Details[]) => void;
  team: Details[];
  isTeam?: boolean;
}
export default function PokemonCard(
  { pokemon, updateTeam, team, isTeam }: PokemonCardProps,
): ReactNode {
  // const [isOpen, setIsOpen] = useState(false);
  const frontSprite: string = pokemon.sprites.front_default;
  const alreadyOnTeam = team?.length &&
    team.find((member) => member.name === pokemon.name);
  function makeNewTeam(pokemon: Details): void {
    let newTeam: Details[] = team;
    if (alreadyOnTeam) {
      newTeam = team.filter((member) => member.name !== pokemon.name);
    } else {
      newTeam = [...team, pokemon];
    }
    updateTeam(newTeam);
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card
        className={`${
          isTeam ? "col-span-2" : "col-span-2 md:col-span-4 lg:col-span-1"
        }
      bg-gray-200 rounded-lg justify-center items-center ${
          alreadyOnTeam ? "border-blue-400 border-4" : ""
        }`}
        onClick={() => makeNewTeam(pokemon)}
      >
        <CardHeader className="pt-1 pb-0">
          <CardTitle className="capitalize text-lg p-1 mx-auto">
            {pokemon.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Image className="mx-auto" src={frontSprite} alt="" width="200" height="200" />
          {
            /* <Collapsible
            open={isOpen}
            className="w-[350px] space-y-2"
          >
            <CollapsibleTrigger asChild>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span>Expand</span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {pokemon.stats.map((stat, index) => (
                <p key={index} className="capitalize">
                  {stat.stat.name}: {stat.base_stat}
                </p>
              ))}
              {pokemon.types.map((type, index) => (
                <p key={index} className="capitalize">
                  Type {index + 1}: {type.type.name}
                </p>
              ))}
            </CollapsibleContent>
          </Collapsible> */
          }
        </CardContent>
        {
          /* <CardFooter>
        </CardFooter> */
        }
      </Card>
    </Suspense>
  );
}
