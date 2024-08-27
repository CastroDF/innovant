import React from "react";
import { Box, Heading, Text, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  return (
    <Box
      as="section"
      id="services"
      py={ 20 }
      px={ 6 }
      bg="brand.950"
      color="white"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      <Box w="full">
        <Heading as="h2" size="xl" textAlign="center" mb={ 10 } color="brand.400">
          Nuestros Servicios
        </Heading>
        <SimpleGrid columns={ { base: 1, md: 2, lg: 3 } } spacing={ 10 }>
          <ServiceCard
            title="Catálogos Web con Modelos 3D"
            description="Llevamos tus productos a la web con visualizaciones 3D interactivas y seguras."
            link="#3d-models"
          />
          <ServiceCard
            title="Integración de Software de Renderizado"
            description="Integramos nuestro avanzado software de renderizado 3D en tus páginas web existentes."
            link="#rendering-integration"
          />
          <ServiceCard
            title="Consultoría Técnica"
            description="Asesoramiento especializado para integrar la última tecnología en tus proyectos."
            link="#technical-consulting"
          />
          {/* <ServiceCard
            title="Desarrollo Propio"
            description="Ofrecemos soluciones de desarrollo a medida para cubrir todas tus necesidades técnicas."
            link="#custom-development"
          /> */}
          <ServiceCard
            title="Realidad Aumentada"
            description="Implementación de soluciones de realidad aumentada para experiencias inmersivas."
            link="#augmented-reality"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ServicesSection;
