import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../styles/journey.css';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Base = ({ model }) => {
    const { scene, animations } = model;
    const { actions } = useAnimations(animations, scene);

    // Ensure the animation plays
    const action = actions[Object.keys(actions)[0]];
    action.play();

    // Disable shadows for all child meshes
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = false;  // Disable casting shadows
            child.receiveShadow = false; // Disable receiving shadows
        }
    });

    return (
        <primitive
            object={scene}
            scale={2.3}
            position={[0, -2, 0]}
        />
    );
};

const Model = () => {
    const baseModel = useGLTF('/lego.glb', true);



    return (
        <div  style={{height:'100vh' , minWidth:'100wh'}}>
            
                <Canvas
                    style={{ height: "100%", minWidth: "700px"}}
                >
                    <directionalLight
                        position={[-4, 10, 6]}
                        intensity={4.3}
                        castShadow
                    />

                    <ambientLight intensity={1} />
                    <Suspense fallback={null}>
                        <Base model={baseModel} />
                    </Suspense>

                </Canvas>
        </div>
    );
};

export default Model;