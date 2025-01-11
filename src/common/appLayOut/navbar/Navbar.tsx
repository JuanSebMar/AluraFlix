import { Group, TextInput } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 750px)");
  const [opened, { toggle }] = useDisclosure(false);

  const links = [
    { link: "/about", label: "Features" },
    { link: "/pricing", label: "Pricing" },
    { link: "/learn", label: "Learn" },
    { link: "/community", label: "Community" },
  ];

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      style={{
        textDecoration: "none",
        color: "inherit",
        fontWeight: "500",
        fontSize: "16px",
        padding: "8px 12px",
        transition: "color 0.3s ease",
        cursor: "pointer",
      }}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header
      style={{
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      <Group
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: isMobile ? "0" : "50px",
          gap: "15px",
        }}
      >
        <nav
          style={{
            display: isMobile ? "none" : "flex",
            gap: "10px",
            color: "white",
          }}
        >
          {items}
        </nav>

        <TextInput />
      </Group>
    </header>
  );
};
