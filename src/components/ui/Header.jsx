import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { navItems, personalInfo } from '../../data/siteData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-deep/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
<motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-xl md:text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name}
            </motion.a>
<nav className="hidden lg:flex items-center space-x-1">
              {navItems.slice(1).map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-stellar-silver hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-nebula-cyan transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </motion.a>
              ))}
            </nav>
<motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-nebula-blue to-nebula-purple text-white font-medium rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-nebula-blue/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Entrar em contato
            </motion.a>
<motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-stellar-silver hover:text-white transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>
<AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-space-deep/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="px-4 py-3 text-base font-medium text-stellar-silver hover:text-white hover:bg-white/5 rounded-lg transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-nebula-blue to-nebula-purple text-white font-medium rounded-lg text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Mail className="w-4 h-4" />
                    Entrar em contato
                  </motion.a>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
<AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
