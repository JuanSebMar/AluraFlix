import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const theme = createTheme({
  fontFamily: "Helvetica",
  fontFamilyMonospace: "Helvetica",
  headings: { fontFamily: "Handgotn" },
  primaryShade: 8,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
