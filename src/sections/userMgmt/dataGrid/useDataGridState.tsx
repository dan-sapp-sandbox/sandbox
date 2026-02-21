import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import mockUsers from "./mockUsers";
import type { Table } from "@tanstack/react-table";
import { createColumnHelper, useReactTable, getCoreRowModel } from "@tanstack/react-table";

const roleOptions = [
  { id: "User", name: "User" },
  { id: "Moderator", name: "Moderator" },
  { id: "Admin", name: "Admin" },
];

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface IDataGridState {
  roleOptions: { id: string; name: string }[];
  data: IUser[];
  setData: Dispatch<SetStateAction<IUser[]>>;
  tableState: Table<IUser>;
  selected?: IUser;
  setSelected: Dispatch<SetStateAction<IUser | undefined>>;
  tempUser?: IUser;
  setTempUser: Dispatch<SetStateAction<IUser | undefined>>;
  handleSave: () => void;
  handleDelete: () => void;
}

const useDataGridState = () => {
  const [data, setData] = useState<IUser[]>(mockUsers);
  const [selected, setSelected] = useState<IUser>();
  const [tempUser, setTempUser] = useState<IUser>();
  const columnHelper = createColumnHelper<IUser>();
  const columns = [
    columnHelper.accessor("name", { header: "Name" }),
    columnHelper.accessor("email", { header: "Email" }),
    columnHelper.accessor("role", { header: "Role" }),
  ];
  const tableState = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSelect = (index: number) => {
    setSelected(data[index]);
    setTempUser(data[index]);
  };
  const handleSave = () => {
    const updatedData = data.map((user) => {
      if (user.id === tempUser?.id) {
        return tempUser;
      }
      return user;
    });
    setData(updatedData);
  };
  const handleDelete = () => {
    const updatedData = data.filter((user) => user.id !== tempUser?.id);
    setData(updatedData);
    setTempUser(undefined);
    setSelected(undefined);
  };
  return {
    roleOptions,
    data,
    setData,
    tableState,
    selected,
    setSelected,
    tempUser,
    setTempUser,
    handleSelect,
    handleSave,
    handleDelete,
  };
};

export default useDataGridState;
