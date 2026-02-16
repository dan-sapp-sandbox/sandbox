import profilePic from "/me.png";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useProfileState from "./useProfileState";

const ProfileSection = () => {
  const profileState = useProfileState();
  const linkStyles =
    "flex flex-row items-center gap-2 cursor-pointer text-(--link) hover:text-(--link-hover) transition-colors duration-200";
  return (
    <Card className="w-full max-w-400 min-h-100 flex flex-row justify-between p-8 border">
      <CardContent className="h-full w-full p-0">
        <div className="h-full flex flex-row gap-32 w-full">
          <img src={profilePic} className="h-80" alt="profile pic" />
          <div className="h-full flex flex-col justify-between">
            <span className="text-2xl font-bold text-foreground">Hi, I'm Dan Sapp.</span>

            <span className="text-xl text-secondary-foreground">
              Please enjoy this collection of features I have made for previous clients.
            </span>

            <div className="flex flex-col gap-2 text-foreground">
              <span>I'm a software engineer with 10 years of industry experience.</span>
              <span>I specialize in React and Typescript.</span>
              <span>I like making cool stuff that feels good to use.</span>
              <span>I have degrees in Physics/Math and Biology/Business.</span>
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
