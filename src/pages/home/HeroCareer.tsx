import { Box, Typography, Button } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
import LazyBackground from "../../components/LazyBackground";
import SloganTag from "../../components/SloganTag";
function HeroCareer() {
  const isDesktop = useIsDesktop();
  return (
    <LazyBackground src="/assets/Home3Dt.webp" mobileSrc="/assets/HOME3.webp">
      <Box
        sx={{
          position: "absolute",
          bottom: "15vh",
          left: 0,
          right: isDesktop ? "65%" : 0,
        }}
      >
        <SloganTag />
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "left",
            marginLeft: "64px",
            textTransform: "uppercase",
          }}
        >
          No es solo
        </Typography>
        <Typography
          variant="h6"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "left",
            marginLeft: "64px",
            display: "flex",
            alignItems: "center",
            textTransform: "uppercase",
          }}
        >
          una{" "}
          <Box
            component="span"
            sx={{
              background: "#f5f1eb",
              px: "12px",
              fontFamily: "Inter",
              fontWeight: 700,
              color: "#a7192d",
              ml: 1,
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            carrera
          </Box>
        </Typography>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "left",
            marginLeft: "64px",
            textTransform: "uppercase",
          }}
        >
          Es responder al
        </Typography>
        <Typography
          variant="h6"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              background: "#f5f1eb",
              paddingLeft: "64px",
              paddingRight: "12px",
              fontWeight: 700,
              color: "#a7192d",
            }}
          >
            llamado
          </span>
        </Typography>
        <Button
          className="custom-buttom"
          component="a"
          href="https://plataforma.afc.education/inscripcion"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            paddingX: "18px",
            marginLeft: "50px",
            marginTop: "15px",
            borderRadius: "23px 0px 23px 0px",
            background: "#a7192d",
            color: "#f5f1eb",
            fontSize: "18px",
            fontFamily: "cinzel",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          inscríbete ahora
        </Button>
      </Box>
    </LazyBackground>
  );
}
export default HeroCareer;
