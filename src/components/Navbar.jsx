import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
          <a href="#" className="text-white">
            <span className="text-lg font-semibold tracking-tight">Your Name</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/resume.pdf" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Resume</a>
          </div>
          <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="mt-2 space-y-1 rounded-2xl border border-white/10 bg-black/60 p-3 text-white/80 backdrop-blur-xl md:hidden">
            <a href="#projects" className="block rounded-lg px-3 py-2 hover:bg-white/10">Projects</a>
            <a href="#about" className="block rounded-lg px-3 py-2 hover:bg-white/10">About</a>
            <a href="#contact" className="block rounded-lg px-3 py-2 hover:bg-white/10">Contact</a>
            <a href="/resume.pdf" className="block rounded-lg px-3 py-2 hover:bg-white/10">Resume</a>
          </div>
        )}
      </nav>
    </header>
  );
}
