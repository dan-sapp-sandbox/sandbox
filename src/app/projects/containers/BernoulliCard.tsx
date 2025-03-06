import { iCard, StyledCard } from "../components/Card";

const BernoulliData: iCard = {
  title: "Bernoulli",
  description: "Make your own sick beats with this drum machine app.",
  screenshot: {
    imageUrl: "/static/images/bernoulli-screenshot.png",
    linkUrl: "https://bernoulli-app-31816726101f.herokuapp.com/",
  },
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/bernoulli",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "https://bernoulli-app-31816726101f.herokuapp.com/",
    },
  ],
};

export default function BernoulliCard() {
  return <StyledCard {...BernoulliData} />;
}
