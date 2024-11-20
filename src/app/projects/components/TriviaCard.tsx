import { iCard, StyledCard } from "./components";

const TriviaData: iCard = {
  title: "Horseshoes and Hand Grenades",
  description: "The game where being close enough counts!",
  screenshot: {
    imageUrl: "/static/images/trivia-screen-shot.png",
    linkUrl: "/projects/trivia",
  },
  logos: [
    "/static/images/typescript.svg",
    "/static/images/react.svg",
    "/static/images/next.svg",
    "/static/images/tailwind.svg",
    "/static/images/node.svg",
    "/static/images/python.svg",
  ],
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/projects/trivia",
    },
    {
      text: "Server Code",
      url: "https://github.com/dan-sapp-sandbox/node_server",
    },
  ],
};

export default function TriviaCard() {
  return <StyledCard {...TriviaData} />;
}
