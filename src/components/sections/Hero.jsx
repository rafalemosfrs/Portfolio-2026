import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import { heroContent, personalInfo } from '../../data/siteData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = heroContent.typingTexts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % heroContent.typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const techChips = [
    'React',
    'Vercel',
    'SQL',
    'Tailwind CSS',
    'Node',
    'APIs REST',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Orbital Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-nebula-blue/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-nebula-cyan/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-nebula-purple/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
      </div>

      {/* Event Horizon Effect */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full animate-pulse-slow" />
        <div className="absolute inset-10 bg-gradient-radial from-nebula-purple/20 via-transparent to-transparent rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-20 bg-gradient-radial from-[#000]/60 to-[#000]/90 rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-nebula-blue/20 to-nebula-purple/20 backdrop-blur-sm border border-white/10 rounded-full"
            >
              <span className="text-sm font-medium text-nebula-cyan">{personalInfo.role}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-white">{heroContent.title.split('Desenvolvedor')[0]}</span>
              <span className="gradient-text">Desenvolvedor</span>
              <span className="text-white">{heroContent.title.split('Desenvolvedor')[1]}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-stellar-gray mb-8 max-w-2xl"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* Typing Animation */}
            <motion.div
              variants={itemVariants}
              className="mb-8 font-mono text-nebula-cyan text-lg"
            >
              <span>&gt; </span>
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="cosmic-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver projetos
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="outline-button flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar comigo
              </motion.a>
              <motion.a
  href={personalInfo.resumeUrl}
  download={personalInfo.resumeFileName}
  className="outline-button flex items-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download className="w-4 h-4" />
  Baixar currículo
</motion.a>
            </motion.div>
          </div>

          {/* Right Content - Code Card */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Floating Tech Chips */}
              {techChips.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute tech-chip animate-float"
                  style={{
                    top: `${15 + (index % 3) * 25}%`,
                    left: index % 2 === 0 ? '-10%' : '100%',
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {tech}
                </motion.div>
              ))}

              {/* Main Card */}
              <div className="glass-card-strong p-6 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-stellar-gray font-mono">app.jsx</span>
                </div>
                <pre className="font-mono text-sm overflow-x-auto">
                  <code className="text-stellar-silver">
{`import React from 'react';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  );
};

export default App;`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-stellar-gray">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-stellar-gray/50 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-nebula-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
