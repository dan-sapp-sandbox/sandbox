import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow();
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() =>
  new Date()
);

export const PokemonTable = pgTable("pokemon-list", {
  id: uuid("id").primaryKey().defaultRandom(),
  pokedexId: integer("pokedexId").notNull(),
  name: text("name").notNull(),
  spriteUrl: text("spriteUrl").notNull(),
  attack: integer("attack").notNull(),
  defense: integer("defense").notNull(),
  hp: integer("hp").notNull(),
  specialAttack: integer("specialAttack").notNull(),
  specialDefense: integer("specialDefense").notNull(),
  speed: integer("speed").notNull(),
  types: text("types").array().notNull(),
  createdAt,
  updatedAt,
});
