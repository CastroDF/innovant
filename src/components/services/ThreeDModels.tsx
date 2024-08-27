import React from "react";
import { Text } from "@chakra-ui/react";
import ServiceSection from "./ServiceSection";
import Carousel3D from "../Carousel3D";

const ThreeDModels: React.FC = () => {
  return (
    <ServiceSection
      id="3d-models"
      title="Catálogos Web con Modelos 3D"
      description={ <>
        <Text fontSize="xl" color="brand.100" mb={ 6 }>
          Integramos tus productos en catálogos web con visualizaciones 3D interactivas y seguras, brindando a tus clientes una experiencia inmersiva y detallada en cualquier dispositivo.
        </Text>
        <Text fontSize="lg" color="brand.100">
          Nuestros catálogos se adaptan a tus necesidades y se integran sin problemas en tu infraestructura web, mejorando tu presencia online.
        </Text>
      </> }
    >
      <Carousel3D />
    </ServiceSection>
  );
};

export default ThreeDModels;
