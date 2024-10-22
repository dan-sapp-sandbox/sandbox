CREATE TABLE IF NOT EXISTS "pokemon-list" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pokedexId" integer NOT NULL,
	"name" text NOT NULL,
	"spriteUrl" text NOT NULL,
	"attack" integer NOT NULL,
	"defense" integer NOT NULL,
	"hp" integer NOT NULL,
	"specialAttack" integer NOT NULL,
	"specialDefense" integer NOT NULL,
	"speed" integer NOT NULL,
	"types" text[],
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
