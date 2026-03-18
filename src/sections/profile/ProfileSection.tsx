import { cn } from "@/lib/utils";

const ProfileSection = () => {
  return (
    <div
      className={cn(
        "w-full px-2 py-12 md:py-24 lg:py-36 flex flex-row justify-center items-center",
        "bg-linear-to-b from-(--profile-bg-1) via-(--profile-bg-2) to-(--profile-bg-3)",
      )}
    >
      <div className="max-w-420">
        <div className="w-full flex flex-row gap-12">
          <img src="/me.png" className="h-16 md:h-28 rounded-[120px]" alt="profile pic" />
          <div className="h-full flex-1 flex flex-col justify-between overflow-hidden gap-4 rounded-2xl">
            <div className="flex flex-col gap-3 md:gap-8">
              <span className="text-xl md:text-4xl font-bold text-(--text)">Hi, I'm Dan Sapp.</span>
              <div className="flex flex-col md:gap-2 text-(--text)">
                <span className="text-base md:text-xl text-(--text)">
                  I'm a Software Engineer with 10 years of experience building web applications and data visualization
                  systems.
                </span>
                <span className="text-base md:text-xl text-(--text)">
                  My work focuses on React, TypeScript, and data visualization.
                </span>
                <span className="text-base md:text-xl text-(--text)">
                  Below are interactive examples of UI systems, and visualization tools I've built.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
