import { useState, type SyntheticEvent } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import useIsDesktop from "../../hooks/useIsDesktop";
import { useScrollToHash, useBreadcrumbClick } from "../../hooks/useHashNavigation";
import AboutHero from "./AboutHero";
import HistorySwiper from "./HistorySwiper";
import TeamSwiper from "../../components/team/TeamSwiper";
const values = [
  {
    question: "Humildad",
    answer: "Vivimos para agradar a Dios, reconociendo que todo proviene de Él.",
  },
  {
    question: "Rendición",
    answer: "Obedecemos su voluntad por encima de la nuestra.",
  },
  {
    question: "Fe",
    answer: "Creemos y actuamos conforme a su palabra.",
  },
  {
    question: "Gloria a Dios",
    answer: "Todo lo que somos y hacemos es para Él.",
  },
];
function AboutUs() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const isDesktop = useIsDesktop();
  useScrollToHash();
  const handleBreadcrumbClick = useBreadcrumbClick();
  const aboutBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="2">
      Sobre Nosotros
    </MuiLink>,
  ];
  const revivalBreadcrumbs = [
    <MuiLink underline="always" color="#f5f1eb" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="always" color="#f5f1eb" href="#Misión" onClick={handleBreadcrumbClick} key="2">
      Quienes Somos
    </MuiLink>,
    <MuiLink underline="none" color="#f5f1eb" href="#" onClick={handleBreadcrumbClick} key="3">
      Conoce el Avivamiento
    </MuiLink>,
  ];
  const historyBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="always" color="#A61A2D" href="/sobre-nosotros#Misión" onClick={handleBreadcrumbClick} key="2">
      Sobre Nosotros
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Nuestra Historia
    </MuiLink>,
  ];
  const teamBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="always" color="#A61A2D" href="/sobre-nosotros#Misión" onClick={handleBreadcrumbClick} key="2">
      Sobre Nosotros
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Equipo Docente
    </MuiLink>,
  ];
  const testimonyBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="always" color="#A61A2D" href="/sobre-nosotros#Misión" onClick={handleBreadcrumbClick} key="2">
      Sobre Nosotros
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Testimonios
    </MuiLink>,
  ];
  const handleChange = (panelId: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panelId : false);
  };
  return (
    <>
      <Box id="Misión">
        <AboutHero />
      </Box>
      <Box
        sx={{
          py: isDesktop ? 5 : "unset",
          px: isDesktop ? 0 : 5,
          display: isDesktop ? "flex" : "unset",
          justifyContent: isDesktop ? "space-between" : "unset",
          alignItems: isDesktop ? "stretch" : "unset",
          width: "100%",
        }}
      >
        <Box
          sx={{
            px: 5,
          }}
        >
          <Box py={3}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {aboutBreadcrumbs}
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
            }}
          >
            MISIÓN
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
            Somos una institución educativa cristiana que, en obediencia al llamado divino, con fundamento en la Biblia
            y dando prioridad a la persona del Espíritu Santo, contribuye a la formación de avivadores comprometidos con
            Dios, la Iglesia y la sociedad.
          </Typography>
          <Typography
            id="Visión"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              mt: 2,
            }}
          >
            Visión
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
            Ser la universidad cristiana líder en la formación de avivadores que continúen el avivamiento que Dios ha
            traído a Colombia, levantando una generación de reformadores espirituales.
          </Typography>
          <Typography
            id="Valores"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontWeight: 800,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              mt: 2,
            }}
          >
            Valores y pilares
          </Typography>
          <Box
            display="flex"
            flexDirection={isDesktop ? "row" : "column"}
            flexWrap={isDesktop ? "wrap" : "unset"}
            gap={2}
          >
            {values.map((item, index) => {
              const w = `panel-${index}`;
              return (
                <Accordion
                  expanded={expanded === w}
                  onChange={handleChange(w)}
                  disableGutters
                  square
                  sx={{
                    backgroundColor: expanded === w ? "#7d1323" : "#a61a2d",
                    boxShadow: "none",
                    borderBottom: "1px solid #ddd",
                    margin: 0,
                    borderRadius: "0px 23px 0px 0px",
                    overflow: "hidden",
                    width: isDesktop ? "40%" : "unset",
                    "&:before": {
                      display: "none",
                    },
                  }}
                  key={w}
                >
                  <AccordionSummary
                    sx={{
                      padding: 0,
                      margin: 0,
                      minHeight: "unset",
                      "& .MuiAccordionSummary-content": {
                        margin: 0,
                        padding: 1,
                      },
                      "&.Mui-focused": {
                        outline: "none",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "Inter",
                        fontWeight: 800,
                        color: "#f5f1eb",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#ffffff",
                      padding: 0,
                      margin: 0,
                      border: "1px solid #a61a2d",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#a61a2d",
                        p: 1.5,
                        m: 0,
                        fontFamily: "SourceSerif4",
                        fontWeight: 500,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
          <Typography
            id="En qué creemos"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 800,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              mt: 2,
            }}
          >
            Confesión de fe
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
            Creemos en Dios Padre, Hijo y Espíritu Santo, en la Biblia como su Palabra viva e inspirada, en Jesucristo
            como nuestro Salvador y en el Espíritu Santo como guía y poder para la iglesia hoy.
          </Typography>
        </Box>
        {isDesktop && (
          <Box
            sx={{
              width: "100%",
              height: "auto",
              position: "relative",
              backgroundImage: "url('/assets/misionvision.webp')",
              backgroundColor: "#1c1414",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              borderRadius: "28px 0px 0px 28px",
            }}
          />
        )}
      </Box>
      {!isDesktop && (
        <Container
          sx={{
            px: 5,
          }}
        >
          <Box pt={3} pb={1}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {historyBreadcrumbs}
            </Breadcrumbs>
          </Box>
          <Typography
            id="Historia"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mb: 5,
            }}
          >
            Nuestra Historia
          </Typography>
        </Container>
      )}
      <HistorySwiper />
      <Container
        sx={{
          px: 5,
        }}
      >
        <Box pt={8} pb={2}>
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
          px: 5,
        }}
      >
        <Box pt={5} pb={1}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {testimonyBreadcrumbs}
          </Breadcrumbs>
        </Box>
        <Typography
          id="Testimonios"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "left",
            color: "#A61A2D",
          }}
        >
          Testimonios
        </Typography>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "16px",
            textAlign: "left",
            color: "#090A0A",
            fontFamily: "SourceSerif4",
            fontWeight: 500,
          }}
        >
          Conoce egresados que dijeron “sí” al llamado, fueron transformados y hoy están haciendo historia.
        </Typography>
        <Box
          display={isDesktop ? "flex" : "unset"}
          justifyContent={isDesktop ? "space-between" : "unset"}
          alignContent={isDesktop ? "strech" : "unset"}
          gap={10}
        >
          <Box
            sx={{
              mt: 5,
              width: "100%",
              height: "520px",
              overflow: "hidden",
              borderRadius: "28px 0px 28px 0px",
            }}
          >
            <LiteYouTubeEmbed
              id="pU0ZWR-jvrg"
              title="testimonios"
              noCookie
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          {isDesktop && (
            <Box
              sx={{
                mt: 5,
                width: "100%",
                height: "520px",
                overflow: "hidden",
                borderRadius: "28px 0px 28px 0px",
              }}
            >
              <LiteYouTubeEmbed
                id="pU0ZWR-jvrg"
                title="testimonios"
                noCookie
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
      <Box
        sx={{
          mt: 10,
          width: "100%",
          height: "820px",
          position: "relative",
          backgroundImage: `url('/assets/${isDesktop ? "12AVIVAMIENTO" : "13AVIVAMIENTO"}.webp')`,
          backgroundColor: "#1c1414",
          backgroundSize: "cover",
          backgroundPosition: "start",
        }}
      >
        <Container
          sx={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            {isDesktop && (
              <Breadcrumbs
                separator="›"
                aria-label="breadcrumb"
                sx={{
                  pt: 10,
                }}
              >
                {revivalBreadcrumbs}
              </Breadcrumbs>
            )}
            <Typography
              id="Conoce el Avivamiento"
              sx={{
                zIndex: 1,
                fontSize: "28px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#f5f1eb",
                lineHeight: 1.2,
                pt: isDesktop ? 2 : 15,
              }}
            >
              {"Conoce el "}
              <br />
              {" Avivamiento"}
            </Typography>
          </Box>
          <Button
            className="custom-buttom"
            component="a"
            href="https://www.avivamiento.com"
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
              mb: 15,
              alignSelf: isDesktop ? "flex-end" : "unset",
            }}
          >
            www.avivamiento.com
          </Button>
        </Container>
      </Box>
    </>
  );
}
export default AboutUs;
