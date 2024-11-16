interface iLogo {
  title: string;
  imgUrl: string;
}
const itemData: iLogo[][] = [
  [
    {
      imgUrl: "/static/images/typescript.svg",
      title: "Typescript",
    },
    {
      imgUrl: "/static/images/javascript.svg",
      title: "Javascript",
    },
  ],
  [
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
  ],
  [
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
  ],
  [
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
  ],
  [
    {
      imgUrl: "/static/images/mongodb.svg",
      title: "MongoDB",
    },
    {
      imgUrl: "/static/images/git.svg",
      title: "Git",
    },
  ],
];
export default function LogoList(): JSX.Element {
  return (
    <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-8 justify-items-center">
      <div className="col-span-12 flex grid-cols-12 gap-8 justify-items-center justify-around">
        {itemData[0].map((item) => (
          <div key={item.title} className="col-span-6">
            <LogoBlock item={item} />
          </div>
        ))}
      </div>
      <div className="col-span-12 flex grid-cols-12 gap-8 justify-items-center justify-around">
        {itemData[1].map((item) => (
          <div key={item.title} className="col-span-4">
            <LogoBlock key={item.title} item={item} />
          </div>
        ))}
      </div>
      <div className="col-span-12 flex grid-cols-12 gap-8 justify-items-center justify-around">
        {itemData[2].map((item) => (
          <div key={item.title} className="col-span-3">
            <LogoBlock key={item.title} item={item} />
          </div>
        ))}
      </div>
      <div className="col-span-12 flex grid-cols-12 gap-8 justify-items-center justify-around">
        {itemData[3].map((item) => (
          <div key={item.title} className="col-span-3">
            <LogoBlock key={item.title} item={item} />
          </div>
        ))}
      </div>
      <div className="col-span-12 flex grid-cols-12 gap-8 justify-items-center justify-around">
        {itemData[4].map((item) => (
          <div key={item.title} className="col-span-4">
            <LogoBlock key={item.title} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

const LogoBlock = ({ item }: { item: iLogo }): JSX.Element => {
  return (
    <div className="rounded-2xl content-center text-center">
      {/* eslint-disable-next-line */}
      <img
        className="flex justify-self-center h-16 sm:h-20 md:h-24 lg:h-28 w-16 sm:w-20 md:w-24 lg:w-28"
        alt={item.title}
        src={item.imgUrl}
        loading="lazy"
      />
      <div className="text-zinc-200 mt-1 font-bold text-xs sm:text-xl">
        {item.title}
      </div>
    </div>
  );
};
