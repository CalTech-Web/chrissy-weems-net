import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl font-bold gradient-text-animated mb-4">
              Chrissy Weems
            </h3>
            <p className="text-white/40 font-body text-sm leading-relaxed">
              CEO & Co-Founder of Origami Owl. Entrepreneur, philanthropist, and mother of five.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold text-xs uppercase tracking-[0.3em] text-accent-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/live-sparkly', label: 'Live Sparkly' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-accent-400 transition-colors duration-300 font-body text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body font-bold text-xs uppercase tracking-[0.3em] text-accent-400 mb-6">Connect</h4>
            <div className="flex space-x-3">
              {[
                { href: 'https://twitter.com/chrissy_weems', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                { href: 'https://www.instagram.com/chrissyweems', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
                { href: 'https://www.facebook.com/chrissy.weems.3', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/50 hover:text-accent-400 hover:border-accent-400/30 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
            <a href="https://www.origamiowl.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-sm text-accent-400/70 hover:text-accent-400 transition-colors font-body">
              Visit Origami Owl &rarr;
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/20 font-body text-sm">
          &copy; {new Date().getFullYear()} Chrissy Weems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
