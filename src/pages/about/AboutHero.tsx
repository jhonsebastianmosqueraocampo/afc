import { Box, Typography } from "@mui/material";
import LazyBackground from "../../components/LazyBackground";
function AboutHero() {
  return (
    <LazyBackground src="/assets/1QUIENESSOMOSdt.webp" mobileSrc="/assets/1QUIENESSOMOS.webp">
      <Box
        sx={{
          position: "absolute",
          bottom: "45%",
          left: 0,
          right: 0,
        }}
      >
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "28px",
            textAlign: "left",
            marginLeft: "64px",
            fontFamily: "Inter",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          ¿quiénes
        </Typography>
        <Typography
          variant="h6"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontWeight: 800,
            textAlign: "left",
          }}
        >
          <span
            style={{
              background: "#f5f1eb",
              paddingLeft: "64px",
              paddingRight: "18px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#a7192d",
            }}
          >
            somos?
          </span>
        </Typography>
      </Box>
    </LazyBackground>
  );
}
export default AboutHero;
