import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.x += d * 0.2;
      ref.current.rotation.y += d * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={ref} args={[1.4, 1]}>
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.6}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Icosahedron>
    </Float>
  );
}

function Rings() {
  const ref = useRef<Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.z += d * 0.4;
  });
  return (
    <Torus ref={ref} args={[2.2, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
      <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={1} />
    </Torus>
  );
}

export function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#60a5fa" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#3b82f6" />
        <Knot />
        <Rings />
      </Suspense>
    </Canvas>
  );
}
