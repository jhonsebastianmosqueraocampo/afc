import type { RefObject } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import useIsDesktop from "../../hooks/useIsDesktop";
interface TeacherCardProps {
  image: string;
  name: string;
  description: string;
  bg: string;
  swiperRef: RefObject<SwiperType | null>;
  index: number;
}

function TeacherCard({ image, name, description, bg, swiperRef, index }: TeacherCardProps) {
  // Las descripciones con varios nombres vienen separadas por "-" y se muestran como lista.
  function renderDescription(text: string) {
    return text
      .split("-")
      .filter((part) => part.trim() !== "")
      .map((item, partIndex) => (
        <div key={partIndex}>
          {"- "}
          {item.trim()}
        </div>
      ));
  }
  const isDesktop = useIsDesktop();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        mr: isDesktop && index === 4 ? 5 : 0,
        ml: isDesktop && index === 0 ? 5 : 0,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: isDesktop ? "330px" : "200px",
          height: isDesktop ? "360px" : "200px",
          objectFit: "cover",
          backgroundPosition: "center",
          borderRadius: "28px 0px 0px 0px",
          flex: 1,
          position: "absolute",
          top: 0,
          left: isDesktop ? 55 : 0,
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          background: bg,
          mt: isDesktop ? "10%" : "30%",
          pt: isDesktop ? "7%" : "37%",
          pb: isDesktop ? "10%" : "unset",
          width: isDesktop ? "75%" : "70%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 15,
            right: 12,
            display: "flex",
            gap: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#f6f1ea",
              color: "#a7192d",
              width: 20,
              height: 20,
              p: 1,
              opacity: index === 0 ? 0.7 : 1,
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
              backgroundColor: "#f6f1ea",
              color: "#a7192d",
              width: 20,
              height: 20,
              p: 1,
              opacity: index === 4 ? 0.7 : 1,
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
        <Box
          sx={{
            pl: isDesktop ? 25 : 3,
            pr: isDesktop ? 10 : "unset",
            pb: isDesktop ? "unset" : 3,
          }}
        >
          <Typography
            fontSize="20px"
            color="#f5f1eb"
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {name}
          </Typography>
          <Typography
            fontSize="16px"
            color="#f5f1eb"
            sx={{
              fontFamily: "SourceSerif4",
              fontWeight: 400,
              pr: isDesktop ? "unset" : 2,
            }}
          >
            {renderDescription(description)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default TeacherCard;
