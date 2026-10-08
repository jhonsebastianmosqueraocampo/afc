import { Box, Typography, Button, Container, Breadcrumbs, Divider, styled } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import useIsDesktop from "../../hooks/useIsDesktop";
import { useScrollToHash, useBreadcrumbClick } from "../../hooks/useHashNavigation";
import { coursePlanPdf, presencialCosts } from "../../data/costs";

const CostItem = styled(Typography)({
  "::first-letter": {
    marginLeft: "7px",
  },
});

function PresencialModality() {
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
      Modalidad Presencial
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
      href="/oferta-academica/modalidad-presencial#Metodología"
      onClick={handleBreadcrumbClick}
      key="3"
    >
      Modalidad Presencial
    </MuiLink>,
    <MuiLink underline="none" color="#A61A2D" href="#" onClick={handleBreadcrumbClick} key="4">
      Costos 2026
    </MuiLink>,
  ];
  const isDesktop = useIsDesktop();
  return isDesktop ? (
    <Box
      id="inicio"
      sx={{
        px: 5,
        pt: 10,
      }}
    >
      <Box py={3} id="Metodología">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {methodologyBreadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="stretch" gap={10}>
        <Box>
          <Box
            id="Metodología"
            sx={{
              mt: 1,
              width: "100%",
              height: "420px",
              position: "relative",
              backgroundImage: "url('/assets/13MODALIDADPRESENCIAL.webp')",
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
                Nuestro programa tiene una duración de tres años, divididos en 12 bimestres, es decir, cuatro bimestres
                por año. En cada bimestre se cursan cinco o seis asignaturas, en el horario de Martes a Viernes de 8:30
                a.m. a 1:10 p.m.
              </Typography>
              <Button
                className="custom-buttom"
                component="a"
                href={coursePlanPdf.presencial.desktop}
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
        <Box mt={10}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
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
                <CostItem
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
                </CostItem>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <>
      <Container
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
          {" Presencial"}
        </Typography>
      </Container>
      <Box
        sx={{
          mt: 1,
          width: "100%",
          height: "420px",
          position: "relative",
          backgroundImage: "url('/assets/14.webp')",
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
            Nuestro programa tiene una duración de tres años, divididos en 12 bimestres, es decir, cuatro bimestres por
            año. En cada bimestre se cursan cinco o seis asignaturas, en el horario de Martes a Viernes de 8:30 a.m. a
            1:10 p.m.
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
          href={coursePlanPdf.presencial.mobile}
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
            textTransform: "uppercase",
          }}
        >
          Costos 2026
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
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
              <CostItem
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
              </CostItem>
            </Box>
          ))}
        </Box>
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
export default PresencialModality;
