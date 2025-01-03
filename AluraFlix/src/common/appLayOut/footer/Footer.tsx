import { Box, Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        position: "absolute",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2024 Alura Geek. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};
