import { iCard, StyledCard } from "../components/Card";

const FlappyBirdData: iCard = {
  title: "Flappy Bird",
  description: "Flappy Bird written in typescript.",
  screenshot: {
    imageUrl: "/static/images/flappy-bird-screenshot.png",
    linkUrl: "/projects/pages/flappy-bird",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/projects/pages/flappy-bird",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "/projects/pages/flappy-bird",
    },
  ],
};

export default function FlappyBirdCard() {
  return <StyledCard {...FlappyBirdData} />;
}
