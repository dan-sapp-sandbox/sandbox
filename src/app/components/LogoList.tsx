interface iLogo {
  title: string;
  imgUrl: string;
}
const itemData: iLogo[] = [
  {
    imgUrl: "/static/images/typescript.svg",
    title: "Typescript",
  },
  {
    imgUrl: "/static/images/react.svg",
    title: "React",
  },
  {
    imgUrl: "/static/images/next-js.svg",
    title: "Next.js",
  },
  {
    imgUrl: "/static/images/nodejs.svg",
    title: "Node.js",
  },
  {
    imgUrl: "/static/images/tailwind.svg",
    title: "Tailwind",
  },
  {
    imgUrl: "/static/images/python.svg",
    title: "Python",
  },
  {
    imgUrl: "/static/images/javascript.svg",
    title: "Javascript",
  },
  {
    imgUrl: "/static/images/golang.svg",
    title: "Go",
  },
];
export default function LogoList(): JSX.Element {
  return (
    <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-6 justify-items-center">
      {itemData.map((item, index) => (
        <div
          key={item.title}
          className={`${index > 1 ? "col-span-4" : "col-span-6"}`}
        >
          <div className="rounded-2xl border-2 border-zinc-500 content-center text-center h-24 md:h-40 w-24 md:w-40">
            {/* eslint-disable-next-line */}
            <img
              className="flex justify-self-center h-14 md:h-28 w-14 md:w-28"
              alt={item.title}
              src={item.imgUrl}
              loading="lazy"
            />
            <div className="text-zinc-200 mt-1 font-bold text-md md:text-xl">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
