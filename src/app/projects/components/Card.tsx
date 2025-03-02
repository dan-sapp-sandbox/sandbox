import Link from "next/link";

interface iBtn {
  text: string;
  url: string;
  icon?: string;
}

export interface iCard {
  btns: iBtn[];
  title: string;
  description: string;
  screenshot: {
    imageUrl: string;
    linkUrl?: string;
  };
}

export const StyledCard = (
  { btns, title, description, screenshot }: iCard,
): JSX.Element => {
  return (
    <div className="col-span-12 rounded bg-black my-2 p-6 z-10 relative">
      <div className="grid-cols-12 grid justify-between">
        <div className="col-span-12 md:col-span-8 grid grid-cols-12">
          <div className="col-span-12 mb-2">
            <div className="font-bold text-xl sm:text-2xl lg:text-4xl text-zinc-200">
              {title}
            </div>
            <div className="text-md md:text-xl italic mb-2 text-zinc-200">
              {description}
            </div>
          </div>
          <div className="col-span-12 grid-cols-12 hidden md:grid gap-4">
            <ButtonRow btns={btns} />
          </div>
        </div>
        {screenshot.linkUrl
          ? (
            <Link
              className="flex col-span-12 md:col-span-4 justify-self-center md:justify-self-end"
              href={screenshot.linkUrl}
            >
              <img
                alt="project-screen-shot"
                className="max-h-40 mb-4 md:mb-0 border-zinc-500 border-2 rounded-md hover:border-blue-400"
                src={screenshot.imageUrl}
              />
            </Link>
          )
          : (
            <div className="flex col-span-12 md:col-span-4 justify-self-center md:justify-self-end">
              <img
                alt="project-screen-shot"
                className="max-h-40 mb-4 md:mb-0 border-zinc-500 border-2 rounded-md"
                src={screenshot.imageUrl}
              />
            </div>
          )}
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
        <StyledButton
          key={btn.text}
          text={btn.text}
          url={btn.url}
          icon={btn.icon}
        />
      ))}
    </>
  );
};

const StyledButton = ({ text, url, icon }: iBtn): JSX.Element => {
  return (
    <button
      key={text}
      className="flex items-center justify-center h-10 md:h-12 self-end col-span-12 md:col-span-4 bg-blue-300 hover:bg-blue-200 rounded"
    >
      {icon && (
        <img
          alt="github"
          className="h-6 w-6 inline-block mr-2"
          src={icon}
        />
      )}
      <Link href={url} target="_blank" className="text-lg lg:text-xl font-bold">
        {text}
      </Link>
    </button>
  );
};
