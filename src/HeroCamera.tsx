import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
  const [sizeZ, setSizeZ] = useState(25);
  const [sizeX, setSizeX] = useState(0);
  const group = useRef();
  const handleClick = () => {
    setSizeZ(sizeZ === 25 ? 4 : 25);
    setSizeX(sizeX === 0 ? -2 : 0);
  };
       
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [sizeX, 3, sizeZ], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={group} onClick={handleClick}>
      {children}
    </group>
  );
};

export default HeroCamera;
