import Button from "@mui/material/Button";
import Link from "next/link";

const TriviaCard = () => {
  return (
    <div className="col-span-12 rounded bg-slate-200 my-8 p-4">
      <div className="grid-cols-12 grid justify-between">
        <div className="col-span-12 md:col-span-7 items-start">
          <div className="font-bold text-3xl mb-2">
            Horseshoes and Hand Grenades
          </div>
          <div className="text-xl italic mb-4">
            The game where being close enough counts!
          </div>
          <div className="text-lg">
            This is a trivia game where you try to be as close as you can to the
            right answer.
          </div>
        </div>
        <Link
          className="flex col-span-12 md:col-span-5 justify-self-center md:justify-self-end"
          href="/projects/trivia"
        >
          {/* eslint-disable-next-line */}
          <img
            alt="trivia-screen-shot"
            className="max-h-80"
            src="/static/images/trivia-screen-shot.png"
          />
        </Link>
      </div>
      <div>
        <Button size="large">
          <Link href="/projects/trivia">
            Check it out!
          </Link>
        </Button>
        <Button size="large">
          <Link href="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/trivia">
            App Code
          </Link>
        </Button>
        <Button size="large">
          <Link href="https://github.com/dan-sapp-sandbox/node_server">
            Server Code
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TriviaCard;
