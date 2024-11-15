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
    imgUrl: "/static/images/javascript.svg",
    title: "Javascript",
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
    imgUrl: "/static/images/html.svg",
    title: "HTML",
  },
  {
    imgUrl: "/static/images/css3.svg",
    title: "CSS",
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
    imgUrl: "/static/images/golang.svg",
    title: "Go",
  },
  {
    imgUrl: "/static/images/postgresql.svg",
    title: "PostgreSQL",
  },
  {
    imgUrl: "/static/images/mongodb.svg",
    title: "MongoDB",
  },
];
export default function LogoList(): JSX.Element {
  return (
    <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-6 justify-items-center">
      {itemData.map((item, index) => (
        <div
          key={item.title}
          className={`${index < 2 || index > 10 ? "col-span-6" : "col-span-4"}`}
        >
          <div className="rounded-2xl border-2 border-zinc-500 content-center text-center h-20 sm:h-40 w-20 sm:w-40">
            {/* eslint-disable-next-line */}
            <img
              className="flex justify-self-center h-10 sm:h-28 w-10 sm:w-28"
              alt={item.title}
              src={item.imgUrl}
              loading="lazy"
            />
            <div className="text-zinc-200 mt-1 font-bold text-sm md:text-xl">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
