import axios from "axios";
import { Details, Pokemon, PokemonRes } from "./types";

interface listProps {
  data: PokemonRes;
}
interface hydratedListProps {
  data: Details;
}

export async function getList(): Promise<PokemonRes> {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res: listProps) => res.data);
}
export async function getPokemon(list: Pokemon[]): Promise<Details[]> {
  return Promise.all(list.map((x: Pokemon) => (
    axios(`https://pokeapi.co/api/v2/pokemon/${x.name}`)
      .then((response: hydratedListProps) => response.data)
  )));
}
