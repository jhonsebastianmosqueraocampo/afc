import { useEffect, useState } from "react";
import { Box, ButtonBase, IconButton, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import useIsDesktop from "../hooks/useIsDesktop";

const FORM_URL = "https://plataforma.afc.education/inscripcion";
const FORM_SECTION_ID = "Formulario de Inscripción";
const MINIMIZED_KEY = "afc-registration-float-minimized";
const MOBILE_BAR_HEIGHT = 76;

const colors = {
  cream: "#f5f1eb",
  wine: "#64141f",
  red: "#a7192d",
  redHover: "#6e101c",
  text: "#3b3b3b",
};

// Esquina inferior derecha redondeada, como en las piezas gráficas del AFC.
const pieceRadius = "0px 0px 28px 0px";

const focusRing = {
  "&.Mui-focusVisible, &:focus-visible": { outline: `3px solid ${colors.wine}`, outlineOffset: "3px" },
};

function readMinimized() {
  try {
    return sessionStorage.getItem(MINIMIZED_KEY) === "1";
  } catch {
    return false;
  }
}

function saveMinimized(value: boolean) {
  try {
    sessionStorage.setItem(MINIMIZED_KEY, value ? "1" : "0");
  } catch {
    // sin almacenamiento disponible: solo dura mientras la página esté abierta
  }
}

// Se oculta mientras la sección del formulario de inscripción esté en pantalla.
function useFormSectionVisible() {
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const sections = document.querySelectorAll(`[id="${FORM_SECTION_ID}"]`);
    if (!sections.length) return;
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? onScreen.add(entry.target) : onScreen.delete(entry.target)));
      setVisible(onScreen.size > 0);
    });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname, isDesktop]);

  return visible;
}

function RegisterButton({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <ButtonBase
      component="a"
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Inscríbete (abre el formulario en una pestaña nueva)"
      sx={{
        minHeight: 48,
        width: fullWidth ? "100%" : "auto",
        px: 2.5,
        gap: 1.5,
        justifyContent: "space-between",
        background: colors.red,
        color: colors.cream,
        borderRadius: pieceRadius,
        fontFamily: "Epilogue, sans-serif",
        fontWeight: 600,
        fontSize: "17px",
        whiteSpace: "nowrap",
        transition: "background-color 0.2s ease",
        "&:hover": { background: colors.redHover },
        ...focusRing,
      }}
    >
      Inscríbete
      <NorthEastIcon sx={{ fontSize: 20 }} aria-hidden />
    </ButtonBase>
  );
}

// "Mosca" de inscripciones: tarjeta fija en desktop (minimizable) y barra inferior en celular.
// Queda por debajo del menú (Drawer, z-index 1200) para que este la tape al abrirse.
function RegistrationFloat() {
  const isDesktop = useIsDesktop();
  const formVisible = useFormSectionVisible();
  const [minimized, setMinimized] = useState(readMinimized);

  const toggleMinimized = (value: boolean) => {
    setMinimized(value);
    saveMinimized(value);
  };

  const hiddenSx = {
    opacity: formVisible ? 0 : 1,
    visibility: formVisible ? "hidden" : "visible",
    transform: formVisible ? "translateY(16px)" : "none",
    transition: "opacity 0.25s ease, transform 0.25s ease, visibility 0.25s",
  } as const;

  if (!isDesktop) {
    return (
      <>
        {/* Espacio reservado para que la barra no tape el final de la página */}
        <Box aria-hidden sx={{ height: MOBILE_BAR_HEIGHT, background: "#A61A2D" }} />
        <Box
          component="aside"
          aria-label="Inscripciones AFC"
          sx={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
            height: MOBILE_BAR_HEIGHT,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            background: colors.cream,
            borderTop: `3px solid ${colors.wine}`,
            boxShadow: "0 -6px 20px rgba(0,0,0,0.18)",
            paddingBottom: "env(safe-area-inset-bottom)",
            ...hiddenSx,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{ fontFamily: "cinzel", fontWeight: 700, fontSize: "18px", color: colors.wine, lineHeight: 1.1 }}
            >
              Inscripciones
            </Typography>
            <Typography sx={{ fontFamily: "Epilogue, sans-serif", fontSize: "14px", color: colors.text, mt: 0.5 }}>
              Presencial · Virtual
            </Typography>
          </Box>
          <RegisterButton />
        </Box>
      </>
    );
  }

  if (minimized) {
    return (
      <ButtonBase
        onClick={() => toggleMinimized(false)}
        aria-label="Mostrar inscripciones"
        sx={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1050,
          minHeight: 48,
          px: 2.5,
          gap: 1,
          background: colors.red,
          color: colors.cream,
          borderRadius: pieceRadius,
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          fontFamily: "Epilogue, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          "&:hover": { background: colors.redHover },
          ...focusRing,
          ...hiddenSx,
        }}
      >
        Inscripciones
        <AddIcon sx={{ fontSize: 20 }} aria-hidden />
      </ButtonBase>
    );
  }

  return (
    <Box
      component="aside"
      aria-label="Inscripciones AFC"
      sx={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 1050,
        width: 300,
        boxSizing: "border-box",
        p: 3,
        background: colors.cream,
        borderTop: `4px solid ${colors.wine}`,
        borderRadius: pieceRadius,
        boxShadow: "0 12px 32px rgba(0,0,0,0.28)",
        ...hiddenSx,
      }}
    >
      <IconButton
        onClick={() => toggleMinimized(true)}
        aria-label="Minimizar inscripciones"
        size="small"
        sx={{ position: "absolute", top: 8, right: 8, color: colors.wine, ...focusRing }}
      >
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography
        sx={{
          fontFamily: "Epilogue, sans-serif",
          fontWeight: 500,
          fontSize: "13px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: colors.wine,
        }}
      >
        Inscripciones AFC
      </Typography>
      <Typography
        component="p"
        sx={{
          fontFamily: "cinzel",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: 1.15,
          color: colors.wine,
          mt: 1.5,
        }}
      >
        Tu propósito comienza aquí
      </Typography>
      <Typography sx={{ fontFamily: "Epilogue, sans-serif", fontSize: "16px", color: colors.text, mt: 1.5, mb: 2.5 }}>
        Presencial · Virtual
      </Typography>
      <RegisterButton fullWidth />
    </Box>
  );
}

export default RegistrationFloat;
