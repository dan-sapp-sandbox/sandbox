import axios from "axios";
import { iTrivia } from "./types";

const shuffleArray = (array: iTrivia[]): iTrivia[] => {
  const shuffled = [...array];
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

export async function getTags() {
  const url = "https://node-server-seven-chi.vercel.app/trivia/tags";
  // const url = "http://localhost:5000/trivia/tags";
  return axios.get(url)
    .then((res) => res.data as string[]);
}

export async function getTriviaByTag(tag: string) {
  const url = `https://node-server-seven-chi.vercel.app/trivia/tag/${tag}`;
  // const url = "http://localhost:5000/trivia/tag/${tag}";
  return axios.get(url)
    .then((res) => res.data as string[]);
}
