import { useRef } from "react";
import { Box, Typography, IconButton, Breadcrumbs, Divider } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import useIsDesktop from "../../hooks/useIsDesktop";
import useIsTablet from "../../hooks/useIsTablet";
import { useBreadcrumbClick } from "../../hooks/useHashNavigation";
function HistorySwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const slides = [
    {
      image: `/assets/${isDesktop || isTablet ? "2HISTORIAdt" : "2HISTORIA"}.webp`,
      description: `A mediados del año 2015, los Pastores Ricardo y Ma. Patricia
                    Rodríguez compartieron con la congregación del Centro
                    Mundial de Avivamiento un profundo sentir del Espíritu
                    Santo: formalizar la educación bíblica que venían
                    impartiendo con tanta bendición.`,
      title: "El sentir del Espíritu",
    },
    {
      image: `/assets/${isDesktop || isTablet ? "3HISTORIAdt" : "3HISTORIA"}.webp`,
      description:
        "Este anhelo se consolidó en la creación de un seminario bíblico que sirviera como semillero de ministros, formándolos en las áreas bíblica, teológica y ministerial.",
      title: "un sueño con propósito",
    },
    {
      image: `/assets/${isDesktop || isTablet ? "4HISTORIAdt" : "4HISTORIA"}.webp`,
      description:
        "El propósito: que la nueva generación de ministros esté plenamente preparada para sostener y dar continuidad al gran avivamiento que por más de 25 años Dios ha puesto en la iglesia.",
      title: `Preparando una 
generación de fuego`,
    },
    {
      image: `/assets/${isDesktop || isTablet ? "5HISTORIAdt.webp" : "5historia1.webp"}`,
      description:
        "En obediencia al Espíritu Santo, este sueño se hizo realidad en febrero de 2016, cuando abrió sus puertas el seminario Avivamiento Faith College, recibiendo a su primera generación de 22 estudiantes.",
      title: `Nace Avivamiento 
Faith College`,
    },
    {
      image: `/assets/${isDesktop || isTablet ? "6HISTORIAdt" : "7HISTORIA"}.webp`,
      description:
        "Estos jóvenes pioneros, motivados y comprometidos, culminaron tres años de formación, convirtiéndose en la primera promoción de ministros acreditados con el título en Teología Bíblica y Ministerial con énfasis en Consejería.",
      title: `Una promoción 
con legado`,
    },
    {
      image: `${isDesktop ? "" : isTablet ? "/assets/HISTORIAdt.webp" : "/assets/6HISTORIA.webp"}`,
      description:
        "El deseo de los Pastores va más allá. Su meta es que la iglesia se convierta en la comunidad mejor preparada en Biblia de América Latina, a través de una universidad reconocida por el Estado y con impacto en toda la región",
      title: `Una visión 
sin límites`,
    },
  ];
  const handleBreadcrumbClick = useBreadcrumbClick();
  const breadcrumbs = [
    <MuiLink underline="always" color="#f5f1eb" href="/" onClick={handleBreadcrumbClick} key="1">
      Home
    </MuiLink>,
    <MuiLink underline="always" color="#f5f1eb" href="/sobre-nosotros#Misión" onClick={handleBreadcrumbClick} key="2">
      Sobre Nosotros
    </MuiLink>,
    <MuiLink underline="none" color="#f5f1eb" href="#" onClick={handleBreadcrumbClick} key="3">
      Nuestra Historia
    </MuiLink>,
  ];
  return (
    <Box
      sx={{
        width: "100%",
        pb: 1,
        height: "auto",
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={isDesktop ? 1.1 : 1}
        autoHeight
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map(
          (item, index) =>
            item.image !== "" && (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: isDesktop ? "80%" : "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: isDesktop ? "flex-start" : "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mt: 3,
                      width: "100%",
                      height: isDesktop ? "600px" : isTablet ? "75vw" : "650px",
                      position: "relative",
                      backgroundImage: `url(${item.image})`,
                      backgroundColor: "#1c1414",
                      backgroundSize: "cover",
                      backgroundPosition: "start",
                      borderRadius: "0px 0px 28px 0px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        pt: isDesktop ? 4 : 0,
                        px: isDesktop ? 7 : 4,
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: isDesktop ? "flex-start" : "flex-end",
                        alignItems: isDesktop ? "flex-start" : "unset",
                        gap: 4,
                        pb: 10,
                      }}
                    >
                      {isDesktop && (
                        <>
                          <Breadcrumbs separator="›" aria-label="breadcrumb">
                            {breadcrumbs}
                          </Breadcrumbs>
                          <Typography
                            id="Historia"
                            sx={{
                              zIndex: 1,
                              fontSize: "28px",
                              fontFamily: "Inter",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              textAlign: "left",
                              color: "#f5f1eb",
                              lineHeight: 1,
                              mb: 5,
                            }}
                          >
                            Nuestra Historia
                          </Typography>
                        </>
                      )}
                      <Typography
                        sx={{
                          zIndex: 1,
                          fontSize: "16px",
                          textAlign: isDesktop ? "left" : "center",
                          color: "#f5f1eb",
                          lineHeight: 1.2,
                          fontFamily: "SourceSerif4",
                          fontWeight: 400,
                          order: isDesktop ? 3 : "unset",
                          width: isDesktop ? "35%" : "unset",
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        pt={isDesktop ? 5 : 0}
                        pb={isDesktop ? "unset" : 7}
                      >
                        <Typography
                          sx={{
                            zIndex: 1,
                            fontSize: "16px",
                            fontFamily: "Inter",
                            fontWeight: 500,
                            textTransform: "uppercase",
                            textAlign: "left",
                            color: "#f5f1eb",
                            pl: isDesktop ? 0 : 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Divider
                          sx={{
                            backgroundColor: "#A61A2D",
                            width: `${(index + 1) * 14}%`,
                            height: "5px",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        right: 12,
                        left: 12,
                        display: "flex",
                        gap: 2,
                        justifyContent: "space-between",
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "#a7192d",
                          color: "#f6f1ea",
                          width: 20,
                          height: 20,
                          p: 1,
                          opacity: index === 0 ? 0 : 1,
                          "&:hover": {
                            backgroundColor: "#fff",
                          },
                        }}
                        onClick={() => {
                          return swiperRef.current?.slidePrev();
                        }}
                      >
                        <KeyboardBackspaceIcon
                          sx={{
                            fontSize: "20px",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: "#a7192d",
                          color: "#f6f1ea",
                          width: 20,
                          height: 20,
                          p: 1,
                          opacity: isDesktop ? (index === 4 ? 0 : 1) : index === 5 ? 0 : 1,
                          "&:hover": {
                            backgroundColor: "#fff",
                          },
                        }}
                        onClick={() => {
                          return swiperRef.current?.slideNext();
                        }}
                      >
                        <ArrowRightAltIcon
                          sx={{
                            fontSize: "20px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </Box>
  );
}
export default HistorySwiper;
