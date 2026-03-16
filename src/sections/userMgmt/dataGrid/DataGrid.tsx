import { flexRender } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";
import FormPanel from "./FormPanel";
import useDataGridState from "./useDataGridState";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DataGrid = () => {
  const dataGridState = useDataGridState();

  const numberOfUsers = dataGridState.data.length;
  const numberOfAdmins = dataGridState.data.filter((user) => user.role === "Admin").length;

  return (
    <div className="h-full w-full flex flex-col gap-4 bg-(--card-section-text-bg) rounded-2xl p-4">
      <div className="w-full h-15 rounded flex flex-row justify-between">
        <Card className="p-0">
          <CardContent className="p-0 h-full w-40 flex justify-center items-center">
            <span>Users: {numberOfUsers}</span>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-0 h-full w-40 flex justify-center items-center">
            <span>Pending: 0</span>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-0 h-full w-40 flex justify-center items-center">
            <span>Admins: {numberOfAdmins}</span>
          </CardContent>
        </Card>
      </div>
      <div className="w-full">
        <Card className="p-3 pt-1 ">
          <CardContent className="flex flex-row justify-between items-end p-0">
            <div>
              <span className="text-sm text-(--text)">Filter:</span>
              <Input
                id="user-filter"
                className="w-60"
                value={dataGridState.globalFilter}
                onChange={(e) => dataGridState.setGlobalFilter(e.target.value)}
                placeholder="Search users..."
              />
            </div>
            <div className="flex flex-row justify-between items-end gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-(--text)">Invite New User By Email:</span>
                <Input
                  id="new-user-email"
                  className="w-60"
                  value={dataGridState.newUserEmail}
                  onChange={(e) => dataGridState.setNewUserEmail(e.target.value)}
                  placeholder="newUser@email.com"
                />
              </div>
              <Button variant="secondary" onClick={dataGridState.sendNewUserInviteEmail}>
                Send
              </Button>
            </div>
          </CardContent>
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
                      onClick={header.column.getToggleSortingHandler()}
                      className={cn(
                        "cursor-pointer px-4 py-2 border-b",
                        header.column.getIsSorted() ? "bg-(--alt-card-bg)/90" : "",
                      )}
                    >
                      <div className="flex flex-row gap-4 items-center">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "asc" ? (
                            <ArrowUp />
                          ) : (
                            <ArrowDown />
                          )
                        ) : null}
                      </div>
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
                  className="hover:bg-(--table-row-hover) transition-colors cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="text-(--text) border-b p-px md:px-4 md:py-2 text-xs md:text-base">
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
