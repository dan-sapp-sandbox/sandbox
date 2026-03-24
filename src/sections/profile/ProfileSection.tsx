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
        <div className="w-full flex flex-row gap-4 md:gap-12">
          <img src="/me2.png" className="h-22 md:h-32 rounded-2xl" alt="profile pic" />
          <div className="h-full flex-1 flex flex-col justify-between overflow-hidden gap-4">
            <div className="flex flex-col gap-3 md:gap-8">
              <span className="text-xl md:text-4xl font-bold text-(--text)">Hi, I'm Dan Sapp.</span>
              <div className="flex flex-col md:gap-2 text-(--text)">
                <span className="text-base md:text-xl text-(--text)">
                  I'm a Software Engineer with 10 years of experience building web applications and data visualization
                  systems.
                </span>
                <span className="text-base md:text-xl text-(--text)">My work focuses on React and TypeScript.</span>
                <span className="text-base md:text-xl text-(--text)">
                  Below are interactive examples of tools I've built for clients.
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
