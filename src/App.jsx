import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="relative z-[1] mx-auto max-w-7xl px-6 pb-12 pt-2 sm:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-white/60 backdrop-blur">
          © {new Date().getFullYear()} Your Name — Built with care.
        </div>
      </footer>
    </div>
  )
}

export default App
