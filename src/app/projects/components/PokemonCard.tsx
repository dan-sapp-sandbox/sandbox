import Link from "next/link";
import { ButtonRow, iBtn } from "./components";

const PokemonBtns: iBtn[] = [
  {
    text: "App Code",
    url:
      "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/pokemon",
  },
  {
    text: "Server Code",
    url: "https://github.com/dan-sapp-sandbox/node_server",
  },
];

export default function PokemonCard() {
  return (
    <div className="col-span-12 rounded bg-slate-300 my-8 p-4 z-10 relative">
      <div className="grid-cols-12 grid justify-between">
        <div className="col-span-12 md:col-span-7">
          <div className="font-bold text-xl md:text-4xl mb-2">
            Pokemon Team Builder
          </div>
          <div className="text-md md:text-xl mb-6 italic">
            Build the best team or see how your favorites compare!
          </div>
          <div className="grid-cols-12 hidden md:grid gap-2 mt-36">
            <ButtonRow btns={PokemonBtns} />
          </div>
        </div>
        <Link
          className="flex col-span-12 md:col-span-5 justify-self-center md:justify-self-end"
          href="/projects/pokemon"
        >
          {/* eslint-disable-next-line */}
          <img
            alt="pokemon-screen-shot"
            className="max-h-80 my-2 border-black border-4 rounded-md hover:border-blue-300"
            src="/static/images/pokemon-screen-shot.png"
          />
        </Link>
      </div>
      <div className="grid-cols-12 grid md:hidden gap-2">
        <ButtonRow btns={PokemonBtns} />
      </div>
    </div>
  );
}
