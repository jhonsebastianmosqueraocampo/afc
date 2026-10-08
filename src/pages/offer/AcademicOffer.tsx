import { useEffect } from "react";
import { Box, Typography, Button, Container, Breadcrumbs, Divider } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
import { useBreadcrumbClick } from "../../hooks/useHashNavigation";
import OfferHero from "./OfferHero";
import TeamSwiper from "../../components/team/TeamSwiper";
function AcademicOffer() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  // El menú enlaza secciones de esta página (#Perfil de Egresado) o de una modalidad
  // (#main=Modalidad Virtual&section=Costos), en cuyo caso redirige a esa página.
  useEffect(() => {
    const target = decodeURIComponent(hash).replace(/^#/, "");
    const params = new URLSearchParams(target);
    if (params.has("main")) {
      if (params.get("main") === "Modalidad Presencial") {
        navigate(`/oferta-academica/modalidad-presencial#${params.get("section")}`);
      }
      if (params.get("main") === "Modalidad Virtual") {
        navigate(`/oferta-academica/modalidad-virtual#${params.get("section")}`);
      }
    } else {
      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hash, navigate]);
  const handleBreadcrumbClick = useBreadcrumbClick();
  const offerBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="2">
      Oferta Académica
    </MuiLink>,
  ];
  const areasBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/oferta-academica#Énfasis Académico"
      onClick={handleBreadcrumbClick}
      key="2"
    >
      Oferta Académica
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Areas Académicas
    </MuiLink>,
  ];
  const modalitiesBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/oferta-academica#Énfasis Académico"
      onClick={handleBreadcrumbClick}
      key="2"
    >
      Oferta Académica
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Modalidades
    </MuiLink>,
  ];
  const teamBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/oferta-academica#Énfasis Académico"
      onClick={handleBreadcrumbClick}
      key="2"
    >
      Oferta Académica
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Equipo Docente
    </MuiLink>,
  ];
  const isDesktop = useIsDesktop();
  return (
    <>
      <Box id="Énfasis Académico">
        <OfferHero />
      </Box>
      {isDesktop ? (
        <>
          <Box width="100%" display="flex" justifyContent="space-between" alignItems="stretch" gap={10} py={5}>
            <Box
              sx={{
                px: 8,
                width: "100%",
              }}
            >
              <Box py={3}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {offerBreadcrumbs}
                </Breadcrumbs>
              </Box>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "28px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textAlign: "left",
                  color: "#A61A2D",
                  lineHeight: 1.2,
                }}
              >
                Énfasis académico
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#090A0A",
                  fontFamily: "SourceSerif4",
                  fontWeight: 400,
                }}
              >
                Ofrecemos un programa de 3 años, dividido en 12 bimestres en la modalidad presencial y en 9 periodos académicos en la modalidad virtual,{" "}
                <span
                  style={{
                    color: "#A61A2D",
                  }}
                >
                  con énfasis en Teología Bíblica y Ministerial con enfoque en Consejería
                </span>
                . Nuestro currículo combina excelencia académica y un ambiente de avivamiento.
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#A61A2D",
                  fontFamily: "SourceSerif4",
                  fontWeight: 700,
                  mt: 5,
                }}
              >
                Asignaturas destacadas:
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  mt: 2,
                  display: "flex",
                  gap: 1,
                }}
              >
                <Box mt={0.9}>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      backgroundColor: "#A61A2D",
                      width: "2px",
                      height: "95%",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#222222",
                    fontFamily: "SourceSerif4",
                    fontWeight: 400,
                  }}
                >
                  {"Exégesis y Hermenéutica Bíblica "}
                  <br />
                  {" Teología Sistemática"} <br />
                  {" Consejería Pastoral "}
                  <br />
                  {" Historia de la Iglesia y Avivamiento "}
                  <br />
                  {" Predicación y Homilética"}
                </Typography>
              </Box>
              <Typography
                id="Perfil de Egresado"
                sx={{
                  zIndex: 1,
                  fontSize: "28px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textAlign: "left",
                  color: "#A61A2D",
                  lineHeight: 1,
                  mt: 6,
                  mb: 2,
                }}
              >
                Perfil del egresado
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#090A0A",
                  fontFamily: "SourceSerif4",
                  fontWeight: 400,
                }}
              >
                Avivadores con conocimiento bíblico, liderazgo pastoral, sensibilidad al Espíritu Santo y convicción
                doctrinal, listos para servir en iglesias, misiones y enseñanza bíblica.
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "28px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textAlign: "left",
                  color: "#A61A2D",
                  lineHeight: 1,
                  mt: 6,
                  mb: 2,
                }}
              >
                Áreas académicas
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#A61A2D",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Bíblica
                </Typography>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#A61A2D",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Teológica
                </Typography>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#A61A2D",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Pastoral
                </Typography>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#A61A2D",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Institucionales
                </Typography>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#A61A2D",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Disciplina Auxiliar
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "110%",
                height: "auto",
                position: "relative",
                backgroundImage: "url('/assets/Perfilegresado.webp')",
                backgroundColor: "#1c1414",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                borderRadius: "28px 0px 0px 28px",
              }}
            />
          </Box>
          <Box>
            <Breadcrumbs
              sx={{
                mt: 5,
                pl: 5,
              }}
              separator="›"
              aria-label="breadcrumb"
            >
              {teamBreadcrumbs}
            </Breadcrumbs>
            <Typography
              id="Equipo Docente"
              sx={{
                zIndex: 1,
                fontSize: "38px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#A61A2D",
                mb: 6,
                pl: 5,
              }}
            >
              Equipo docente
            </Typography>
            <TeamSwiper />
          </Box>
          <Box
            sx={{
              px: 5,
            }}
          >
            <Breadcrumbs
              sx={{
                mt: 11,
              }}
              separator="›"
              aria-label="breadcrumb"
            >
              {teamBreadcrumbs}
            </Breadcrumbs>
            <Typography
              id="Modalidades"
              sx={{
                zIndex: 1,
                fontSize: "38px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#A61A2D",
                mb: 2,
                mt: 6,
              }}
            >
              Modalidades
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 5,
              position: "relative",
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
              pb: 7,
              gap: 5,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                loading="lazy"
                decoding="async"
                src="/assets/Exploramodalidadvirtual2.webp"
                alt="modalidades"
                sx={{
                  width: "60%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "0px 28px 0px 0px",
                  flex: 1,
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "35%",
                  pr: 3,
                  alignSelf: "flex-start",
                  mt: 20,
                }}
              >
                <Box
                  sx={{
                    background: "#f5f1eb",
                    pl: 1,
                  }}
                >
                  <Typography
                    sx={{
                      zIndex: 1,
                      textAlign: "left",
                      fontFamily: "Inter",
                      fontWeight: 300,
                      fontSize: "26px",
                    }}
                  >
                    {"Explora "}
                    <br />
                    {" nuestra"}
                  </Typography>
                </Box>
                <Button
                  className="custom-buttom"
                  onClick={() => navigate("/oferta-academica/modalidad-virtual")}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    right: "24px",
                    borderRadius: "23px 0px 23px 0px",
                    background: "#a7192d",
                    color: "#f5f1eb",
                    fontSize: "18px",
                    fontFamily: "cinzel",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    width: "auto",
                    px: 3,
                    zIndex: 100,
                  }}
                >
                  Modalidad virtual
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                pb: 7,
              }}
            >
              <Box
                component="img"
                loading="lazy"
                decoding="async"
                src="/assets/modalidadpresencialdt.webp"
                alt="modalidades"
                sx={{
                  width: "60%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "0px 0px 0px 28px",
                  flex: 1,
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: "35%",
                  pl: 3,
                  alignSelf: "flex-end",
                  mb: 15,
                }}
              >
                <Box
                  sx={{
                    background: "#f5f1eb",
                    pr: 1,
                  }}
                >
                  <Typography
                    sx={{
                      zIndex: 1,
                      textAlign: "right",
                      color: "#090A0A",
                      fontFamily: "Inter",
                      fontWeight: 300,
                      fontSize: "26px",
                    }}
                  >
                    {"Explora "}
                    <br />
                    {" nuestra"}
                  </Typography>
                </Box>
                <Button
                  className="custom-buttom"
                  onClick={() => navigate("/oferta-academica/modalidad-presencial")}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "24px",
                    borderRadius: "0px 23px 0px 23px",
                    background: "#a7192d",
                    color: "#f5f1eb",
                    fontSize: "18px",
                    fontFamily: "cinzel",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    width: "auto",
                    px: 3,
                    zIndex: 100,
                  }}
                >
                  Modalidad presencial
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Container
            sx={{
              px: 3,
            }}
          >
            <Box py={3}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {offerBreadcrumbs}
              </Breadcrumbs>
            </Box>
            <Typography
              id="Énfasis Académico"
              sx={{
                zIndex: 1,
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#A61A2D",
                lineHeight: 1.2,
              }}
            >
              {"Énfasis "}
              <br />
              {" académico"}
            </Typography>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "16px",
                textAlign: "left",
                color: "#222222",
                fontFamily: "SourceSerif4",
                fontWeight: 400,
              }}
            >
              Ofrecemos un programa de 3 años, dividido en 12 bimestres en la modalidad presencial y en 9 periodos académicos en la modalidad virtual,{" "}
              <span
                style={{
                  color: "#A61A2D",
                }}
              >
                con énfasis en Teología Bíblica y Ministerial con enfoque en Consejería
              </span>
              . Nuestro currículo combina excelencia académica y un ambiente de avivamiento.
            </Typography>
            <Box
              sx={{
                position: "relative",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    backgroundColor: "#A61A2D",
                    width: "2px",
                    height: "105%",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#A61A2D",
                  fontFamily: "SourceSerif4",
                  fontWeight: 400,
                  ml: 1,
                }}
              >
                Asignaturas destacadas:
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#222222",
                  fontFamily: "SourceSerif4",
                  fontWeight: 400,
                  ml: 1,
                }}
              >
                {"Exégesis y Hermenéutica Bíblica "}
                <br />
                {" Teología Sistemática"} <br />
                {" Consejería Pastoral "}
                <br />
                {" Historia de la Iglesia y Avivamiento "}
                <br />
                {" Predicación y Homilética"}
              </Typography>
            </Box>
          </Container>
          <Box
            sx={{
              mt: 2,
              width: "100%",
              height: "320px",
              position: "relative",
              backgroundImage: "url('/assets/Perfil-egresado-mobile.webp')",
              backgroundColor: "#1c1414",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container
              sx={{
                pt: 4,
                px: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                id="Perfil de Egresado"
                sx={{
                  zIndex: 1,
                  fontSize: "28px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textAlign: "left",
                  color: "#f5f1eb",
                  lineHeight: 1,
                }}
              >
                {"Perfil del "}
                <br />
                {" egresado"}
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#f5f1eb",
                  fontFamily: "SourceSerif4",
                  fontWeight: 400,
                }}
              >
                Avivadores con conocimiento bíblico, liderazgo pastoral, sensibilidad al Espíritu Santo y convicción
                doctrinal, listos para servir en iglesias, misiones y enseñanza bíblica.
              </Typography>
            </Container>
          </Box>
          <Container
            sx={{
              px: 3,
            }}
          >
            <Box py={3}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {areasBreadcrumbs}
              </Breadcrumbs>
            </Box>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#A61A2D",
                lineHeight: 1,
              }}
            >
              {"Áreas "}
              <br />
              {" académicas"}
            </Typography>
          </Container>
          <Box
            sx={{
              mt: 3,
              width: "100%",
              height: "500px",
              position: "relative",
              backgroundImage: "url('/assets/AREASACADEEMICAS.webp')",
              backgroundColor: "#1c1414",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container
              sx={{
                pt: 4,
                px: 4,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "20px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#f5f1eb",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                Bíblica
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "20px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#f5f1eb",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                Teológica
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "20px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#f5f1eb",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                Pastoral
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "20px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#f5f1eb",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                Institucionales
              </Typography>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "20px",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#f5f1eb",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                {"Disciplina "}
                <br />
                {" Auxiliar"}
              </Typography>
            </Container>
          </Box>
          <Container
            sx={{
              px: 3,
            }}
          >
            <Box py={3}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {teamBreadcrumbs}
              </Breadcrumbs>
            </Box>
            <Typography
              id="Equipo Docente"
              sx={{
                zIndex: 1,
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#A61A2D",
                mb: 4,
              }}
            >
              Equipo docente
            </Typography>
            <TeamSwiper />
          </Container>
          <Container
            sx={{
              px: 3,
            }}
          >
            <Box py={3}>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {modalitiesBreadcrumbs}
              </Breadcrumbs>
            </Box>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#A61A2D",
                mb: 9,
              }}
            >
              Modalidades
            </Typography>
          </Container>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "300px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              loading="lazy"
              decoding="async"
              src="/assets/MODALIDADES2.webp"
              alt="modalidades"
              sx={{
                width: "60%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "0px 0px 28px 0px",
                flex: 1,
                position: "relative",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: "35%",
                pr: 3,
              }}
            >
              <Box
                sx={{
                  background: "#f5f1eb",
                  pl: 1,
                }}
              >
                <Typography
                  sx={{
                    zIndex: 1,
                    textAlign: "left",
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  {"Explora "}
                  <br />
                  {" nuestra"}
                </Typography>
              </Box>
              <Button
                className="custom-buttom"
                onClick={() => navigate("/oferta-academica/modalidad-virtual#Metodología")}
                sx={{
                  position: "absolute",
                  top: "100%",
                  right: "24px",
                  borderRadius: "23px 0px 23px 0px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  width: "auto",
                  px: 3,
                  zIndex: 100,
                }}
              >
                Modalidad virtual
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 13,
              position: "relative",
              width: "100%",
              height: "300px",
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 7,
            }}
          >
            <Box
              component="img"
              loading="lazy"
              decoding="async"
              src="/assets/MODALIDADES1.webp"
              alt="modalidades"
              sx={{
                width: "60%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "28px 0px 0px 0px",
                flex: 1,
                position: "relative",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: "35%",
                pl: 3,
              }}
            >
              <Box
                sx={{
                  background: "#f5f1eb",
                  pr: 1,
                }}
              >
                <Typography
                  sx={{
                    zIndex: 1,
                    textAlign: "right",
                    color: "#090A0A",
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "18px",
                    textTransform: "uppercase",
                  }}
                >
                  {"Explora "}
                  <br />
                  {" nuestra"}
                </Typography>
              </Box>
              <Button
                className="custom-buttom"
                onClick={() => navigate("/oferta-academica/modalidad-presencial#Metodología")}
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "24px",
                  borderRadius: "0px 23px 0px 23px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  width: "auto",
                  px: 3,
                  zIndex: 100,
                }}
              >
                Modalidad presencial
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
export default AcademicOffer;
