import { flexRender } from "@tanstack/react-table";
import FormPanel from "./FormPanel";
import useDataGridState from "./useDataGridState";

const DataGrid = () => {
  const dataGridState = useDataGridState();

  return (
    <div className="h-full w-full border rounded flex flex-row">
      <FormPanel dataGridState={dataGridState} />
      <div className="h-full flex-1 overflow-y-scroll scrollbar-hide border rounded">
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
          <tbody>
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
  );
};

export default DataGrid;
