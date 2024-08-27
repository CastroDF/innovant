"use client";

import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import useIsMobile from "@/hooks/useIsMobile";

const Footer: React.FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <Box as="footer" py={ 4 } bg="gray.800" color="white" textAlign="center">
      <Text fontSize="sm">
        Contacto:
        <Link href="tel:+5493415906229" color="teal.200"> +54 9 3415906229</Link> { isMobile ? '' : '| ' }
        <Link href="mailto:castrodiegofernando00@gmail.com" color="teal.200">castrodiegofernando00@gmail.com</Link>
      </Text>
      <Text fontSize="xs" mt={ 2 }>
        © { new Date().getFullYear() } Innovant. Todos los derechos reservados.
      </Text>
    </Box>
  );
}

export default Footer;
