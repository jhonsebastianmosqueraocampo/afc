import { Box, Typography } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
function AdmissionsPresencialHero() {
  const isDesktop = useIsDesktop();
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        position: "relative",
        backgroundImage: `url('/assets/${isDesktop ? "admisionespresencial" : "Admisiones-presencial"}.webp')`,
        backgroundColor: "#1c1414",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0px 0px 38px 0px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-end",
          pb: 5,
        }}
      >
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "left",
            marginLeft: "50px",
            color: "#f5f1ec",
            textTransform: "uppercase",
          }}
        >
          {"Conoce el "}
          <br />
          {" Proceso de"}
        </Typography>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              background: "#f5f1eb",
              paddingLeft: "50px",
              paddingRight: "18px",
              fontFamily: "Inter",
              fontWeight: 700,
              color: "#a7192d",
            }}
          >
            Admisión
          </span>
        </Typography>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: 500,
            textAlign: "left",
            marginLeft: "50px",
            color: "#f5f1ec",
            mb: 5,
            textTransform: "uppercase",
          }}
        >
          modalidad presencial
        </Typography>
      </Box>
    </Box>
  );
}
export default AdmissionsPresencialHero;
