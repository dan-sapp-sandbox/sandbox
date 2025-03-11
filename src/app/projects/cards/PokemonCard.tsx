import { iCard, StyledCard } from "../components/Card";

const PokemonData: iCard = {
  title: "Pokemon Team Builder",
  description: "Build the best team or see how your favorites compare.",
  screenshot: {
    imageUrl: "/static/images/screenshots/pokemon-screenshot.png",
    linkUrl: "/projects/pokemon",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/projects/pages/pokemon",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Server Code",
      url: "https://github.com/dan-sapp-sandbox/node_server",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Try It!",
      url: "/projects/pokemon",
    },
  ],
};

export default function PokemonCard() {
  return <StyledCard {...PokemonData} />;
}
