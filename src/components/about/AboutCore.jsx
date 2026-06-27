import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Points,
  PointMaterial,
  Text,
} from "@react-three/drei";

import { useRef } from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";

function CoreSystem() {

  const groupRef = useRef();

  useFrame((state) => {

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y =
      time * 0.15;

    groupRef.current.rotation.x =
      Math.sin(time * 0.2) * 0.08;

  });

  // PARTICLES

  const particles = Array.from(
    { length: 120 },
    () => (
      (Math.random() - 0.5) * 8
    )
  );
  const nodes = [

  {
    text: "AI ENGINEERING",
    position: [3.5, 1.8, 0],
  },

  {
    text: "AUTOMATION",
    position: [-3.5, 0.8, 0],
  },

  {
    text: "FUTURISTIC UI",
    position: [3.8, -0.2, 0],
  },

  {
    text: "COMPUTER VISION",
    position: [-3.8, -1.6, 0],
  },

];

  return (

    <group ref={groupRef}>

      {/* CENTER CORE */}

      <mesh>

        <sphereGeometry args={[1, 64, 64]} />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={3}
          transparent
          opacity={0.95}
        />

      </mesh>

      {/* OUTER WIREFRAME */}

      <mesh>

        <sphereGeometry args={[1.4, 32, 32]} />

        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.25}
        />

      </mesh>

      {/* ORBIT RING 1 */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>

        <torusGeometry
          args={[2.3, 0.03, 16, 100]}
        />

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={3}
        />

      </mesh>

      {/* ORBIT RING 2 */}

      <mesh rotation={[Math.PI / 3, 0, 1]}>

        <torusGeometry
          args={[2.8, 0.02, 16, 100]}
        />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={2}
        />

      </mesh>
      {/* SEGMENTED HUD RINGS */}

{[...Array(7)].map((_, i) => (

  <mesh

    key={`hud-ring-${i}`}

    rotation={[
      Math.PI / 2,
      0,
      (i / 7) * Math.PI,
    ]}
  >

    <torusGeometry
      args={[
        3.3 + i * 0.15,
        0.012,
        8,
        24,
        Math.PI / 2,
      ]}
    />

    <meshBasicMaterial
      color="#22d3ee"
      transparent
      opacity={0.35}
    />

  </mesh>

))}
{/*end*/}

      {/* PARTICLE FIELD */}

      <Points positions={particles} stride={3}>

        <PointMaterial
          transparent
          color="#67e8f9"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
        />

      </Points>
      {/*END*/}

      {/* FLOATING SCANNER PARTICLES */}

{[...Array(80)].map((_, i) => {

  const x =
    (Math.random() - 0.5) * 10;

  const y =
    (Math.random() - 0.5) * 10;

  const z =
    (Math.random() - 0.5) * 10;

  return (

    <mesh
      key={`scan-particle-${i}`}
      position={[x, y, z]}
    >

      <sphereGeometry args={[0.02, 8, 8]} />

      <meshBasicMaterial
        color="#67e8f9"
        transparent
        opacity={0.5}
      />

    </mesh>

  );

})}
{/*End*/}

{/* FLOATING ENERGY FRAGMENTS */}

{[...Array(14)].map((_, i) => {

  const x =
    (Math.random() - 0.5) * 9;

  const y =
    (Math.random() - 0.5) * 6;

  const z =
    (Math.random() - 0.5) * 6;

  const size =
    Math.random() * 0.22 + 0.08;

  return (

    <mesh

      key={`fragment-${i}`}

      position={[x, y, z]}

      rotation={[
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ]}
    >

      <octahedronGeometry
        args={[size, 0]}
      />

      <meshStandardMaterial
        color="#67e8f9"
        emissive="#22d3ee"
        emissiveIntensity={
          Math.random() * 2 + 1
        }
        wireframe
        transparent
        opacity={0.8}
      />

    </mesh>

  );

})}
{/*End*/}

      {/* ENERGY GLOW */}

      <mesh>

        <sphereGeometry args={[2.8, 32, 32]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.04}
        />

      </mesh>
      {/* CONNECTION ENERGY LINES */}

{nodes.map((node, index) => (

  <Line

    key={`line-${index}`}

    points={[
      [0, 0, 0],
      node.position,
    ]}

    color="#22d3ee"

    lineWidth={1}

    transparent

    opacity={0.35}

  />

))}
{/*End*/}

        {/* FLOATING CAPABILITY NODES */}

{nodes.map((node, index) => (

  <group
    key={index}
    position={node.position}
  >

    {/* NODE PANEL */}

    <mesh>

      <planeGeometry args={[2.2, 0.7]} />

      <meshBasicMaterial
        color="#07111f"
        transparent
        opacity={0.55}
      />

    </mesh>

    {/* BORDER */}

    <mesh>
        {/* NODE TEXT */}

<Text

  position={[0, 0, 0.02]}

  fontSize={0.16}

  color="#67e8f9"

  anchorX="center"

  anchorY="middle"

  maxWidth={1.8}
>

  {node.text}

</Text>

      <planeGeometry args={[2.24, 0.74]} />

      <meshBasicMaterial
        color="#22d3ee"
        wireframe
        transparent
        opacity={0.3}
      />

    </mesh>

  </group>

))}
    </group>

  );
}

const AboutCore = () => {
  return (

    <div className="w-full h-[600px]">

      <Canvas camera={{ position: [0, 0, 7] }}>

        <ambientLight intensity={0.4} />

        <pointLight
          position={[0, 0, 5]}
          intensity={8}
          color="#22d3ee"
        />

        <CoreSystem />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
        />

      </Canvas>

    </div>

  );
};

export default AboutCore;