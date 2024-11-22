import { iCard, StyledCard } from "./components";

const BastionData: iCard = {
  title: "Bastion",
  description: "Manage all of your home's devices in one place.",
  screenshot: {
    imageUrl: "/static/images/bastion-screenshot.png",
    linkUrl: "https://lights-iota.vercel.app",
  },
  logos: [
    "/static/images/flutter.svg",
    "/static/images/golang.svg",
    "/static/images/sqlite.svg",
  ],
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/Bastion",
    },
    {
      text: "Server Code",
      url: "https://github.com/dan-sapp-sandbox/Bastion_server",
    },
  ],
};

export default function BastionCard() {
  return <StyledCard {...BastionData} />;
}
