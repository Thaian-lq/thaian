import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { useSmoothScroll } from './smooth/useSmoothScroll'; 

export default function App() {
  useSmoothScroll(80); 

  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}