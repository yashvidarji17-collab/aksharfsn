import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Send } from 'lucide-react';

export const CinematicFooter = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Docs', 'Community', 'Help', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'],
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Mail, label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">
        {/* Top Section with Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 md:px-8 py-16 border-b border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400">Get the latest news about our cinematic 3D experiences</p>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 md:px-8 py-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo Column */}
            <motion.div variants={itemVariants}>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  AKSHAR
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Crafting cinematic 3D experiences for the modern web.
              </p>
            </motion.div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants}>
                <h4 className="font-semibold mb-4 text-white">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                        whileHover={{ x: 4 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8"
            variants={itemVariants}
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <p className="text-gray-400 text-sm">
              © 2024 AKSHAR. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-900/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Glow Line Top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  );
};
