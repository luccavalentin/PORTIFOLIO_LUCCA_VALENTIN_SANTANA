'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AccessOverlayProps {
  isVisible: boolean
  onComplete: () => void
}

const accessLines = [
  '> acessando módulos...',
  '> validando permissões...',
  '> acesso concedido',
]

export default function AccessOverlay({ isVisible, onComplete }: AccessOverlayProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCurrentLineIndex(0)
      setCurrentCharIndex(0)
      return
    }

    if (currentLineIndex >= accessLines.length) {
      const timeout = setTimeout(() => {
        onComplete()
      }, 500)
      return () => clearTimeout(timeout)
    }

    const currentLine = accessLines[currentLineIndex]
    const timeout = setTimeout(() => {
      if (currentCharIndex < currentLine.length) {
        setCurrentCharIndex(currentCharIndex + 1)
      } else {
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }
    }, 30)

    return () => clearTimeout(timeout)
  }, [isVisible, currentLineIndex, currentCharIndex, onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-matrix-bg z-50 flex items-center justify-center"
        >
          <div className="w-full max-w-2xl px-4">
            <div className="bg-matrix-bg/90 border border-matrix-cyan/50 rounded-lg p-8 shadow-[0_0_50px_rgba(0,255,255,0.2)]">
              <div className="space-y-3">
                {accessLines.slice(0, currentLineIndex).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-matrix-cyan font-mono text-base md:text-lg"
                  >
                    {line}
                  </motion.div>
                ))}
                {currentLineIndex < accessLines.length && (
                  <div className="text-matrix-cyan font-mono text-base md:text-lg">
                    {accessLines[currentLineIndex].slice(0, currentCharIndex)}
                    <span className="animate-pulse">_</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

