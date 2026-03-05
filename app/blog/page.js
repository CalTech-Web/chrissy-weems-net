'use client';

import Image from 'next/image';
import Hero from '@/components/Hero';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';

const posts = [
  {
    title: 'Chrissy Weems Presents At TEDx Talk Davenport',
    date: 'May 31, 2019',
    image: '/images/blog-tedtalk.png',
    excerpt: 'Chrissy Weems takes the TEDx stage in Davenport to share her inspiring journey from stay-at-home mom to CEO of a $250 million company, and the lessons learned along the way.',
  },
  {
    title: 'How Chrissy Weems and Origami Owl Are Standing Up Against Bullying',
    date: 'December 21, 2018',
    image: '/images/blog-bullying.jpg',
    excerpt: 'Origami Owl launches a powerful anti-bullying campaign, with Chrissy Weems leading the charge to create safe spaces and empower young people to stand up for one another.',
  },
  {
    title: 'Ontario Designer Turns Family Tragedy into Force for Good',
    date: 'December 21, 2018',
    image: '/images/blog-force-good.jpg',
    excerpt: 'An inspiring story of how personal challenges became the catalyst for creating a company that empowers thousands of women and gives back to communities worldwide.',
  },
];

export default function Blog() {
  return (
    <>
      <Hero
        title={<>The <span className="gradient-text-animated">Blog</span></>}
        subtitle="Stories, insights, and updates from Chrissy Weems"
      />

      <section className="relative py-24 bg-dark overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-900/15 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimatedCard key={i} delay={i * 0.15}>
                <article className="glass-card rounded-2xl overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full glass text-accent-400 text-xs font-bold uppercase tracking-wider">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white mb-3 leading-snug group-hover:text-accent-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-white/40 font-body text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
