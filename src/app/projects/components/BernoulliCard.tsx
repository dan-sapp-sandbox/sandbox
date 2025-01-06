import { iCard, StyledCard } from "./components";

const BernoulliData: iCard = {
  title: "Bernoulli",
  description: "Drum machine and live audio processing.",
  screenshot: {
    imageUrl: "/static/images/bernoulli-screenshot.png",
    // linkUrl: "https://bernoulli-app-31816726101f.herokuapp.com/",
  },
  logos: [
    "/static/images/python.svg",
    "/static/images/django.svg",
    "/static/images/numpy.svg",
  ],
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/bernoulli",
    }
  ],
};

export default function BernoulliCard() {
  return <StyledCard {...BernoulliData} />;
}
