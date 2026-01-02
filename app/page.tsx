'use client'

import { useState } from 'react'
import MatrixRain from '@/components/MatrixRain'
import HeroTerminal from '@/components/HeroTerminal'
import AccessOverlay from '@/components/AccessOverlay'
import SystemModules from '@/components/SystemModules'
import InfoModal from '@/components/InfoModal'

export default function Home() {
  const [showAccessOverlay, setShowAccessOverlay] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)

  const handleViewModules = () => {
    setShowAccessOverlay(true)
  }

  const handleAccessComplete = () => {
    setShowAccessOverlay(false)
    setTimeout(() => {
      const modulesSection = document.getElementById('modules')
      if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleAccessInfo = () => {
    setShowInfoModal(true)
  }

  return (
    <main className="relative min-h-screen">
      <MatrixRain />
      <HeroTerminal onViewModules={handleViewModules} onAccessInfo={handleAccessInfo} />
      <SystemModules />
      <AccessOverlay isVisible={showAccessOverlay} onComplete={handleAccessComplete} />
      <InfoModal isVisible={showInfoModal} onClose={() => setShowInfoModal(false)} />
    </main>
  )
}

