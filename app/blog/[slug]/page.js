import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug, getAllSlugs } from '@/lib/posts';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero with post image */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 pt-28 sm:pt-40 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-400 font-body text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-6 hover:text-accent-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="block px-3 py-1 rounded-full glass text-accent-400 text-xs font-bold uppercase tracking-wider w-fit mb-4">
            {post.date}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Post content */}
      <section className="relative py-12 sm:py-20 bg-dark overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[400px] rounded-full bg-purple-900/10 blur-[200px] -translate-x-1/2" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-white/60 font-body text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {post.videoUrl && (
            <div className="mt-12 glass-card rounded-2xl p-6">
              <h3 className="font-heading text-xl font-bold text-white mb-4">Watch the Talk</h3>
              <a
                href={post.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch on YouTube
              </a>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-accent-400 font-body text-sm uppercase tracking-[0.2em] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
