import { useState, type ReactNode } from "react";
import Previews from "./previews";

const useComponentLibraryState = () => {
  const [selected, setSelected] = useState<string>("button");
  const componentMap: { [key: string]: ReactNode } = {
    button: <Previews.Button />,
    card: <Previews.Card />,
    select: <Previews.Select />,
    switch: <Previews.Switch />,
    "text editor": <Previews.TextEditor />,
  };
  const componentList = Object.keys(componentMap);

  const displayComponent = componentMap[selected];
  return {
    componentList,
    displayComponent,
    selected,
    setSelected,
  };
};

export default useComponentLibraryState;
