const Viewer = () => {
  return (
    <div
      className="h-150 w-225 flex flex-row justify-center items-center bg-(--background) text-(--foreground)
        dark:bg-(--background) dark:text-(--foreground)"
    >
      <div className="h-full w-50 flex flex-col gap-2 border-r">
        <span className="text-lg font-bold">Components</span>
        <span className="rounded-sm border border-zinc-200 p-2">Button</span>
        <span className="rounded-sm border border-zinc-200 p-2">Card</span>
        <span className="rounded-sm border border-zinc-200 p-2">Select</span>
      </div>
      <div className="h-full flex-1">Viewport</div>
    </div>
  );
};

export default Viewer;
