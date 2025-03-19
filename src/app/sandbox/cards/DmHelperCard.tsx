import { iCard, StyledCard } from "../components/Card";

const DmHelperData: iCard = {
  title: "DM's Little Helper",
  description: "Helps you run your DnD games.",
  screenshot: {
    imageUrl: "/static/images/screenshots/dm-helper-screenshot.png",
    linkUrl: "/sandbox/dm-helper",
  },
  btns: [
    {
      text: "App Code",
      url:
        "https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/sandbox/(pages)/dm-helper",
      icon: "/static/images/logos/github.svg",
    },
    {
      text: "Try It!",
      url: "/sandbox/dm-helper",
    },
  ],
};

export default function DmHelperCard() {
  return <StyledCard {...DmHelperData} />;
}
