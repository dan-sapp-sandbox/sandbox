import { FormControl, InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

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
  const theme = useTheme();

  return (
    <FormControl fullWidth>
      <InputLabel
        sx={{
          color: theme.palette.text.primary,

          "&.Mui-focused": {
            color: theme.palette.primary.main,
          },

          "&.MuiInputLabel-shrink": {
            color: theme.palette.text.primary,
          },
        }}
      >
        {label}
      </InputLabel>

      <Select
        value={value}
        label={label}
        onChange={(e: SelectChangeEvent) => onChange(e.target.value)}
        sx={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.divider,
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.primary,
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },

          "& .MuiSelect-icon": {
            color: theme.palette.text.primary,
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
