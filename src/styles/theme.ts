import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E3F9F5", // Mint Green
      100: "#C8F0E9", // Mint Green
      200: "#9DFDD3", // Tiffany Blue
      300: "#70CCB8", // Tiffany Blue
      400: "#43BA9C", // Mint
      500: "#2AA182", // Zomp
      600: "#1F7E64", // Viridian
      700: "#145947", // Castleton Green
      800: "#296858", // Pine Green
      900: "#0A3429", // Dark Green
      950: "#00110b", // Night
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "brand.950",
        color: "white",
      },
    },
  },
});

export default theme;
