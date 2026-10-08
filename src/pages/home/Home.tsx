import { useState, useEffect } from "react";
import { Box, Typography, Button, Container, IconButton, Divider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
import HeroPurpose from "./HeroPurpose";
import HeroCalling from "./HeroCalling";
import HeroCareer from "./HeroCareer";
import OfferSection from "./OfferSection";
const heroVariants = ["primary", "secondary", "third"];
let heroIndex = 2;
function Home() {
  const [heroVariant, setHeroVariant] = useState(heroVariants[0]);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  useEffect(() => {
    heroIndex = (heroIndex + 1) % heroVariants.length;
    setHeroVariant(heroVariants[heroIndex]);
  }, []);
  return (
    <>
      {heroVariant === "primary" && <HeroPurpose />}
      {heroVariant === "secondary" && <HeroCalling />}
      {heroVariant === "third" && <HeroCareer />}
      <Box position="relative">
        <Box
          sx={{
            py: isDesktop ? 5 : 10,
            pt: isDesktop ? 20 : "unset",
            background: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: isDesktop ? "flex-start" : "flex-end",
            alignItems: isDesktop ? "flex-start" : "flex-end",
            width: "100%",
          }}
        >
          {!isDesktop && (
            <Divider
              sx={{
                backgroundColor: "#f5f1eb",
                height: "1px",
                mb: 1,
                mr: "24px",
                alignSelf: "flex-end",
                width: "55%",
              }}
            />
          )}
          <Typography
            sx={{
              zIndex: 1,
              fontSize: isDesktop ? "40px" : "22px",
              fontFamily: "Inter",
              fontWeight: 700,
              textAlign: "left",
              color: "#f5f1eb",
              ml: isDesktop ? "30px" : "unset",
              mr: isDesktop ? "unset" : "24px",
              textTransform: "uppercase",
            }}
          >
            Descubre porqué
          </Typography>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: isDesktop ? "40px" : "22px",
              fontFamily: "Inter",
              fontWeight: 700,
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            <Box
              component="span"
              sx={{
                background: "#f5f1eb",
                pl: isDesktop ? "30px" : "10px",
                pr: isDesktop ? "unset" : "24px",
                fontFamily: "Inter",
                fontWeight: 700,
                color: "#a7192d",
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              No hay lugar
            </Box>
          </Typography>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: isDesktop ? "40px" : "22px",
              fontFamily: "Inter",
              fontWeight: 700,
              textAlign: "left",
              color: "#f5f1eb",
              ml: isDesktop ? "30px" : "unset",
              mr: isDesktop ? "unset" : "24px",
              textTransform: "uppercase",
            }}
          >
            como el afc
          </Typography>
          {!isDesktop && (
            <Divider
              sx={{
                backgroundColor: "#f5f1eb",
                height: "1px",
                mb: 1,
                mr: "24px",
                alignSelf: "flex-end",
                width: "55%",
              }}
            />
          )}
          {isDesktop && (
            <Box mt={4} display="flex" justifyContent="center">
              <Button
                className="custom-buttom"
                component="a"
                href="https://youtu.be/lk31mWRz__Y"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  paddingX: "18px",
                  ml: "30px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  borderRadius: "23px 0px 23px 0px",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                }}
              >
                Ver video
              </Button>
            </Box>
          )}
        </Box>
        <Box
          position={isDesktop ? "absolute" : "unset"}
          top={isDesktop ? "15%" : "unset"}
          right={isDesktop ? "5%" : "unset"}
          width={isDesktop ? "55%" : "unset"}
          height={isDesktop ? "500px" : "unset"}
        >
          <Box
            sx={{
              position: "relative",
              height: isDesktop ? "100px" : "unset",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {showVideo ? (
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lk31mWRz__Y?autoplay=1&mute=0&rel=0"
                  title="video home"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </Box>
            ) : (
              <Box
                onClick={() => setShowVideo(true)}
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url(/assets/captura.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00000066",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.8)",
                    },
                    width: 72,
                    height: 72,
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: 40,
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {!isDesktop && (
        <Box mt={4} display="flex" justifyContent="center">
          <Button
            className="custom-buttom"
            component="a"
            href="https://youtu.be/lk31mWRz__Y"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              paddingX: "18px",
              background: "#a7192d",
              color: "#f5f1eb",
              fontSize: "18px",
              textTransform: "uppercase",
              borderRadius: "23px 0px 23px 0px",
              fontFamily: "cinzel",
              fontWeight: 700,
            }}
          >
            Ver video
          </Button>
        </Box>
      )}
      <OfferSection />
      {isDesktop ? (
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            position: "relative",
            backgroundImage: "url('/assets/6HISTORIAdt.webp')",
            backgroundColor: "#1c1414",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            width="35%"
            height="100%"
            gap={4}
          >
            <Box pt={5} pl={5} display="flex" flexDirection="column" gap={2}>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "28px",
                  textAlign: "left",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                {"Educación "}
                <br />
                {" personalizada"}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "48px",
                    textAlign: "left",
                    fontFamily: "Inter",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {"<25"}
                </Typography>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "28px",
                    textAlign: "left",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                  }}
                >
                  ESTUDIANTES PROMEDIO POR GRUPO
                </Typography>
              </Box>
              <Button
                className="custom-buttom"
                component="a"
                href="https://plataforma.afc.education/inscripcion"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  paddingX: "18px",
                  marginTop: "12px",
                  borderRadius: "23px 0px 23px 0px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                }}
              >
                admisiones afc virtual
              </Button>
            </Box>
            <Box pt={5} pl={5} pb={5} display="flex" flexDirection="column" gap={2}>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "28px",
                  textAlign: "left",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                campus global
              </Typography>
              <Box>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "48px",
                    textAlign: "left",
                    fontFamily: "Inter",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  +20
                </Typography>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "28px",
                    textAlign: "left",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                  }}
                >
                  naciones representadas en nuestro campus
                </Typography>
              </Box>
              <Button
                className="custom-buttom"
                component="a"
                href="https://plataforma.afc.education/inscripcion"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  paddingX: "18px",
                  marginTop: "12px",
                  borderRadius: "23px 0px 23px 0px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                }}
              >
                admisiones afc presencial
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            backgroundImage: "url('/assets/14.webp')",
            backgroundColor: "#1c1414",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <Container
            sx={{
              px: 5,
              pb: 3,
              pt: 12,
              color: "#f5f1eb",
            }}
          >
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "28px",
                textAlign: "left",
                lineHeight: 1.2,
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Educación Personalizada
            </Typography>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "20px",
                fontFamily: "Inter",
                fontWeight: 400,
                textAlign: "left",
                lineHeight: 1.2,
                textTransform: "uppercase",
              }}
            >
              {"Estudiantes promedio por "}
              <br />
              grupo
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "46px",
                  textAlign: "left",
                  fontFamily: "Inter",
                  fontWeight: 900,
                }}
              >
                {"<25"}
              </Typography>
              <Button
                className="custom-buttom"
                onClick={() => navigate("/admisiones/presencial#inicio")}
                sx={{
                  py: 1,
                  width: "195px",
                  borderRadius: "23px 0px 23px 0px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  fontFamily: "cinzel",
                  fontWeight: 800,
                }}
              >
                Admisiones afc presencial
              </Button>
            </Box>
          </Container>
          <Box
            sx={{
              width: "100%",
              height: "270px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              loading="lazy"
              decoding="async"
              src="/assets/6HISTORIA.webp"
              alt="image"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 30%",
                display: "block",
              }}
            />
          </Box>
          <Container
            sx={{
              px: 5,
              pb: 3,
              pt: 2,
              color: "#f5f1eb",
            }}
          >
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "28px",
                textAlign: "left",
                lineHeight: 1.2,
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Campus Global
            </Typography>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "20px",
                textAlign: "left",
                lineHeight: 1.2,
                fontFamily: "Inter",
                fontWeight: 400,
                textTransform: "uppercase",
              }}
            >
              Naciones representadas en nuestro campus
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "46px",
                  textAlign: "left",
                  fontFamily: "Inter",
                  fontWeight: 900,
                }}
              >
                +10
              </Typography>
              <Button
                className="custom-buttom"
                onClick={() => navigate("/admisiones/virtual#inicio")}
                sx={{
                  py: 1,
                  width: "195px",
                  borderRadius: "23px 0px 23px 0px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  fontFamily: "cinzel",
                  fontWeight: 800,
                }}
              >
                Admisiones afc virtual
              </Button>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* ===== swiper lib skipped ===== */
export default Home;
