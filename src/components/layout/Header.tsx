import { useState, useEffect } from "react";
import { Box, Typography, IconButton, AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, NavLink } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
import MenuDrawer from "./MenuDrawer";
import SearchDialog from "./SearchDialog";

// Páginas donde la barra siempre se muestra con fondo crema (no tienen hero oscuro debajo).
const SOLID_PATHS = ["/oferta-academica/modalidad-presencial", "/oferta-academica/modalidad-virtual"];
const ADMISSION_PATHS = ["/admisiones/presencial", "/admisiones/virtual"];

function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();
  const isDesktop = useIsDesktop();

  // El menú queda fijo todo el tiempo; al bajar del hero cambia a fondo crema.
  useEffect(() => {
    const alwaysSolid = SOLID_PATHS.includes(pathname) || (isDesktop && ADMISSION_PATHS.includes(pathname));
    const updateSolid = () => {
      const threshold = ADMISSION_PATHS.includes(pathname) ? window.innerHeight * 0.55 : window.innerHeight;
      setIsSolid(alwaysSolid || window.scrollY > threshold - 10);
    };
    updateSolid();
    window.addEventListener("scroll", updateSolid);
    return () => window.removeEventListener("scroll", updateSolid);
  }, [pathname, isDesktop]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isSolid ? 1 : 0}
        sx={{
          backgroundColor: isSolid ? "#f5f1eb" : "transparent",
          color: isSolid ? "black" : "white",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <Toolbar>
          <NavLink to="/">
            <Box
              component="img"
              src={isSolid ? "/assets/logos/afcnegro.png" : "/assets/logos/afcblanco.png"}
              alt="Logo"
              sx={{ height: 40 }}
            />
          </NavLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            display={isDesktop ? "flex" : "unset"}
            alignItems={isDesktop ? "center" : "unset"}
            gap={isDesktop ? 1 : "unset"}
            mr={isDesktop ? 2 : 3}
            onClick={() => setSearchOpen(true)}
            sx={{ cursor: "pointer" }}
          >
            <IconButton edge="end" color="inherit" aria-label="Buscar">
              <SearchIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            {isDesktop && (
              <Typography sx={{ fontSize: "20px", fontFamily: "Inter", fontWeight: 300, textTransform: "uppercase" }}>
                BUSCAR
              </Typography>
            )}
          </Box>
          <Box
            display={isDesktop ? "flex" : "unset"}
            alignItems={isDesktop ? "center" : "unset"}
            gap={isDesktop ? 1 : "unset"}
            onClick={() => setMenuOpen(true)}
          >
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            {isDesktop && (
              <Typography sx={{ fontSize: "20px", fontFamily: "Inter", fontWeight: 300, textTransform: "uppercase" }}>
                menu
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={menuOpen} setOpen={setMenuOpen} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Header;
