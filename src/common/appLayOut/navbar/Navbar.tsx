import { Box, Button, em, Flex, Paper, ThemeIcon } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconHome, IconMenu2 } from "@tabler/icons-react";
import aluraLogo from "../../../assets/aluraflix.jpg";

export const Navbar = ({ toggleDrawer }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Box
      style={{
        zIndex: 100,
        position: "fixed",
        top: 0,
        width: "100vw",
        boxShadow: "var(--mantine-shadow-xs)",
      }}
    >
      <Paper px={isMobile ? 0 : 7} py={isMobile && 10}>
        <Button
          onClick={() => toggleDrawer()}
          hiddenFrom="md"
          variant="transparent"
          c={"white"}
        >
          <IconMenu2 fontSize={20} />
        </Button>
        <Flex style={{ justifyContent: "space-between" }}>
          <img
            style={{ maxWidth: "200px" }}
            src={aluraLogo}
            alt="AluraFlix Logo"
          />
          <Box>
            <ThemeIcon>
              <IconHome style={{ color: "#fff", fontSize: "30px" }} />
            </ThemeIcon>
          </Box>
        </Flex>
      </Paper>
    </Box>
  );
};
