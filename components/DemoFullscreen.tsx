'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface DemoFullscreenProps {
  isVisible: boolean
  onClose: () => void
  demoUrl: string
}

export default function DemoFullscreen({ isVisible, onClose, demoUrl }: DemoFullscreenProps) {
  const [iframeError, setIframeError] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  // Reset states quando modal abre
  useEffect(() => {
    if (isVisible) {
      setIframeError(false)
      setIframeLoaded(false)
    }
  }, [isVisible])

  // Timeout para detectar se iframe não carregou (aumentado para 10s)
  useEffect(() => {
    if (isVisible && !iframeLoaded && !iframeError) {
      const timer = setTimeout(() => {
        if (!iframeLoaded) {
          setIframeError(true)
        }
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, iframeLoaded, iframeError])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-matrix-bg"
        >
          {/* Header com botão de voltar */}
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-matrix-bg via-matrix-bg/95 to-transparent p-4"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-matrix-cyan/20 border-2 border-matrix-cyan/50 text-matrix-cyan font-mono text-sm font-semibold hover:bg-matrix-cyan/30 hover:border-matrix-cyan hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all rounded-lg flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                <span>VOLTAR AO PORTFÓLIO</span>
              </motion.button>
              <div className="text-matrix-cyan/60 font-mono text-xs">
                Sistema em execução
              </div>
            </div>
          </motion.div>

          {/* Iframe em tela cheia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full h-full pt-20 relative"
          >
            {/* Iframe */}
            <iframe
              src={demoUrl}
              className={`w-full h-full border-0 transition-opacity duration-300 ${
                iframeLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              title="Preview do Sistema - Tela Cheia"
              allow="fullscreen"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => {
                // Marca como carregado imediatamente
                // Para cross-origin, o onLoad já indica que carregou
                setIframeLoaded(true)
                setIframeError(false)
              }}
              onError={() => {
                setIframeError(true)
                setIframeLoaded(false)
              }}
              style={{ display: iframeError ? 'none' : 'block' }}
            />

            {/* Loading state */}
            {!iframeLoaded && !iframeError && (
              <div className="absolute inset-0 pt-20 flex items-center justify-center bg-matrix-bg">
                <div className="text-center">
                  <div className="text-matrix-cyan font-mono text-xl mb-6 animate-pulse">
                    Carregando sistema...
                  </div>
                  <div className="w-20 h-20 border-4 border-matrix-cyan/30 border-t-matrix-cyan rounded-full animate-spin mx-auto"></div>
                </div>
              </div>
            )}

            {/* Error state - fallback */}
            {iframeError && (
              <div className="absolute inset-0 pt-20 flex items-center justify-center bg-matrix-bg p-8">
                <div className="text-center max-w-2xl">
                  <div className="text-matrix-cyan/60 font-mono text-7xl mb-8">🖥️</div>
                  <div className="text-matrix-cyan font-mono text-3xl font-bold mb-6">
                    PREVIEW INDISPONÍVEL
                  </div>
                  <div className="text-matrix-cyan/70 font-mono text-base mb-10 leading-relaxed">
                    O sistema bloqueou a exibição em iframe. Clique no botão abaixo para abrir o sistema completo em uma nova aba.
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-matrix-cyan/20 border-2 border-matrix-cyan text-matrix-cyan font-mono text-base font-bold hover:bg-matrix-cyan/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all rounded-lg"
                    >
                      [ ABRIR SISTEMA EM NOVA ABA ]
                    </motion.a>
                  </div>
                  <div className="mt-8 text-matrix-cyan/50 font-mono text-sm">
                    URL: {demoUrl}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


