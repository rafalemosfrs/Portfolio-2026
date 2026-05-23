import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutContent } from '../../data/siteData';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-nebula-blue/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-nebula-purple/5 via-transparent to-transparent" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
<motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Sobre mim</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-2xl mx-auto">
            Conheça minha trajetória profissional
          </p>
        </motion.div>
<div className="grid lg:grid-cols-3 gap-8 items-start">
<motion.div
            variants={itemVariants}
            className="lg:col-span-2 glass-card p-8"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              {aboutContent.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-stellar-silver leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
<div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-stellar-gray mt-1">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-stellar-gray mt-1">Projetos entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">95+</div>
                <div className="text-sm text-stellar-gray mt-1">Lighthouse Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-stellar-gray mt-1">Clientes satisfeitos</div>
              </div>
            </div>
          </motion.div>
<motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Destaques</h3>
            {aboutContent.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                variants={itemVariants}
                className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-nebula-cyan" />
                <span className="text-stellar-silver">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
