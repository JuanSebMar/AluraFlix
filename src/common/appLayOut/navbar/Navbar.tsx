import { Button, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import { useState } from "react";
import aluraImag from "../../../assets/aluraflix.jpg";
import { NewVideo } from "../../../components/NewVideo";
import SearchBar from "./SearchBar";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 750px)");
  const [opened, setModal] = useState(false);
  return (
    <>
      <NewVideo close={() => setModal(!opened)} open={opened} />
      <header
        style={{
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <Image style={{ height: "50px" }} src={aluraImag} />
        <Group
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: isMobile ? "0" : "50px",
            gap: "15px",
          }}
        >
          <SearchBar />
        </Group>
        <Button
          rightSection={<IconCircleDashedPlus />}
          onClick={() => setModal(!opened)}
        >
          Nuevo
        </Button>
      </header>
    </>
  );
};
