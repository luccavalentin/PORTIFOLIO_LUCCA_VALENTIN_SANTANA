'use client'

import { motion } from 'framer-motion'
import { systemModules } from '@/data/modules'
import SystemModuleCard from './SystemModuleCard'

export default function SystemModules() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="modules" className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-matrix-cyan/10 border border-matrix-cyan text-matrix-cyan font-mono text-sm hover:bg-matrix-cyan/20 transition-colors rounded"
            >
              [ VOLTAR AO INÍCIO ]
            </motion.button>
          </div>
          <h2 className="text-matrix-cyan font-mono text-3xl md:text-4xl font-bold mb-4">
            MÓDULOS DO SISTEMA
          </h2>
          <div className="text-matrix-cyan/60 font-mono text-sm">
            > sistemas disponíveis para visualização
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemModules.map((module, index) => (
            <SystemModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

