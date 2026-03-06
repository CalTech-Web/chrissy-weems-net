import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Chrissy Weems — CEO & Co-Founder of Origami Owl',
    template: '%s | Chrissy Weems',
  },
  description: 'Chrissy Weems is the CEO and Co-Founder of Origami Owl, a philanthropist, entrepreneur, and mother of five dedicated to empowering women and creating positive change.',
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-[#0a0614] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
