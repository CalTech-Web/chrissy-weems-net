'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0614] via-[#1a0533] via-[#2d1065] to-[#0a0614] animate-gradient" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] animate-float-reverse" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-violet-500/15 blur-[80px] animate-float-slow" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Glassmorphism badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 sm:px-6 py-2.5 rounded-full glass mb-8"
        >
          <span className="text-accent-400 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            CEO & Co-Founder of Origami Owl
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-8"
        >
          <span className="text-white">Chrissy</span>
          <br />
          <span className="gradient-text-animated">Weems</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-body leading-relaxed"
        >
          Entrepreneur, philanthropist, and visionary leader who built
          a <span className="text-accent-400 font-semibold">$250 million</span> brand
          while empowering women worldwide.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
        >
          <Link href="/contact" className="btn-glow relative z-10 px-8 sm:px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-all duration-300 text-center">
            Get in Touch
          </Link>
          <a href="https://www.origamiowl.com" target="_blank" rel="noopener noreferrer" className="px-8 sm:px-10 py-4 glass text-white font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-center">
            Visit Origami Owl
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#0a0614">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
