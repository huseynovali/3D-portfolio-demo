import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import * as THREE from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from "@react-three/fiber";
import { EventHandlers } from "@react-three/fiber/dist/declarations/src/core/events";
import { JSX } from "react/jsx-runtime";

export function JsLogo(props: JSX.IntrinsicAttributes & Omit<ExtendedColors<Overwrite<Partial<THREE.Group<THREE.Object3DEventMap>>, NodeProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>>>, NonFunctionKeys<{ position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; }>> & { position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; } & EventHandlers) {
  const { nodes, materials } = useGLTF(
    "/public/models/logotipos_3d_-_aprenda_programar.glb"
  );
  const targetRef = useRef<THREE.Mesh>(null);

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
           geometry={(nodes.Object_22 as THREE.Mesh).geometry }
          material={materials.JAVASCRIPT}
          ref={targetRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/logotipos_3d_-_aprenda_programar.glb");
