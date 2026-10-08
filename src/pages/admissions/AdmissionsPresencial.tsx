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
import AdmissionsPresencialHero from "./AdmissionsPresencialHero";
import FaqAccordion from "../../components/FaqAccordion";
import { useScrollToHash, useBreadcrumbClick } from "../../hooks/useHashNavigation";
import { presencialCosts } from "../../data/costs";
import RegistrationSteps from "./RegistrationSteps";

const presencialRequirements = [
  "Ministerio activo dentro de Avivamiento. Para aspirantes de otra congregación, presentar una recomendación pastoral.",
  "Ser bachiller (con ICFES).",
  "Seguro médico.",
  "Disponibilidad de tiempo para asistir a las clases programadas de martes a viernes de 8:30 a.m. a 1:10 p.m.",
];
const RequirementItem = styled(Typography)({
  "::first-letter": {
    marginLeft: "7px",
  },
});
const presencialFaqs = [
  {
    question: "¿Cuáles son los requisitos para ingresar al seminario?",
    answer: `• Haber estado activo en algún ministerio de tu iglesia durante los últimos 6 meses.
              • Presentar un certificado de formación teológica de tu iglesia.
              • Tener disponibilidad para el horario académico: martes a viernes de 8:30 a.m. a 1:10 p.m.
              • Presentar diploma y acta de bachiller junto con los resultados del ICFES.
              • Contar con un seguro médico y presentar la certificación de afiliación a EPS o SISBEN.
              `,
  },
  {
    question: "¿Puedo inscribirme si pertenezco a otra iglesia?",
    answer:
      "Sí. Es importante que tu pastor esté informado y de acuerdo con tu decisión de estudiar en nuestro seminario. Para ello, deberá diligenciar un formulario de recomendación pastoral.",
  },
  {
    question: "¿Necesito haber cursado alguna especialización previa para inscribirme? ",
    answer:
      "Si perteneces a Avivamiento, debes haber completado el nivel de capacitación. Si perteneces a otra denominación, deberás presentar certificados de formación teológica de tu iglesia.",
  },
  {
    question: "¿Debo presentar algún certificado pastoral? ",
    answer: "Sí, se te solicitará una constancia pastoral que valide tu servicio activo en la iglesia.",
  },
  {
    question: "¿Hay un límite de edad para postularse? ",
    answer:
      "No, el seminario está abierto a todas las personas que sientan el llamado a prepararse para servir al Señor.",
  },
  {
    question: "¿Cuánto cuesta el formulario de inscripción y cómo se paga?",
    answer: "Tiene un costo de $80.000 COP y el pago se realiza a través de nuestra plataforma mediante el botón PSE.",
  },
  {
    question: "¿Qué documentos debo presentar en el proceso de admisión?",
    answer: `• Documento de identidad
• Diploma y acta de bachiller
• Resultados del ICFES
• Certificación de afiliación a EPS o SISBEN
• Certificado de formación teológica cursada
• Recomendación ministerial
• Referencia personal
• Autorización para menores de edad (si aplica)
`,
  },
  {
    question: "¿Cómo sé si fui admitido en el seminario?",
    answer:
      "Después de completar el proceso de admisión, recibirás una respuesta en un plazo de 3 a 5 días hábiles a través del correo electrónico.",
  },
  {
    question: "¿En cuánto tiempo recibiré respuesta después de la entrevista?",
    answer: "Luego de la entrevista, recibirás la respuesta a tu solicitud en un plazo de 3 a 5 días hábiles.",
  },
  {
    question: "¿El seminario ofrece modalidad virtual o solo presencial?",
    answer: "Ofrecemos modalidad presencial y virtual.",
  },
  {
    question: "¿Cuáles son los horarios de clase?",
    answer: "Las clases presenciales son de martes a viernes, de 8:30 a.m. a 1:10 p.m.",
  },
  {
    question: "¿Se pueden combinar los estudios del seminario con un trabajo o universidad?",
    answer:
      "Sí, pero dependerá de la organización de tus horarios, ya que debes cumplir con la asistencia y responsabilidades académicas del seminario.",
  },
  {
    question: "¿El seminario ofrece clases los fines de semana o en horario nocturno?",
    answer: "No. Actualmente solo contamos con el horario diurno de martes a viernes, de 8:30 a.m. a 1:10 p.m.",
  },
  {
    question: "¿Cuánto cuesta la matrícula y la pensión?",
    answer: `• Matrícula: $300.000 COP (anual)
• Pensión: $740.000 COP (bimestral)
`,
  },
  {
    question: "¿Cuáles son los métodos de pago disponibles?",
    answer: "Al iniciar el bimestre, el área de contabilidad enviará la información detallada a cada estudiante.",
  },
  {
    question: "¿Se pueden hacer pagos fraccionados?",
    answer:
      "Sí, los pagos deben realizarse dentro de las fechas estipuladas por el seminario o según acuerdos específicos con el estudiante.",
  },
  {
    question: "¿Los egresados del Gimnasio Campestre Cristiano tienen algún beneficio en el pago?",
    answer: "Sí, están exentos del pago del formulario de inscripción.",
  },
  {
    question: "¿Existen becas o descuentos para estudiantes?",
    answer: "Sí, el seminario ofrece ciertos descuentos al inicio del año académico.",
  },
  {
    question: "¿Cuánto dura la formación en el seminario?",
    answer: "El programa tiene una duración de 3 años.",
  },
  {
    question: "¿Cuántas materias se cursan por bimestre?",
    answer: "Dependiendo de la carga académica, se cursan entre 5 y 6 materias por bimestre.",
  },
  {
    question: "¿Qué título se obtiene al finalizar el programa?",
    answer: "Teología Bíblica y Ministerial con énfasis en Consejería.",
  },
  {
    question: "¿El título tiene reconocimiento oficial?",
    answer:
      "Actualmente, el seminario no cuenta con certificación ante el Ministerio de Educación. Sin embargo, estamos trabajando para obtenerla.",
  },
  {
    question: "¿El seminario ofrece especializaciones o cursos adicionales?",
    answer: "No, pero contamos con convenios con universidades que permiten obtener un título profesional.",
  },
  {
    question: "¿El seminario ofrece alojamiento para estudiantes de otras ciudades?",
    answer: "No, por el momento no contamos con este servicio.",
  },
  {
    question: "¿Es obligatorio tener seguro médico para inscribirse?",
    answer: "Sí, es un requisito indispensable para garantizar atención en caso de emergencia.",
  },
  {
    question: "¿Puedo visitar el seminario antes de inscribirme?",
    answer:
      "Sí, te invitamos a conocer nuestras instalaciones para que puedas familiarizarte con el ambiente de aprendizaje.",
  },
  {
    question: "¿Cómo puedo contactar al seminario en caso de dudas?",
    answer: "Puedes comunicarte con nosotros a través de WhatsApp al número +57 311 2798984.",
  },
  {
    question: "¿El seminario tiene convenios con otras instituciones o iglesias?",
    answer: "Sí, contamos con convenios con la Universidad Bautista de Cali y Global University.",
  },
];
function AdmissionsPresencial() {
  const [sectionMenuOpen, setSectionMenuOpen] = useState(false);
  const navigate = useNavigate();
  useScrollToHash();
  const handleBreadcrumbClick = useBreadcrumbClick();
  const requirementsBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/admisiones/presencial#Tutorial Proceso Inscripción"
      onClick={handleBreadcrumbClick}
      key="2"
    >
      Admisiones Presencial
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Requisitos y Costos
    </MuiLink>,
  ];
  const faqBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/admisiones/presencial#Tutorial Proceso Inscripción"
      onClick={handleBreadcrumbClick}
      key="2"
    >
      Admisiones Presencial
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Preguntas Frecuentes
    </MuiLink>,
  ];
  const isDesktop = useIsDesktop();
  return isDesktop ? (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={5}>
        <Box id="Tutorial Proceso Inscripción" overflow="hidden" borderRadius="0px 28px 28px 0px" width="100%">
          <AdmissionsPresencialHero />
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
              Tutorial de Inscripción
            </Typography>
            <Box
              id="Tutorial Proceso Inscripción"
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
            <RegistrationSteps />
          </Box>
        </Box>
      </Box>
      <Box py={3} px={5}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {faqBreadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={5} px={5}>
        <Box>
          <Typography
            id="Preguntas Frecuentes"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 700,
              textTransform: "uppercase",
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mb: 4,
            }}
          >
            {"Preguntas "}
            <br />
            {" Frecuentes"}
          </Typography>
          <FaqAccordion faqs={presencialFaqs} />
        </Box>
        <Box>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {presencialRequirements.map((item, index) => (
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
                <RequirementItem
                  sx={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#090a0a",
                    lineHeight: 1,
                    fontFamily: "SourceSerif4",
                    fontWeight: 300,
                  }}
                >
                  {item}
                </RequirementItem>
              </Box>
            ))}
          </Box>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {presencialCosts.map((item, index) => (
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
                <RequirementItem
                  sx={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#090a0a",
                    lineHeight: 1,
                    fontFamily: "SourceSerif4",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </RequirementItem>
              </Box>
            ))}
          </Box>
        </Box>
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
          Me quiero inscribir
        </Button>
      </Box>
    </>
  ) : (
    <>
      <Box id="Tutorial Proceso Inscripción">
        <AdmissionsPresencialHero />
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
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                  onClick={() => navigate("#Tutorial Proceso Inscripción")}
                >
                  Video tutorial y paso a paso
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                  onClick={() => navigate("#Requisitos de Admisión")}
                >
                  Requisitos
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                  onClick={() => navigate("#Formulario de Inscripción")}
                >
                  Formulario
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                    fontFamily: "Inter",
                    fontWeight: 400,
                  }}
                  onClick={() => navigate("#Costos")}
                >
                  Costos
                </ListItem>
                <ListItem
                  sx={{
                    color: "#a7192d",
                    fontFamily: "Inter",
                    fontWeight: 400,
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
              background: sectionMenuOpen ? "#6e101c" : "#a7192d",
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
          title="Tutorial proceso de inscripción"
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {presencialRequirements.map((item, index) => (
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
              <RequirementItem
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
              </RequirementItem>
            </Box>
          ))}
        </Box>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {presencialCosts.map((item, index) => (
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
              <RequirementItem
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
              </RequirementItem>
            </Box>
          ))}
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
            fontFamily: "Inter",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            mb: 4,
          }}
        >
          {"Preguntas "}
          <br />
          {" Frecuentes"}
        </Typography>
        <FaqAccordion faqs={presencialFaqs} />
      </Container>
    </>
  );
}
export default AdmissionsPresencial;
