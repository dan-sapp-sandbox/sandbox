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
    {
      imgUrl: "/static/images/react.svg",
      title: "React",
    },
    {
      imgUrl: "/static/images/next.svg",
      title: "Next.js",
    },
    {
      imgUrl: "/static/images/node.svg",
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
      imgUrl: "/static/images/flutter.svg",
      title: "Flutter",
    },
    {
      imgUrl: "/static/images/golang.svg",
      title: "Go",
    },
    {
      imgUrl: "/static/images/python.svg",
      title: "Python",
    },
    // {
    //   imgUrl: "/static/images/pandas.svg",
    //   title: "Pandas",
    // },
    // {
    //   imgUrl: "/static/images/numpy.svg",
    //   title: "Numpy",
    // },
    // {
    //   imgUrl: "/static/images/matplotlib.svg",
    //   title: "Matplotlib",
    // },
    {
      imgUrl: "/static/images/postgresql.svg",
      title: "PostgreSQL",
    },
    {
      imgUrl: "/static/images/sqlite.svg",
      title: "SQLite",
    },
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
    <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-4 md:gap-8 justify-center justify-items-center">
      {itemData[0].map((item) => <LogoBlock key={item.title} item={item} />)}
    </div>
  );
}

const LogoBlock = ({ item }: { item: iLogo }): JSX.Element => {
  return (
    <div className="col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2 rounded-2xl content-center text-center justify-center flex flex-col max-w-fit">
      {/* eslint-disable-next-line */}
      <img
        className="flex self-center h-8 md:h-14"
        alt={item.title}
        src={item.imgUrl}
        loading="lazy"
      />
      <div className="text-zinc-200 mt-1 font-bold text-xs sm:text-md">
        {item.title}
      </div>
    </div>
  );
};
