export interface Player {
  name: string;
  hp: number;
  maxHp: number;
  class: string;
  level: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
export const defaultPlayers: Player[] = [
  {
    name: "Aragorn",
    hp: 120,
    maxHp: 120,
    level: 6,
    class: "Ranger",
    strength: 5,
    dexterity: 5,
    constitution: 5,
    intelligence: 5,
    wisdom: 5,
    charisma: 5,
  },
  {
    name: "Gandalf",
    hp: 200,
    maxHp: 200,
    level: 10,
    class: "Wizard",
    strength: 5,
    dexterity: 5,
    constitution: 5,
    intelligence: 5,
    wisdom: 5,
    charisma: 5,
  },
  {
    name: "Frodo",
    hp: 40,
    maxHp: 40,
    level: 1,
    class: "Rogue",
    strength: 4,
    dexterity: 5,
    constitution: 5,
    intelligence: 5,
    wisdom: 5,
    charisma: 5,
  },
  {
    name: "Gimli",
    hp: 200,
    maxHp: 200,
    level: 4,
    class: "Barbarian",
    strength: 8,
    dexterity: 5,
    constitution: 8,
    intelligence: 3,
    wisdom: 3,
    charisma: 4,
  },
];
