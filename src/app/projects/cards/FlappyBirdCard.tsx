import { iCard, StyledCard } from "../components/Card";

const FlappyBirdData: iCard = {
  title: "Whirly Bird",
  description: "Flappy Bird using exalibur.js.",
  screenshot: {
    imageUrl: "/static/images/screenshots/flappy-bird-screenshot.png",
    linkUrl: "https://flappy-bird-five-delta.vercel.app/",
  },
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/flappy-bird",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Try It!",
      url: "https://flappy-bird-five-delta.vercel.app/",
    },
  ],
};

export default function FlappyBirdCard() {
  return <StyledCard {...FlappyBirdData} />;
}
