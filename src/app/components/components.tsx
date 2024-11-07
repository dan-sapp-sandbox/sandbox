import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface iStyledButton {
  children: ReactNode;
  href: string;
}
export const StyledButton = ({ children, href }: iStyledButton): ReactNode => (
  <Button
    asChild
    className="w-full align-bottom sm:w-auto col-span-2 bg-slate-200 border-black-500 border-2 hover:bg-slate-300"
  >
    <Link href={href} target="_blank">
      {children}
    </Link>
  </Button>
);
interface iButtonBar {
  projectLink: string;
  serverLink: string;
  appLink: string;
}
interface iStyledCard extends iButtonBar {
  children: ReactNode;
  title: string;
  description: string;
  screenshot?: string;
}
export const StyledCard = (
  {
    children,
    title,
    description,
    screenshot,
    projectLink,
    serverLink,
    appLink,
  }: iStyledCard,
): ReactNode => (
  <Card className="grid grid-flow-row grid-cols-12 col-span-12 rounded-lg justify-center my-2 bg-slate-500 border-2 border-teal-500">
    <div className="col-span-12 md:col-span-10 justify-start align-top">
      <CardHeader className="col-span-12 justify-start align-top p-4 pb-0">
        <CardTitle>
          <span className="text-zinc-200">{title}</span>
        </CardTitle>
        <CardDescription className=" text-zinc-200 text-xl italic">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="col-span-12 grid-cols-12 grid grid-flow-row px-4 py-2">
        <div className="col-span-8 md:col-span-12 mr-2">
          {children}
        </div>
        <div className="col-span-4 md:hidden">
          {/* eslint-disable-next-line */}
          <img
            className="rounded border-2 border-zinc-200"
            alt="screen-shot"
            src={screenshot}
          />
        </div>
        <ButtonBar
          projectLink={projectLink}
          serverLink={serverLink}
          appLink={appLink}
        />
      </CardContent>
    </div>
    <div className="col-span-0 md:col-span-2 m-2 hidden md:block">
      {/* eslint-disable-next-line */}
      <img
        className="rounded border-2 border-zinc-200"
        alt="screen-shot"
        src={screenshot}
      />
    </div>
  </Card>
);

const ButtonBar = (
  { appLink, serverLink, projectLink }: iButtonBar,
): JSX.Element => {
  return (
    <div className="my-4 col-span-12 flex sm:justify-start items-start gap-2 align-end justify-center grid-flow-row flex-wrap grid-cols-4 sm:grid-cols-6">
      <StyledButton href={projectLink}>
        <p className="text-black font-bold text-lg">Check it out!</p>
      </StyledButton>
      <StyledButton
        href={serverLink}
      >
        {/* eslint-disable-next-line */}
        <img
          alt="github-icon"
          src={"/static/images/github-mark.png"}
          height={25}
          width={25}
        />
        <p className="text-black font-bold text-lg">Server Code</p>
      </StyledButton>
      <StyledButton
        href={appLink}
      >
        {/* eslint-disable-next-line */}
        <img
          alt="github-icon"
          src={"/static/images/github-mark.png"}
          height={25}
          width={25}
        />
        <p className="text-black font-bold text-lg">App Code</p>
      </StyledButton>
    </div>
  );
};
