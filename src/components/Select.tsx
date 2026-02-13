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
    <FormControl sx={{ width: "180px", borderRadius: "3px", border: `1px solid ${theme.palette.text.primary}` }}>
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
