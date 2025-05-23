"use client"
import { OrbitControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import { easing } from "maath";
import { Tubes } from "@/components/BrainTubes";
import { data } from "@/components/BrainTubes/data";
import Style from "./HomeBanner.module.scss";

const PATHS = data.economics[0].paths;

const randomRange = (min, max) => Math.random() * (max - min) + min;

let brainCurves = [];

PATHS.forEach((path) => {
  let points = [];
  for (let i = 0; i < path.length; i += 3) {
    points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
  }
  let tempcurve = new THREE.CatmullRomCurve3(points);
  brainCurves.push(tempcurve);
});

function BrainParticles({ allthecurve }) {
  let density = 10;
  let numberOfPoints = density * allthecurve.length;
  const myPoints = useRef([]);
  const brainGeo = useRef();
  const pointRef = useRef();

  let positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < numberOfPoints; i++) {
      positions.push(randomRange(-1, 1), randomRange(-1, 1), randomRange(-1, 1));
    }
    return new Float32Array(positions);
  }, []);

  let randoms = useMemo(() => {
    let randoms = [];
    for (let i = 0; i < numberOfPoints; i++) {
      randoms.push(randomRange(0.3, 1.0));
    }
    return new Float32Array(randoms);
  }, []);

  useEffect(() => {
    for (let i = 0; i < allthecurve.length; i++) {
      for (let j = 0; j < density; j++) {
        myPoints.current.push({
          currentoffset: Math.random(),
          speed: Math.random() * 0.01,
          curve: allthecurve[i],
          curPosition: 0,
        });
      }
    }
  }, [allthecurve]);

  useFrame(() => {
    let curposition = brainGeo.current.attributes.position.array;
    for (let i = 0; i < myPoints.current.length; i++) {
      myPoints.current[i].curPosition += myPoints.current[i].speed;
      myPoints.current[i].curPosition = myPoints.current[i].curPosition % 1;
      let curPoint = myPoints.current[i].curve.getPointAt(myPoints.current[i].curPosition);
      curposition[i * 3] = curPoint.x;
      curposition[i * 3 + 1] = curPoint.y;
      curposition[i * 3 + 2] = curPoint.z;
    }
    brainGeo.current.attributes.position.needsUpdate = true;
  });

  const BrainParticleMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.1, 0.3, 0.6) },
    // vertex shader
    /* glsl */ `
      varying vec2 vUv;
      uniform float time;
      varying float vProgress;
      attribute float randoms;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = randoms*2. * (1. /-mvPosition.z);
      }
    `,
    // fragment shader
    /* glsl */ `
      uniform float time;
      void main() {
        float disc = length(gl_PointCoord.xy - vec2(0.5));
        float opacity = 0.3 * smoothstep(0.5, 0.4, disc);
        gl_FragColor = vec4(vec3(opacity), 1.0);
      }
    `
  );

  extend({ BrainParticleMaterial });

  return (
    <>
      <points ref={pointRef}>
        <bufferGeometry attach="geometry" ref={brainGeo}>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-randoms" count={randoms.length} array={randoms} itemSize={1} />
        </bufferGeometry>
        <brainParticleMaterial
          attach="material"
          depthTest={false}
          transparent={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

function AnimatedCamera({ targetZ = 0.3, duration = 1000, onRotate }) {
  const { camera } = useThree();
  const startZ = 2; // start zoomed out
  const startTime = useRef(null);

  useEffect(() => {
    camera.position.set(0, 0, startZ);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame(({ clock }) => {
    if (!startTime.current) startTime.current = clock.elapsedTime;
    const elapsed = (clock.elapsedTime - startTime.current) * 1000;

    let angle;
    if (elapsed < duration) {
      const t = elapsed / duration;

      // Zoom interpolation
      const currentZ = THREE.MathUtils.lerp(startZ, targetZ, t);

      // Rotation angle (up to 90 degrees during zoom)
      angle = t * Math.PI * 0.5;

      // Position on circular arc
      camera.position.x = Math.sin(angle) * currentZ;
      camera.position.z = Math.cos(angle) * currentZ;
    } else {
      // Smooth finish: keep final rotated position without jump
      angle = Math.PI * 0.5;
      camera.position.x = Math.sin(angle) * targetZ;
      camera.position.z = Math.cos(angle) * targetZ;
    }

    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    if (onRotate) onRotate(angle);
  });

  return null;
}

export default function HomeBrain() {
  const [rotationAngle, setRotationAngle] = useState(0);

  return (
    <div className={Style.banner_tube}>
      <Canvas camera={{ position: [0, 0, 2], fov: 75, near: 0.001, far: 4 }}>
        <color attach="background" args={["black"]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Group to compensate rotation */}
        <group rotation={[0, -rotationAngle, 0]}>
          <Tubes allthecurve={brainCurves} />
          <BrainParticles allthecurve={brainCurves} />
        </group>

        <AnimatedCamera targetZ={0.3} duration={1000} onRotate={setRotationAngle} />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
