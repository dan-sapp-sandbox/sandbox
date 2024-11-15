const summary =
  `Software Engineer with 7+ years of experience in designing and maintaining 
  complex web applications. Expertise in React.js, creating scalable, 
  high-performance solutions with clean, reusable code. Strong in front-end architecture, 
  state management, API integration, and cross-functional team collaboration.`;

const ProfileCard = (): JSX.Element => (
  <div className="col-span-12 lg:col-span-6">
    <div className="text-zinc-300 font-bold text-4xl">
      Fullstack Software Engineer
    </div>
    <div className="text-zinc-300 my-2 italic text-3xl">
      Dan Sapp
    </div>
    <div className="text-zinc-300 text-2xl">
      {summary}
    </div>
  </div>
);

export default ProfileCard;
