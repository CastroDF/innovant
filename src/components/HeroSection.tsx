"use client";

import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import CarModel from "./renders/CarModel";
import { handleScroll } from "@/utils/handleScroll";

const HeroSection: React.FC = () => {
  return (
    <Flex
      as="section"
      bg="brand.950"
      color="white"
      minH="100vh"
      id="us"
    >
      <Flex
        direction={ { base: "column", md: "row" } }
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        py={ 20 }
        px={ 6 }
        flex="1"
      >
        <Box flex="1" textAlign={ { base: "center", md: "left" } }>
          <Heading as="h1" size="3xl" mb={ 4 } fontWeight="bold">
            Bienvenido al futuro de{ " " }
            <Text as="span" color="brand.400">
              la innovación
            </Text>
          </Heading>
          <Text fontSize="lg" color="brand.100" mb={ 6 }>
            Transformamos la manera en que las empresas operan mediante tecnología avanzada.
            Nuestras soluciones están diseñadas para optimizar procesos, aumentar la eficiencia y potenciar el crecimiento en la era digital.
          </Text>
          <Button colorScheme="brand" bg="brand.400" size="lg" _hover={ { bg: "brand.500" } } onClick={ () => handleScroll('services') }>
            Comenzar
          </Button>
        </Box>
        <Box flex="1" mt={ { base: 10, md: 0 } } height="400px">
          <CarModel />
        </Box>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
