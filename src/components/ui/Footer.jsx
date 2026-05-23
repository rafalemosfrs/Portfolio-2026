import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, ExternalLink } from 'lucide-react';
import { personalInfo, navItems } from '../../data/siteData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden border-t border-white/10">
<div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-radial from-nebula-blue/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
<div>
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name}
            </motion.a>
            <p className="text-stellar-gray text-sm leading-relaxed">
              Desenvolvedor Fullstack criando experiências digitais performáticas, modernas e escaláveis.
            </p>
          </div>
<div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {navItems.slice(1, 6).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-stellar-gray text-sm hover:text-nebula-cyan transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
<div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-stellar-gray text-sm hover:text-nebula-cyan transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stellar-gray text-sm hover:text-nebula-cyan transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stellar-gray text-sm hover:text-nebula-cyan transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
<div className="border-t border-white/10 pt-8">
  <div className="flex flex-col items-center justify-center gap-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center"
    >
      <p className="text-white/50 text-sm mb-2 flex items-center gap-2 justify-center">
        Desenvolvido com
        <Heart size={16} className="text-cyan-400 fill-current animate-pulse" />
        por Rafael Lemos
      </p>

      <p className="text-white/40 text-xs italic">
        "Do not go gentle into that good night" - Interestelar
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-white/30 text-xs text-center"
    >
      © {currentYear} {personalInfo.name}. Todos os direitos reservados.
    </motion.div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
