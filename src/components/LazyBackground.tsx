import { useState, useEffect, useRef, type ReactNode } from "react";
import { Box, Skeleton, type SxProps, type Theme } from "@mui/material";
import useIsDesktop from "../hooks/useIsDesktop";

interface LazyBackgroundProps {
  src: string;
  mobileSrc?: string;
  height?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

// Fondo con imagen que se descarga cuando entra en pantalla.
// Mientras carga se ve un fondo oscuro animado y el texto ya está visible; la foto aparece con un fundido.
function LazyBackground({ src, mobileSrc, height = "100vh", sx, children }: LazyBackgroundProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const image = useIsDesktop() ? src : (mobileSrc ?? src);
  const isLoaded = loadedSrc === image;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const img = new Image();
    img.onload = img.onerror = () => setLoadedSrc(image);
    img.src = image;
  }, [isVisible, image]);

  return (
    <Box
      ref={containerRef}
      sx={{ width: "100%", height, position: "relative", overflow: "hidden", backgroundColor: "#1c1414" }}
    >
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height="100%"
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(255,255,255,0.06)" }}
        />
      )}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: isLoaded ? `url(${image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      />
      <Box
        sx={[
          { width: "100%", height: "100%", color: "white", position: "relative" },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {children}
      </Box>
    </Box>
  );
}

export default LazyBackground;
