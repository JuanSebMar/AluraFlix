import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

const AppLayOut = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};
export default AppLayOut;
