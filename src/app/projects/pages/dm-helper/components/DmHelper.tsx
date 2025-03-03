"use client";
import { useState } from "react";
import { defaultPlayers, Player } from "../utils";

const DmHelper = () => {
  // TODO: saving throws
  // TODO: roll damage
  // TODO: advantage
  // TODO: mobs
  // TODO: leveling up
  // TODO: adding character
  // TODO: player accordions

  const [players, setPlayers] = useState<Player[]>(defaultPlayers);
  return (
    <div className="text-white flex flex-col p-4">
      <span className="my-5 text-3xl md:text-5xl self-center">
        DM&apos;s Little Helper
      </span>
      <div className="my-4">
        <div className="grid grid-cols-12 gap-3">
          {players.map((player) => (
            <div
              key={player.name}
              className="text-3xl col-span-12 md:col-span-6 lg:col-span-3 p-2 rounded-md border-solid border-2 border-red-400"
            >
              <div className="flex flex-row mb-2">
                <span className="flex-grow text-center">{player.name}</span>
                <button
                  className="ml-auto px-2 bg-blue-300 hover:bg-blue-200 rounded"
                  onClick={() => setPlayers(defaultPlayers)}
                >
                  +
                </button>
              </div>
              <div>Level {player.level} {player.class}</div>
              <div>Hp: {player.hp}/{player.maxHp}</div>
              <div>Strength: {player.strength}</div>
              <div>Dexterity: {player.dexterity}</div>
              <div>Constitution: {player.constitution}</div>
              <div>Intelligence: {player.intelligence}</div>
              <div>Wisdom: {player.wisdom}</div>
              <div>Charisma: {player.charisma}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span>
          How many dice?
        </span>
        <input type="number" />
      </div>
    </div>
  );
};

export default DmHelper;
