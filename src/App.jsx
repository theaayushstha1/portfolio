import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#0a0a0b' }}>
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      {/* Subtle grain texture */}
      <div className="grain" aria-hidden="true" />

      {/* Very subtle warm ambient glow - barely visible */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(245, 158, 11, 0.02)' }} />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(245, 158, 11, 0.015)' }} />

      <Navbar />
      <Hero />
      <main>
        <FeaturedWork />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
