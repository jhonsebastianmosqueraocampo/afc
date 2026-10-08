import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
function OfferSection() {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  return (
    <Box
      sx={{
        position: "relative",
        pt: 2,
        px: 0,
      }}
    >
      <Container
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: isDesktop ? "7%" : "unset",
        }}
      >
        <Box
          component="img"
          src="/assets/logos/afcnegro.png"
          alt="Logo AFC"
          sx={{
            position: "absolute",
            height: isDesktop ? 300 : 240,
            width: "auto",
            objectFit: "contain",
            ml: 2,
            transition: "all 0.3s ease-in-out",
            opacity: 0.25,
          }}
        />
      </Container>
      <Box
        sx={{
          position: "relative",
          display: isDesktop ? "flex" : "block",
          alignItems: isDesktop ? "stretch" : "unset",
        }}
      >
        <Box
          component="img"
          loading="lazy"
          decoding="async"
          src={isDesktop ? "/assets/Homeseccionoferta.webp" : "/assets/HOMEOFFERT.webp"}
          alt="home offert"
          sx={{
            mt: 22,
            width: isDesktop ? "65%" : "100%",
            height: "auto",
            objectFit: "cover",
            transition: "all 0.3s ease-in-out",
            opacity: isDesktop ? 1 : 0.65,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: isDesktop ? "50%" : "62%",
            bottom: 0,
            left: isDesktop ? "65%" : 0,
            right: 0,
            backgroundColor: "#a7192d",
            clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0% 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            zIndex: 1,
            pt: 15,
            "&::before": {
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              height: "39%",
              backgroundColor: "#64141f",
              clipPath: "polygon(0 0%, 100% 0%, 100% 23%, 0% 100%)",
            },
          }}
        >
          <Typography
            textAlign="center"
            sx={{
              fontSize: "26px",
            }}
            lineHeight={1}
            fontFamily="Inter"
            fontWeight={700}
            textTransform="uppercase"
          >
            {"Conoce nuestra "}
            <br />
            oferta académica
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
              pb: "10%",
            }}
          >
            <Button
              className="custom-buttom"
              onClick={() => navigate("/oferta-academica/modalidad-virtual")}
              sx={{
                paddingX: "18px",
                borderRadius: "23px 0px 23px 0px",
                background: "#f6f1ea",
                color: "#090a0a",
                fontSize: "18px",
                textTransform: "uppercase",
                fontFamily: "cinzel",
                fontWeight: 500,
              }}
            >
              {"Modalidad "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {" Virtual"}
              </span>
            </Button>
            <Button
              onClick={() => navigate("/oferta-academica/modalidad-presencial")}
              sx={{
                paddingX: "18px",
                borderRadius: "23px 0px 23px 0px",
                background: "#f6f1ea",
                color: "#090a0a",
                fontSize: "18px",
                textTransform: "uppercase",
                fontFamily: "cinzel",
                fontWeight: 500,
              }}
            >
              {"Modalidad "}{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                {" Presencial"}
              </span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default OfferSection;
