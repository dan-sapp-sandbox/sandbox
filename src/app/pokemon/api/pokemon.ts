import { drizzle } from "drizzle-orm/neon-http";
import { PokemonTable } from "@/drizzle/schema";
import { lte } from "drizzle-orm";
import TestData from './testData.json';

export async function getPokemon() {
  if (!process.env.DATABASE_URL) {
    // throw new Error("DATABASE_URL is not set");
    return [TestData[0]];
  }
  const db = drizzle(process.env.DATABASE_URL!);
  // const data = await db.select().from(PokemonTable).where(
  //   lte(PokemonTable.pokedexId, 151),
  // )
  //   .execute();
  return !!db ? [TestData[1]] : [TestData[2]];
}
