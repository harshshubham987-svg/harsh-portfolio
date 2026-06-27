import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const CoreSystem = () => {

  const groupRef = useRef();

  useFrame((state) => {

    const time = state.clock.getElapsedTime();

    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

        groupRef.current.rotation.y +=
    (
        time * 0.25 +
        mouseX * 0.6 -
        groupRef.current.rotation.y
    ) * 0.03;

    groupRef.current.rotation.x +=
    (
        Math.sin(time * 0.2) * 0.15 +
        mouseY * 0.4 -
        groupRef.current.rotation.x
    ) * 0.03;
    
    groupRef.current.position.y =
  Math.sin(time * 1.2) * 0.12;
});

  return (

    <group ref={groupRef}>
        {/* MASSIVE ENERGY GLOW */}

<mesh>

  <sphereGeometry args={[3.8, 32, 32]} />

  <meshBasicMaterial
    color="#22d3ee"
    transparent
    opacity={0.035}
  />

</mesh>

{/* INNER GLOW HAZE */}

<mesh>

  <sphereGeometry args={[2.4, 32, 32]} />

  <meshBasicMaterial
    color="#67e8f9"
    transparent
    opacity={0.05}
  />

</mesh>

      {/* OUTER RING */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>

        <torusGeometry args={[2.8, 0.03, 16, 100]} />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={1}
        />

      </mesh>

      {/* SECOND RING */}

      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>

        <torusGeometry args={[2.2, 0.025, 16, 100]} />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={0.8}
        />

      </mesh>
      {/* SEGMENTED HUD RINGS */}

{[...Array(6)].map((_, i) => (

  <mesh

    key={`hud-ring-${i}`}

    rotation={[
      Math.PI / 2,
      0,
      (i / 6) * Math.PI,
    ]}
  >

    <torusGeometry
      args={[
        3.4 + i * 0.12,
        0.01,
        8,
        24,
        Math.PI / 2,
      ]}
    />

    <meshStandardMaterial
      color="#22d3ee"
      emissive="#22d3ee"
      emissiveIntensity={1}
      transparent
      opacity={0.7}
    />

  </mesh>

))}
{/* ENERGY DATA LINES */}

{[...Array(8)].map((_, i) => (

  <mesh

    key={`data-line-${i}`}

    rotation={[
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ]}
  >

    <torusGeometry
      args={[
        1.8 + i * 0.18,
        0.006,
        6,
        100,
        Math.PI * 1.3,
      ]}
    />

    <meshStandardMaterial
      color="#67e8f9"
      emissive="#22d3ee"
      emissiveIntensity={2}
      transparent
      opacity={0.45}
    />

  </mesh>

))}
{/* ORBITING LIGHT TRAILS */}

{[...Array(4)].map((_, i) => (

  <mesh

    key={`trail-${i}`}

    rotation={[
      Math.PI / 2,
      i,
      i * 0.5,
    ]}
  >

    <torusGeometry
      args={[
        2.6 + i * 0.3,
        0.012,
        8,
        100,
        Math.PI / 3,
      ]}
    />

    <meshStandardMaterial
      color="#a5f3fc"
      emissive="#22d3ee"
      emissiveIntensity={3}
      transparent
      opacity={0.65}
    />

  </mesh>

))}

      {/* INNER CORE */}

      <Float
        speed={3}
        rotationIntensity={1}
        floatIntensity={2}
      >

        <mesh>

          <icosahedronGeometry args={[1, 1]} />

          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={2}
            wireframe
          />

        </mesh>

      </Float>

      {/* CENTER ENERGY */}

      <mesh>

        <sphereGeometry args={[0.4, 32, 32]} />

        <meshStandardMaterial
          color="#a5f3fc"
          emissive="#22d3ee"
          emissiveIntensity={4}
        />

      </mesh>

      {/* FLOATING MINI NODES */}

      {[...Array(12)].map((_, i) => {

        const angle = (i / 12) * Math.PI * 2;

        const radius = 3.2;

        return (

          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              Math.sin(angle) * 1.2,
            ]}
          >

            <sphereGeometry args={[0.08, 16, 16]} />

            <meshStandardMaterial
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={2}
            />

          </mesh>

        );

      })}
      {/* FLOATING ENERGY PARTICLES */}

{[...Array(80)].map((_, i) => {

  const x = (Math.random() - 0.5) * 12;
  const y = (Math.random() - 0.5) * 12;
  const z = (Math.random() - 0.5) * 12;

  return (

    <mesh
      key={`particle-${i}`}
      position={[x, y, z]}
    >

      <sphereGeometry args={[0.015, 8, 8]} />

      <meshStandardMaterial
        color="#67e8f9"
        emissive="#22d3ee"
        emissiveIntensity={1}
      />

    </mesh>

  );

})}
{/* FLOATING ENERGY SHARDS */}

{[...Array(10)].map((_, i) => {

  const angle = (i / 10) * Math.PI * 2;

  const radius = 4;

  return (

    <Float
      key={`shard-${i}`}
      speed={2}
      rotationIntensity={2}
      floatIntensity={2}
    >

      <mesh
        position={[
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 3,
          Math.sin(angle) * radius,
        ]}

        rotation={[
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ]}
      >

        <octahedronGeometry args={[0.22, 0]} />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={2}
          wireframe
        />

      </mesh>

    </Float>

  );

})}

    </group>
  );
};

const QuantumCore = () => {

  return (

    <div className="w-full h-[750px]">

      <Canvas camera={{ position: [0, 0, 8] }}>

        {/* LIGHTING */}

        <ambientLight intensity={0.5} />

        <pointLight
          position={[5, 5, 5]}
          intensity={4}
          color="#22d3ee"
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={2}
          color="#0891b2"
        />

        {/* MAIN SYSTEM */}

        <CoreSystem />

      </Canvas>

    </div>

  );
};

export default QuantumCore;