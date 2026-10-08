import { Box, Container, IconButton, Drawer } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { NavLink } from "react-router-dom";
import useIsDesktop from "../../hooks/useIsDesktop";
import MenuList from "./MenuList";
import { menuItems } from "./menuData";

interface MenuDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MenuDrawer({ open, setOpen }: MenuDrawerProps) {
  const isDesktop = useIsDesktop();

  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <Box
        component={isDesktop ? "div" : Container}
        sx={{
          pt: 5,
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#A61A2D",
        }}
        role="presentation"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" px={isDesktop ? 5 : 0}>
          <NavLink to="/">
            <Box component="img" src="/assets/logos/afcblanco.png" alt="Logo" sx={{ height: 40 }} />
          </NavLink>
          <IconButton color="inherit" aria-label="cerrar menú" onClick={() => setOpen(false)}>
            <HighlightOffIcon sx={{ color: "#f5f1eb", opacity: 0.7 }} />
          </IconButton>
        </Box>
        <MenuList data={menuItems} setOpen={setOpen} />
      </Box>
    </Drawer>
  );
}

export default MenuDrawer;
