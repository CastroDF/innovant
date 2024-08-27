import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ServiceSection from "./ServiceSection";
import Image from 'next/image';

const AugmentedReality: React.FC = () => {
  return (
    <ServiceSection
      id="augmented-reality"
      title="Realidad Aumentada"
      description={
        <>
          <Text fontSize="xl" color="brand.100" mb={ 6 }>
            Implementamos soluciones de realidad aumentada para crear experiencias inmersivas que conecten a los usuarios con tus productos.
          </Text>
          <Text fontSize="lg" color="brand.100">
            Nuestras soluciones AR son personalizadas, compatibles con múltiples dispositivos y alineadas con la identidad de tu marca.
          </Text>
        </>
      }
    >
      <Flex justifyContent="center" alignItems="center" w="full" h="full">
        <Image
          src="/images/ar.png"
          alt="3d design integration"
          width={ 500 }
          height={ 350 }
        />
      </Flex>
    </ServiceSection>
  );
};

export default AugmentedReality;
