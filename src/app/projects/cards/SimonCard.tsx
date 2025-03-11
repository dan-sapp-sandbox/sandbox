import { iCard, StyledCard } from "../components/Card";

const SimonData: iCard = {
  title: "Simon",
  description: "Simon says.",
  screenshot: {
    imageUrl: "/static/images/simon-screenshot.png",
    linkUrl: "/projects/simon",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/projects/pages/simon",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "/projects/simon",
    },
  ],
};

export default function SimonCard() {
  return <StyledCard {...SimonData} />;
}
