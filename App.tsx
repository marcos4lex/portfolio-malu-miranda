import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Theatre } from './components/Theatre';
import { Dance } from './components/Dance';
import { Monologues } from './components/Monologues';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Theatre />
      <Dance />
      <Monologues />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;