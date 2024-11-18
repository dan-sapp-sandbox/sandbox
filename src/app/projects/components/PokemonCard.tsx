import { iCard, StyledCard } from "./components";

const PokemonData: iCard = {
  title: "Pokemon Team Builder",
  description: "Build the best team or see how your favorites compare!",
  screenshot: {
    imageUrl: "/static/images/pokemon-screen-shot.png",
    linkUrl: "/projects/pokemon",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/pokemon",
    },
    {
      text: "Server Code",
      url: "https://github.com/dan-sapp-sandbox/node_server",
    },
  ],
};

export default function PokemonCard() {
  return <StyledCard {...PokemonData} />;
}
