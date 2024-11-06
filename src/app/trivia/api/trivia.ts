import axios from "axios";
import { iTrivia } from "./types";

const shuffleArray = (array: any[]): any[] => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export async function getTrivia() {
  const url = "https://node-server-seven-chi.vercel.app/trivia";
  // const url = "http://localhost:5000/trivia";
  return axios.get(url)
    .then((res) => res.data.length ? shuffleArray(res.data) : [] as iTrivia[]);
}
