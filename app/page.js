'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';

export default function Home() {
  return (
    <div style={{ paddingTop: '75px', paddingBottom: '75px' }}>
      {/* Hero — Cinematic Full-Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0614] via-[#1a0533] via-[#2d1065] to-[#0a0614] animate-gradient" />

        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark" />

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
            className="inline-block px-6 py-2.5 rounded-full glass mb-8"
          >
            <span className="text-accent-400 font-body text-sm font-semibold uppercase tracking-[0.3em]">
              CEO & Co-Founder of Origami Owl
            </span>
          </motion.div>

          {/* Name — massive serif */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8"
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
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          >
            Entrepreneur, philanthropist, and visionary leader who built
            a <span className="text-accent-400 font-semibold">$250 million</span> brand
            while empowering women worldwide.
          </motion.p>

          {/* CTA buttons with glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link href="/contact" className="btn-glow relative z-10 px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-all duration-300">
              Get in Touch
            </Link>
            <a href="https://www.origamiowl.com" target="_blank" rel="noopener noreferrer" className="px-10 py-4 glass text-white font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Visit Origami Owl
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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

      {/* About Section */}
      <section className="relative py-24 md:py-36 bg-dark overflow-hidden">
        {/* Decorative bg blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="image-glow">
                <Image
                  src="/images/chrissy-weems.png"
                  alt="Chrissy Weems"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">About</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-8 leading-tight">
                Building Dreams<br />
                <span className="gradient-text-animated">Into Reality</span>
              </h2>
              <div className="space-y-5 text-white/60 font-body leading-relaxed text-lg">
                <p>
                  The CEO and co-founder of Origami Owl, Chrissy Weems graduated from Arizona State University and became a stay-at-home Mom. She started her company to help her daughter Bella gain confidence, partnering with her to build what would become a <span className="text-accent-400">$250 million enterprise</span>.
                </p>
                <p>
                  With just $700 in combined savings, Bella and Chrissy began crafting memory lockets that captured people&apos;s most cherished moments. What started as a mother-daughter dream quickly became one of the most successful direct sales companies in America.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats — Bold Numbers */}
      <section className="relative py-24 bg-gradient-to-b from-dark via-dark-100 to-dark overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-amber-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { end: 250, suffix: 'M+', prefix: '$', label: 'Company Valuation', desc: 'Built from a $700 investment' },
              { end: 25, suffix: '+', prefix: '', label: 'Years of Marriage', desc: 'Mother of five children' },
              { end: 2010, suffix: '', prefix: '', label: 'Year Founded', desc: 'Origami Owl was born' },
            ].map((stat, i) => (
              <AnimatedCard key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-10 text-center group hover:border-accent-400/30 transition-all duration-500">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-3">
                    <CountUp end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                  <div className="font-body text-white/40 text-sm">{stat.desc}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-24 md:py-36 bg-dark overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-900/15 blur-[180px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">Achievements</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                Making an <span className="gradient-text-animated">Impact</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '$250M+ Company',
                description: 'Built Origami Owl from a $700 investment into a company valued at over $250 million by 2013.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Visionary CEO',
                description: 'Became CEO in 2017, leading the brand into international markets and expanding into Canada.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Force for Good',
                description: 'Champions academic opportunities, children\'s support, and economic empowerment of women worldwide.',
              },
            ].map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-8 group hover:border-purple-500/30 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-accent-400 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(126,34,206,0.4)] transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/50 font-body leading-relaxed">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mother & Family */}
      <section className="relative py-24 md:py-36 bg-dark overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-900/15 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">Family First</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-8 leading-tight">
                Also a Devoted<br />
                <span className="gradient-text-animated">Mother</span>
              </h2>
              <div className="space-y-5 text-white/60 font-body leading-relaxed text-lg">
                <p>
                  Chrissy Weems is a mother of five kids after a marriage that has lasted for more than 25 years. Her impressive leadership of the Origami Owl brand has been driven by her focus on brand development and meaningful partnerships with charities.
                </p>
                <p>
                  Looking back to where Chrissy has come from, she hopes that the young generation looking to create good in the world should be more patient and view challenges as opportunities. There is always a purpose in life and each step is a stepping stone to destiny.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div className="image-glow">
                <Image
                  src="/images/chrissy-weems-2.jpg"
                  alt="Chrissy Weems"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Selling CTA */}
      <section className="relative py-24 md:py-36 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-dark animate-gradient" />
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-5" />

        {/* Floating orbs */}
        <div className="absolute top-1/3 left-1/5 w-64 h-64 rounded-full bg-accent-500/10 blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/5 w-48 h-48 rounded-full bg-purple-500/15 blur-[80px] animate-float-reverse" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">Social Selling</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-8 leading-tight">
              Empowering Entrepreneurs<br />
              <span className="gradient-text-animated">Everywhere</span>
            </h2>
            <p className="text-white/50 text-lg font-body leading-relaxed mb-12 max-w-2xl mx-auto">
              Origami Owl has built its model around social selling, empowering women to run their own Jewelry Bars and build their own businesses. This touch connects people with the moments and memories that matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="https://www.origamiowl.com" target="_blank" rel="noopener noreferrer" className="btn-glow relative z-10 px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-all duration-300">
                Explore Origami Owl
              </a>
              <Link href="/live-sparkly" className="px-10 py-4 glass text-white font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Live Sparkly
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
