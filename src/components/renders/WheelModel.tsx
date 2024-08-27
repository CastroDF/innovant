"use client";

import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { OBJLoader } from "three-stdlib";
import { Group } from "three";
import useIsMobile from "@/hooks/useIsMobile";

const CarModelContent: React.FC = () => {
  const [model, setModel] = useState<Group | null>(null);
  const { isMobile } = useIsMobile();

  useEffect(() => {
    const loadModel = async () => {
      const objLoader = new OBJLoader();

      const obj = await objLoader.loadAsync("/models/wheel/wheel.obj");
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
    <group ref={ group } position={ [0, -7, 0] } castShadow receiveShadow>
      <primitive object={ model } scale={ isMobile ? 0.1 : 0.08 } />
    </group>
  ) : null;
};

const CarModel: React.FC = () => {
  return (
    <Canvas
      shadows
      camera={ {
        position: [10, 10, 20],
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
      <React.Suspense fallback={ <Html center>Cargando...</Html> }>
        <CarModelContent />
        <OrbitControls enableZoom={ true } minDistance={ 20 } maxDistance={ 30 } />
      </React.Suspense>
    </Canvas>
  );
};

export default CarModel;
