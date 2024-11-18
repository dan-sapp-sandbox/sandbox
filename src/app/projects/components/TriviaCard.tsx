import { iCard, StyledCard } from "./components";

const TriviaData: iCard = {
  title: "Horseshoes and Hand Grenades",
  description: "Build the best team or see how your favorites compare!",
  screenshot: {
    imageUrl: "/static/images/trivia-screen-shot.png",
    linkUrl: "/projects/trivia",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/trivia",
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
