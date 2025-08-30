import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-300 font-mono">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
