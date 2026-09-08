"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Environment } from "@react-three/drei";


const RenderModel = ({children, className}) => {
  return (
    <Canvas
      shadows
      className={clsx("w-screen h-screen -z-10 relative", className)}>
        <Suspense fallback>
            {children}
        </Suspense>
        <Environment preset="forest" />
        <ambientLight intensity={0.4} />
        <directionalLight color="#d48bff" position={[0, 0, 8]} />
        <spotLight position={[-8, -8, 0]} angle={1.5} penumbra={1} intensity={15} color="#c084fc" castShadow />
        <pointLight position={[0, -10, 0]} intensity={8} distance={8} color="#b26bff" />
    </Canvas>
  );
}

export default RenderModel;