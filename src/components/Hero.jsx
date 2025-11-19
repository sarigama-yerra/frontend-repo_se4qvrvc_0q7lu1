import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for contrast (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/80 dark:from-black/0 dark:via-black/20 dark:to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/10" />

      {/* Content */}
      <div className="relative z-[1] mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 sm:px-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Available for select engagements
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Senior Software Engineer
            <span className="block bg-gradient-to-r from-white via-white to-red-300 bg-clip-text text-transparent">
              Building reliable products with polish
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-xl text-base text-white/80 sm:text-lg"
          >
            I craft scalable frontends and robust backend systems with a focus on user experience, performance, and long-term maintainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white backdrop-blur transition hover:bg-white/10"
            >
              Contact
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white backdrop-blur transition hover:bg-white/10"
            >
              Resume
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex items-center gap-4 text-white/80"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
