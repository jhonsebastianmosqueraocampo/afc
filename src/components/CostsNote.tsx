import { Typography } from "@mui/material";
import type { ReactNode } from "react";

// Nota en letra pequeña bajo la lista de costos.
function CostsNote({ children }: { children: ReactNode }) {
  return (
    <Typography
      sx={{
        mt: 2,
        fontSize: "14px",
        textAlign: "left",
        color: "#555555",
        lineHeight: 1.3,
        fontFamily: "SourceSerif4",
        fontStyle: "italic",
        fontWeight: 400,
      }}
    >
      {children}
    </Typography>
  );
}

export default CostsNote;
