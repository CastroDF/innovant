"use client";

import React from "react";
import { Box, Button, Flex, HStack, Link } from "@chakra-ui/react";
import { handleScroll } from "@/utils/handleScroll";

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      bg="brand.950"
      color="white"
      py={ 4 }
      position="fixed"
      top={ 0 }
      width="100%"
      zIndex={ 1000 }
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={ 6 }
        align="center"
        justify="space-between"
      >
        <Box fontSize="2xl" fontWeight="bold" mr={ 4 }>
          Innovant
        </Box>
        <HStack spacing={ 8 }>
          <Link href="#us" fontWeight="medium">Nosotros</Link>
          <Link href="#services" fontWeight="medium">Servicios</Link>
          <Link href="#contact" fontWeight="medium">Contacto</Link>
          <Button variant="outline" colorScheme="teal" onClick={ () => handleScroll("services") }>
            Demo
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
