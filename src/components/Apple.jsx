import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Leva, useControls } from 'leva';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function Model(props) {

  const { scene, camera } = useThree();
  const tl = useRef(gsap.timeline());
  const modelRef = useRef(null);


  // const controls = useControls({
  //   cameraPosition: {
  //     value: { x: -10.15,  y:  -1.25, z:0.45 },
  //     step: 0.05,
  //   },
  //   scenePosition: {
  //     value: { x: -3.70, y: -1.84 ,z: 0.20 },
  //     step: 0.05,
  //   },
  //   sceneRotation: {
  //     value: { x: -0.95, y: -0.10, z: -0.10 },
  //     step: 0.05,
  //   },
  // });


  // useFrame(() => {
  //   camera.position.x =controls.cameraPosition.x;
  //   camera.position.y =controls.cameraPosition.y;
  //   camera.position.z =controls.cameraPosition.z;

  //   scene.position.x = controls.scenePosition.x;
  //   scene.position.y = controls.scenePosition.y;
  //   scene.position.z = controls.scenePosition.z;
    
  //   scene.rotation.x = controls.sceneRotation.x;
  //   scene.rotation.y = controls.sceneRotation.y;
  //   scene.rotation.z = controls.sceneRotation.z;
   
  // });

 






  useLayoutEffect(() => {
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    const spotLight = new THREE.SpotLight(0xffffff, 1); // Strong white light
    spotLight.position.set(10, 20, 10);
    spotLight.castShadow = true;
    
    // Enable shadow map
    scene.add(ambientLight);
    scene.add(spotLight);

    // Adjust shadow properties
    spotLight.shadow.mapSize.width = 248; // Default is 512
    spotLight.shadow.mapSize.height = 248; // Default is 512
    spotLight.shadow.camera.near = 0.06; // Default is 0.5
    spotLight.shadow.camera.far = 500; // Default is 500

    // Initial position adjustments
    // camera.position.set(-10.15, -1.25, 0.45);
    // scene.position.set(-3.70, -1.84, 0.20);
    // scene.rotation.set(-0.95, -0.10, 0.10);
  
    ScrollTrigger.create({
      invalidateOnRefresh: true
    });
  
    tl.current
      .to(camera.position, {
        x: -10.15,
        y: -1.25,
        z: 0.45,
        scrollTrigger: {
          trigger: ".Home-section",
          start: "top bottom",
          end: "top top",
          scrub: 1, // Scrub value can be a number for smoother transitions
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(scene.position, {
        x: -3.70,
        y: -1.84,
        z: 0.20,
        scrollTrigger: {
          trigger: ".Home-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(scene.rotation, {
        x: -0.95,
        y: -0.10,
        z: 0.10,
        scrollTrigger: {
          trigger: ".Home-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(camera.position, {
        x: -10.30,
        y: -1.95,
        z: 6.20,
        scrollTrigger: {
          trigger: ".two-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(scene.position, {
        x:  -4.15,
        y: -1.69,
        z: 5.20,
        scrollTrigger: {
          trigger: ".two-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(scene.rotation, {
        x: -0.80,
        y: -2.25,
        z: -0.90,
        scrollTrigger: {
          trigger: ".two-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(camera.position, {
        x: -10.00,
        y: -0.25,
        z: 3.35,
        scrollTrigger: {
          trigger: ".Three-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(scene.position, {
        x: -3.80,
        y: -1.94,
        z: 2.05,
        scrollTrigger: {
          trigger: ".Three-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(scene.rotation, {
        x: 0.50,
        y: -2.00,
        z: -0.50,
        scrollTrigger: {
          trigger: ".Three-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(camera.position, {
        x: -10.00,
        y: 0.60,
        z: -0.90,
        scrollTrigger: {
          trigger: ".Four-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false,
        }
      })
      // .to(camera.position, {
      //   x: -3.80,
      //   y: -0.19,
      //   z: -1.75,
      //   scrollTrigger: {
      //     trigger: ".about",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: 1,
      //     ease: "power2.inOut",
      //     immediateRender: false,
      //     onEnter: () => {
      //       if (modelRef.current) {
      //         modelRef.current.visible = false;
      //       }
      //     },
      //     onLeaveBack: () => {
      //       if (modelRef.current) {
      //         modelRef.current.visible = true;
      //       }}
      //   }
      // })
      .to(scene.position, {
        x: -3.80,
        y: -0.19,
        z: -1.75,
        scrollTrigger: {
          trigger: ".Four-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false
        }
      })
      .to(scene.rotation, {
        x: -0.55,
        y: -2.15,
        z: -0.60,
        scrollTrigger: {
          trigger: ".Four-section",
          start: "top bottom",
          end: "top top",
          scrub: 1,
          ease: "power2.inOut",
          immediateRender: false,
          onLeaveBack: () => {
            if (modelRef.current) {
              modelRef.current.visible = true;
            }
          }
        }
      });
      // .set(camera.position, {
      //   x: -20.50,
      //   y: -2.85,
      //   z: -4.95,
      //   onComplete: () => {
      //     camera.position.set(-20.50, -2.85, -4.95);
      //   }
      // })
      // .set(scene.position, {
      //   x: -15.15,
      //   y: -2.24,
      //   z: -4.70,
      //   onComplete: () => {
      //     scene.position.set(-15.15, -2.24, -4.70);
      //   }
      // })
      // .set(scene.rotation, {
      //   x: -0.75,
      //   y: 3.90,
      //   z: -0.80,
      //   onComplete: () => {
      //     scene.rotation.set(-0.75, 3.90, -0.80);
      //   }
      // });
  
  }, [camera, scene]);
  
  
  


  const { nodes, materials } = useGLTF('/apple.glb')
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group scale={0.61}>
        <mesh geometry={nodes.PPhvAUHUGzJYMhL.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.LWVGlhvktNPWDmu.geometry} material={materials.hlaWqbXPxAbQzbJ} />
        <mesh geometry={nodes.eXUJdTIAeUGmQLZ.geometry} material={materials.YWfwokrwvbztRbo} />
        <mesh geometry={nodes.khaHlXdxjItYhNs.geometry} material={materials.JhVSDiADFtJHFLa} />
        <mesh geometry={nodes.vWfihlqoNhaJTLj.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.qfqlcqjRdzzVekA.geometry} material={materials.YWfwokrwvbztRbo} />
        <mesh geometry={nodes.DpLeqowIFgYtGjG.geometry} material={materials.lokMFBOdPtkNVUL} />
        <mesh geometry={nodes.lTuqHocPHeeYuLO.geometry} material={materials.cEvUsXxsuGocZLw} />
        <mesh geometry={nodes.wMgdGPGcmgrPUeE.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.yPaUlGyzZhvStMM.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.KZLnjqsQgoygPoi.geometry} material={materials.WqlRgaclVpXEtLR} />
        <mesh geometry={nodes.XYTcEkWJWbbjayl.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.yXwlQnMKInchVwb.geometry} material={materials.WqlRgaclVpXEtLR} />
        <mesh geometry={nodes.BDhXHhWQPzbsApC.geometry} material={materials.OraiDWpYBKrUaVi} />
        <mesh geometry={nodes.ARsYRDtRfaqRvjc.geometry} material={materials.RLtPucjBYpWldMw} />
        <mesh geometry={nodes.dEgYDFMHfbkpmEF.geometry} material={materials.vAAmUmRloGrqeoZ} />
        <mesh geometry={nodes.sYBCdasHzmkyDRS.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.slfmzSCVEebgEnx.geometry} material={materials.vAAmUmRloGrqeoZ} />
        <mesh geometry={nodes.cUdLcKThVrgrQtG.geometry} material={materials.hgluOErnmhtiUYN} />
        <mesh geometry={nodes.uwsZHcLJnpKqEWY.geometry} material={materials.WNpOSdXcedsiIxb} />
        <mesh geometry={nodes.dDmAxNyjhIDOSOh.geometry} material={materials.FWVZLUbBnucfoaf} />
        <mesh geometry={nodes.dApvNLhuSmTYFHU.geometry} material={materials.cEvUsXxsuGocZLw} />
        <mesh geometry={nodes.usBhaSMGegdgFZD.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.TgXjmfNiJNmBEaf.geometry} material={materials.WTIUJKaXCMoeXRu} />
        <mesh geometry={nodes.oNBZPqvuuOZaMJD.geometry} material={materials.ZaRnLYKTtVDoxDv} />
        <mesh geometry={nodes.ukHQvPcopDbGAeP.geometry} material={materials.kCssvzrClyGUQkQ} />
        <mesh geometry={nodes.wlIPQLVNyFEOcyR.geometry} material={materials.kCssvzrClyGUQkQ} />
        <mesh geometry={nodes.IXiSHYGuoMgcNgF.geometry} material={materials.XrFeyJHNdKUjpKu} />
        <mesh geometry={nodes.dutMHxWYxKkWoIl.geometry} material={materials.ytyYsmKHSFPTRzX} />
        <mesh geometry={nodes.KsxIrenucRYdQlx.geometry} material={materials.FNPDFKuVXKOlvzh} />
        <mesh geometry={nodes.PTPnChoGCzenuOx.geometry} material={materials.PZbVgVTNgRssNlb} />
        <mesh geometry={nodes.vaRMlNGtRRowtqF.geometry} material={materials.CpdaRQhrDwkjJvt} />
        <mesh geometry={nodes.fCkJQDPNwsNBzWm.geometry} material={materials.XPzMameFUCFBvNY} />
        <mesh geometry={nodes.YbfvuZWRqXlvTkW.geometry} material={materials.YWfwokrwvbztRbo} />
        <mesh geometry={nodes.scpcAfQFCzMwocy.geometry} material={materials.nwKRBiBrdJBKTDX} />
        <mesh geometry={nodes.wmnqxNpNCdRfDfA.geometry} material={materials.UlFjqascpPnJnyb} />
        <mesh geometry={nodes.SAesXTqirPZWRXc.geometry} material={materials.LMNEMIqLLSofXax} />
        <mesh geometry={nodes.uFzdsQxnXjPAlfo.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.vdoUifIjrUGtLiS.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.DPJxFEyTsdtZHfm.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.DmhCzDQXADCcXPt.geometry} material={materials.RZAUBIkSLvyIlJf} />
        <mesh geometry={nodes.cYPgdqcCkfmEnrF.geometry} material={materials.ObrQaHSLRyNZejZ} />
        <mesh geometry={nodes.yFPJxjHCZaMTTSP.geometry} material={materials.PwlvrZKCtsfdXgk} />
        <mesh geometry={nodes.hFurRdLJljkLFkB.geometry} material={materials.zWSbkmvYqArUSOM} />
      </group>
    </group>
  )
}

useGLTF.preload('/apple.glb')
