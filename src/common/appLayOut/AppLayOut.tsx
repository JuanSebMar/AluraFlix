import { Box, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Outlet } from "react-router";
import { Navbar } from "./navbar/Navbar";

const AppLayOut = () => {
  // const [opened, { toggle, close, open }] = useDisclosure(false);

  const isMobile = useMediaQuery(`(max-width: ${em(800)})`);

  return (
    <Box bg={"dark"}>
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default AppLayOut;
