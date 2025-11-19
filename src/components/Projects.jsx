import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ITEMS = [
  {
    title: 'Enterprise Design System',
    desc: 'Led architecture and implementation for a cross-platform component library used by multiple product teams.',
    tags: ['React', 'TypeScript', 'Storybook', 'Design Tokens'],
    link: '#'
  },
  {
    title: 'Realtime Analytics Platform',
    desc: 'Built low-latency data pipelines and dashboards for millions of daily events with strong SLAs.',
    tags: ['FastAPI', 'Kafka', 'ClickHouse', 'Grafana'],
    link: '#'
  },
  {
    title: 'Mobile Commerce Revamp',
    desc: 'Delivered a 20% conversion lift through performance optimizations, A/B testing, and UX improvements.',
    tags: ['Next.js', 'Edge', 'Web Vitals', 'Experimentation'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-[1] mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Selected Work</h2>
        <p className="mt-2 text-white/70">Impactful projects focused on quality, performance, and maintainability.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.link}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80">{item.desc}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 flex-shrink-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
