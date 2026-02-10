import { MenuItem, Select } from "@mui/material";

const SelectComponent = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | undefined;
  onChange: (name: string) => void;
  options: { id: string; name: string }[];
}) => {
  return (
    <Select
      className="bg-[var(--background)] text-[var(--accent)] dark:text-[var(--foreground)]"
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <MenuItem value={option.id}>{option.name}</MenuItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
