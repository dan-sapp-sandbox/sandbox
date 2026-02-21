import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";

const SelectPreview = () => {
  const [value, setValue] = useState<string | undefined>();
  const options = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
    { id: "4", name: "Option 4" },
    { id: "5", name: "Option 5" },
  ];
  return (
    <div className="flex flex-row gap-4">
      <SelectGroup>
        <SelectLabel>Default</SelectLabel>
        <Select value={value} onValueChange={(val) => setValue(val)}>
          <SelectTrigger className="w-25 md:w-50">
            <SelectValue placeholder="Placeholder" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Test</SelectLabel>
        <Select value={value} onValueChange={(val) => setValue(val)}>
          <SelectTrigger className="w-25 md:w-50">
            <SelectValue placeholder="Placeholder" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, index) => (
              <>
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
                {index !== options.length - 1 && <SelectSeparator />}
              </>
            ))}
          </SelectContent>
        </Select>
      </SelectGroup>
    </div>
  );
};

export default SelectPreview;
