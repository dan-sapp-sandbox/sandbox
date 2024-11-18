import Link from "next/link";

export interface iBtn {
  text: string;
  url: string;
}

export const ButtonRow = ({ btns }: { btns: iBtn[] }): JSX.Element => {
  return (
    <>
      {btns.map((btn) => <StyledButton text={btn.text} url={btn.url} />)}
    </>
  );
};

const StyledButton = (
  { text, url }: { text: string; url: string },
): JSX.Element => {
  return (
    <button key={text} className="col-span-12 md:col-span-5 bg-blue-300 hover:bg-blue-200 px-4 py-4 rounded">
      <Link href={url} className="text-xl lg:text-2xl font-bold">
        {text}
      </Link>
    </button>
  );
};
