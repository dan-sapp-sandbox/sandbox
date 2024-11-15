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
    imgUrl: "/static/images/tailwind.png",
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
      {itemData.map((item) => (
        <div
          key={item.title}
          className="col-span-4 lg:col-span-3 rounded-xl border-2 p-2 justify-center text-center"
        >
          {/* eslint-disable-next-line */}
          <img
            className="flex justify-self-center h-10 sm:h-20 w-auto"
            alt="python"
            src={item.imgUrl}
            loading="lazy"
          />
          <div className="text-zinc-200 mt-1">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
