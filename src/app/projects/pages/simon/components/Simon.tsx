"use client";
import { useSimonState } from "../hooks/useSimonState";

const Simon = () => {
  const { active, start, tap } = useSimonState();

  return (
    <div className="text-white flex flex-col p-4 h-screen w-screen">
      <div className="mt-24 flex flex-row justify-center w-full h-full">
        <div className="border-zinc-700 border-2 bg-gray-800 h-[80vmin] w-[80vmin] rounded-full grid grid-cols-2 p-4 md:p-12 gap-4 md:gap-12 relative">
          <button
            className={`${
              active === "green" ? "bg-green-300" : "bg-green-600"
            } outline-1 outline-border hover:outline-double col-span-1 h-42 rounded-tl-full`}
            onClick={() => tap("blue")}
          />
          <button
            className={`${
              active === "red" ? "bg-red-300" : "bg-red-600"
            } outline-1 outline-white hover:outline-double col-span-1 h-42 rounded-tr-full`}
            onClick={() => tap("red")}
          />
          <button
            className={`${
              active === "yellow" ? "bg-yellow-400" : "bg-yellow-500"
            } outline-1 outline-white hover:outline-double col-span-1 h-42 rounded-bl-full`}
            onClick={() => tap("yellow")}
          />
          <button
            className={`${
              active === "blue" ? "bg-blue-300" : "bg-blue-500"
            } outline-1 outline-white hover:outline-double col-span-1 h-42 rounded-br-full`}
            onClick={() => tap("blue")}
          />
          <button
            className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
     bg-gray-800 hover:bg-gray-700 h-[35vmin] w-[35vmin] rounded-full text-3xl md:text-5xl"
            onClick={() => start()}
          >
            Simon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Simon;
