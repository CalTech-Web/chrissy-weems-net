'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import AnimatedSection, { AnimatedCard } from '@/components/AnimatedSection';
import { posts } from '@/lib/posts';

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
                <Link href={`/blog/${post.slug}`}>
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
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
