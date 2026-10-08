import { Box, Typography, Button } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
import LazyBackground from "../../components/LazyBackground";
import SloganTag from "../../components/SloganTag";
function HeroPurpose() {
  const isDesktop = useIsDesktop();
  return (
    <LazyBackground src="/assets/Home1.webp" mobileSrc="/assets/HOMEJUANY.webp">
      {isDesktop ? (
        <Box
          sx={{
            position: "absolute",
            bottom: "15vh",
            left: 0,
            right: "65%",
          }}
        >
          <SloganTag />
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
            Aquí no empiezas
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
                height: "32px",
              }}
            >
              carrera
            </Box>
          </Typography>
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
            inicias tu
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
                paddingLeft: "64px",
                paddingRight: "12px",
                fontWeight: 700,
                color: "#a7192d",
                textTransform: "uppercase",
                height: "32px",
              }}
            >
              propósito
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
              textTransform: "uppercase",
              fontFamily: "cinzel",
              fontWeight: 700,
            }}
          >
            Ir al formulario
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            position: "absolute",
            bottom: "15vh",
            left: 0,
            right: 0,
          }}
        >
          <SloganTag />
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
            Aquí no
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
            empiezas una
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
                paddingLeft: "64px",
                paddingRight: "12px",
                fontWeight: 700,
                color: "#a7192d",
                textTransform: "uppercase",
              }}
            >
              carrera
            </span>
            , inicias
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
            tu{" "}
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
              propósito
            </Box>
          </Typography>
          <Button
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
              textTransform: "uppercase",
              fontFamily: "cinzel",
              fontWeight: 700,
            }}
          >
            Ir al formulario
          </Button>
        </Box>
      )}
    </LazyBackground>
  );
}
export default HeroPurpose;
