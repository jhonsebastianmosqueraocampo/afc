import { Box, Typography } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
function AdmissionsVirtualHero() {
  const isDesktop = useIsDesktop();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        position: "relative",
        backgroundImage: `url('/assets/${isDesktop ? "Admisionesvirtual.webp" : "Admisiones-virtual.webp"}')`,
        backgroundColor: "#1c1414",
        backgroundSize: "cover",
        backgroundPosition: "-100px 0px",
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
            fontSize: "48px",
            textAlign: "left",
            marginLeft: "100px",
            color: "#f5f1ec",
            textTransform: "uppercase",
            fontWeight: 700,
            fontFamily: "Inter",
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
            fontWeight: 800,
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              background: "#f5f1eb",
              paddingLeft: "100px",
              paddingRight: "18px",
              color: "#a7192d",
              textTransform: "uppercase",
              fontWeight: 800,
              fontFamily: "Inter",
              fontSize: "36px",
            }}
          >
            Admisión
          </span>
        </Typography>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "36px",
            textAlign: "left",
            marginLeft: "100px",
            color: "#f5f1ec",
            mb: 5,
            textTransform: "uppercase",
            fontWeight: 500,
            fontFamily: "Inter",
          }}
        >
          modalidad virtual
        </Typography>
      </Box>
    </Box>
  );
}
export default AdmissionsVirtualHero;
