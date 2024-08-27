"use client";

import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import FridgeModel from "./renders/FridgeModel";
import SculptureModel from "./renders/SculptureModel";
import WheelModel from "./renders/WheelModel";

const Carousel3D: React.FC = () => {
  const [currentModel, setCurrentModel] = useState(0);

  const handleNext = () => {
    setCurrentModel((prev) => (prev + 1) % 3);
  };

  const handlePrevious = () => {
    setCurrentModel((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <Flex h="full" w="full" pos="relative" flexDir="column" justifyContent="center">
      <Box style={ { display: currentModel === 0 ? "block" : "none" } } h="400px">
        <FridgeModel />
      </Box>
      <Box style={ { display: currentModel === 1 ? "block" : "none" } } h="400px">
        <SculptureModel />
      </Box>
      <Box style={ { display: currentModel === 2 ? "block" : "none" } } h="400px">
        <WheelModel />
      </Box>

      <Button
        variant="ghost"
        colorScheme="teal"
        _hover={ { color: "white" } }
        pos="absolute"
        top="50%"
        left={ 0 }
        onClick={ handlePrevious }
        fontSize="4xl"
        width="45px"
        height="45px"
        borderRadius="50%"
      >
        { "<" }
      </Button>
      <Button
        variant="ghost"
        colorScheme="teal"
        _hover={ { color: "white" } }
        pos="absolute"
        top="50%"
        right={ 0 }
        onClick={ handleNext }
        fontSize="4xl"
        width="45px"
        height="45px"
        borderRadius="50%"
      >
        { ">" }
      </Button>
    </Flex>
  );
};

export default Carousel3D;
