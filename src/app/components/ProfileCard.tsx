const ProfileCard = (): JSX.Element => (
  <div className="col-span-12 lg:col-span-6 mt-0 lg:mt-24 mb-16 md:mb-8 grid grid-cols-12">
    <div className="col-span-9 lg:col-span-12 lg:ml-16">
      <div className="text-zinc-300 font-bold text-2xl sm:text-3xl md:text-4xl">
        Software Engineer
      </div>
      <div className="text-zinc-300 mt-1 italic text-xl sm:text-2xl md:text-3xl">
        Dan Sapp
      </div>
      <div className="col-span-12 mt-8 hidden lg:flex">
        {/* eslint-disable-next-line */}
        <img
          alt="self"
          src="/static/images/me.png"
          className="w-60 flex justify-self-start rounded-lg"
        />
      </div>
    </div>
    <div className="col-span-3 lg:col-span-12 mt-0 lg:hidden">
      {/* eslint-disable-next-line */}
      <img
        alt="self"
        src="/static/images/me.png"
        className="w-20 sm:w-32 flex justify-self-end rounded-lg overflow-hidden"
      />
    </div>
  </div>
);

export default ProfileCard;
