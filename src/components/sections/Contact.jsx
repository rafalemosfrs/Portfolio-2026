import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, ExternalLink, Send, MapPin, Rocket } from 'lucide-react';
import { personalInfo } from '../../data/siteData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Formulário pronto para integração futura. Em breve será possível enviar mensagens diretamente.');
    setFormData({ name: '', email: '', message: '' });
  };

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
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-nebula-blue/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-nebula-purple/10 via-transparent to-transparent blur-3xl" />
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
            <span className="gradient-text">Vamos tirar sua ideia da órbita?</span>
          </h2>
          <p className="mt-4 text-stellar-gray text-lg max-w-2xl mx-auto">
            Estou aberto a oportunidades, projetos freelance e conexões profissionais na área de desenvolvimento web.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-gradient-to-br from-nebula-cyan to-nebula-blue">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Informações de Contato</h3>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <MapPin className="w-5 h-5 text-nebula-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-stellar-gray mb-1">Localização</div>
                    <div className="text-white font-medium">{personalInfo.location}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <Mail className="w-5 h-5 text-nebula-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-stellar-gray mb-1">E-mail</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white font-medium hover:text-nebula-cyan transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <Linkedin className="w-5 h-5 text-nebula-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-stellar-gray mb-1">LinkedIn</div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-nebula-cyan transition-colors flex items-center gap-1.5"
                    >
                      linkedin.com/in/rafalemosfrs
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <Github className="w-5 h-5 text-nebula-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-stellar-gray mb-1">GitHub</div>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-nebula-cyan transition-colors flex items-center gap-1.5"
                    >
                      github.com/rafalemosfrs
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-white/10" />

              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-stellar-silver hover:bg-white/10 hover:border-nebula-cyan/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-stellar-silver hover:bg-white/10 hover:border-nebula-cyan/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-gradient-to-br from-nebula-purple to-violet-600">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Enviar Mensagem</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stellar-silver mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-stellar-gray focus:border-nebula-cyan focus:outline-none focus:ring-1 focus:ring-nebula-cyan/50 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stellar-silver mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-stellar-gray focus:border-nebula-cyan focus:outline-none focus:ring-1 focus:ring-nebula-cyan/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stellar-silver mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-stellar-gray focus:border-nebula-cyan focus:outline-none focus:ring-1 focus:ring-nebula-cyan/50 transition-all resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-nebula-blue to-nebula-purple text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-nebula-blue/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Enviar mensagem
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
