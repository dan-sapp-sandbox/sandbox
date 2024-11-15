interface iLogo {
  title: string;
  imgUrl: string;
}
const itemData: iLogo[] = [
  {
    imgUrl: "/static/images/typescript.png",
    title: "Typescript",
  },
  {
    imgUrl: "/static/images/react.png",
    title: "React",
  },
  {
    imgUrl: "/static/images/next-js.svg",
    title: "Next.js",
  },
  {
    imgUrl: "/static/images/nodejs.png",
    title: "Node.js",
  },
  {
    imgUrl: "/static/images/tailwind.svg",
    title: "Tailwind",
  },
  {
    imgUrl: "/static/images/python.png",
    title: "Python",
  },
];
export default function LogoList(): JSX.Element {
  return (
    <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2">
      {itemData.map((item, index) => (
        <div
          key={item.title}
          className={`col-span-${index > 2 && index < 6 ? '3' : '4'}`}
        >
          <div className="rounded-xl border-2 border-zinc-500 py-2 px-4 justify-center text-center w-fit">
            {/* eslint-disable-next-line */}
            <img
              className="flex justify-self-center h-20 w-20"
              alt="python"
              src={item.imgUrl}
              loading="lazy"
            />
            <div className="text-zinc-200 mt-1 font-bold text-xl">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
