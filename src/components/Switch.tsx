import { Switch, useTheme } from "@mui/material";

const SwitchComponent = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (checked: boolean) => void;
}) => {
  const theme = useTheme();

  return (
    <div className="w-full flex flex-row items-center gap-2">
      <span className="text-sm">{label}</span>
      <div>
        <Switch
          checked={value}
          onChange={(_e: any, checked: boolean) => onChange(checked)}
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
          }}
        />
      </div>
    </div>
  );
};

export default SwitchComponent;
