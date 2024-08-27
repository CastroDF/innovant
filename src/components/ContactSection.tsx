import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const ContactSection: React.FC = () => {
  return (
    <Box
      as="section"
      id="contact"
      py={ 20 }
      px={ 6 }
      bg="brand.950"
      color="white"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxW="md" w='full' mx="auto">
        <Heading as="h2" size="xl" textAlign="center" mb={ 10 }>
          Contáctanos
        </Heading>
        <FormControl id="name" mb={ 6 }>
          <FormLabel color="brand.100">Nombre</FormLabel>
          <Input type="text" bg="brand.900" color="white" borderColor="brand.400" />
        </FormControl>
        <FormControl id="email" mb={ 6 }>
          <FormLabel color="brand.100">Email</FormLabel>
          <Input type="email" bg="brand.900" color="white" borderColor="brand.400" />
        </FormControl>
        <FormControl id="message" mb={ 6 }>
          <FormLabel color="brand.100">Mensaje</FormLabel>
          <Textarea bg="brand.900" color="white" borderColor="brand.400" />
        </FormControl>
        <Button colorScheme="brand" bg="brand.400" size="lg" width="full" _hover={ { bg: "brand.500" } }>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;
