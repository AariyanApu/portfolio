import About from '@/sections/About';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Project from '@/sections/Project';
import Skills from '@/sections/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Skills />
      <Footer />
    </main>
  );
}
