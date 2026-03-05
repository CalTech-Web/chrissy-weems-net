import Image from 'next/image';
import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';

export const metadata = {
  title: 'Chrissy Weems — CEO & Co-Founder of Origami Owl',
  description: 'Chrissy Weems is the CEO and Co-Founder of Origami Owl, a $250M+ company. Entrepreneur, philanthropist, and mother of five empowering women worldwide.',
};

export default function Home() {
  return (
    <div className="pt-[75px] pb-[75px]">
      <HomeHero />

      {/* About Section */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div className="image-glow">
                <Image
                  src="/images/chrissy-weems.jpg"
                  alt="Chrissy Weems"
                  width={500}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="rounded-2xl w-full"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">About</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 sm:mb-8 leading-tight">
                Building Dreams<br />
                <span className="gradient-text-animated">Into Reality</span>
              </h2>
              <div className="space-y-4 sm:space-y-5 text-white/60 font-body leading-relaxed text-base sm:text-lg">
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

      {/* Stats */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-dark via-dark-100 to-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-amber-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { end: 250, suffix: 'M+', prefix: '$', label: 'Company Valuation', desc: 'Built from a $700 investment' },
              { end: 25, suffix: '+', prefix: '', label: 'Years of Marriage', desc: 'Mother of five children' },
              { end: 2010, suffix: '', prefix: '', label: 'Year Founded', desc: 'Origami Owl was born' },
            ].map((stat, i) => (
              <AnimatedCard key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-6 sm:p-10 text-center group hover:border-accent-400/30 transition-all duration-500">
                  <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
                    <CountUp end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="font-body text-accent-400 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                  <div className="font-body text-white/40 text-sm">{stat.desc}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-dark overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-900/15 blur-[180px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-20">
              <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">Achievements</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
                Making an <span className="gradient-text-animated">Impact</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="glass-card rounded-2xl p-6 sm:p-8 group hover:border-purple-500/30 transition-all duration-500 h-full">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-accent-400 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(126,34,206,0.4)] transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/50 font-body leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mother & Family */}
      <section className="relative py-16 sm:py-24 md:py-36 bg-dark overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-900/15 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">Family First</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 sm:mb-8 leading-tight">
                Also a Devoted<br />
                <span className="gradient-text-animated">Mother</span>
              </h2>
              <div className="space-y-4 sm:space-y-5 text-white/60 font-body leading-relaxed text-base sm:text-lg">
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-2xl w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Selling CTA */}
      <section className="relative py-16 sm:py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-dark animate-gradient" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="font-body text-accent-400 text-sm font-bold uppercase tracking-[0.3em]">Social Selling</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 sm:mb-8 leading-tight">
              Empowering Entrepreneurs<br />
              <span className="gradient-text-animated">Everywhere</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg font-body leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto">
              Origami Owl has built its model around social selling, empowering women to run their own Jewelry Bars and build their own businesses. This touch connects people with the moments and memories that matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
              <a href="https://www.origamiowl.com" target="_blank" rel="noopener noreferrer" className="btn-glow relative z-10 px-8 sm:px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-all duration-300 text-center">
                Explore Origami Owl
              </a>
              <Link href="/live-sparkly" className="px-8 sm:px-10 py-4 glass text-white font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-center">
                Live Sparkly
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
