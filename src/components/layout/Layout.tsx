import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RegistrationFloat from "../RegistrationFloat";

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw",
        bgcolor: "#FFF",
      }}
    >
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
      <RegistrationFloat />
    </Box>
  );
}

export default Layout;
