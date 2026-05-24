import React from 'react';
import CosmicBackground from './components/ui/CosmicBackground';
import Header from './components/ui/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Mission from './components/sections/Mission';
import Differentials from './components/sections/Differentials';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
<CosmicBackground/>
<div className="relative z-10">
        <Header/>
        <main>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Education/>
          <Mission/>
          <Differentials/>
          <Contact/>
          <Analytics/>
          <SpeedInsights/>
        </main>
          <WhatsAppButton/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
