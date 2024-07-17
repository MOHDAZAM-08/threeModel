import { OrbitControls, ScrollControls } from "@react-three/drei";
// import { Office } from "./Office";
// import { Overlay } from "./Overlay";
import Model from "./Scene.jsx";
import Exprience from "./Exprience.js";

export const ThreeModelViewer = () => {

  return (
    <>
      <ScrollControls >
        <Exprience/>
      </ScrollControls>
    </>
  );
};