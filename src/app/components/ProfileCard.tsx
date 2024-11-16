const ProfileCard = (): JSX.Element => (
  <div className="col-span-12 lg:col-span-6 mt-0 lg:mt-24 mb-8 grid grid-cols-12">
    <div className="col-span-9 lg:col-span-12">
      <div className="text-zinc-300 font-bold text-xl md:text-4xl">
        Software Engineer
      </div>
      <div className="text-zinc-300 mt-1 italic text-lg md:text-3xl">
        Dan Sapp
      </div>
      <div className="col-span-12 mt-8 hidden lg:flex">
        <img
          src="/static/images/me.png"
          className="h-60 w-60 flex justify-self-start rounded-lg"
        />
      </div>
    </div>
    <div className="col-span-3 lg:col-span-12 mt-0 lg:hidden">
      <img
        src="/static/images/me.png"
        className="h-16 sm:h-24 w-16 sm:w-24 flex justify-self-end rounded-full"
      />
    </div>
  </div>
);

export default ProfileCard;
