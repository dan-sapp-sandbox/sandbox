import Link from "next/link";

interface iBtn {
  text: string;
  url: string;
}

export interface iCard {
  btns: iBtn[];
  title: string;
  description: string;
  screenshot: {
    imageUrl: string;
    linkUrl: string;
  };
}

export const StyledCard = (
  { btns, title, description, screenshot }: iCard,
): JSX.Element => {
  return (
    <div className="col-span-12 rounded bg-slate-300 my-8 p-6 z-10 relative">
      <div className="grid-cols-12 grid justify-between">
        <div className="col-span-12 md:col-span-7 grid grid-cols-12">
          <div className="col-span-12 mb-2">
            <div className="font-bold text-xl sm:text-2xl lg:text-4xl">{title}</div>
            <div className="text-md md:text-xl italic mt-2">
              {description}
            </div>
          </div>
          <div className="col-span-12 grid-cols-12 hidden md:grid gap-4">
            <ButtonRow btns={btns} />
          </div>
        </div>
        <Link
          className="flex col-span-12 md:col-span-5 justify-self-center md:justify-self-end"
          href={screenshot.linkUrl}
        >
          {/* eslint-disable-next-line */}
          <img
            alt="pokemon-screen-shot"
            className="max-w-60 mb-4 md:mb-0 border-black border-4 rounded-md hover:border-blue-400"
            src={screenshot.imageUrl}
          />
        </Link>
      </div>
      <div className="grid-cols-12 grid md:hidden gap-2">
        <ButtonRow btns={btns} />
      </div>
    </div>
  );
};

const ButtonRow = ({ btns }: { btns: iBtn[] }): JSX.Element => {
  return (
    <>
      {btns.map((btn) => (
        <StyledButton key={btn.text} text={btn.text} url={btn.url} />
      ))}
    </>
  );
};

const StyledButton = ({ text, url }: iBtn): JSX.Element => {
  return (
    <button
      key={text}
      className="h-12 md:h-16 self-end col-span-12 md:col-span-5 bg-blue-300 hover:bg-blue-200 rounded"
    >
      <Link href={url} className="text-xl lg:text-2xl font-bold">
        {text}
      </Link>
    </button>
  );
};
