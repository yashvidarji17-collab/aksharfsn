import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Feature Card with rotating geometry
const FeatureGeometry = ({ color }: { color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        shininess={100}
        wireframe={false}
      />
    </mesh>
  );
};

// Individual 3D Feature Card
const Feature3DCard = ({
  title,
  description,
  index,
  color,
}: {
  title: string;
  description: string;
  index: number;
  color: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative h-96 rounded-2xl overflow-hidden border border-gray-700 bg-black/50 backdrop-blur cursor-pointer"
    >
      {/* 3D Canvas */}
      <Canvas className="absolute inset-0" style={{ background: 'transparent' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <FeatureGeometry color={color} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color={color} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
      </Canvas>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/80">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <motion.div
          className="mt-4 w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center group-hover:border-current"
          whileHover={{ scale: 1.2 }}
        >
          <span className="text-lg">→</span>
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

// Features Section Component
export const Features3D = () => {
  const features = [
    {
      title: 'Immersive Design',
      description: 'Cutting-edge 3D visualization with cinematic quality',
      color: '#00d9ff',
    },
    {
      title: 'Real-time Rendering',
      description: 'GPU-accelerated graphics for smooth performance',
      color: '#ff006e',
    },
    {
      title: 'Interactive Elements',
      description: 'Engage with dynamic 3D components',
      color: '#7c3aed',
    },
    {
      title: 'Premium Animation',
      description: 'Cinematic motion design throughout',
      color: '#06b6d4',
    },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Premium Features
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover a new dimension of interactive design with our cinematic 3D experience
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature3DCard key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};
