import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/public/models/react_logo.glb");
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.rotation, {
      y: Math.PI * 2,
      duration: 2,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0]}
          scale={20}
          ref={targetRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/react_logo.glb");
