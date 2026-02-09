import profilePic from "/me.png";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/Card";
import { useProfileState } from "./useProfileState";

const ProfileSection = () => {
  const profileState = useProfileState();
  return (
    <Card>
      <div className="flex flex-row gap-32 w-full p-6">
        <img src={profilePic} className="h-80" alt="profile pic" />
        <div className="h-full flex flex-col justify-between">
          <span className="text-2xl font-bold text-[var(--foreground)]">Hi, I'm Dan Sapp.</span>

          <span className="text-2xl text-[var(--secondary-foreground)]">
            Please enjoy this collection of features that I have made for clients in the past.
          </span>

          <div className="flex flex-col gap-2 text-[var(--foreground)]">
            <span>I'm a software engineer with 10 years of industry experience.</span>
            <span>I like making cool stuff that feels good to use.</span>
            <span>I have degrees in Physics/Math and Biology/Business.</span>
          </div>
          <div className="flex flex-row items-center gap-16">
            <div
              onClick={profileState.handleOpenResume}
              className="flex flex-row items-center gap-2 cursor-pointer 
             text-[var(--link)] hover:text-[var(--link-hover)] transition-colors duration-200"
            >
              <span>Resume</span>
              <ExternalLink className="size-5" />
            </div>
            <div
              onClick={profileState.handleOpenLinkedInLink}
              className="flex flex-row items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-300"
            >
              <span>LinkedIn</span>
              <ExternalLink className="size-5" />
            </div>
            <div
              onClick={profileState.handleOpenGithubLink}
              className="flex flex-row items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-300"
            >
              <span>GitHub</span>
              <ExternalLink className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSection;
