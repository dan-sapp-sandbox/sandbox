import type { JSX } from "react";
import { Brush, DraftingCompass, LayersPlus, Settings, Stamp } from "lucide-react";

const ToolbarButton = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div
      className="flex flex-col gap-1 justify-center items-center cursor-pointer
          text-[var(--map-toolbar-icon)] hover:text-[var(--map-toolbar-icon-hover)]
          bg-[var(--map-toolbar-icon-bg)] hover:bg-[var(--map-toolbar-icon-bg-hover)]
          dark:text-[var(--map-toolbar-icon)] dark:hover:text-[var(--map-toolbar-icon-hover)]
          dark:bg-[var(--map-toolbar-icon-bg)] dark:hover:bg-[var(--map-toolbar-icon-bg-hover)]
          "
    >
      {children}
    </div>
  );
};

const Toolbar = () => {
  return (
    <div
      className="z-1 absolute left-0 top-0 bottom-0 w-14 
      bg-[var(--map-toolbar)] dark:bg-[var(--map-toolbar)]
      flex flex-col items-center gap-6 p-4"
    >
      <ToolbarButton>
        <LayersPlus />
        <span className="text-xs text-center">Layers</span>
      </ToolbarButton>
      <ToolbarButton>
        <Brush />
        <span className="text-xs text-center">Draw</span>
      </ToolbarButton>
      <ToolbarButton>
        <Stamp />
        <span className="text-xs text-center">Icons</span>
      </ToolbarButton>
      <ToolbarButton>
        <DraftingCompass />
        <span className="text-xs text-center">Widgets</span>
      </ToolbarButton>
      <ToolbarButton>
        <Settings />
        <span className="text-xs text-center">Settings</span>
      </ToolbarButton>
    </div>
  );
};

export default Toolbar;
