import { flexRender } from "@tanstack/react-table";
import FormPanel from "./FormPanel";
import useDataGridState from "./useDataGridState";
import { Card, CardContent } from "@/components/ui/card";

const DataGrid = () => {
  const dataGridState = useDataGridState();
  const numberOfUsers = dataGridState.data.length;
  const numberOfAdmins = dataGridState.data.filter((user) => user.role === "Admin").length;
  //TODO: add column sorting/filtering

  return (
    <div className="h-full w-full rounded flex flex-col">
      <div className="w-full h-30 rounded flex flex-row justify-between px-2 py-4">
        <Card isAlt>
          <CardContent className="h-full w-40 flex justify-center items-center">Users: {numberOfUsers}</CardContent>
        </Card>
        <Card isAlt>
          <CardContent className="h-full w-40 flex justify-center items-center">Pending: 0</CardContent>
        </Card>
        <Card isAlt>
          <CardContent className="h-full w-40 flex justify-center items-center">Admins: {numberOfAdmins}</CardContent>
        </Card>
      </div>
      <div className="flex-1 min-h-0 w-full border rounded flex flex-row">
        <FormPanel dataGridState={dataGridState} />
        <div className="h-full flex-1 overflow-auto scrollbar-hide border rounded">
          <table className="w-full border-collapse">
            <thead className="bg-(--background) sticky top-0 z-10">
              {dataGridState.tableState.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="text-(--text) border-b px-4 py-2 text-left border-border text-xs md:text-base"
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="">
              {dataGridState.tableState.getRowModel().rows.map((row, index) => (
                <tr
                  key={row.id}
                  onClick={() => dataGridState.handleSelect(index)}
                  className="hover:bg-(--table-row-hover) transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="text-(--text) cursor-pointer border-b p-px md:px-4 md:py-2 text-xs md:text-base"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
