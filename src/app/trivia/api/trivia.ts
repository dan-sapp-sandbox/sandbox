import axios from "axios";
import { iTrivia } from "./types";

export async function getTrivia() {
  const url = "https://node-server-seven-chi.vercel.app/trivia";
  // const url = "http://localhost:5000/pokemon";
  return axios.get(url)
    .then((res) => res.data as iTrivia[]);
}
