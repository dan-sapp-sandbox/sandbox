import { iCard, StyledCard } from "./components";

const PokemonData: iCard = {
  title: "Bastion",
  description: "Manage all of your home's devices in one place!",
  screenshot: {
    imageUrl: "/static/images/pokemon-screen-shot.png",
    linkUrl: "https://lights-iota.vercel.app",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/Bastion",
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
