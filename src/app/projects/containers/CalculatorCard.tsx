import { iCard, StyledCard } from "../components/Card";

const CalculatorData: iCard = {
  title: "Calculator",
  description: "It's a calculator. Supports chained operations.",
  screenshot: {
    imageUrl: "/static/images/calculator-screenshot.png",
    linkUrl: "/projects/pages/calculator",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/projects/pages/calculator",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "/projects/pages/calculator",
    },
  ],
};

export default function CalculatorCard() {
  return <StyledCard {...CalculatorData} />;
}
