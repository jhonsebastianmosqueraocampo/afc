import { Box, Typography, Button, Container, Breadcrumbs, Divider, styled } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
import useIsTablet from "../../hooks/useIsTablet";
import { useScrollToHash, useBreadcrumbClick } from "../../hooks/useHashNavigation";
import { coursePlanPdf, virtualCostsNote, virtualInternationalCosts, virtualNationalCosts } from "../../data/costs";
import CostsNote from "../../components/CostsNote";

const VirtualCostItem = styled(Typography)({
  "::first-letter": {
    marginLeft: "7px",
  },
});

function VirtualModality() {
  useScrollToHash();
  const handleBreadcrumbClick = useBreadcrumbClick();
  const methodologyBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/oferta-academica"
      onClick={handleBreadcrumbClick}
      key="2"
    >
      Oferta Académica
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="3">
      Modalidad Virtual
    </MuiLink>,
  ];
  const costBreadcrumbs = [
    <MuiLink underline="always" color="#A61A2D" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/oferta-academica"
      onClick={handleBreadcrumbClick}
      key="2"
    >
      Oferta Académica
    </MuiLink>,
    <MuiLink
      underline="always"
      color="#A61A2D"
      href="/oferta-academica/modalidad-virtual#Metodología"
      onClick={handleBreadcrumbClick}
      key="3"
    >
      Modalidad Virtual
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="4">
      Costos 2026
    </MuiLink>,
  ];
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  return isDesktop ? (
    <Box
      id="Metodología"
      sx={{
        px: 5,
        pt: 10,
      }}
    >
      <Box py={3}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {methodologyBreadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="stretch" gap={10}>
        <Box>
          <Box
            sx={{
              mt: 1,
              width: "100%",
              height: "420px",
              position: "relative",
              backgroundImage: "url('/assets/Metodologiamodalidadvirtual.webp')",
              backgroundColor: "#1c1414",
              backgroundSize: "cover",
              backgroundPosition: "right",
              borderRadius: "0px 38px 38px 0px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                pt: 1,
                px: 4,
                display: "flex",
                width: "35%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 1,
                py: 4,
              }}
            >
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  sx={{
                    zIndex: 1,
                    fontSize: "26px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#f5f1eb",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Metodologías e intensidad horaria
                </Typography>
                <Divider
                  sx={{
                    backgroundColor: "#A61A2D",
                    width: "100%",
                    height: "3px",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  zIndex: 1,
                  fontSize: "16px",
                  textAlign: "left",
                  color: "#f5f1eb",
                  lineHeight: 1.2,
                  fontFamily: "SourceSerif4",
                  fontWeight: 500,
                }}
              >
                Nuestro programa tiene una duración total de tres años, distribuidos en 9 periodos académicos (tres por
                año), cada uno con una duración aproximada de 14 semanas. Durante cada periodo, el estudiante cursa
                entre 5 y 6 materias. No existe un horario fijo de clases, ya que todo el contenido está disponible en la
                plataforma.
              </Typography>
              <Button
                className="custom-buttom"
                component="a"
                href={coursePlanPdf.virtual.desktop}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  paddingX: "18px",
                  marginTop: "50px",
                  borderRadius: "23px 0px 23px 0px",
                  background: "#a7192d",
                  color: "#f5f1eb",
                  fontSize: "18px",
                  fontFamily: "cinzel",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Descargar el plan de curso
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mt={10} width="50%">
          <Typography
            id="Costos"
            sx={{
              zIndex: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 700,
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            Costos 2026
          </Typography>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: "16px",
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mt: 2,
              mb: 1,
              fontFamily: "SourceSerif4",
              fontWeight: 500,
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
                <VirtualCostItem
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
                </VirtualCostItem>
              </Box>
            ))}
          </Box>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: "16px",
              textAlign: "left",
              color: "#A61A2D",
              lineHeight: 1,
              mt: 3,
              mb: 1,
              fontFamily: "SourceSerif4",
              fontWeight: 500,
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
                <VirtualCostItem
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
                </VirtualCostItem>
              </Box>
            ))}
          </Box>
          <CostsNote>{virtualCostsNote}</CostsNote>
        </Box>
      </Box>
    </Box>
  ) : (
    <>
      <Container
        id="Metodología"
        sx={{
          px: 3,
          pt: 10,
        }}
      >
        <Box py={3}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {methodologyBreadcrumbs}
          </Breadcrumbs>
        </Box>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          {"Modalidad "}
          <br />
          {" Virtual"}
        </Typography>
      </Container>
      <Box
        sx={{
          mt: 1,
          width: "100%",
          height: "420px",
          position: "relative",
          backgroundImage: `url('/assets/${isTablet ? "Metodologiamodalidadvirtual" : "Metodologiavirtualmobile"}.webp')`,
          backgroundColor: "#1c1414",
          backgroundSize: "cover",
          backgroundPosition: "right",
          borderRadius: "0px 0px 38px 0px",
          overflow: "hidden",
        }}
      >
        <Container
          sx={{
            pt: 1,
            px: 4,
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: 1,
            pb: 3,
          }}
        >
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography
              sx={{
                zIndex: 1,
                fontSize: "26px",
                fontFamily: "Inter",
                fontWeight: 500,
                textAlign: "left",
                color: "#f5f1eb",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Metodologías e intensidad horaria
            </Typography>
            <Divider
              sx={{
                backgroundColor: "#A61A2D",
                width: "100%",
                height: "3px",
              }}
            />
          </Box>
          <Typography
            sx={{
              zIndex: 1,
              fontSize: "16px",
              textAlign: "left",
              color: "#f5f1eb",
              lineHeight: 1.2,
              fontFamily: "SourceSerif4",
              fontWeight: 500,
            }}
          >
            Nuestro programa tiene una duración total de tres años, distribuidos en 9 periodos académicos (tres por
            año), cada uno con una duración aproximada de 14 semanas. Durante cada periodo, el estudiante cursa entre 5
            y 6 materias. No existe un horario fijo de clases, ya que todo el contenido está disponible en la plataforma.
          </Typography>
        </Container>
      </Box>
      <Container
        id="Plan de Estudios"
        sx={{
          px: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          className="custom-buttom"
          component="a"
          href={coursePlanPdf.virtual.mobile}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            paddingX: "18px",
            marginTop: "50px",
            borderRadius: "23px 0px 23px 0px",
            background: "#a7192d",
            color: "#f5f1eb",
            fontSize: "18px",
            fontFamily: "cinzel",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Descargar el plan de curso
        </Button>
      </Container>
      <Container
        sx={{
          px: 3,
          pt: 7,
        }}
      >
        <Box py={3}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {costBreadcrumbs}
          </Breadcrumbs>
        </Box>
        <Typography
          id="Costos"
          sx={{
            zIndex: 1,
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: 700,
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            mb: 2,
          }}
        >
          Costos 2026
        </Typography>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "16px",
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            mt: 2,
            mb: 1,
            fontFamily: "SourceSerif4",
            fontWeight: 500,
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
              <VirtualCostItem
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
              </VirtualCostItem>
            </Box>
          ))}
        </Box>
        <Typography
          sx={{
            zIndex: 1,
            fontSize: "16px",
            textAlign: "left",
            color: "#A61A2D",
            lineHeight: 1,
            mt: 3,
            mb: 1,
            fontFamily: "SourceSerif4",
            fontWeight: 500,
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
              <VirtualCostItem
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
              </VirtualCostItem>
            </Box>
          ))}
        </Box>
        <CostsNote>{virtualCostsNote}</CostsNote>
        <Box display="flex" justifyContent="center">
          <Button
            className="custom-buttom"
            component="a"
            href="https://plataforma.afc.education/inscripcion"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              paddingX: "18px",
              mt: "20px",
              mb: "40px",
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
    </>
  );
}
export default VirtualModality;
