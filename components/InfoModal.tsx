'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  GraduationCap,
  Terminal,
  ExternalLink,
  Github,
  Award
} from 'lucide-react'

interface InfoModalProps {
  isVisible: boolean
  onClose: () => void
}

interface TechCategory {
  title: string
  techs: { name: string; icon?: string }[]
}

interface DeveloperInfo {
  name: string
  formation: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  bio: string
  techCategories: TechCategory[]
}

const developerInfo: DeveloperInfo = {
  name: 'Lucca Santana',
  formation: 'MBA em Conclusão pela USP-ESALQ de Piracicaba\nGraduado em Contabilidade, Analise e Desenvolvimento de Sistemas',
  location: 'Piracicaba - SP',
  email: 'luccasantana88@gmail.com',
  phone: '19 982504656',
  linkedin: 'https://www.linkedin.com/in/luccasantana/',
  github: 'https://github.com/luccavalentin',
  bio: 'Profissional com ampla experiencia no mercado financeiro, analise de sistema, suporte técnico, com enfase atendimento ao cliente e customer success.',
  techCategories: [
    {
      title: 'DESENVOLVIMENTO',
      techs: [
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Python', icon: '🐍' },
      ]
    },
    {
      title: 'FRAMEWORKS & BIBLIOTECAS',
      techs: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
      ]
    },
    {
      title: 'INTELIGÊNCIA ARTIFICIAL & PLATAFORMAS',
      techs: [
        { name: 'ChatGPT', icon: '🤖' },
        { name: 'Deep Gemini', icon: '♊' },
        { name: 'Claude', icon: '🧠' },
        { name: 'n8n', icon: '⚙️' },
      ]
    },
    {
      title: 'BANCO DE DADOS & DEPLOY',
      techs: [
        { name: 'Supabase', icon: '⚡' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'SQL', icon: '📊' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Git', icon: '🌿' },
      ]
    }
  ]
}

export default function InfoModal({ isVisible, onClose }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-matrix-bg/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-matrix-bg/95 border-2 border-matrix-cyan/40 rounded-lg p-8 max-w-3xl w-full shadow-[0_0_50px_rgba(0,255,255,0.2)] max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className="flex justify-between items-start mb-8 border-b border-matrix-cyan/30 pb-4">
                <h2 className="text-matrix-cyan font-mono text-2xl md:text-3xl font-bold">
                  INFORMAÇÕES DO DESENVOLVEDOR
                </h2>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, color: '#00ffff' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-matrix-cyan/60 font-mono text-xl"
                >
                  [ X ]
                </motion.button>
              </div>

              <div className="space-y-8">
                {/* Header Profile */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-32 h-32 rounded-lg border-2 border-matrix-cyan/50 bg-matrix-cyan/10 flex items-center justify-center overflow-hidden relative group shrink-0">
                    <img
                      src="/lucca.png"
                      alt={developerInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <div>
                      <div className="text-matrix-cyan/60 font-mono text-xs mb-1 uppercase tracking-widest">Nome Completo</div>
                      <div className="text-matrix-cyan font-mono text-3xl font-bold">
                        {developerInfo.name}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="flex items-center gap-2 text-matrix-cyan/80 font-mono text-sm">
                        <MapPin size={14} className="text-matrix-cyan" />
                        {developerInfo.location}
                      </div>
                      <a href={`mailto:${developerInfo.email}`} className="flex items-center gap-2 text-matrix-cyan/80 font-mono text-sm hover:text-matrix-cyan transition-colors">
                        <Mail size={14} className="text-matrix-cyan" />
                        {developerInfo.email}
                      </a>
                      <div className="flex items-center gap-2 text-matrix-cyan/80 font-mono text-sm">
                        <Phone size={14} className="text-matrix-cyan" />
                        {developerInfo.phone}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formação */}
                <div className="bg-matrix-cyan/5 p-4 rounded-lg border border-matrix-cyan/20">
                  <div className="flex items-center gap-2 text-matrix-cyan/60 font-mono text-xs mb-3 uppercase tracking-widest">
                    <GraduationCap size={16} className="text-matrix-cyan" />
                    Formação Acadêmica
                  </div>
                  <div className="text-matrix-cyan font-mono text-base whitespace-pre-line leading-relaxed">
                    {developerInfo.formation}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <div className="flex items-center gap-2 text-matrix-cyan/60 font-mono text-xs mb-2 uppercase tracking-widest">
                    <Terminal size={16} className="text-matrix-cyan" />
                    Bio & Carreira
                  </div>
                  <div className="text-matrix-cyan/90 font-mono text-sm leading-relaxed bg-[#0a1628]/50 p-4 rounded border border-white/5 italic">
                    "{developerInfo.bio}"
                  </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.a
                    href={developerInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 119, 181, 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 bg-matrix-cyan/5 border border-matrix-cyan/30 rounded-md text-matrix-cyan font-mono text-sm flex items-center justify-center gap-3 hover:border-matrix-cyan/60 transition-all"
                  >
                    <Linkedin size={18} />
                    PERFIL LINKEDIN
                    <ExternalLink size={14} />
                  </motion.a>

                  <motion.a
                    href={`${developerInfo.linkedin}details/recommendations/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 bg-matrix-cyan/5 border border-matrix-cyan/30 rounded-md text-matrix-cyan font-mono text-sm flex items-center justify-center gap-3 hover:border-matrix-cyan/60 transition-all font-bold text-yellow-500/90"
                  >
                    <Award size={18} />
                    VER RECOMENDAÇÕES
                    <ExternalLink size={14} />
                  </motion.a>

                  <motion.a
                    href={developerInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 bg-matrix-cyan/5 border border-matrix-cyan/30 rounded-md text-matrix-cyan font-mono text-sm flex items-center justify-center gap-3 hover:border-matrix-cyan/60 transition-all md:col-span-2"
                  >
                    <Github size={18} />
                    GITHUB PROJETOS
                    <ExternalLink size={14} />
                  </motion.a>
                </div>

                {/* Skills/Stacks */}
                <div className="space-y-6">
                  <div className="text-matrix-cyan/60 font-mono text-xs uppercase tracking-widest border-b border-matrix-cyan/20 pb-2">
                    Stack Tecnológica & Competências
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {developerInfo.techCategories.map((category, catIndex) => (
                      <div key={catIndex} className="space-y-3">
                        <div className="text-matrix-cyan/50 font-mono text-[10px] font-bold tracking-tighter uppercase">
                          {category.title}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.techs.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (catIndex * 0.1) + (techIndex * 0.05) }}
                              className="px-3 py-1.5 bg-[#0f1f3a] border border-matrix-cyan/25 rounded flex items-center gap-2 hover:border-matrix-cyan/60 transition-colors"
                            >
                              <span className="text-base">{tech.icon}</span>
                              <span className="text-matrix-cyan font-mono text-[11px] font-medium">
                                {tech.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-matrix-cyan/20 text-center">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 255, 0.15)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-matrix-cyan/10 border border-matrix-cyan text-matrix-cyan font-mono text-sm font-bold uppercase tracking-widest rounded transition-all"
                >
                  [ ENCERRAR ACESSO ]
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

