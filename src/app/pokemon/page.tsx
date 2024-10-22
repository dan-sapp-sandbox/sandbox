"use server";
import { getPokemon } from "./api/pokemon";
import { ReactNode } from "react";
import TeamBuilder from "./components/TeamBuilder";

export default async function PokemonPage(): Promise<ReactNode> {
  const initialData = await getPokemon();
  return <TeamBuilder pokemonData={initialData}></TeamBuilder>;
}
