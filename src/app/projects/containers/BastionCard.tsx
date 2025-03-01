import { iCard, StyledCard } from "../components/Card";

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
      icon: "/static/images/github.svg",
    },
    {
      text: "Server Code",
      url: "https://github.com/dan-sapp-sandbox/Bastion_server",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "https://lights-iota.vercel.app",
    },
  ],
};

export default function BastionCard() {
  return <StyledCard {...BastionData} />;
}
