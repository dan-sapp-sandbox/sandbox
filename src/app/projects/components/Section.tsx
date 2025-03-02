interface SectionProps {
  children: JSX.Element | JSX.Element[];
  leftIcon: string;
  rightIcon: string;
  title: string;
}

const Section = (
  { children, leftIcon, rightIcon, title }: SectionProps,
): JSX.Element => {
  return (
    <div className="bg-slate-500 p-2 mb-2 rounded">
      <div className=" flex items-center px-3">
        <img
          alt="left-logo"
          className="h-8 inline self-center"
          src={leftIcon}
        />
        <span className="text-zinc-200 text-2xl md:text-4xl self-center flex-1 text-center">
          {title}
        </span>
        <img
          alt="right-logo"
          className="h-8 inline self-center"
          src={rightIcon}
        />
      </div>
      {children}
    </div>
  );
};

export default Section;
