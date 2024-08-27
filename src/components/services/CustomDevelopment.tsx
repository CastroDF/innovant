import React from "react";
import { Text } from "@chakra-ui/react";
import ServiceSection from "./ServiceSection";

const CustomDevelopment: React.FC = () => {
  return (
    <ServiceSection
      id="custom-development"
      title="Desarrollo Propio"
      description={
        <>
          <Text fontSize="xl" color="brand.100" mb={ 6 }>
            Ofrecemos desarrollo a medida para satisfacer todas tus necesidades técnicas, desde aplicaciones web personalizadas hasta integraciones complejas.
          </Text>
          <Text fontSize="lg" color="brand.100">
            Nuestras soluciones son escalables y flexibles, preparadas para crecer junto a tu negocio.
          </Text>
        </>
      }
    >
      Left Side
    </ServiceSection>
  );
};

export default CustomDevelopment;
