import { Box, Group, ThemeIcon } from "@mantine/core";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import aluraLogo from "../../../assets/aluraflix.jpg";

export const Navbar = () => {
  return (
    <Box style={{ backgroundColor: "#333", padding: "10px" }}>
      <Group style={{ justifyContent: "space-between" }}>
        <img
          style={{ maxWidth: "200px" }}
          src={aluraLogo}
          alt="AluraFlix Logo"
        />
        <Box>
          <ThemeIcon>
            <HomeRoundedIcon style={{ color: "#fff", fontSize: "30px" }} />
          </ThemeIcon>
        </Box>
      </Group>
    </Box>
  );
};
