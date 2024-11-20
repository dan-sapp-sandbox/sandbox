import { iCard, StyledCard } from "./components";

const BastionData: iCard = {
  title: "Bastion",
  description: "Manage all of your home's devices in one place!",
  screenshot: {
    imageUrl: "/static/images/pokemon-screen-shot.png",
    linkUrl: "https://lights-iota.vercel.app",
  },
  logos: ["/static/images/flutter.svg"],
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

export default function BastionCard() {
  return <StyledCard {...BastionData} />;
}
