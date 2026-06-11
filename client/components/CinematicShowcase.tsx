import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useRef } from 'react';

// Rotating Torus Knot
const TorusKnotShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshPhongMaterial
          color="#00d9ff"
          emissive="#0099cc"
          shininess={100}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

// Main Showcase Section
export const CinematicShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems = [
    {
      title: 'Advanced 3D Rendering',
      description: 'Experience stunning visual quality with real-time ray tracing and advanced lighting',
      icon: '🎨',
    },
    {
      title: 'Smooth Performance',
      description: 'Optimized for all devices with 60+ FPS cinematic animations',
      icon: '⚡',
    },
    {
      title: 'Interactive Experience',
      description: 'Touch, hover, and explore with fully interactive 3D elements',
      icon: '🎮',
    },
  ];

  return (
    <section id="showcase" className="relative py-32 px-4 md:px-8 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cinematic Showcase
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 md:h-[500px] rounded-2xl border border-cyan-500/30 overflow-hidden bg-black/50"
          >
            <Canvas className="w-full h-full" style={{ background: 'radial-gradient(ellipse at center, #1a1a3e 0%, #000000 100%)' }}>
              <PerspectiveCamera makeDefault position={[0, 0, 4]} />
              <TorusKnotShape />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
              <pointLight position={[-10, -10, 5]} intensity={0.8} color="#ff006e" />
              <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={true} />
            </Canvas>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tabs */}
            <div className="flex gap-4 mb-8 flex-wrap">
              {showcaseItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="hidden sm:inline">{item.title.split(' ')[0]}</span>
                </motion.button>
              ))}
            </div>

            {/* Active Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span>{showcaseItems[activeTab].icon}</span>
                {showcaseItems[activeTab].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {showcaseItems[activeTab].description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold"
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid Below */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { title: '120 FPS Capable', desc: 'High performance rendering' },
            { title: '4K Ready', desc: 'Ultra-high resolution support' },
            { title: 'Cross Platform', desc: 'Works on all modern browsers' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors"
            >
              <h4 className="text-2xl font-bold text-cyan-400 mb-2">{stat.title}</h4>
              <p className="text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
