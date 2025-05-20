// ModelViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

useGLTF.preload('/images/moseee.obj'); // Preload the model
// Preload the model to improve performance

// Reusable Model component
function Model({ model }) {
  const { scene } = useGLTF(model); // Loads the model from public folder
  return <primitive object={scene} scale={1.5} />;
}

export default function ModelViewer({ modelling }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model model={modelling} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
