import { iCard, StyledCard } from "../components/Card";

const TowerSurvivorData: iCard = {
  title: "Tower Survivor",
  description: "Survivor-like game written in typescript using exalibur.js.",
  screenshot: {
    imageUrl: "/static/images/tower-survivor-screenshot.png",
    linkUrl: "https://tower-survivor.vercel.app/",
  },
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/tower-survivor",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "https://tower-survivor.vercel.app/",
    },
  ],
};

export default function TowerSurvivorCard() {
  return <StyledCard {...TowerSurvivorData} />;
}
