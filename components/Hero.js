'use client';

import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, children }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0614] via-[#1a0533] via-[#2d1065] to-[#0a0614] animate-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-purple-600/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-[100px] animate-float-reverse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-body"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#0a0614">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
