import { Box, Typography } from "@mui/material";

// Eslogan institucional que se muestra sobre el texto de los heros del Home.
function SloganTag() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: "64px", mb: 1.5 }}>
      <Box component="span" sx={{ width: 32, height: "2px", backgroundColor: "#a7192d", flexShrink: 0 }} />
      <Typography
        sx={{
          fontFamily: "cinzel",
          fontWeight: 700,
          fontSize: { xs: "15px", md: "18px" },
          letterSpacing: "0.08em",
          color: "#f5f1eb",
          textShadow: "0 1px 6px rgba(0,0,0,0.45)",
        }}
      >
        La Escuela del Espíritu
      </Typography>
    </Box>
  );
}

export default SloganTag;
