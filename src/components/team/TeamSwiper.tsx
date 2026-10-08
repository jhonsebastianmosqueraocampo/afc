import { useRef } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import useIsDesktop from "../../hooks/useIsDesktop";
import useIsTablet from "../../hooks/useIsTablet";
import TeacherCard from "./TeacherCard";
function TeamSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const teachers = [
    {
      image: `/assets/${isDesktop || isTablet ? "7PASTORdt" : "8PASTOR"}.webp`,
      name: "Pastor Ricardo Rodríguez Bermúdez",
      description:
        "Ingeniero Industrial, Magister en estudios teológicos de Southwestern Báptist Theological Seminary y Doctor en Ministerio – Global University.  Pastor principal, fundador del Centro Mundial de Avivamiento y del Seminario Bíblico Avivamiento Faith College.",
      bg: "#A61A2D",
    },
    {
      image: `/assets/${isDesktop || isTablet ? "8PASTORAdt" : "9PASTORA"}.webp`,
      name: "Pastora María Patricia Pérez de la Torre",
      description:
        "Teóloga de la Universidad Bautista de Cali y Magíster en Estudios Teológicos de Southwestern Baptist Theological Seminary. Fundadora y pastora principal del Centro Mundial de Avivamiento y del Seminario Bíblico Avivamiento Faith College.",
      bg: "#090A0A",
    },
    {
      image: `/assets/${isDesktop || isTablet ? "9JUANYdt" : "10JUANY"}.webp`,
      name: "Pastor Juan Sebastián Rodríguez Pérez",
      description:
        "Teólogo del Seminario Bíblico Asambleas de Dios, Magíster en Divinidades de Fuller Theological Seminary, Magíster en Estudios Teológicos de Southwestern Baptist Theological Seminary y Doctor en Ministerio de Global University. Director de Educación Teológica del Centro Mundial de Avivamiento.",
      bg: "#A61A2D",
    },
    {
      image: `/assets/${isDesktop || isTablet ? "10ANAdt" : "11ANA"}.webp`,
      name: "Pastora Ana María Pardo de Rodríguez",
      description:
        "Teóloga de la Universidad Bautista de Cali, Magíster en Estudios Teológicos de Southwestern Baptist Theological Seminary y Candidata a Doctorado en Ministerio de Fuller Theological Seminary Rectora del Seminario Bíblico Avivamiento Faith College.",
      bg: "#090A0A",
    },
    {
      image: `/assets/${isDesktop || isTablet ? "11MAESTROSdt" : "12MAESTROS"}.webp`,
      name: "",
      description:
        "- Pastores Ricardo Mauricio y Sunner Rodríguez- Pastora Lina Juliana Rodríguez- Pastores Alejandro y Liliana Rodríguez- Pastora Nancy Salom Califa- Pastores Arturo y Nancy Salom- Pastores Álvaro y Duvy Pardo- Pastores Juan Pablo y Mónica Velandia- Pastores Alejandro y Angélica Valdés- Pastora Dora Plazas- Andrés David Pardo Guzmán- Pastor Pedro Nel Torres- Pastor Edgar Enrique Torres- Pastor Orlando Horacio Vélez- Nataly Andrea Salom Califa- Alejandra Salom Califa- Diana Caro- Benjamin Castillo Rodríguez- Emanuel Rodríguez Mayorga- María Fernanda Torres Castro",
      bg: "#A61A2D",
    },
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
        slidesPerView={isDesktop ? 1.2 : 1}
        autoHeight
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {teachers.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TeacherCard
                image={item.image}
                name={item.name}
                description={item.description}
                bg={item.bg}
                swiperRef={swiperRef}
                index={index}
                key={index}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
export default TeamSwiper;
