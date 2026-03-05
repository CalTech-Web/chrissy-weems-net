import Image from 'next/image';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Live Sparkly',
  description: 'An inspiring collection of stories featuring Origami Owl and the Owlettes.',
};

export default function LiveSparkly() {
  return (
    <>
      <Hero
        title="Live Sparkly"
        subtitle="An inspiring collection of stories featuring Origami Owl and the Owlettes"
      >
        <div className="mt-8">
          <a
            href="http://livesparkly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent-500 hover:bg-accent-600 text-gray-900 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transform hover:scale-105 transition-all shadow-lg"
          >
            Visit LiveSparkly.com
          </a>
        </div>
      </Hero>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Image
              src="/images/live-sparkly.png"
              alt="Live Sparkly"
              width={600}
              height={141}
              className="mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Spreading Joy & Inspiration
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.origamiowl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:from-primary-800 hover:to-primary-700 transition-all shadow-lg"
                >
                  Shop Origami Owl
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-200 to-primary-200 rounded-2xl opacity-30 blur-xl" />
              <Image
                src="/images/chrissy-weems-2.jpg"
                alt="Chrissy Weems - Live Sparkly"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
