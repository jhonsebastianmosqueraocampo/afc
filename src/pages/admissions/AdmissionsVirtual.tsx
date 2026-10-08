import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Collapse,
  IconButton,
  Breadcrumbs,
  List,
  ListItem,
  styled,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useNavigate } from "react-router-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import useIsDesktop from "../../hooks/useIsDesktop";
import { useScrollToHash, useBreadcrumbClick } from "../../hooks/useHashNavigation";
import { virtualCostsNote, virtualInternationalCosts, virtualNationalCosts } from "../../data/costs";
import CostsNote from "../../components/CostsNote";
import FaqAccordion from "../../components/FaqAccordion";
import AdmissionsVirtualHero from "./AdmissionsVirtualHero";
import RegistrationSteps from "./RegistrationSteps";
import VirtualRequirements from "./VirtualRequirements";

const VirtualRequirementItem = styled(Typography)({
  "::first-letter": {
    marginLeft: "7px",
    fontFamily: "SourceSerif4",
    fontWeight: 400,
  },
});

const virtualFaqs = [
  {
    question: "¿Puedo estudiar con ustedes, aunque no asista al Avivamiento?",
    answer:
      "¡Claro que sí! El Seminario es para todo aquel que tiene un llamado para servir a Dios en el ministerio para avivar su Iglesia y nación.",
  },
  {
    question: "¿Qué duración tiene el periodo?",
    answer: "Cada período tiene una duración de 14 semanas (aproximadamente tres meses y medio).",
  },
  {
    question: "¿Cómo es la metodología?",
    answer:
      "Nuestra metodología es 100% virtual, lo que quiere decir, que las 24 horas del día y los 7 días de la semana, dispones del material en tu plataforma para que tú decidas el horario en el que puedas estudiar, sin tener que desplazarte en ningún momento al Seminario para tomar clases. Adicional a esto, cuentas con clases sincrónicas con los Docentes, actividades, trabajos y exámenes que siempre tendrán un horario de entrega preestablecido.",
  },
  {
    question: "¿Cómo se calculan las horas y los créditos de tus asignaturas?",
    answer: `Para cada asignatura, el plan de estudios contempla un total de 96 o 144 horas de trabajo académico, distribuidas de la siguiente manera:
• Horas acompañadas / docente: incluyen el tiempo de visualización de las clases en video y la interacción directa con el contenido guiado por el profesor.
• Horas de trabajo independiente: corresponden al tiempo personal que debes disponer para lecturas, estudio autónomo, preparación y elaboración de trabajos o talleres.`,
  },
  {
    question: "¿Qué es un crédito académico?",
    answer:
      "Un crédito académico es la unidad que mide el tiempo total que un estudiante invierte para alcanzar los objetivos de aprendizaje de una materia. En nuestra modalidad virtual, 1 crédito académico equivale a 48 horas de trabajo del estudiante (sumando tanto el acompañamiento docente como tu trabajo independiente). Por lo tanto, una materia de 96 horas en total equivale a 2 créditos académicos y una materia de 144 horas equivale a 3 créditos.",
  },
  {
    question: "¿Tienen becas de estudio?",
    answer: "Por el momento no contamos con becas de estudio. Esperamos en un futuro poder implementarlas.",
  },
  {
    question: "¿Cuáles son los métodos de pago?",
    answer: "Al iniciar el bimestre, el área de contabilidad enviará la información detallada a cada estudiantes.",
  },
  {
    question: "¿Es obligatorio venir al Congreso Mundial de Avivamiento?",
    answer:
      "¡Sí! Nuestro deseo es que además de recibir durante el Congreso, puedas tener un tiempo con los Pastores Ricardo y Ma. Patricia Rodríguez y con los Pastores Juan Sebastián y Ana Maria, donde seas lleno del Espíritu Santo y tengas esa cercanía que nuestros estudiantes del Seminario Presencial han tenido con ellos para conocer más del Avivamiento.",
  },
];
function AdmissionsVirtual() {
  const [sectionMenuOpen, setSectionMenuOpen] = useState(false);
  const navigate = useNavigate();
  useScrollToHash();
  const handleBreadcrumbClick = useBreadcrumbClick();
  const requirementsBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="always" color="#A61A2D" href="/admisiones/virtual" onClick={handleBreadcrumbClick} key="2">
      Modalidad Admisiones Virtual
    </MuiLink>,
    <MuiLink underline="always" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Requisitos y Costos
    </MuiLink>,
  ];
  const faqBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="always" color="#A61A2D" href="/admisiones/virtual" onClick={handleBreadcrumbClick} key="2">
      Modalidad Admisiones Virtual
    </MuiLink>,
    <MuiLink underline="always" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Preguntas Frecuentes
    </MuiLink>,
  ];
  const isDesktop = useIsDesktop();
  return isDesktop ? (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={5}>
        <Box overflow="hidden" borderRadius="0px 28px 28px 0px" width="100%">
          <AdmissionsVirtualHero />
        </Box>
        <Box pr={10} mt="218px">
          <Box
            sx={{
              my: "40px",
              display: "flex",
              flexDirection: "column-reverse",
              borderRadius: "23px 0px 23px 0px",
              border: "1px solid #a7192d",
            }}
          >
            <Collapse in>
              <Box
                sx={{
                  borderRadius: "12px",
                  p: 1,
                  textAlign: "center",
                }}
              >
                <List>
                  <ListItem
                    sx={{
                      color: "#a7192d",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      ":hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => navigate("#Tutorial Proceso Inscripción")}
                  >
                    Video tutorial
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#a7192d",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      ":hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => navigate("#Requisitos de Admisión")}
                  >
                    Requisitos
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#a7192d",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      ":hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => navigate("#Formulario de Inscripción")}
                  >
                    Formulario
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#a7192d",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      ":hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => navigate("#Costos")}
                  >
                    Costos
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#a7192d",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      ":hover": {
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => navigate("#Preguntas Frecuentes")}
                  >
                    Preguntas Frecuentes
                  </ListItem>
                </List>
              </Box>
            </Collapse>
            <Button
              className="custom-buttom"
              fullWidth
              onClick={() => setSectionMenuOpen((open) => !open)}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingX: "18px",
                borderRadius: "23px 0px 23px 0px",
                background: "#a7192d",
                paddingRight: "48px",
              }}
            >
              <Typography
                sx={{
                  color: "#f5f1eb",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                }}
              >
                En esta sección
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: 5,
        }}
      >
        <Box py={3}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {requirementsBreadcrumbs}
          </Breadcrumbs>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box width="60%">
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "48px",
                fontFamily: "Inter",
                fontWeight: 700,
                textTransform: "uppercase",
                textAlign: "left",
                color: "#A61A2D",
                lineHeight: 1,
                mb: 2,
              }}
            >
              Tutorial de Inscripción
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
              }}
            >
              <LiteYouTubeEmbed
                id="CQFQ_ctJhMQ"
                title="tutorial proceso de inscripción"
                noCookie
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="center" id="Formulario de Inscripción">
              <Button
                className="custom-buttom"
                component="a"
                href="https://plataforma.afc.education/inscripcion"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  paddingX: "18px",
                  my: "50px",
                  borderRadius: "23px 0px 23px 0px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                formularo de inscripción
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              my: "30px",
              px: 5,
              width: "35%",
            }}
          >
            <RegistrationSteps titleId="Tutorial Proceso Inscripción" titleSize="26px" />
          </Box>
        </Box>
      </Box>
      <Box py={3} px={5}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {faqBreadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={5} px={5} pb={10}>
        <Box>
          <Typography
            id="Preguntas Frecuentes"
            sx={{
              zIndex: 1,
              fontSize: "38px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mb: 4,
            }}
          >
            Preguntas Frecuentes
          </Typography>
          <FaqAccordion faqs={virtualFaqs} />
          <Box display="flex" justifyContent="center" id="Formulario de Inscripción">
            <Button
              className="custom-buttom"
              component="a"
              href="https://plataforma.afc.education/inscripcion"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                paddingX: "18px",
                my: "50px",
                borderRadius: "23px 0px 23px 0px",
                background: "#a7192d",
                color: "#f5f1eb",
                fontSize: "18px",
                fontFamily: "cinzel",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Me quiero inscribir
            </Button>
          </Box>
        </Box>
        <Box mt="70px">
          <Typography
            id="Requisitos de Admisión"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mb: 2,
            }}
          >
            Requisitos
          </Typography>
          <VirtualRequirements height="300px" />
          <Typography
            id="Costos"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mt: 3,
              mb: 2,
            }}
          >
            Costos 2026
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={1}>
            <Box>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#A61A2D",
                  lineHeight: 1,
                  mb: 1,
                  textTransform: "uppercase",
                  fontFamily: "Inter",
                  fontWeight: 700,
                }}
              >
                Estudiantes Internacionales:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {virtualInternationalCosts.map((item, index) => (
                  <Box
                    sx={{
                      position: "relative",
                    }}
                    key={index}
                  >
                    <Box
                      component="span"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "2px",
                        height: "16px",
                        backgroundColor: "#A61A2D",
                        borderRadius: 1,
                      }}
                    />
                    <VirtualRequirementItem
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#090a0a",
                        lineHeight: 1,
                        fontFamily: "SourceSerif4",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </VirtualRequirementItem>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#A61A2D",
                  lineHeight: 1,
                  mb: 1,
                  textTransform: "uppercase",
                  fontFamily: "Inter",
                  fontWeight: 700,
                }}
              >
                Estudiantes Nacionales:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {virtualNationalCosts.map((item, index) => (
                  <Box
                    sx={{
                      position: "relative",
                    }}
                    key={index}
                  >
                    <Box
                      component="span"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "2px",
                        height: "16px",
                        backgroundColor: "#A61A2D",
                        borderRadius: 1,
                      }}
                    />
                    <VirtualRequirementItem
                      sx={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#090a0a",
                        lineHeight: 1,
                        fontFamily: "SourceSerif4",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </VirtualRequirementItem>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <CostsNote>{virtualCostsNote}</CostsNote>
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Box id="Tutorial Proceso Inscripción">
        <AdmissionsVirtualHero />
      </Box>
      <Container
        sx={{
          px: 5,
        }}
      >
        <Box
          sx={{
            my: "40px",
            display: "flex",
            flexDirection: "column-reverse",
            borderRadius: "23px 0px 23px 0px",
            border: "1px solid #a7192d",
          }}
        >
          <Collapse in={sectionMenuOpen}>
            <Box
              sx={{
                borderRadius: "12px",
                p: 1,
                textAlign: "center",
              }}
            >
              <List>
                <ListItem
                  sx={{
                    color: "#a7192d",
                  }}
                  onClick={() => navigate("#Tutorial Proceso Inscripción")}
                >
                  Video tutorial y paso a paso
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                  }}
                  onClick={() => navigate("#Requisitos de Admisión")}
                >
                  Requisitos
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                  }}
                  onClick={() => navigate("#Formulario de Inscripción")}
                >
                  Formulario
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                  }}
                  onClick={() => navigate("#Costos")}
                >
                  Costos
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                  }}
                  onClick={() => navigate("#Preguntas Frecuentes")}
                >
                  Preguntas Frecuentes
                </ListItem>
              </List>
            </Box>
          </Collapse>
          <Button
            className="custom-buttom"
            fullWidth
            onClick={() => setSectionMenuOpen((open) => !open)}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              paddingX: "18px",
              borderRadius: "23px 0px 23px 0px",
              background: "#a7192d",
              paddingRight: "48px",
            }}
          >
            <Typography
              sx={{
                color: "#f5f1eb",
                fontSize: "18px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              En esta sección
            </Typography>
            <IconButton
              disableRipple
              sx={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%) rotate(180deg)",
                backgroundColor: "#f6f1ea",
                color: "#a7192d",
                width: 20,
                height: 20,
                transition: "transform 0.3s ease",
                transformOrigin: "center",
                ...(sectionMenuOpen && {
                  transform: "translateY(-50%)",
                }),
              }}
            >
              <ArrowUpwardIcon
                sx={{
                  fontSize: "20px",
                }}
              />
            </IconButton>
          </Button>
        </Box>
      </Container>
      <Box
        sx={{
          mt: 8,
          position: "relative",
          width: "100%",
          height: "250px",
        }}
      >
        <LiteYouTubeEmbed
          id="CQFQ_ctJhMQ"
          title="tutorial proceso de inscripción"
          noCookie
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Container
        sx={{
          my: "30px",
          px: 5,
        }}
      >
        <RegistrationSteps />
      </Container>
      <Container
        sx={{
          px: 5,
        }}
      >
        <Box py={3}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {requirementsBreadcrumbs}
          </Breadcrumbs>
        </Box>
        <Typography
          id="Requisitos de Admisión"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontWeight: 800,
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          Requisitos
        </Typography>
        <VirtualRequirements />
        <Typography
          id="Costos"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontWeight: 800,
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Costos 2026
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={1}>
          <Box>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "16px",
                textAlign: "left",
                color: "#A61A2D",
                lineHeight: 1,
                mb: 1,
                textTransform: "uppercase",
              }}
            >
              Estudiantes Internacionales:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {virtualInternationalCosts.map((item, index) => (
                <Box
                  sx={{
                    position: "relative",
                  }}
                  key={index}
                >
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "2px",
                      height: "16px",
                      backgroundColor: "#A61A2D",
                      borderRadius: 1,
                    }}
                  />
                  <VirtualRequirementItem
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#090a0a",
                      lineHeight: 1,
                      fontFamily: "Source Serif 4",
                    }}
                  >
                    {item}
                  </VirtualRequirementItem>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "16px",
                textAlign: "left",
                color: "#A61A2D",
                lineHeight: 1,
                mb: 1,
                textTransform: "uppercase",
              }}
            >
              Estudiantes Nacionales:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {virtualNationalCosts.map((item, index) => (
                <Box
                  sx={{
                    position: "relative",
                  }}
                  key={index}
                >
                  <Box
                    component="span"
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "2px",
                      height: "16px",
                      backgroundColor: "#A61A2D",
                      borderRadius: 1,
                    }}
                  />
                  <VirtualRequirementItem
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#090a0a",
                      lineHeight: 1,
                      fontFamily: "Source Serif 4",
                    }}
                  >
                    {item}
                  </VirtualRequirementItem>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <CostsNote>{virtualCostsNote}</CostsNote>
        <Box display="flex" justifyContent="center" id="Formulario de Inscripción">
          <Button
            className="custom-buttom"
            component="a"
            href="https://plataforma.afc.education/inscripcion"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              paddingX: "18px",
              my: "20px",
              borderRadius: "23px 0px 23px 0px",
              background: "#a7192d",
              color: "#f5f1eb",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Me quiero inscribir
          </Button>
        </Box>
      </Container>
      <Container
        sx={{
          px: 5,
          pb: 5,
        }}
      >
        <Box py={3}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {faqBreadcrumbs}
          </Breadcrumbs>
        </Box>
        <Typography
          id="Preguntas Frecuentes"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontWeight: 800,
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            mb: 4,
            textTransform: "uppercase",
            fontFamily: "Inter",
          }}
        >
          {"Preguntas "}
          <br />
          {" Frecuentes"}
        </Typography>
        <FaqAccordion faqs={virtualFaqs} />
      </Container>
    </>
  );
}
export default AdmissionsVirtual;
