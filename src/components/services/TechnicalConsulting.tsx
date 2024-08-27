import React from "react";
import { Text } from "@chakra-ui/react";
import ServiceSection from "./ServiceSection";
import Image from 'next/image';

const TechnicalConsulting: React.FC = () => {
  return (
    <ServiceSection
      id="technical-consulting"
      title="Consultoría Técnica"
      description={
        <>
          <Text fontSize="xl" color="brand.100" mb={ 6 }>
            Ofrecemos asesoramiento especializado para integrar la última tecnología en tus proyectos, optimizando el rendimiento y la eficiencia de tus operaciones.
          </Text>
          <Text fontSize="lg" color="brand.100">
            Nuestra consultoría abarca desde la planificación hasta la implementación, asegurando el éxito a largo plazo.
          </Text>
        </>
      }
    >
      <Image
        src="/images/consultant.png"
        alt="3d design integration"
        width={ 500 }
        height={ 420 }
      />
    </ServiceSection>
  );
};

export default TechnicalConsulting;
