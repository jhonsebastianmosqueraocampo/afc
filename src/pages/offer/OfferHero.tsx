import { Box, Typography } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
import LazyBackground from "../../components/LazyBackground";
function OfferHero() {
  const isDesktop = useIsDesktop();
  return (
    <LazyBackground src="/assets/ofertaacademicadt.webp" mobileSrc="/assets/OFERTAACADEMICA.webp">
      {isDesktop ? (
        <Box
          sx={{
            position: "absolute",
            bottom: "15vh",
            left: 0,
            right: "65%",
          }}
        >
          <Typography
            sx={{
              zIndex: 1,
              fontSize: "38px",
              textAlign: "left",
              marginLeft: "166px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Educación
          </Typography>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: "38px",
              textAlign: "left",
              marginLeft: "166px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Teológica con
          </Typography>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: "38px",
              textAlign: "left",
              marginLeft: "166px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Enfoque en
          </Typography>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: "38px",
              fontFamily: "Inter",
              fontWeight: 700,
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                background: "#f5f1eb",
                paddingLeft: "166px",
                paddingRight: "12px",
                fontWeight: 700,
                color: "#a7192d",
                textTransform: "uppercase",
              }}
            >
              Consejería
            </span>
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            position: "absolute",
            bottom: "13vh",
            left: 0,
            right: 0,
          }}
        >
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
            Educación teológica con ENFOQUE en
          </Typography>
          <Box
            sx={{
              marginLeft: "64px",
              height: "35px",
              background: "#f5f1eb",
            }}
          >
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "25px",
                fontFamily: "Inter",
                fontWeight: 700,
                textAlign: "left",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#a7192d",
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                Consejería
              </span>
            </Typography>
          </Box>
        </Box>
      )}
    </LazyBackground>
  );
}
export default OfferHero;
