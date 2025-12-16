'use client'

import { motion } from 'framer-motion'
import { SystemModule } from '@/data/modules'

interface SystemModuleCardProps {
  module: SystemModule
  index: number
}

export default function SystemModuleCard({ module, index }: SystemModuleCardProps) {
  const statusColor =
    module.status === 'ONLINE'
      ? 'text-matrix-cyan'
      : module.status === 'OFFLINE'
      ? 'text-red-500'
      : 'text-yellow-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-matrix-bg/60 backdrop-blur-sm border border-matrix-cyan/20 rounded-lg p-6 hover:border-matrix-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all cursor-pointer"
    >
      <div className="space-y-4">
        <div>
          <div className="text-matrix-cyan/60 font-mono text-xs mb-1">MÓDULO</div>
          <div className="text-matrix-cyan font-mono text-lg font-semibold">{module.name}</div>
        </div>

        <div>
          <div className="text-matrix-cyan/60 font-mono text-xs mb-1">TIPO</div>
          <div className="text-matrix-cyan/80 font-mono text-sm">{module.type}</div>
        </div>

        <div>
          <div className="text-matrix-cyan/60 font-mono text-xs mb-1">STATUS</div>
          <div className={`font-mono text-sm ${statusColor}`}>{module.status}</div>
        </div>

        <div>
          <div className="text-matrix-cyan/60 font-mono text-xs mb-1">ACESSO</div>
          <div className="text-matrix-cyan/80 font-mono text-sm">{module.access}</div>
        </div>

        {module.description && (
          <div className="pt-2 border-t border-matrix-cyan/10">
            <div className="text-matrix-cyan/50 font-mono text-xs">{module.description}</div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

