import Link from "next/link";

interface iBtn {
  text: string;
  url: string;
}

export interface iCard {
  btns: iBtn[];
  title: string;
  description: string;
  logos: string[];
  screenshot: {
    imageUrl: string;
    linkUrl: string;
  };
}

export const StyledCard = (
  { btns, title, description, screenshot, logos }: iCard,
): JSX.Element => {
  return (
    <div className="col-span-12 rounded bg-black my-8 p-6 z-10 relative">
      <div className="grid-cols-12 grid justify-between">
        <div className="col-span-12 md:col-span-7 grid grid-cols-12">
          <div className="col-span-12 mb-2">
            <div className="font-bold text-xl sm:text-2xl lg:text-4xl text-zinc-200">
              {title}
            </div>
            <div className="text-md md:text-xl italic mb-2 text-zinc-200">
              {description}
            </div>
            <div className="flex align-middle flex-wrap gap-3 my-2">
              {logos.map((logo) => (
                /* eslint-disable-next-line */
                <img
                  key={logo}
                  alt={logo}
                  className="h-6 inline"
                  src={logo}
                />
              ))}
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
            className="max-h-80 mb-4 md:mb-0 border-zinc-300 border-2 rounded-md hover:border-blue-400"
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
      className="flex items-center justify-center h-10 md:h-12 self-end col-span-12 md:col-span-5 bg-blue-300 hover:bg-blue-200 rounded"
    >
      {/* eslint-disable-next-line */}
      <img
        alt="github"
        className="h-6 w-6 inline-block mr-2"
        src="/static/images/github.svg"
      />
      <Link href={url} className="text-lg lg:text-xl font-bold">
        {text}
      </Link>
    </button>
  );
};
