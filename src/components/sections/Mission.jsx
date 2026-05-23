import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Rocket, GitMerge, Zap, CheckCircle } from 'lucide-react';
import { missionSteps } from '../../data/siteData';

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: { duration: 0.6 },
    },
  };

  const stepIcons = [Compass, Rocket, GitMerge, Zap, CheckCircle];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-nebula-blue/10 via-transparent to-transparent blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Cada projeto é uma missão</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-3xl mx-auto">
            Do primeiro protótipo ao deploy, trato cada etapa como parte de uma missão: entender o problema, construir uma solução eficiente, testar, melhorar e entregar uma experiência que faça sentido para quem usa.
          </p>
        </motion.div>

        {/* Mission Steps */}
        <div className="relative">
          {/* Orbital Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-nebula-cyan/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {missionSteps.map((step, index) => {
              const IconComponent = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Connection Node */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-nebula-cyan to-nebula-purple z-10 hidden lg:block transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-nebula-cyan/50" />

                  {/* Card */}
                  <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-nebula-cyan/20 to-nebula-purple/20 backdrop-blur-sm border border-white/10 group-hover:from-nebula-cyan/30 group-hover:to-nebula-purple/30 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-nebula-cyan group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    <div className="text-2xl font-bold gradient-text mb-2">{step.step}</div>
                    <div className="text-sm text-stellar-gray">{step.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Mission;
