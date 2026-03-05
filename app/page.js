import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 font-heading text-sm font-semibold uppercase tracking-wider mb-6">
            CEO & Co-Founder of Origami Owl
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Chrissy<br />
            <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">Weems</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-200 max-w-2xl mx-auto mb-10">
            Entrepreneur, philanthropist, and visionary leader building a brand worth over $250 million while empowering women worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-gray-900 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transform hover:scale-105 transition-all shadow-lg">
              Get in Touch
            </Link>
            <a href="https://www.origamiowl.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-all">
              Visit Origami Owl
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl opacity-30 blur-xl" />
              <Image
                src="/images/chrissy-weems.png"
                alt="Chrissy Weems"
                width={500}
                height={500}
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent-500 mb-3">About</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Dreams Into Reality
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The CEO and co-founder of Origami Owl, Chrissy Weems graduated from Arizona State University and became a stay-at-home Mom. She started her company to help her daughter Bella gain confidence, partnering with her to build what would become a $250 million enterprise.
                </p>
                <p>
                  With just $700 in combined savings, Bella and Chrissy began crafting memory lockets that captured people&apos;s most cherished moments. What started as a mother-daughter dream quickly became one of the most successful direct sales companies in America.
                </p>
                <p>
                  Chrissy took charge as CEO in 2017, overseeing the brand&apos;s expansion into Canada and championing causes including academic opportunities for children, support services, and economic empowerment of women in developing nations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent-500 mb-3">Achievements</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Making an Impact
            </h3>
          </div>
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
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="font-heading text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mother & Family */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent-500 mb-3">Family First</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Also a Devoted Mother
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Chrissy Weems is a mother of five kids after a marriage that has lasted for more than 25 years. Her impressive leadership of the Origami Owl brand has been driven by her focus on brand development and meaningful partnerships with charities.
                </p>
                <p>
                  Looking back to where Chrissy has come from, she hopes that the young generation looking to create good in the world should be more patient and view challenges as opportunities. There is always a purpose in life and each step is a stepping stone to destiny.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-200 to-primary-200 rounded-2xl opacity-30 blur-xl" />
              <Image
                src="/images/chrissy-weems-2.jpg"
                alt="Chrissy Weems"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Selling CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-accent-400 mb-3">Social Selling</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Empowering Entrepreneurs Everywhere
          </h3>
          <p className="text-primary-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Origami Owl has built its model around social selling, empowering women to run their own Jewelry Bars and build their own businesses. This touch connects people with the moments and memories that matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.origamiowl.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-gray-900 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transform hover:scale-105 transition-all shadow-lg">
              Explore Origami Owl
            </a>
            <Link href="/live-sparkly" className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-all">
              Live Sparkly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
