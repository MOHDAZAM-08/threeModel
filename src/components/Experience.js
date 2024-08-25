import { Canvas } from "@react-three/fiber";
import Cartoon from "./Apple";
import {  OrbitControls, Preload } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Suspense } from "react";
import Loader from "./Loader";



gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas >
        <directionalLight intensity={1}  position={[-2,3,-4]} />
        {/* <ambientLight intensity={6}/> */}
        <OrbitControls enableZoom={false}
        minPolarAngle={Math.PI/2}
        maxPolarAngle={Math.PI/2}/>
        <Suspense fallback={<Loader/>}>
          <Cartoon />
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  );
};

export default Experience;
