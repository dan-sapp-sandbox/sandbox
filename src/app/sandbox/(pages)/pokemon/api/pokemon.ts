import axios from "axios";
import { iPokemon } from "./types";

export async function getPokemon() {
  const url = "https://node-server-seven-chi.vercel.app/pokemon";
  // const url = "http://localhost:5000/pokemon";
  return axios.get(url)
    .then((res) => res.data as iPokemon[]);
}
