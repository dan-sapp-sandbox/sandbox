import { useState } from "react";
import type { JSX } from "react";
import Previews from "./previews";

const componentList = ["button", "card", "dialog", "form", "input", "label", "select", "separator", "switch", "table"];

const useComponentLibraryState = () => {
  const [selected, setSelected] = useState<string>("button");
  const componentMap: { [key: string]: JSX.Element } = {
    button: <Previews.Button />,
    card: <Previews.Card />,
    dialog: <Previews.Card />,
    form: <Previews.Card />,
    input: <Previews.Card />,
    select: <Previews.Card />,
    switch: <Previews.Switch />,
    table: <Previews.Card />,
  };

  const displayComponent = componentMap[selected];
  return {
    componentList,
    displayComponent,
    selected,
    setSelected,
  };
};

export default useComponentLibraryState;
