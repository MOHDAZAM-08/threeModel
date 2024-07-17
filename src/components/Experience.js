import { Canvas } from "@react-three/fiber";
import Cartoon from "./Scene";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";
import Home from "./Home";
import TwoBox from "./TwoBox";
import ThreeBox from "./ThreeBox";
import FourBox from "./FourBox";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas flat linear>
        <ambientLight intensity={10} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Cartoon />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Experience;
