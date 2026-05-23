import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gauge, Layout, Code2, Layers } from 'lucide-react';
import { differentials } from '../../data/siteData';

const Differentials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const iconMap = {
    gauge: Gauge,
    layout: Layout,
    'code-2': Code2,
    layers: Layers,
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-nebula-purple/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-nebula-blue/10 via-transparent to-transparent" />
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
            <span className="gradient-text">Entre código, produto e performance</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-3xl mx-auto">
            Meu foco é construir aplicações que não apenas funcionem, mas que entreguem uma boa experiência para o usuário, sejam bem organizadas, responsivas, performáticas e preparadas para evoluir.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Gauge;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-card p-6 h-full hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-nebula-cyan/0 via-nebula-cyan/20 to-nebula-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nebula-cyan to-nebula-purple bg-opacity-10 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-nebula-cyan/30 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stellar-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Differentials;
