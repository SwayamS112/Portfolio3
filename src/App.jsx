
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen w-full relative overflow-x-hidden">
      {/* Global Background Video and Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/assets/coding.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-[-1] bg-[#0b0b0b]/70 backdrop-blur-sm" />
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
