import { StyledButton } from "./components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const summary =
  `Software Engineer with 7+ years of experience in designing and maintaining 
  complex web applications. Expertise in React.js, creating scalable, 
  high-performance solutions with clean, reusable code. Strong in front-end architecture, 
  state management, API integration, and cross-functional team collaboration.`;

const ProfileCard = (): JSX.Element => (
  <Card className="col-span-12 rounded-lg justify-center items-center mb-2 gap-2 bg-slate-500 border-2 border-teal-500">
    <CardHeader className="gap-2 grid grid-flow-row grid-cols-12">
      <CardTitle className="col-span-12 grid grid-flow-row grid-cols-12 items-center">
        <span className="col-span-8 text-zinc-200 text-3xl">About Dan Sapp</span>
        <div className="col-span-4 rounded-full flex justify-end">
          {/* eslint-disable-next-line */}
          <img
            className="rounded-full w-12"
            alt="me"
            src={"/static/images/me.png"}
          />
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="gap-2 grid-cols-12 grid grid-flow-row">
      <div className="col-span-12 xl:col-span-8">
        <p className="text-zinc-200 lg:text-xl">{summary}</p>
      </div>
      <div className="col-span-12 xl:col-span-4 flex items-end justify-end gap-4 mt-2">
        <StyledButton
          href={`https://github.com/dan-sapp-sandbox`}
        >
          {/* eslint-disable-next-line */}
          <img
            alt="github-logo"
            src={"/static/images/github-mark.png"}
            height={20}
            width={20}
          />
          {/* eslint-disable-next-line */}
          <img
            alt="github-icon"
            src={"/static/images/GitHub_Logo.png"}
            height={20}
            width={70}
          />
        </StyledButton>
        <StyledButton
          href={`https://www.linkedin.com/in/dan-sapp-744145B6/`}
        >
          {/* eslint-disable-next-line */}
          <img
            alt="linkedIn"
            src={"/static/images/linkedin.png"}
            height={20}
            width={20}
          />
          <p className="text-black font-bold text-lg">LinkedIn</p>
        </StyledButton>
      </div>
    </CardContent>
  </Card>
);

export default ProfileCard;
