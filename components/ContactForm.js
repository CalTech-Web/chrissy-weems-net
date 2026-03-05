'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-3xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-white/50 font-body">Your message has been received. We&apos;ll get back to you soon.</p>
      </motion.div>
    );
  }

  const inputStyles = "w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500/50 transition-all outline-none font-body text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3 font-body">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputStyles}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3 font-body">Your Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputStyles}
            placeholder="jane@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3 font-body">Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className={inputStyles}
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3 font-body">Your Message</label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputStyles} resize-none`}
          placeholder="Write your message here..."
        />
      </div>
      <button
        type="submit"
        className="btn-glow relative z-10 w-full md:w-auto px-10 py-4 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-body font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transform hover:scale-[1.02] transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
