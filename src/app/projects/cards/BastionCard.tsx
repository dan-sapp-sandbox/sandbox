import { iCard, StyledCard } from "../components/Card";

const BastionData: iCard = {
  title: "Bastion",
  description:
    "Manage all of your home's devices in one place. Web Sockets support concurrent users.",
  screenshot: {
    imageUrl: "/static/images/screenshots/bastion-screenshot.png",
    linkUrl: "https://lights-iota.vercel.app",
  },
  btns: [
    {
      text: "App Code",
      url: "https://github.com/dan-sapp-sandbox/Bastion",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Server Code",
      url: "https://github.com/dan-sapp-sandbox/Bastion_server",
      icon: "/static/images/logos/github.svg",
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
