// import { drizzle } from "drizzle-orm/neon-http";
// import { PokemonTable } from "@/drizzle/schema";
// import { lte } from "drizzle-orm";
import axios from "axios";
// import { config } from "dotenv";

// config({ path: ".env" });

export async function getPokemon() {
  // const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL!);
  // const data = await db.select().from(PokemonTable).where(
  //   lte(PokemonTable.pokedexId, 151),
  // )
  //   .execute();
  // return axios.get("https://node-server-seven-chi.vercel.app/").then((res) =>
  //   res.data
  // );
  return axios.get("http://localhost:5000/pokemon").then((res) => res.data);
}
