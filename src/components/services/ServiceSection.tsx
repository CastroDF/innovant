import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ id, title, description, children }) => {
  return (
    <Flex
      as="section"
      py={ 20 }
      px={ { base: 4, md: 32 } }
      bg="brand.950"
      color="white"
      minH="100vh"
      alignItems="center"
      id={ id }
      direction={ { base: "column", md: "row" } }
    >
      <Box mx="auto" flex="1">
        <Heading as="h2" size="2xl" mb={ 10 } color="brand.400">
          { title }
        </Heading>
        <Box fontSize="xl" color="brand.100" mb={ 8 }>
          { description }
        </Box>
      </Box>
      <Box flex="1" ml={ { md: 40 } } height="600px" w="full">
        { children }
      </Box>
    </Flex>
  );
};

export default ServiceSection;
