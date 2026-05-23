import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Briefcase, Calendar, MapPin, Star, ArrowRight } from 'lucide-react';
import { experiences } from '../../data/siteData';

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-radial from-nebula-blue/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gradient-radial from-nebula-purple/10 via-transparent to-transparent blur-3xl" />
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
            <span className="gradient-text">Experiência</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-2xl mx-auto">
            Minha trajetória profissional em tecnologia e evolução de carreira
          </p>
        </motion.div>
<div className="mb-16">
          {experiences.main.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:pr-[35%]' : 'lg:pl-[35%] lg:ml-auto'
              }`}
            >
<div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-cyan via-nebula-purple to-transparent" />
<div className="absolute left-0 lg:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-nebula-cyan to-nebula-purple shadow-lg shadow-nebula-cyan/50" />
<div className="relative ml-8 lg:ml-0 glass-card p-6 md:p-8 group hover:scale-105 transition-all duration-300">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-nebula-cyan/0 via-nebula-cyan/30 to-nebula-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
<div className="flex flex-wrap items-start gap-3 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-nebula-cyan mb-2">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-stellar-gray">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
<ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-stellar-silver">
                      <Star className="w-4 h-4 text-accent-gold mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
<motion.div variants={itemVariants} className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            <span className="gradient-text">Experiências Anteriores</span>
          </h3>
          <p className="text-center text-stellar-gray mb-10 max-w-2xl mx-auto">
            Trajetória que fortaleceu competências transferíveis como organização, comunicação, liderança e visão de negócio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {experiences.previous.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="glass-card p-5 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-stellar-gray flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-semibold text-white">{exp.title}</h4>
                    <div className="text-sm text-nebula-cyan">{exp.company}</div>
                    <div className="text-xs text-stellar-gray mt-1">{exp.period}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-stellar-silver"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
