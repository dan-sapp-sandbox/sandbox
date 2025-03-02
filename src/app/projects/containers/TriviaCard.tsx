import { iCard, StyledCard } from "../components/Card";

const TriviaData: iCard = {
  title: "Quirk",
  description: "Test your knowledge.",
  screenshot: {
    imageUrl: "/static/images/trivia-screenshot.png",
    linkUrl: "https://quirk-29e37e06cec9.herokuapp.com/",
  },
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/trivia",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "https://quirk-29e37e06cec9.herokuapp.com/",
    },
  ],
};

export default function TriviaCard() {
  return <StyledCard {...TriviaData} />;
}
