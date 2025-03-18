import { iCard, StyledCard } from "../components/Card";

const DashboardData: iCard = {
  title: "Dashboard",
  description: "Sandbox for graphs and analytics.",
  screenshot: {
    imageUrl: "/static/images/screenshots/dashboard-screenshot.png",
    linkUrl: "https://dashboard-zeta-two.vercel.app/",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/dashboard",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Try It!",
      url: "https://dashboard-zeta-two.vercel.app/",
    },
  ],
};

export default function DashboardCard() {
  return <StyledCard {...DashboardData} />;
}
