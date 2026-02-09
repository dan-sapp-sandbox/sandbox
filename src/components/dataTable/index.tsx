import type { JSX } from "react";
import data from "./mockUsers";

export interface IUser {
  id: string;
  name: string;
  teams: string;
  powers: string;
  firstAppearance: string;
  [key: string]: string;
}

const widthMap: { [key: string]: string } = {
  id: "col-span-2",
  name: "col-span-2",
  teams: "col-span-2",
  powers: "col-span-3",
  firstAppearance: "col-span-3",
};
const DataTable = () => {
  const headerLabels = Object.keys(data[0]);
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Header config={headerLabels} />
      {data.map((row) => (
        <Row row={row} config={headerLabels} />
      ))}
    </div>
  );
};

const Header = ({ config }: { config: string[] }) => {
  return (
    <div className="w-full grid grid-cols-12 capitalize">
      {config.map((name) => (
        <Cell name={name}>{name}</Cell>
      ))}
    </div>
  );
};
const Row = ({ row, config }: { row: IUser; config: string[] }) => {
  return (
    <div className="w-full grid grid-cols-12">
      {config.map((name) => (
        <Cell name={name}>{row[name]}</Cell>
      ))}
    </div>
  );
};
const Cell = ({ name, children }: { name: string; children: string | JSX.Element | JSX.Element[] }) => {
  return <div className={`border border-zinc-400 p-5 ${widthMap[name]}`}>{children}</div>;
};

export default DataTable;
