import Button from "@mui/material/Button";
import Link from "next/link";

const TriviaCard = () => {
  return (
    <div className="col-span-12 rounded bg-slate-300 my-8 p-4 z-10 relative">
      <div className="grid-cols-12 grid justify-between">
        <div className="col-span-12 md:col-span-7 items-start">
          <div className="font-bold text-xl md:text-4xl mb-2">
            Horseshoes and Hand Grenades
          </div>
          <div className="text-md md:text-xl mb-6 italic">
            The game where being close enough counts!
          </div>
          <div className="col-span-12 grid-cols-12 hidden md:grid mt-36">
            <Button
              size="large"
              variant="outlined"
              className="mt-0 mx-3 col-span-6"
            >
              <Link href="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/trivia">
                App Code
              </Link>
            </Button>
            <Button size="large" variant="outlined" className="col-span-6">
              <Link href="https://github.com/dan-sapp-sandbox/node_server">
                Server Code
              </Link>
            </Button>
          </div>
        </div>
        <Link
          className="flex col-span-12 md:col-span-5 justify-self-center md:justify-self-end"
          href="/projects/trivia"
        >
          {/* eslint-disable-next-line */}
          <img
            alt="trivia-screen-shot"
            className="max-h-80 my-2 border-black border-2 rounded-md"
            src="/static/images/trivia-screen-shot.png"
          />
        </Link>
      </div>
      <div className="grid-cols-12 grid md:hidden gap-2">
        <Button
          size="large"
          variant="outlined"
          className="col-span-12"
        >
          <Link href="https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/trivia">
            App Code
          </Link>
        </Button>
        <Button size="large" variant="outlined" className="col-span-12">
          <Link href="https://github.com/dan-sapp-sandbox/node_server">
            Server Code
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TriviaCard;
