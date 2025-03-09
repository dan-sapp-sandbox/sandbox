import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <CircularProgress
      style={{
        position: "fixed",
        left: "calc(50% - 50px)",
        top: "calc(50% - 50px)",
      }}
      size={100}
    />
  );
}
