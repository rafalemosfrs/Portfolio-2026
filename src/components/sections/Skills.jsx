import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, TestTube, Wrench, CheckCircle, Brain } from 'lucide-react';
import { skills } from '../../data/siteData';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    { title: 'Frontend', data: skills.frontend, icon: Code, gradient: 'from-nebula-cyan to-nebula-blue' },
    { title: 'Backend', data: skills.backend, icon: Server, gradient: 'from-nebula-blue to-nebula-purple' },
    { title: 'Testes', data: skills.testing, icon: TestTube, gradient: 'from-nebula-purple to-violet-600' },
    { title: 'Ferramentas', data: skills.tools, icon: Wrench, gradient: 'from-violet-600 to-nebula-purple' },
    { title: 'Boas Práticas', data: skills.bestPractices, icon: CheckCircle, gradient: 'from-nebula-cyan to-teal-500' },
    { title: 'Soft Skills', data: skills.softSkills, icon: Brain, gradient: 'from-teal-500 to-nebula-blue' },
  ];

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
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-nebula-blue/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-nebula-purple/10 via-transparent to-transparent blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Skills & Habilidades</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-2xl mx-auto">
            Minha constelação técnica de habilidades e competências
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-10`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {category.data.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group/skill relative px-3 py-2 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-stellar-silver hover:text-white hover:border-nebula-cyan/50 hover:bg-white/10 transition-all cursor-default"
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-nebula-cyan/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                      <span className="relative">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Constellation Line Effect */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-stellar-gray text-xs">
                  <div className="w-2 h-2 rounded-full bg-nebula-cyan animate-pulse" />
                  <span>{category.data.length} habilidades</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-stellar-gray text-sm max-w-2xl mx-auto">
            Em constante evolução, sempre estudando novas tecnologias e aprimorando minhas habilidades para entregar as melhores soluções.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
