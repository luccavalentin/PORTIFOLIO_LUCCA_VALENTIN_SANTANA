'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface InfoModalProps {
  isVisible: boolean
  onClose: () => void
}

interface DeveloperInfo {
  name: string
  age: number
  formation: string
  location: string
  email: string
  phone?: string
  bio: string
  skills: string[]
  experience: string
}

const developerInfo: DeveloperInfo = {
  name: 'Lucca',
  age: 25,
  formation: 'Desenvolvimento de Software',
  location: 'Brasil',
  email: 'contato@exemplo.com',
  phone: '+55 (00) 00000-0000',
  bio: 'Desenvolvedor Frontend especializado em criar experiências digitais imersivas e produtos SaaS de alta qualidade.',
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Node.js',
  ],
  experience: '5+ anos',
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
              className="bg-matrix-bg/95 border border-matrix-cyan/50 rounded-lg p-8 max-w-2xl w-full shadow-[0_0_50px_rgba(0,255,255,0.2)] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-matrix-cyan font-mono text-2xl md:text-3xl font-bold">
                  INFORMAÇÕES DO DESENVOLVEDOR
                </h2>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-matrix-cyan/60 hover:text-matrix-cyan font-mono text-xl"
                >
                  [ X ]
                </motion.button>
              </div>

              <div className="space-y-6">
                {/* Foto e Nome */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-lg border-2 border-matrix-cyan/50 bg-matrix-cyan/10 flex items-center justify-center overflow-hidden">
                    <div className="text-matrix-cyan/60 font-mono text-4xl">
                      {developerInfo.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-matrix-cyan/60 font-mono text-xs mb-1">NOME</div>
                    <div className="text-matrix-cyan font-mono text-2xl font-bold mb-2">
                      {developerInfo.name}
                    </div>
                    <div className="text-matrix-cyan/60 font-mono text-xs mb-1">IDADE</div>
                    <div className="text-matrix-cyan/80 font-mono text-base">
                      {developerInfo.age} anos
                    </div>
                  </div>
                </div>

                {/* Formação */}
                <div>
                  <div className="text-matrix-cyan/60 font-mono text-xs mb-1">FORMAÇÃO</div>
                  <div className="text-matrix-cyan font-mono text-base">
                    {developerInfo.formation}
                  </div>
                </div>

                {/* Localização */}
                <div>
                  <div className="text-matrix-cyan/60 font-mono text-xs mb-1">LOCALIZAÇÃO</div>
                  <div className="text-matrix-cyan font-mono text-base">
                    {developerInfo.location}
                  </div>
                </div>

                {/* Contato */}
                <div>
                  <div className="text-matrix-cyan/60 font-mono text-xs mb-2">CONTATO</div>
                  <div className="space-y-2">
                    <div className="text-matrix-cyan/80 font-mono text-sm">
                      EMAIL: {developerInfo.email}
                    </div>
                    {developerInfo.phone && (
                      <div className="text-matrix-cyan/80 font-mono text-sm">
                        TEL: {developerInfo.phone}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <div className="text-matrix-cyan/60 font-mono text-xs mb-1">BIO</div>
                  <div className="text-matrix-cyan/80 font-mono text-sm leading-relaxed">
                    {developerInfo.bio}
                  </div>
                </div>

                {/* Experiência */}
                <div>
                  <div className="text-matrix-cyan/60 font-mono text-xs mb-1">EXPERIÊNCIA</div>
                  <div className="text-matrix-cyan font-mono text-base">
                    {developerInfo.experience}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="text-matrix-cyan/60 font-mono text-xs mb-2">TECNOLOGIAS</div>
                  <div className="flex flex-wrap gap-2">
                    {developerInfo.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-matrix-cyan/10 border border-matrix-cyan/30 rounded text-matrix-cyan font-mono text-xs"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-matrix-cyan/20 text-center">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-matrix-cyan/10 border border-matrix-cyan text-matrix-cyan font-mono text-sm hover:bg-matrix-cyan/20 transition-colors rounded"
                >
                  [ FECHAR ]
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

