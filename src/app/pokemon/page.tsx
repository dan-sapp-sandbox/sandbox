import { getList, getPokemon } from "../../api/pokemon";
import { ReactNode } from "react";
import TeamBuilder from "./TeamBuilder";
import { Details } from "./types";

export default async function PokemonPage(): Promise<ReactNode> {
  async function getInitialData(): Promise<Details[]> {
    const list = await getList();
    const pokemonData = await getPokemon(list.results);
    return pokemonData;
  }
  const initialData = await getInitialData();
  return <TeamBuilder pokemonData={initialData}></TeamBuilder>;
}
// TODO: figure out how to feed in the cards as children here to do SSR
