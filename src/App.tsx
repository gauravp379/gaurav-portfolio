import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-gray-100 font-sans selection:bg-primary/30 selection:text-white">
      {/* Background stays fixed behind all content */}
      <ParticlesBackground />
      
      {/* Overlay gradient and tech grid for a more premium dark tech feel */}
      <div className="pointer-events-none fixed inset-0 z-[-1] bg-gradient-to-br from-background via-background to-[#020617] opacity-90 tech-grid" />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
