import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Computer } from "./Computer";
import HeroCamera from "./HeroCamera";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "./services";
import { ReactLogo } from "./ReactLogo";
import { JsLogo } from "./JsLogo";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 300px)" });
  const size = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <div>
      <div className="w-full text-center py-5">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Ali <span className="waving-hand">👋</span>
        </p>
      </div>
      <div style={{ width: "100%", height: "80vh" }}>
        <Suspense>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, -50]} />
            {/* <OrbitControls /> */}
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 5]} />

            <HeroCamera isMobile={isMobile}>
              <Computer
                scale={2}
                position={size.deskPosition}
                rotation={[0, 0, 0]}
              />
              <group>
                <ReactLogo
                  scale={2}
                  position={size.reactLogoPosition}
                  rotation={[0, 0, 0]}
                />
              </group>
              <group>
                <JsLogo
                  scale={2}
                  position={size.jsLogoPosition}
                  rotation={[0, 0, 0]}
                />
              </group>
            </HeroCamera>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
