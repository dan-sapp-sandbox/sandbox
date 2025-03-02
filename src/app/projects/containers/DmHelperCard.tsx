import { iCard, StyledCard } from "../components/Card";

const DmHelperData: iCard = {
  title: "DM's Little Helper",
  description: "Helps you run your DnD games.",
  screenshot: {
    imageUrl: "/static/images/dm-helper-screenshot.png",
    linkUrl: "/projects/pages/dm-helper",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/projects/pages/dm-helper",
      icon: "/static/images/github.svg",
    },
    {
      text: "Try It!",
      url: "/projects/pages/dm-helper",
    },
  ],
};

export default function DmHelperCard() {
  return <StyledCard {...DmHelperData} />;
}
