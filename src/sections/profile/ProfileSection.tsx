import profilePic from "/me.png";
import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "../SectionWrapper";
import { useProfileState } from "./useProfileState";

const ProfileSection = () => {
  const profileState = useProfileState();
  return (
    <SectionWrapper>
      <div className="w-full flex flex-row gap-32">
        <img src={profilePic} className="h-80" alt="profile pic" />
        <div className="flex flex-col gap-8">
          <span className="text-2xl font-bold">Hi, I'm Dan Sapp.</span>
          <span className="text-2xl">
            Please enjoy this collection of features that I have made for clients in the past.
          </span>
          <div className="flex flex-col gap-4">
            <span>I'm a software engineer with 10 years of industry experience.</span>
            <span>I like making cool stuff that feels good to use.</span>
            <span>I have degrees in Physics/Math and Biology/Business.</span>
            <div className="flex flex-row items-center gap-16">
              <div
                onClick={profileState.handleOpenResume}
                className="flex flex-row items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-300"
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
      </div>
    </SectionWrapper>
  );
};

export default ProfileSection;
