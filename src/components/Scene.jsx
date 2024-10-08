import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Leva, useControls } from 'leva'; 
gsap.registerPlugin(ScrollTrigger);



export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.glb');
  const laptop = useRef(null);
  const { scene, camera } = useThree();
  const tl = useRef(gsap.timeline());


  const controls = useControls({
    cameraPosition: {
      value: { x: 0, y: 1.5, z: 5 },
      step: 0.1,
    },
    scenePosition: {
      value: { x: 0, y: -0.99, z: 0 },
      step: 0.1,
    },
    sceneRotation: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.1,
    },
  });

  useEffect(() => {
    camera.position.set(controls.cameraPosition.x, controls.cameraPosition.y, controls.cameraPosition.z);
  }, [controls.cameraPosition, camera]);

  useEffect(() => {
    scene.position.set(controls.scenePosition.x, controls.scenePosition.y, controls.scenePosition.z);
  }, [controls.scenePosition, scene]);

  useEffect(() => {
    scene.rotation.set(controls.sceneRotation.x, controls.sceneRotation.y, controls.sceneRotation.z);
  }, [controls.sceneRotation, scene]);
  

 
  // useLayoutEffect(() => {
  //   // Initial position adjustments
  //   camera.position.set(0, 1.5, 5);
  //   scene.position.set(0, -0.99, 0);
  
  //   ScrollTrigger.create({});
  
  //   tl.current
  //     .to(camera.position, {
  //       x: 0,
  //       y: 1.5,
  //       z: 5,
  //       scrollTrigger: {
  //         trigger: ".Home-section",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1, // Scrub value can be a number for smoother transitions
  //         ease: "power2.inOut",
  //       },
  //     })
  //     .to(scene.position, {
  //       x: -0.10,
  //       y: -0.54,
  //       z: 0.7,
  //       scrollTrigger: {
  //         trigger: ".Home-section",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     })
  //     .to(camera.position, {
  //       x: 4,
  //       y: 1.5,
  //       z: 5,
  //       scrollTrigger: {
  //         trigger: ".two-section",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     })
  //     .to(scene.position, {
  //       x: 2,
  //       y: -0.09,
  //       z: 0,
  //       scrollTrigger: {
  //         trigger: ".two-section",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     })
  //     // .to(camera.position, {
  //     //   x: 8,
  //     //   y: 1,
  //     //   z: 3.99,
  //     //   scrollTrigger: {
  //     //     trigger: ".Three-section",
  //     //     start: "top bottom",
  //     //     end: "top top",
  //     //     scrub: 1,
  //     //     ease: "power2.inOut",
  //     //   },
  //     // })
  //     .to(scene.position, {
  //       x: 3.5,
  //       y: 0.99,
  //       z: 2,
  //       scrollTrigger: {
  //         trigger: ".Three-section",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     })
  //     .to(scene.rotation, {
  //       y: 1.09, // 180 degrees in radians
  //       scrollTrigger: {
  //         trigger: ".Three-section",
  //         start: "top center",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     })
  //     .to(camera.position, {
  //       x: 0,
  //       y: 10,
  //       z: 0,
  //       scrollTrigger: {
  //         trigger: ".Four-section",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     })
  //     .to(scene.position, {
  //       x: 0,
  //       y: 5.9,
  //       z: 0,
  //       scrollTrigger: {
  //         trigger: ".Four-section",
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     })
  //     .to(scene.rotation, {
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: ".Four-section",
  //         start: "top center",
  //         end: "top top",
  //         scrub: 1,
  //         ease: "power2.inOut",
  //       },
  //     });
  // }, [camera, scene]);
  

  return (
    <group ref={laptop}>
      <group position={[0, 0, 0]} scale={0.02} rotation={[0, 0, 0]}>
        <group position={[0, 50.454, -8.888]} rotation={[-1.943, 0, -Math.PI / 2]} scale={100}>
          <mesh geometry={nodes.Cube_Auto_04_0.geometry} material={materials.Auto_04} />
          <mesh geometry={nodes.Cube_Screen_0.geometry} material={materials.Screen} />
        </group>
        <mesh geometry={nodes.Cube004_Auto_01_0.geometry} material={materials.Auto_01} position={[0, -25.593, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube007_Auto_01_0.geometry} material={materials.Auto_01} position={[0, -40.159, 75.441]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Keys_Auto_02_0.geometry} material={materials.Auto_02} position={[-72.227, -27.683, 35.45]} rotation={[-Math.PI / 2, 0, 0.002]} scale={100} />
        <mesh geometry={nodes.Cube012_Auto_02_0.geometry} material={materials.Auto_02} position={[-91.067, -25.462, 22.757]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube018_Auto_02_0.geometry} material={materials.Auto_02} position={[-60.215, -21.794, -5.752]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube019_Auto_02_0.geometry} material={materials.Auto_02} position={[-24.726, -21.794, -5.752]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube013_Auto_02_0.geometry} material={materials.Auto_02} position={[-91.352, -28.7, 4.165]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube006_Auto_03_0.geometry} material={materials.Auto_03} position={[17.369, -25.593, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube005_Auto_03_0.geometry} material={materials.Auto_03} position={[0, -25.593, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube017_Auto_03_0.geometry} material={materials.Auto_03} position={[100.654, -28.853, 25.184]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube001_Auto_03_0.geometry} material={materials.Auto_03} position={[0, 50.454, -8.888]} rotation={[-1.943, 0, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve001_Auto_03_0.geometry} material={materials.Auto_03} position={[-74.932, -17.338, -70.693]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve_Auto_03_0.geometry} material={materials.Auto_03} position={[-74.932, -19.174, -70.693]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.BezierCurve002_Auto_03_0.geometry} material={materials.Auto_03} position={[-74.932, -20.537, -70.693]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube015_Auto_03_0.geometry} material={materials.Auto_03} position={[-182.229, -22.98, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube014_Auto_03_0.geometry} material={materials.Auto_03} position={[-182.229, -22.98, 7.313]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder_Auto_03_0.geometry} material={materials.Auto_03} position={[7.52, 0.851, 2.928]} rotation={[-2.049, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder002_Auto_03_0.geometry} material={materials.Auto_03} position={[-3.494, 0.851, 2.928]} rotation={[-2.049, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube016_Auto_03_0.geometry} material={materials.Auto_03} position={[-0.605, -11.893, -52.539]} rotation={[2.55, 0.005, -1.581]} scale={100} />
        <mesh geometry={nodes.Cube002_Auto_04_0.geometry} material={materials.Auto_04} position={[0, 50.454, -8.888]} rotation={[-1.943, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube003_Auto_04_0.geometry} material={materials.Auto_04} position={[0, 50.454, -8.888]} rotation={[-1.943, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cube020_Auto_04_0.geometry} material={materials.Auto_04} position={[0, 50.454, -8.888]} rotation={[-1.943, 0, -Math.PI / 2]} scale={100} />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.glb');
