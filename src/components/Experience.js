import { Canvas } from "@react-three/fiber";
import Cartoon from "./Apple";
import {  OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";



gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas flat linear>
        <directionalLight intensity={2}  position={[-2,3,-4]} />
        {/* <ambientLight intensity={6}/> */}
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Cartoon />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Experience;
