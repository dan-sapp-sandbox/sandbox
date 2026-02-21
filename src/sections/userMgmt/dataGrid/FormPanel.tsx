import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { Input } from "../../../components/ui/input";
import type { IDataGridState } from "./useDataGridState";

const FormPanel = ({ dataGridState }: { dataGridState: IDataGridState }) => {
  const { roleOptions, tempUser, setTempUser, handleSave, handleDelete, setSelected } = dataGridState;
  if (!tempUser) return;
  return (
    <div className="h-full w-60 flex flex-col">
      <div className="flex flex-row-reverse">
        <Button
          variant="ghost"
          onClick={() => {
            setSelected(undefined);
            setTempUser(undefined);
          }}
          size="icon"
        >
          <X />
        </Button>
      </div>
      <div className="h-full flex flex-col justify-between p-4">
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-(--text)">Name:</span>
            <Input
              value={tempUser.name}
              onChange={({ target }) => tempUser && setTempUser({ ...tempUser, name: target.value })}
            />
          </div>
          <div>
            <span className="text-(--text)">Email:</span>
            <Input
              value={tempUser.email}
              onChange={({ target }) => tempUser && setTempUser({ ...tempUser, email: target.value })}
            />
          </div>
          <SelectGroup>
            <SelectLabel>Role</SelectLabel>
            <Select
              value={tempUser.role}
              onValueChange={(val) => tempUser && setTempUser({ ...tempUser, role: val as string })}
            >
              <SelectTrigger className="w-25 md:w-50">
                <SelectValue placeholder="Placeholder" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </SelectGroup>
        </div>
        <div className="flex flex-row justify-between">
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleDelete} variant="destructive">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormPanel;
