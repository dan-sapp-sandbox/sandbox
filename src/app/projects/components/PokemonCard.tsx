import { iCard, StyledCard } from "./components";

const PokemonData: iCard = {
  title: "Pokemon Team Builder",
  description: "Build the best team or see how your favorites compare.",
  screenshot: {
    imageUrl: "/static/images/pokemon-screenshot.png",
    linkUrl: "/projects/pokemon",
  },
  logos: [
    "/static/images/typescript.svg",
    "/static/images/react.svg",
    "/static/images/next.svg",
    "/static/images/tailwind.svg",
    "/static/images/node.svg",
    "/static/images/postgresql.svg",
  ],
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
