import { iCard, StyledCard } from "../components/Card";

const TowerSurvivorData: iCard = {
  title: "Tower Survivor",
  description: "Survivor-like game using exalibur.js.",
  screenshot: {
    imageUrl: "/static/images/screenshots/tower-survivor-screenshot.png",
    linkUrl: "https://tower-survivor.vercel.app/",
  },
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/tower-survivor",
      icon: "/static/images/logos/github.svg",
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
