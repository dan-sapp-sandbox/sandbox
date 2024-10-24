import { drizzle } from "drizzle-orm/neon-http";
// import { PokemonTable } from "@/drizzle/schema";
// import { lte } from "drizzle-orm";
import TestData from "./testData.json";
import { config } from "dotenv";

config({ path: ".env" });

export async function getPokemon() {
  if (!process.env.REACT_APP_DATABASE_URL) {
    // throw new Error("REACT_APP_DATABASE_URL is not set");
    return [TestData[0]];
  }
  const db = drizzle(process.env.REACT_APP_DATABASE_URL!);
  // const data = await db.select().from(PokemonTable).where(
  //   lte(PokemonTable.pokedexId, 151),
  // )
  //   .execute();
  return !!db ? [TestData[1]] : [TestData[2]];
}
