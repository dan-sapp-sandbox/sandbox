import Image from "next/image";
import GitHubIcon from "../../public/icons/github-mark.png";
import { ProfileCard, StyledButton, StyledCard } from "./components";

export const revalidate = 0;

export default function Portfolio() {
  // preview images for projects
  return (
    <div className="max-w-6xl mx-auto mt-2 min-w-80">
      <main className="gap-2 grid grid-flow-row grid-cols-12 mx-2">
        <ProfileCard />
        <div className="ml-2 col-span-12 font-bold text-zinc-200 text-2xl">
          Projects
        </div>
        <StyledCard
          title="Pokemon Team Builder"
          description={"Build the best team or see how your favorites compare!"}
        >
          <div className="col-span-12 xl:col-span-7">
            <p className="max-w-4xl text-zinc-200 lg:text-xl">
              This is an end-to-end proof-of-concept for the portfolio. It uses
              a postGres database to store the pokemon and an Express/Node Web
              Server to deliver them to a Next.js App which server-side renders
              the content.
            </p>
          </div>
          <div className="mt-2 col-span-12 xl:col-span-5 flex sm:justify-end items-end gap-2 align-end justify-center grid-flow-row flex-wrap grid-cols-4 sm:grid-cols-6">
            <StyledButton href={`/pokemon`}>
              <p className="text-black font-bold">Check it out!</p>
            </StyledButton>
            <StyledButton
              href={`https://github.com/dan-sapp-sandbox/node_server`}
            >
              <Image alt="github-icon" src={GitHubIcon} height={20} />
              <p className="text-black font-bold">Server Code</p>
            </StyledButton>
            <StyledButton
              href={`https://github.com/dan-sapp-sandbox/sandbox/tree/main/src/app/pokemon`}
            >
              <Image alt="github-icon" src={GitHubIcon} height={20} />
              <p className="text-black font-bold">App Code</p>
            </StyledButton>
          </div>
        </StyledCard>
      </main>
    </div>
  );
}
