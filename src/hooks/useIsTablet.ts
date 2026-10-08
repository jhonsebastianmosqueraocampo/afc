import { useTheme, useMediaQuery } from "@mui/material";

// Tablet en vertical (600px – 899px): usa el diseño móvil, pero las fotos móviles (390px de ancho)
// se ven pixeladas y muy recortadas, así que ahí se usan las versiones de escritorio.
function useIsTablet() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between("sm", "md"));
}

export default useIsTablet;
