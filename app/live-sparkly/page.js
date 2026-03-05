import Image from 'next/image';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Live Sparkly',
  description: 'An inspiring collection of stories featuring Origami Owl and the Owlettes.',
};

export default function LiveSparkly() {
  return (
    <>
      <Hero
        title={
          <span>
            Live <span className="gradient-text-animated">Sparkly</span>
          </span>
        }
        subtitle="An inspiring collection of stories featuring Origami Owl and the Owlettes"
      >
        <div className="mt-10">
          <a
            href="http://livesparkly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow relative z-10 inline-block px-8 sm:px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-all duration-300"
          >
            Visit LiveSparkly.com
          </a>
        </div>
      </Hero>

      <section className="relative py-16 sm:py-24 md:py-36 bg-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-900/10 blur-[150px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <Image
                src="/images/live-sparkly.png"
                alt="Live Sparkly"
                width={600}
                height={141}
                sizes="(max-width: 640px) 90vw, 600px"
                className="mx-auto opacity-90 w-full max-w-[600px]"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Spreading Joy &<br />
                <span className="gradient-text-animated">Inspiration</span>
              </h2>
              <div className="space-y-4 sm:space-y-5 text-white/50 font-body leading-relaxed text-base sm:text-lg">
                <p>
                  Live Sparkly is more than a motto &mdash; it&apos;s a movement. Through Origami Owl, Chrissy Weems and her team of dedicated Owlettes share stories of hope, resilience, and the power of living with purpose.
                </p>
                <p>
                  The Origami Owl brand connects people with the moments and memories that matter most, creating living lockets filled with charms that tell each person&apos;s unique story.
                </p>
                <p>
                  From entrepreneurship opportunities to charitable ventures, the Live Sparkly philosophy inspires people to be champions of goodness in the world and spread happiness to the communities around them.
                </p>
              </div>
              <div className="mt-8 sm:mt-10">
                <a
                  href="https://www.origamiowl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow relative z-10 inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_30px_rgba(126,34,206,0.4)] transform hover:scale-105 transition-all duration-300"
                >
                  Shop Origami Owl
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="image-glow">
                <Image
                  src="/images/chrissy-weems-2.jpg"
                  alt="Chrissy Weems - Live Sparkly"
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
    </>
  );
}
