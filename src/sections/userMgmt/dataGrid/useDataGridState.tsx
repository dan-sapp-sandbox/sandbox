import { useState, type Dispatch, type SetStateAction } from "react";
import mockUsers from "./mockUsers";
import toast from "react-hot-toast";
import type { Table, SortingState } from "@tanstack/react-table";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

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
  newUserEmail: any;
  setNewUserEmail: any;
}

const useDataGridState = () => {
  const [data, setData] = useState<IUser[]>(mockUsers);
  const [selected, setSelected] = useState<IUser>();
  const [tempUser, setTempUser] = useState<IUser>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [newUserEmail, setNewUserEmail] = useState<string>("");
  const columnHelper = createColumnHelper<IUser>();
  const columns = [
    columnHelper.accessor("name", { header: "Name" }),
    columnHelper.accessor("email", { header: "Email" }),
    columnHelper.accessor("role", { header: "Role" }),
  ];

  const tableState = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const cellValue = row.getValue(columnId);
      if (cellValue == null) return false;
      return cellValue.toString().toLowerCase().includes(String(filterValue).toLowerCase());
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
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
  const sendNewUserInviteEmail = () => {
    toast.success(`Sent Invite to ${newUserEmail}`);
    setNewUserEmail("");
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
    globalFilter,
    setGlobalFilter,
    newUserEmail,
    setNewUserEmail,
    sendNewUserInviteEmail,
  };
};

export default useDataGridState;
