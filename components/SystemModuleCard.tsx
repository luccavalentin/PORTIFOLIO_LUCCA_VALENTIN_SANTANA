'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { SystemModule } from '@/data/modules'
import ProjectDetailsModal from './ProjectDetailsModal'
import { gestaoProPlusDetails } from '@/data/projectDetails'
import { lawOfficeDetails } from '@/data/lawOfficeDetails'
import { segurabolsoDetails } from '@/data/segurabolsoDetails'
import { atlasFinanceDetails } from '@/data/atlasFinanceDetails'
import { Code, Info, Play } from 'lucide-react'

interface SystemModuleCardProps {
  module: SystemModule
  index: number
}

export default function SystemModuleCard({ module, index }: SystemModuleCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [initialTab, setInitialTab] = useState<'stacks' | 'system' | 'demo'>('stacks')
  const statusColor =
    module.status === 'ONLINE'
      ? 'text-matrix-cyan'
      : module.status === 'OFFLINE'
        ? 'text-red-500'
        : 'text-yellow-500'

  const projectDetails =
    module.id === 'gestao-pro-plus'
      ? gestaoProPlusDetails
      : module.id === 'law-office'
        ? lawOfficeDetails
        : module.id === 'segurabolso'
          ? segurabolsoDetails
          : module.id === 'atlas-finance'
            ? atlasFinanceDetails
            : null

  const handleButtonClick = (tab: 'stacks' | 'system' | 'demo') => {
    setInitialTab(tab)
    setShowDetails(true)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-matrix-bg/60 backdrop-blur-sm border-2 border-matrix-cyan/40 rounded-lg p-6 hover:border-matrix-cyan/80 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition-all flex flex-col relative overflow-hidden"
      >
        {/* Moldura decorativa interna */}
        <div className="absolute inset-0 border-2 border-matrix-cyan/10 rounded-lg pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-matrix-cyan/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-matrix-cyan/30 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-matrix-cyan/30 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-matrix-cyan/30 to-transparent" />
        <div className="space-y-4 flex-1 relative z-10">
          <div className="text-center">
            <div className="text-matrix-cyan/60 font-mono text-xs mb-1">MÓDULO</div>
            <div className="text-matrix-cyan font-mono text-lg font-semibold">{module.name}</div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div>
              <div className="text-matrix-cyan/60 font-mono text-xs mb-1">TIPO</div>
              <div className="text-matrix-cyan/80 font-mono text-sm">{module.type}</div>
            </div>

            <div>
              <div className="text-matrix-cyan/60 font-mono text-xs mb-1">STATUS</div>
              <div className={`font-mono text-sm ${statusColor}`}>{module.status}</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-matrix-cyan/60 font-mono text-xs mb-1">ACESSO</div>
            <div className="text-matrix-cyan/80 font-mono text-sm">{module.access}</div>
          </div>

          {module.description && (
            <div className="pt-3 border-t border-matrix-cyan/10 text-center">
              <div className="text-matrix-cyan/60 font-mono text-xs leading-relaxed">{module.description}</div>
            </div>
          )}

          {/* Faixa EM BREVE - EM DESENVOLVIMENTO */}
          {module.comingSoon && (
            <div className="mt-4 -mx-6 px-4 py-3 bg-white text-center">
              <div className="font-mono text-sm font-bold text-gray-800 tracking-wide">
                EM BREVE - EM DESENVOLVIMENTO
              </div>
            </div>
          )}

          {projectDetails && (
            <div className="pt-4 border-t border-matrix-cyan/20 space-y-2.5 mt-auto">
              <motion.button
                onClick={() => handleButtonClick('stacks')}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-matrix-cyan/10 to-matrix-cyan/5 border border-matrix-cyan/40 text-matrix-cyan font-mono text-xs font-medium hover:from-matrix-cyan/20 hover:to-matrix-cyan/10 hover:border-matrix-cyan/60 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all rounded-md flex items-center justify-center gap-2"
              >
                <Code className="w-3.5 h-3.5" />
                <span>STACKS</span>
              </motion.button>
              <motion.button
                onClick={() => handleButtonClick('system')}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-matrix-cyan/10 to-matrix-cyan/5 border border-matrix-cyan/40 text-matrix-cyan font-mono text-xs font-medium hover:from-matrix-cyan/20 hover:to-matrix-cyan/10 hover:border-matrix-cyan/60 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all rounded-md flex items-center justify-center gap-2"
              >
                <Info className="w-3.5 h-3.5" />
                <span>O SISTEMA</span>
              </motion.button>
              <motion.button
                onClick={() => handleButtonClick('demo')}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-matrix-cyan/10 to-matrix-cyan/5 border border-matrix-cyan/40 text-matrix-cyan font-mono text-xs font-medium hover:from-matrix-cyan/20 hover:to-matrix-cyan/10 hover:border-matrix-cyan/60 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all rounded-md flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5" />
                <span>VER DEMO</span>
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>

      {projectDetails && (
        <ProjectDetailsModal
          isVisible={showDetails}
          onClose={() => setShowDetails(false)}
          project={projectDetails}
          initialTab={initialTab}
        />
      )}
    </>
  )
}

