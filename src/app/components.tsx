import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Me from "../../public/static/images/me.png";

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

interface iStyledCard {
  children: ReactNode;
  title?: string;
  description?: string;
}
export const StyledCard = (
  { children, title, description }: iStyledCard,
): ReactNode => (
  <Card className="col-span-12 rounded-lg items-center align-center justify-center items-center my-2 gap-2 bg-slate-500 border-2 border-teal-500">
    {(title || description) &&
      (
        <CardHeader className="gap-3 grid grid-flow-row grid-cols-12">
          {title &&
            (
              <CardTitle className="col-span-12">
                <span className="text-zinc-200">{title}</span>
              </CardTitle>
            )}
          {description && (
            <CardDescription className="col-span-12 text-zinc-200 lg:text-xl italic">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}
    <CardContent className="gap-2 grid-cols-12 grid grid-flow-row">
      {children}
    </CardContent>
  </Card>
);
const summary =
  `Experienced Software Engineer with 7+ years of experience in designing, building, 
  and maintaining complex web applications. Expertise in React.js and modern JavaScript frameworks, 
  proficient in building scalable, high-performance applications with clean and reusable code. 
  Strong background in front-end architecture, API integrations, state management, 
  and collaboration with cross-functional teams.`;

export const ProfileCard = (): ReactNode => (
  <Card className="col-span-12 rounded-lg justify-center items-center mb-2 gap-2 bg-slate-500 border-2 border-teal-500">
    <CardHeader className="gap-2 grid grid-flow-row grid-cols-12">
      <CardTitle className="col-span-12 grid grid-flow-row grid-cols-12">
        <span className="col-span-8 text-zinc-200">About Dan Sapp</span>
        <div className="col-span-4 rounded-full flex justify-end">
          <Image className="rounded-full" alt="me" src={Me} height={60} />
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="gap-2 grid-cols-12 grid grid-flow-row">
      <div className="col-span-12 xl:col-span-8">
        <p className="text-zinc-200 lg:text-xl">{summary}</p>
      </div>
      <div className="col-span-12 xl:col-span-4 flex items-end justify-end gap-4 mt-2">
        <StyledButton
          href={`https://github.com/dan-sapp-sandbox/sandbox`}
        >
          <Image
            alt="github-logo"
            src={"/static/images/github-mark.png"}
            height={20}
            width={20}
          />
          <Image
            alt="github-icon"
            src={"/static/images/GitHub_Logo.png"}
            height={20}
            width={70}
          />
        </StyledButton>
        <StyledButton
          href={`https://www.linkedin.com/in/dan-sapp-744145B6/`}
        >
          <Image
            alt="linkedIn"
            src={"/static/images/linkedin.png"}
            height={20}
            width={20}
          />
          <span className="text-black font-bold text-lg">LinkedIn</span>
        </StyledButton>
      </div>
    </CardContent>
  </Card>
);
