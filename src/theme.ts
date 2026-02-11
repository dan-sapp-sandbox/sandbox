import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "var(--background)",
      paper: "var(--background)",
    },
    text: {
      primary: "var(--foreground)",
      secondary: "var(--accent)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
});
