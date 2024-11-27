import { iCard, StyledCard } from "./components";

const TriviaData: iCard = {
  title: "Horseshoes and Hand Grenades",
  description: "The game where being close enough counts.",
  screenshot: {
    imageUrl: "/static/images/trivia-screenshot.png",
    linkUrl: "https://quirk-29e37e06cec9.herokuapp.com/",
  },
  logos: [
    "/static/images/typescript.svg",
    "/static/images/react.svg",
    "/static/images/next.svg",
    "/static/images/tailwind.svg",
    "/static/images/node.svg",
    "/static/images/postgresql.svg",
    // "/static/images/python.svg",
    // "/static/images/pandas.svg",
    // "/static/images/numpy.svg",
    // "/static/images/matplotlib.svg",
  ],
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/trivia",
    },
    {
      text: "Server Code",
      url: "https://github.com/dan-sapp-sandbox/node_server",
    },
    // {
    //   text: "Quirk Code",
    //   url: "https://github.com/dan-sapp-sandbox/quirk",
    // },
  ],
};

export default function TriviaCard() {
  return <StyledCard {...TriviaData} />;
}
