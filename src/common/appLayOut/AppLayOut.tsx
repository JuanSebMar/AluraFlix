import { Box, Container, em } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Outlet } from "react-router";
import { Navbar } from "./navbar/Navbar";

const AppLayOut = () => {
  const [opened, { toggle, close, open }] = useDisclosure(false);

  const isMobile = useMediaQuery(`(max-width: ${em(800)})`);

  return (
    <>
      <Navbar toggleDrawer={toggle} />
      <Box
        style={{
          display: isMobile ? "inherit" : "flex",
          height: "100vh",
          maxWidth: "100vw",
        }}
      >
        <Box
          style={{
            display: "flex",
            overflowY: "auto",
            maxWidth: isMobile ? "100vw" : "calc(100vw - 220px)",
            minWidth: isMobile ? "100vw" : "calc(100vw - 220px)",
          }}
        >
          <Container pt={40} pb={20} fluid px={0} miw={"100%"}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default AppLayOut;
