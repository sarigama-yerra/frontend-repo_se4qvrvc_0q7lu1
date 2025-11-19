import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative z-[1] mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur"
        >
          <h3 className="text-xl font-semibold">About</h3>
          <p className="mt-3 text-white/80">
            I am a senior software engineer with deep experience building production systems end‑to‑end. I focus on clear architecture, thoughtful abstractions, and measurable business impact.
          </p>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>• 10+ years across startups and enterprise</li>
            <li>• Lead and mentor cross‑functional teams</li>
            <li>• Pragmatic with a craftsmanship mindset</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur"
        >
          <h3 className="text-xl font-semibold">Expertise</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {['Frontend Architecture','Design Systems','APIs & Microservices','Databases','Cloud & DevOps','Performance'].map((t) => (
              <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
