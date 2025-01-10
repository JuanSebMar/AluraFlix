import { Box, Flex, Text } from "@mantine/core";

export const Footer = () => {
  return (
    <Box
      component={"footer"}
      style={{
        position: "absolute",
        color: "white",
      }}
    >
      <Flex>
        <Text variant="body2">
          © 2024 Alura Geek. Todos los derechos reservados.
        </Text>
      </Flex>
    </Box>
  );
};
