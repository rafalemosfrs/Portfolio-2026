import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink, Globe } from 'lucide-react';
import { education, certificates, languages } from '../../data/siteData';

const Education = () => {
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

  return (
    <section id="education" className="relative py-20 md:py-32 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-nebula-blue/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-nebula-purple/10 via-transparent to-transparent blur-3xl" />
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
            <span className="gradient-text">Formação Acadêmica</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-2xl mx-auto">
            Educação formal e certificações complementares
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
<div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-nebula-cyan to-nebula-blue">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Educação</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  variants={itemVariants}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-nebula-cyan mb-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stellar-gray text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      edu.status === 'Cursando'
                        ? 'bg-nebula-cyan/20 text-nebula-cyan border border-nebula-cyan/50'
                        : 'bg-white/5 text-stellar-silver border border-white/10'
                    }`}>
                      {edu.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
<div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-nebula-purple to-violet-600">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Idiomas</h3>
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  className="glass-card p-5 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{lang.name}</h4>
                      <div className="text-nebula-cyan font-medium">{lang.level}</div>
                      <div className="text-stellar-gray text-sm mt-1">{lang.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
<motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        id="certificates"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
<motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Certificados</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-2xl mx-auto">
            Cursos e certificações que complementam minha formação
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="glass-card p-8 hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-nebula-cyan via-nebula-blue to-nebula-purple flex items-center justify-center shadow-xl shadow-nebula-blue/30">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
<div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-nebula-cyan mb-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-medium">{cert.institution}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-stellar-gray">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          <span>{cert.workload}</span>
                        </div>
                      </div>
                    </div>
                  </div>
<div className="mb-6">
                    <div className="text-sm font-semibold text-white mb-3">Conteúdos estudados:</div>
                    <div className="flex flex-wrap gap-2">
                      {cert.contents.map((content) => (
                        <span
                          key={content}
                          className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg text-stellar-silver hover:border-nebula-cyan/50 transition-colors"
                        >
                          {content}
                        </span>
                      ))}
                    </div>
                  </div>
<motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-nebula-blue to-nebula-purple text-white font-medium rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-nebula-blue/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver certificado
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
