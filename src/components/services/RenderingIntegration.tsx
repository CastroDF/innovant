import React from "react";
import { Text } from "@chakra-ui/react";
import ServiceSection from "./ServiceSection";
import Image from 'next/image';

const RenderingIntegration: React.FC = () => {
  return (
    <ServiceSection
      id="rendering-integration"
      title="Integración de Software de Renderizado"
      description={
        <>
          <Text fontSize="xl" color="brand.100" mb={ 6 }>
            Integramos nuestro software de renderizado 3D en tus páginas web, proporcionando una experiencia de usuario fluida y visualmente impactante.
          </Text>
          <Text fontSize="lg" color="brand.100">
            Ofrecemos soporte completo para asegurar una integración perfecta que maximice la calidad visual de tus productos.
          </Text>
        </>
      }
    >
      <Image
        src="/images/3d-design.png"
        alt="3d design integration"
        width={ 500 }
        height={ 300 }
      />
    </ServiceSection>
  );
};

export default RenderingIntegration;
