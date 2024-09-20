import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ExtendedColors,
  Overwrite,
  NodeProps,
  NonFunctionKeys,
  Vector3,
  Euler,
  Matrix4,
  Quaternion,
  Layers,
} from "@react-three/fiber";
import { EventHandlers } from "@react-three/fiber/dist/declarations/src/core/events";
import { JSX } from "react/jsx-runtime";
import * as THREE from "three";
import { Group, Object3DEventMap } from "three";

export function ReactLogo(
  props: JSX.IntrinsicAttributes &
    Omit<
      ExtendedColors<
        Overwrite<
          Partial<Group<Object3DEventMap>>,
          NodeProps<Group<Object3DEventMap>, Group>
        >
      >,
      NonFunctionKeys<{
        position?: Vector3;
        up?: Vector3;
        scale?: Vector3;
        rotation?: Euler;
        matrix?: Matrix4;
        quaternion?: Quaternion;
        layers?: Layers;
        dispose?: (() => void) | null;
      }>
    > & {
      position?: Vector3;
      up?: Vector3;
      scale?: Vector3;
      rotation?: Euler;
      matrix?: Matrix4;
      quaternion?: Quaternion;
      layers?: Layers;
      dispose?: (() => void) | null;
    } & EventHandlers
) {
  const { nodes, materials } = useGLTF("/public/models/react_logo.glb");
  const targetRef = useRef<THREE.Mesh>(null);

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.rotation, {
        y: Math.PI * 2,
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    }
  });

  return (
    <group {...(props as any)}>
      <group scale={0.01}>
        <mesh
          geometry={(nodes["React-Logo_Material002_0"] as THREE.Mesh).geometry}
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
