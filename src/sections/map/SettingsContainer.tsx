import { useState } from "react";
import type { JSX } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SettingsContainer = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="absolute top-0 left-0 z-2 p-3">
      <div className="flex flex-col bg-(--foreground)/90 p-3 rounded-xl">
        <div className="cursor-pointer flex flex-row gap-2 items-center" onClick={() => setExpanded(!expanded)}>
          Settings{" "}
          {expanded ? (
            <ChevronUp className="size-5 stroke-(--text)" />
          ) : (
            <ChevronDown className="size-5 stroke-(--text)" />
          )}
        </div>
        {expanded && <div className="flex flex-col gap-4 pt-2">{children}</div>}
      </div>
    </div>
  );
};

export default SettingsContainer;
