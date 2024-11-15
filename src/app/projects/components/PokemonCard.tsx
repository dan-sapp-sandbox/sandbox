import Button from "@mui/material/Button";
import Link from "next/link";

const PokemonCard = () => {
  return (
    <div className="col-span-12 rounded bg-slate-300 my-8 p-4 z-10 relative">
      <div className="grid-cols-12 grid justify-between">
        <div className="col-span-12 md:col-span-7">
          <div className="font-bold text-4xl mb-2">
            Pokemon Team Builder
          </div>
          <div className="text-xl mb-6 italic">
            Build the best team or see how your favorites compare!
          </div>
        </div>
        <Link
          className="flex col-span-12 md:col-span-5 justify-self-center md:justify-self-end"
          href="/projects/pokemon"
        >
          {/* eslint-disable-next-line */}
          <img
            alt="pokemon-screen-shot"
            className="max-h-80 my-2"
            src="/static/images/pokemon-screen-shot.png"
          />
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-12 gap-2">
        <Button size="large" variant="outlined" className="col-span-3">
          <Link href="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/pokemon">
            App Code
          </Link>
        </Button>
        <Button size="large" variant="outlined" className="col-span-3">
          <Link href="https://github.com/dan-sapp-sandbox/node_server">
            Server Code
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
