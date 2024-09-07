import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";

export function JsLogo(props) {
  const { nodes, materials } = useGLTF(
    "/public/models/logotipos_3d_-_aprenda_programar.glb"
  );
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.JAVASCRIPT}
          ref={targetRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/logotipos_3d_-_aprenda_programar.glb");
