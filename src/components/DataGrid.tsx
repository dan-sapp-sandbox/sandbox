import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

const data: IUser[] = [
  { id: "1", name: "Alice Johnson", email: "alice.johnson@example.com", role: "Admin" },
  { id: "2", name: "Bob Smith", email: "bob.smith@example.com", role: "User" },
  { id: "3", name: "Charlie Davis", email: "charlie.davis@example.com", role: "User" },
  { id: "4", name: "Dana Lee", email: "dana.lee@example.com", role: "Moderator" },
  { id: "5", name: "Evan Miller", email: "evan.miller@example.com", role: "User" },
  { id: "6", name: "Fiona Clark", email: "fiona.clark@example.com", role: "Admin" },
  { id: "7", name: "George Brown", email: "george.brown@example.com", role: "User" },
  { id: "8", name: "Hannah Wilson", email: "hannah.wilson@example.com", role: "Moderator" },
  { id: "9", name: "Ian Martinez", email: "ian.martinez@example.com", role: "User" },
  { id: "10", name: "Julia Garcia", email: "julia.garcia@example.com", role: "User" },
  { id: "11", name: "Kevin White", email: "kevin.white@example.com", role: "Admin" },
  { id: "12", name: "Laura Adams", email: "laura.adams@example.com", role: "User" },
  { id: "13", name: "Michael Thompson", email: "michael.thompson@example.com", role: "User" },
  { id: "14", name: "Nina Robinson", email: "nina.robinson@example.com", role: "Moderator" },
  { id: "15", name: "Oliver King", email: "oliver.king@example.com", role: "User" },
  { id: "16", name: "Paula Scott", email: "paula.scott@example.com", role: "User" },
  { id: "17", name: "Quentin Lewis", email: "quentin.lewis@example.com", role: "Admin" },
  { id: "18", name: "Rachel Walker", email: "rachel.walker@example.com", role: "User" },
  { id: "19", name: "Steven Hall", email: "steven.hall@example.com", role: "Moderator" },
  { id: "20", name: "Tina Allen", email: "tina.allen@example.com", role: "User" },
];

const columnHelper = createColumnHelper<IUser>();
const columns = [
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("role", { header: "Role" }),
];

const DataGrid = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-full w-full overflow-y-scroll scrollbar-hide border rounded">
      <table className="w-full border-collapse">
        <thead className="bg-(--background) sticky top-0 z-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-(--card-foreground) border-b px-4 py-2 text-left border-border text-xs md:text-base"
                >
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-(--table-row-hover) transition-colors">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="cursor-pointer border-b p-px md:px-4 md:py-2 text-xs md:text-base">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
