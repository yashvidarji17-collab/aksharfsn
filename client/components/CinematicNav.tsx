import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const CinematicNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              AKSHAR
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {menuItems.map((item) => (
              <motion.li key={item.label} variants={itemVariants}>
                <motion.a
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 relative group text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-sm"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-cyan-500/20"
            >
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center gap-4 py-6 px-4"
              >
                {menuItems.map((item) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-cyan-400 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Glow Line */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-50"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />
    </>
  );
};
