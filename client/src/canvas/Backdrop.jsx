import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.85} // Higher intensity to make this light stand out
        ambient={0.55}
        position={[-5, 5, -9]}
        color="#008000" // Darker green
      />
      <RandomizedLight
        amount={4}
        radius={7}
        intensity={0.7}
        ambient={0.35}
        position={[0, 7, -7]}
        color="#00A000" // Mid-tone green
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
