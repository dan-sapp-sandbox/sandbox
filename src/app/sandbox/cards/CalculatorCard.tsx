import { iCard, StyledCard } from "../components/Card";

const CalculatorData: iCard = {
  title: "Calculator",
  description: "It's a calculator. Supports chained operations.",
  screenshot: {
    imageUrl: "/static/images/screenshots/calculator-screenshot.png",
    linkUrl: "/sandbox/calculator",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/sandbox/(pages)/calculator",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Try It!",
      url: "/sandbox/calculator",
    },
  ],
};

export default function CalculatorCard() {
  return <StyledCard {...CalculatorData} />;
}
