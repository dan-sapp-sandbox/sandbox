import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface iImageList {
  itemData: {
    title: string;
    imgUrl: string;
  }[];
}
function ImageList({ itemData }: iImageList): JSX.Element {
  return (
    <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2">
      {itemData.map((item) => (
        <div
          key={item.title}
          className="col-span-4 md:col-span-3 rounded-xl border-2 p-2 justify-center text-center"
        >
          <img
            className="flex justify-self-center h-20 w-auto"
            alt="python"
            src={item.imgUrl}
            loading="lazy"
          />
          <Typography
            variant="subtitle1"
            component="div"
            className="text-zinc-200 mt-1"
          >
            {item.title}
          </Typography>
        </div>
      ))}
    </div>
  );
}

const itemData = [
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

const summary =
  `Software Engineer with 7+ years of experience in designing and maintaining 
  complex web applications. Expertise in React.js, creating scalable, 
  high-performance solutions with clean, reusable code. Strong in front-end architecture, 
  state management, API integration, and cross-functional team collaboration.`;

const ProfileCard = (): JSX.Element => (
  <Card className="col-span-12 rounded justify-center mb-2 gap-2 bg-slate-800 border-none shadow-none">
    <CardContent className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6">
        <Typography
          className="text-zinc-200 font-bold"
          variant="h2"
          component="div"
        >
          Dan Sapp
        </Typography>
        <Typography
          className="text-zinc-200 my-2"
          variant="h5"
          component="div"
        >
          Fullstack Software Engineer
        </Typography>
        <Typography
          className="text-zinc-200"
          variant="body1"
          component="div"
        >
          {summary}
        </Typography>
      </div>
      <ImageList itemData={itemData} />
    </CardContent>
  </Card>
);

export default ProfileCard;
