import Image from 'next/image';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Blog',
  description: 'Latest news and stories from Chrissy Weems and Origami Owl.',
};

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
        title="Blog"
        subtitle="Stories, insights, and updates from Chrissy Weems"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-accent-600 uppercase tracking-wider mb-2">
                    {post.date}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
