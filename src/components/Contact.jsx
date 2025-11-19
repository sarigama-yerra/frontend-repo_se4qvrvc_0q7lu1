import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
        <div className="mb-6 flex items-center gap-3">
          <Mail className="h-5 w-5" />
          <h3 className="text-xl font-semibold">Get in touch</h3>
        </div>

        <form action="https://formspree.io/f/mwkggvra" method="POST" className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Name</label>
            <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none ring-0 placeholder:text-white/40 focus:border-white/20" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-white/70">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none ring-0 placeholder:text-white/40 focus:border-white/20" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none ring-0 placeholder:text-white/40 focus:border-white/20" placeholder="How can I help?" />
          </div>
          <div className="sm:col-span-2">
            <button className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600">
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
