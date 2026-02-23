import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useProfileState from "./useProfileState";

const ProfileSection = () => {
  const profileState = useProfileState();
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full md:max-w-400 h-fit flex flex-row justify-between p-3 md:p-8">
      <CardContent className="h-full w-full p-0">
        <div className="h-full w-full flex flex-row gap-4 md:gap-24">
          <img src="/me.png" className="h-30 md:h-60" alt="profile pic" />
          <div className="h-full flex flex-col justify-between overflow-hidden gap-4">
            <div className="flex flex-col gap-2 md:gap-6">
              <span className="text-lg md:text-2xl font-bold text-(--text)">Hi, I'm Dan Sapp.</span>
              <span className="md:text-lg text-(--text)">Please enjoy this collection of demos (WIP).</span>
              <div className="flex flex-col md:gap-1 text-(--text)">
                <span className="text-sm md:text-lg text-(--text)">
                  I'm a software engineer with 10 years of industry experience.
                </span>
                <span className="text-sm md:text-lg text-(--text)">I specialize in React and Typescript.</span>
                <span className="text-sm md:text-lg text-(--text)">
                  I like making cool stuff that feels good to use.
                </span>
                <span className="text-sm md:text-lg text-(--text)">I have a degree in Physics and Math.</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-12">
              <div onClick={profileState.handleOpenResume} className={linkStyles}>
                <span className="text-xs md:text-sm">Resume</span>
                <ExternalLink className="size-3 md:size-5" />
              </div>
              <div onClick={profileState.handleOpenLinkedInLink} className={linkStyles}>
                <span className="text-xs md:text-sm">LinkedIn</span>
                <ExternalLink className="size-3 md:size-5" />
              </div>
              <div onClick={profileState.handleOpenGithubLink} className={linkStyles}>
                <span className="text-xs md:text-sm">GitHub</span>
                <ExternalLink className="size-3 md:size-5" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
