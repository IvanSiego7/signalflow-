import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GridBackground from './components/GridBackground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0E11] text-[#F0F2F5] selection:bg-[#00F0FF] selection:text-black font-sans overflow-x-hidden">
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
