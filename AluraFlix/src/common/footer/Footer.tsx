import { Box } from "@mui/material";
import aluraLogo from "../../assets/aluraflix.jpg";

export const Footer = () => {
  return (
    <Box component={"footer"}>
      <img style={{ maxWidth: "200px" }} src={aluraLogo} alt="AluraFlix Logo" />
    </Box>
  );
};
