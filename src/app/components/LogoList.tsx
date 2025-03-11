interface iLogo {
  title: string;
  imgUrl: string;
}
const ReactStackLogos: iLogo[] = [
  {
    imgUrl: "/static/images/logos/typescript.svg",
    title: "Typescript",
  },
  {
    imgUrl: "/static/images/logos/react.svg",
    title: "React.js",
  },
  {
    imgUrl: "/static/images/logos/next.svg",
    title: "Next.js",
  },
  {
    imgUrl: "/static/images/logos/tailwind.svg",
    title: "Tailwind",
  },
];
const FullStackLogos: iLogo[] = [
  {
    imgUrl: "/static/images/logos/node.svg",
    title: "Node.js",
  },
  {
    imgUrl: "/static/images/logos/postgresql.svg",
    title: "PostgreSQL",
  },
  {
    imgUrl: "/static/images/logos/sqlite.svg",
    title: "SQLite",
  },
  {
    imgUrl: "/static/images/logos/mongodb.svg",
    title: "MongoDB",
  },
  {
    imgUrl: "/static/images/logos/git.svg",
    title: "Git",
  },
];
const PythonLogos: iLogo[] = [
  {
    imgUrl: "/static/images/logos/python.svg",
    title: "Python",
  },
  {
    imgUrl: "/static/images/logos/django.svg",
    title: "Django",
  },
  {
    imgUrl: "/static/images/logos/pandas.svg",
    title: "Pandas",
  },
  {
    imgUrl: "/static/images/logos/numpy.svg",
    title: "Numpy",
  },
  {
    imgUrl: "/static/images/logos/matplotlib.svg",
    title: "Matplotlib",
  },
];
export default function LogoList(): JSX.Element {
  return (
    <div className="col-span-12 lg:col-span-6 mt-0 lg:mt-24 mb-0">
      <div className="text-zinc-300 italic text-lg md:text-3xl">
        7 Years of E-commerce Experience
      </div>
      <div className="text-zinc-300 my-4 md:my-6 italic text-lg md:text-3xl">
        Specializing in Front End React Stack
      </div>
      <div className="col-span-12 my-4 md:my-6 lg:col-span-6 grid grid-cols-10 gap-4 md:gap-8 justify-center justify-items-center">
        {ReactStackLogos.map((item) => (
          <LogoBlock
            key={item.title}
            item={item}
          />
        ))}
      </div>
      <div className="text-zinc-300 my-4 md:my-6 italic text-lg md:text-3xl">
        Proficient in Full Stack Development
      </div>
      <div className="col-span-12 mt-2 lg:col-span-6 grid grid-cols-10 gap-4 md:gap-8 justify-center justify-items-center">
        {FullStackLogos.map((item) => (
          <LogoBlock
            key={item.title}
            item={item}
          />
        ))}
      </div>
      <div className="text-zinc-300 my-4 italic text-lg md:text-3xl">
        Learning Data Analysis
      </div>
      <div className="col-span-12 mt-2 lg:col-span-6 grid grid-cols-10 gap-4 md:gap-8 justify-center justify-items-center">
        {PythonLogos.map((item) => (
          <LogoBlock
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

const LogoBlock = ({ item }: { item: iLogo }): JSX.Element => {
  return (
    <div className="col-span-2 rounded-2xl content-center text-center justify-center flex flex-col max-w-fit">
      <img
        className="flex self-center w-6 h-6 lg:w-10 lg:h-10"
        alt={item.title}
        src={item.imgUrl}
        loading="lazy"
      />
      <div className="text-zinc-200 mt-1 text-xs sm:text-lg">
        {item.title}
      </div>
    </div>
  );
};
