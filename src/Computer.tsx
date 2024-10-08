import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three';

export function Computer(props:any) {
  const { nodes, materials } = useGLTF(
    "/public/models/low_poly_gaming_desk.glb"
  );

  const monitorTrexture = useTexture("/public/textures/monitor.PNG");
  const carpetTexture = useTexture("/public/textures/carpet.jpg");
  return (
    <group {...props} dispose={null}>
      <pointLight position={[0, 1, 2]} intensity={100} />
      <pointLight position={[0, -5, 2]} intensity={100} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-1, -2.35, -2]}>
        <planeGeometry args={[10, 5]} />
        <meshStandardMaterial color="gray" />
        <meshStandardMaterial map={carpetTexture} />
      </mesh>

      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.145, -2.841, -1.506]} scale={[1, 1, 0.876]}>
            <mesh
              geometry={(nodes.Object_4 as THREE.Mesh).geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={(nodes.Object_5 as THREE.Mesh).geometry }
              material={materials.Plastic}
            />
          </group>
          <group position={[-0.913, 0.552, -1.553]} scale={[0.523, 0.1, 0.339]}>
            <mesh
              geometry={(nodes.Object_7 as THREE.Mesh).geometry }
              material={materials["7355608"]}
            >
              <meshMatcapMaterial map={monitorTrexture} />
            </mesh>
            <mesh
              geometry={(nodes.Object_8 as THREE.Mesh).geometry }
              material={materials.black}
            />
            <mesh
              geometry={(nodes.Object_9 as THREE.Mesh).geometry }
              material={materials.blue_light}
            />
          </group>

          <group
            position={[-0.899, 0.474, -0.429]}
            rotation={[0, 0, -Math.PI]}
            scale={[-1.405, 0.024, 0.421]}
          >
            <mesh
              geometry={(nodes.Object_11 as THREE.Mesh).geometry }
              material={materials.blue_light}
            />
            <mesh
              geometry={(nodes.Object_12 as THREE.Mesh).geometry }
              material={materials.black}
            />
          </group>
          <group
            position={[0.793, 0.465, -0.781]}
            scale={[0.114, 0.107, 0.204]}
          >
            <mesh
              geometry={(nodes.Object_14 as THREE.Mesh).geometry }
              material={materials.black}
            />
            <mesh
              geometry={(nodes.Object_15 as THREE.Mesh).geometry }
              material={materials.blue_light}
            />
          </group>
          <group position={[-2.962, 1.463, -1.59]} scale={[0.438, 1, 1.09]}>
            <mesh
              geometry={(nodes.Object_17 as THREE.Mesh).geometry }
              material={materials.black}
            />
            <mesh
              geometry={(nodes.Object_18 as THREE.Mesh).geometry }
              material={materials.blue_light}
            />
            <mesh
              geometry={(nodes.Object_19 as THREE.Mesh).geometry }
              material={materials.Plastic}
            />
          </group>
          <group
            position={[0.888, 1.043, -1.684]}
            rotation={[-1.702, 0, Math.PI / 2]}
            scale={[-0.235, 0.037, 0.235]}
          >
            <mesh
              geometry={(nodes.Object_21 as THREE.Mesh).geometry }
              material={materials.black}
            />
            <mesh
              geometry={(nodes.Object_22 as THREE.Mesh).geometry }
              material={materials.blue}
            />
          </group>
          <group position={[0.71, 0.474, -0.754]} scale={0.576}>
            <mesh
              geometry={(nodes.Object_24 as THREE.Mesh).geometry }
              material={materials.Plastic}
            />
            <mesh
              geometry={(nodes.Object_25 as THREE.Mesh).geometry }
              material={materials.blue_light}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/public/models/low_poly_gaming_desk.glb");
