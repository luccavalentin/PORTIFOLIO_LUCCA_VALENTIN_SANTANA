'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface HeroTerminalProps {
  onViewModules: () => void
  onAccessInfo: () => void
}

const welcomeLines = [
  'BEM VINDO AO MEU PORTFOLIO',
  'É UM PRAZER TER VOCÊ AQUI!',
]

const terminalLines = [
  '> system.boot()',
  '> carregando módulos principais...',
  '> frontend.engine: ONLINE',
  '> projects.vitrine: PRONTO',
  '> access.level: DEMO',
]

export default function HeroTerminal({ onViewModules, onAccessInfo }: HeroTerminalProps) {
  const [welcomeLine1, setWelcomeLine1] = useState('')
  const [welcomeLine2, setWelcomeLine2] = useState('')
  const [welcomeLine1Index, setWelcomeLine1Index] = useState(0)
  const [welcomeLine2Index, setWelcomeLine2Index] = useState(0)
  const [showTerminal, setShowTerminal] = useState(false)
  
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  // Efeito de digitação da primeira linha de boas-vindas
  useEffect(() => {
    if (welcomeLine1Index < welcomeLines[0].length) {
      const timeout = setTimeout(() => {
        setWelcomeLine1(welcomeLines[0].slice(0, welcomeLine1Index + 1))
        setWelcomeLine1Index(welcomeLine1Index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else if (welcomeLine1Index === welcomeLines[0].length && welcomeLine2Index === 0) {
      // Aguarda um pouco antes de começar a segunda linha
      const timeout = setTimeout(() => {
        setWelcomeLine2Index(1)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [welcomeLine1Index, welcomeLine2Index])

  // Efeito de digitação da segunda linha de boas-vindas
  useEffect(() => {
    if (welcomeLine2Index > 0 && welcomeLine2Index <= welcomeLines[1].length) {
      const timeout = setTimeout(() => {
        setWelcomeLine2(welcomeLines[1].slice(0, welcomeLine2Index))
        setWelcomeLine2Index(welcomeLine2Index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else if (welcomeLine2Index > welcomeLines[1].length && !showTerminal) {
      // Aguarda um pouco antes de mostrar o terminal
      const timeout = setTimeout(() => {
        setShowTerminal(true)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [welcomeLine2Index, showTerminal])

  // Efeito de digitação do terminal
  useEffect(() => {
    if (!showTerminal || currentLineIndex >= terminalLines.length) return

    const currentLine = terminalLines[currentLineIndex]
    const timeout = setTimeout(() => {
      if (currentCharIndex < currentLine.length) {
        setCurrentCharIndex(currentCharIndex + 1)
      } else {
        setDisplayedLines([...displayedLines, currentLine])
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }
    }, 50)

    return () => clearTimeout(timeout)
  }, [showTerminal, currentLineIndex, currentCharIndex, displayedLines])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-matrix-cyan font-mono text-2xl md:text-3xl font-bold">
            {welcomeLine1}
            {welcomeLine1Index < welcomeLines[0].length && (
              <span className="animate-pulse">_</span>
            )}
          </h1>
          {welcomeLine1Index === welcomeLines[0].length && (
            <p className="text-matrix-cyan/80 font-mono text-base md:text-lg mt-2">
              {welcomeLine2}
              {welcomeLine2Index <= welcomeLines[1].length && (
                <span className="animate-pulse">_</span>
              )}
            </p>
          )}
        </motion.div>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-matrix-bg/80 backdrop-blur-sm border border-matrix-cyan/30 rounded-lg p-8 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          >
          <div className="space-y-2 mb-8">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-matrix-cyan font-mono text-sm md:text-base"
              >
                {line}
              </motion.div>
            ))}
            {currentLineIndex < terminalLines.length && (
              <div className="text-matrix-cyan font-mono text-sm md:text-base">
                {terminalLines[currentLineIndex].slice(0, currentCharIndex)}
                <span className="animate-pulse">_</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <motion.button
              onClick={onViewModules}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-matrix-cyan/10 border border-matrix-cyan text-matrix-cyan font-mono text-sm hover:bg-matrix-cyan/20 transition-colors rounded"
            >
              [ VER MÓDULOS ]
            </motion.button>
            <motion.button
              onClick={onAccessInfo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-matrix-cyan/10 border border-matrix-cyan text-matrix-cyan font-mono text-sm hover:bg-matrix-cyan/20 transition-colors rounded"
            >
              [ INFORMAÇÕES ]
            </motion.button>
          </div>
        </motion.div>
        )}
      </div>
    </div>
  )
}

