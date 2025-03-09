import { iCard, StyledCard } from "../components/Card";

const PlatformerData: iCard = {
  title: "Platformer",
  description: "Platforming game using exalibur.js.",
  screenshot: {
    imageUrl: "/static/images/platformer-screenshot.png",
    linkUrl: "https://platformer-omega.vercel.app/",
  },
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/platformer",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "https://platformer-omega.vercel.app/",
    },
  ],
};

export default function PlatformerCard() {
  return <StyledCard {...PlatformerData} />;
}
