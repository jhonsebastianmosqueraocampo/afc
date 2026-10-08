import { Box, Typography, Button } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
import LazyBackground from "../../components/LazyBackground";
import SloganTag from "../../components/SloganTag";
function HeroCalling() {
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
              fontFamily: "Inter",
              fontWeight: 700,
              textAlign: "left",
              marginLeft: "64px",
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            Aquí no{" "}
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
              eliges
            </span>{" "}
            una
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
            profesión.
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
            Respondes a tu
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
            <Box
              component="span"
              sx={{
                background: "#f5f1eb",
                px: "12px",
                fontFamily: "Inter",
                fontWeight: 700,
                color: "#a7192d",
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              llamado
            </Box>
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
            Inscríbete aquí
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
              fontFamily: "Inter",
              fontWeight: 700,
              textAlign: "left",
              marginLeft: "64px",
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            Aquí no
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
              eliges
            </span>{" "}
            una
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
            profesión
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
            Respondes a
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
              llamado
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
              fontFamily: "cinzel",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Inscríbete aquí
          </Button>
        </Box>
      )}
    </LazyBackground>
  );
}
export default HeroCalling;
