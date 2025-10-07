import { Navigation } from './components/navigation/Navigation';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  // Initialize theme to ensure proper dark mode setup
  useTheme();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
