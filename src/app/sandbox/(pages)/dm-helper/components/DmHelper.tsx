"use client";
import { usePartyState } from "../hooks/usePartyState";
import CharacterCard from "./CharacterCard";

const DmHelper = () => {
  // TODO: saving throws
  // TODO: roll damage
  // TODO: advantage
  // TODO: mobs
  // TODO: leveling up
  // TODO: adding character

  const {party} = usePartyState();
  return (
    <div className="text-white flex flex-col p-4">
      <span className="my-5 text-3xl md:text-5xl self-center">
        DM&apos;s Little Helper
      </span>
      <div className="my-4">
        <div className="grid grid-cols-12 gap-3">
          {party.map((player) => (
            <CharacterCard key={player.id} player={player} />
          ))}
        </div>
      </div>
      {/* <div>
        <span>
          How many dice?
        </span>
        <input type="number" />
      </div> */}
    </div>
  );
};

export default DmHelper;
