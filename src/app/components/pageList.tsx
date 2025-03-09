import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import ArticleIcon from "@mui/icons-material/Article";

const pageList = [
  {
    title: "Home",
    url: "/",
    image: (
      <HomeIcon
        sx={{ height: "2.5rem", width: "2.5rem" }}
        className="text-zinc-200"
      />
    ),
  },
  {
    title: "Resume",
    url:
      "https://docs.google.com/document/d/e/2PACX-1vTxM5BOxqBemhI7wWHlvLhdaQ13Qbuw0GONkrww9KVQ3HAsuBHEwrHJuipAKfF5Tg/pub",
    image: (
      <ArticleIcon
        sx={{ height: "2.5rem", width: "2.5rem" }}
        className="text-zinc-200"
      />
    ),
  },
  {
    title: "Projects",
    url: "/projects",
    image: (
      <ConstructionIcon
        sx={{ height: "2.5rem", width: "2.5rem" }}
        className="text-zinc-200"
      />
    ),
  },
  {
    title: "Github",
    url: "https://github.com/dan-sapp-sandbox",
    image: (
      <img
        alt="github"
        className="h-10 w-10"
        src="/static/images/github.svg"
      />
    ),
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/dan-sapp-744145b6/",
    image: (
      <img
        alt="linkedin"
        className="h-10 w-10"
        src="/static/images/linkedin.svg"
      />
    ),
  },
];

export default pageList;
