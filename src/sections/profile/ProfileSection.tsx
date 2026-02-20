import profilePic from "/me.png";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useProfileState from "./useProfileState";

const ProfileSection = () => {
  const profileState = useProfileState();
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full md:max-w-400 min-h-85 md:min-h-100 flex flex-row justify-between p-3 md:p-8">
      <CardContent className="h-full w-full p-0">
        <div className="h-full w-full flex flex-row gap-4 md:gap-32">
          <img src={profilePic} className="h-30 md:h-80" alt="profile pic" />
          <div className="h-full flex flex-col justify-between overflow-hidden">
            <span className="text-lg md:text-2xl font-bold text-foreground">Hi, I'm Dan Sapp.</span>

            <div className="flex flex-col gap-2 text-foreground">
              <span className="text-sm md:text-lg text-secondary-foreground">
                I'm a software engineer with 10 years of industry experience.
              </span>
              <span className="text-sm md:text-lg text-secondary-foreground">
                I specialize in React and Typescript.
              </span>
              <span className="text-sm md:text-lg text-secondary-foreground">
                I like making cool stuff that feels good to use.
              </span>
              <span className="text-sm md:text-lg text-secondary-foreground">I have a degree in Physics and Math.</span>
            </div>
            <div className="flex flex-row items-center gap-16">
              <div onClick={profileState.handleOpenResume} className={linkStyles}>
                <span>Resume</span>
                <ExternalLink className="size-5" />
              </div>
              <div onClick={profileState.handleOpenLinkedInLink} className={linkStyles}>
                <span>LinkedIn</span>
                <ExternalLink className="size-5" />
              </div>
              <div onClick={profileState.handleOpenGithubLink} className={linkStyles}>
                <span>GitHub</span>
                <ExternalLink className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
