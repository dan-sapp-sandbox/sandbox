import { iCard, StyledCard } from "../components/Card";

const SimonData: iCard = {
  title: "Simon",
  description: "Simon says.",
  screenshot: {
    imageUrl: "/static/images/screenshots/simon-screenshot.png",
    linkUrl: "/sandbox/simon",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/sandbox/(pages)/simon",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Try It!",
      url: "/sandbox/simon",
    },
  ],
};

export default function SimonCard() {
  return <StyledCard {...SimonData} />;
}
