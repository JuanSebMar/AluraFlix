import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import aluraLogo from "../../../assets/aluraflix.jpg";

export const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#333", padding: "10px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          style={{ maxWidth: "200px" }}
          src={aluraLogo}
          alt="AluraFlix Logo"
        />
        <Box>
          <IconButton>
            <HomeRoundedIcon sx={{ color: "#fff", fontSize: "30px" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
