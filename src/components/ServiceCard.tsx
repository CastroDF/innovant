import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

interface ServiceCardProps {
  title: string;
  description: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link }) => {
  return (
    <Box bg="brand.900" p={ 6 } borderRadius="md" height="100%" display="flex" flexDirection="column" justifyContent="space-between">
      <Box>
        <Heading as="h3" size="lg" mb={ 4 } color="white">
          { title }
        </Heading>
        <Text color="brand.200">
          { description }
        </Text>
      </Box>
      <Flex justify="flex-end" mt={ 4 }>
        <Button
          as="a"
          href={ link }
          variant="ghost"
          colorScheme="teal"
          _hover={ { bg: "brand.500", color: "white" } }
        >
          Ver más -{ ">" }
        </Button>
      </Flex>
    </Box>
  );
};

export default ServiceCard;
