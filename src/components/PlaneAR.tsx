import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

const PlaneAR: React.FC = () => {
  const usdzAudi = '/models/car/audi_r8.usdz';
  const usdzFogo = '/models/fogo/fogo.usdz';

  return (
    <Flex direction="column" align="center" justify="center">
      <Button
        as="a"
        href={ usdzAudi }
        rel="ar"
        w="200px"
        variant="outline" colorScheme="teal"
      >
        Ver Auto
      </Button>

      <Button
        as="a"
        href={ usdzFogo }
        rel="ar"
        w="200px"
        variant="outline" colorScheme="teal"
        mt={ 6 }
      >
        Ver Fogonero
      </Button>
    </Flex>
  );
};

export default PlaneAR;
