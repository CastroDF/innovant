"use client";

import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import ServiceSection from "./ServiceSection";
import Image from 'next/image';
import PlaneAR from "../PlaneAR";

const AugmentedReality: React.FC = () => {
  const [isARAvailable, setIsARAvailable] = useState(false);

  useEffect(() => {
    const isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isAppleDevice) {
      setIsARAvailable(true);
    }
  }, []);

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

          <Text fontSize="sm" color="brand.300" mt={ 4 }>
            Si tienes un iPhone, iPad o iPod Touch compatible, puedes disfrutar de nuestra experiencia de realidad aumentada directamente en esta página. Simplemente haz clic en el modelo interactivo para visualizarlo en tu entorno real utilizando Quick Look AR. Si tu dispositivo no es compatible, verás una imagen estática representativa.
          </Text>
        </>
      }
    >
      <Flex justifyContent="center" alignItems="center" w="full" h="full">
        { isARAvailable ? (
          <PlaneAR />
        ) : (
          <Image
            src="/images/ar.png"
            alt="3d design integration"
            width={ 500 }
            height={ 350 }
          />
        ) }
      </Flex>
    </ServiceSection >
  );
};

export default AugmentedReality;
