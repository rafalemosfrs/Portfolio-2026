import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../../data/siteData';

const Projects = () => {
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
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-nebula-blue/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-nebula-purple/5 via-transparent to-transparent" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
<motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Projetos</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-2xl mx-auto">
            Soluções reais que construí para clientes e desafios técnicos
          </p>
        </motion.div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative ${project.status === 'coming-soon' ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="h-full glass-card overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-nebula-blue/20">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-nebula-cyan/20 via-transparent to-nebula-purple/20" />
                </div>

                <div className="relative p-6">
{project.status === 'coming-soon' && (
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-nebula-purple/30 to-nebula-blue/30 backdrop-blur-sm border border-nebula-cyan/30 rounded-full">
                        <Sparkles className="w-3.5 h-3.5 text-nebula-cyan animate-pulse" />
                        <span className="text-xs font-medium text-nebula-cyan">Em evolução</span>
                      </div>
                    </div>
                  )}
<div className="mb-4 h-40 bg-gradient-to-br from-space-night to-space-mid rounded-lg overflow-hidden relative border border-white/10">
  {project.image ? (
    <>
      <img
        src={project.image}
        alt={`Preview do projeto ${project.title}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-space-deep/80 via-space-deep/20 to-transparent" />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-nebula-cyan/10 via-transparent to-nebula-purple/20" />

      {project.metrics && (
        <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-md border border-green-500/50 rounded-full">
          <span className="text-xs font-bold text-green-400">
            {project.metrics[0]}
          </span>
        </div>
      )}
    </>
  ) : (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      <div className="relative text-center p-4">
        <div className="text-2xl font-bold gradient-text mb-2">
          {project.title}
        </div>

        {project.metrics && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full">
            <span className="text-xs font-bold text-green-400">
              {project.metrics[0]}
            </span>
          </div>
        )}
      </div>
    </div>
  )}
</div>
<h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
<p className="text-stellar-gray text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
<div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-stellar-silver"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
<div className="flex gap-3">
                    {project.liveUrl && project.status !== 'coming-soon' && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-nebula-blue to-nebula-purple text-white font-medium rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-nebula-blue/30"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver projeto
                      </motion.a>
                    )}
                    {project.codeUrl && project.status !== 'coming-soon' && (
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/20 text-stellar-silver font-medium rounded-lg text-sm transition-all hover:bg-white/5 hover:border-nebula-cyan"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </motion.a>
                    )}
                    {project.status === 'coming-soon' && (
                      <div className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-stellar-gray text-sm">
                        <Sparkles className="w-4 h-4" />
                        Em breve
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
<motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-stellar-gray max-w-2xl mx-auto">
            Mais projetos e detalhes disponíveis no meu GitHub. Cada projeto representa um desafio superado e uma solução construída com atenção à performance, usabilidade e código limpo.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
