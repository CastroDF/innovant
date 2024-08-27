"use client";

import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { MTLLoader, OBJLoader } from "three-stdlib";
import { Group } from "three";
import { Box, Spinner } from "@chakra-ui/react";

const FridgeModelContent: React.FC = () => {
  const [model, setModel] = useState<Group | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      const mtlLoader = new MTLLoader();
      const objLoader = new OBJLoader();

      const materials = await mtlLoader.loadAsync("/models/fridge/fridge.mtl");
      materials.preload();
      objLoader.setMaterials(materials);

      const obj = await objLoader.loadAsync("/models/fridge/fridge.obj");
      setModel(obj);
    };

    loadModel();
  }, []);

  const group = useRef<Group>(null!);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
  });

  return model ? (
    <group ref={ group } position={ [0, -5, 0] } castShadow receiveShadow>
      <primitive object={ model } scale={ 0.4 } />
    </group>
  ) : (
    <Html center>
      <Spinner w="40px" h="40px" />
    </Html>
  );
};

const FridgeModel: React.FC = () => {
  return (
    <Box w="full" h="full" cursor="grab" _active={ { cursor: "grabbing" } }>
      <Canvas
        shadows
        camera={ {
          position: [50, 50, 50],
          near: 0.1,
          far: 1000,
        } }
      >
        <ambientLight intensity={ 0.6 } />
        <directionalLight
          intensity={ 1 }
          position={ [10, 10, 20] }
          castShadow
          shadow-mapSize-width={ 1024 }
          shadow-mapSize-height={ 1024 }
        />
        <FridgeModelContent />
        <OrbitControls enableZoom={ true } minDistance={ 30 } maxDistance={ 50 } />
      </Canvas>
    </Box>
  );
};

export default FridgeModel;
