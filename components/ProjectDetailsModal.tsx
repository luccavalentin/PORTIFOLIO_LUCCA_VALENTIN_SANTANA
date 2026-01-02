'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ProjectDetails } from '@/data/projectDetails'
import DemoFullscreen from './DemoFullscreen'
import {
  LayoutDashboard,
  ShoppingCart,
  Wallet,
  Users,
  Package,
  DollarSign,
  FileText,
  BarChart3,
  CheckSquare,
  Headphones,
  Settings,
  TrendingUp,
  AlertCircle,
  Target,
  Play,
  Scale,
  Calendar,
  Receipt,
  CreditCard,
  TrendingDown,
  UserCheck,
  ClipboardList,
  ArrowDownCircle,
  ArrowUpCircle,
  Building2,
  PieChart,
  Tag,
  Clock,
  BookOpen,
} from 'lucide-react'

// Mapeamento de ícones para módulos
const moduleIcons: Record<string, any> = {
  // Gestão PRO +
  'Dashboard Executivo': LayoutDashboard,
  'PDV (Ponto de Venda)': ShoppingCart,
  'Gerenciador de Caixa': Wallet,
  'Gestão de Clientes (CRM)': Users,
  'Controle de Estoque': Package,
  'Módulo Financeiro': DollarSign,
  'Recibos e Orçamentos': FileText,
  'Relatórios Gerenciais': BarChart3,
  'Lembretes e Tarefas': CheckSquare,
  'Suporte Integrado': Headphones,
  'Configurações': Settings,
  // Escritório Advocacia
  'Dashboard': LayoutDashboard,
  'Atendimentos (Sistema de Fila)': ClipboardList,
  'Clientes': Users,
  'Processos': Scale,
  'Contas a Receber': TrendingUp,
  'Contas a Pagar': TrendingDown,
  'Comissionado': UserCheck,
  'Agenda e Tarefas': Calendar,
  'Contratos': FileText,
  'Recibos e Orçamentos': Receipt,
  'Relatórios': BarChart3,
  'Configurações': Settings,
  // SeguraBolso
  'Dashboard Inteligente': LayoutDashboard,
  'Gestão de Receitas': ArrowUpCircle,
  'Gestão de Despesas': ArrowDownCircle,
  'Contas e Cartões': Building2,
  'Fluxo de Caixa': TrendingUp,
  'Categorias Personalizadas': Tag,
  'Agenda Financeira': Calendar,
  'Relatórios e Análises': PieChart,
  'Produtividade': BookOpen,
  'Configurações': Settings,
}

interface ProjectDetailsModalProps {
  isVisible: boolean
  onClose: () => void
  project: ProjectDetails
  initialTab?: 'stacks' | 'system' | 'demo'
}

type TabType = 'stacks' | 'system' | 'demo'

export default function ProjectDetailsModal({
  isVisible,
  onClose,
  project,
  initialTab = 'stacks',
}: ProjectDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab)
  const [showFullscreen, setShowFullscreen] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  // Atualiza a aba quando o modal abre ou quando initialTab muda
  useEffect(() => {
    if (isVisible) {
      setActiveTab(initialTab)
      // Reset iframe states quando muda de aba
      if (initialTab === 'demo') {
        setIframeError(false)
        setIframeLoaded(false)
      }
    }
  }, [isVisible, initialTab])

  // Timeout para detectar se iframe não carregou (aumentado para 10s)
  useEffect(() => {
    if (activeTab === 'demo' && project.demoUrl && !iframeLoaded && !iframeError) {
      const timer = setTimeout(() => {
        // Se após 10 segundos não carregou, assume erro
        if (!iframeLoaded) {
          setIframeError(true)
        }
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [activeTab, project.demoUrl, iframeLoaded, iframeError])

  const techByCategory = {
    language: project.techStack.filter((t) => t.category === 'language'),
    framework: project.techStack.filter((t) => t.category === 'framework'),
    library: project.techStack.filter((t) => t.category === 'library'),
    tool: project.techStack.filter((t) => t.category === 'tool'),
    database: project.techStack.filter((t) => t.category === 'database'),
  }

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
              className="bg-[#0a1628] border-2 border-matrix-cyan/60 rounded-lg p-6 md:p-8 max-w-5xl w-full shadow-[0_0_80px_rgba(0,255,255,0.3)] max-h-[92vh] overflow-hidden flex flex-col backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-8 pb-4 border-b border-matrix-cyan/30">
                <div>
                  <h2 className="text-matrix-cyan font-mono text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                    {project.id === 'gestao-pro-plus'
                      ? 'GESTÃO PRO +'
                      : project.id === 'law-office'
                      ? 'GESTÃO ESCRITÓRIO ADVOCACIA'
                      : project.id === 'segurabolso'
                      ? 'SEGURABOLSO'
                      : project.id.toUpperCase()}
                  </h2>
                  <div className="text-matrix-cyan/70 font-mono text-base">
                    {project.id === 'gestao-pro-plus' ? 'SaaS ERP' : 'SaaS DEMO'}
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-matrix-cyan/70 hover:text-matrix-cyan font-mono text-xl px-3 py-1 rounded transition-colors"
                >
                  [ X ]
                </motion.button>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-8 border-b-2 border-matrix-cyan/20">
                {[
                  { id: 'stacks' as TabType, label: 'STACKS' },
                  { id: 'system' as TabType, label: 'O SISTEMA' },
                  { id: 'demo' as TabType, label: 'VER DEMO' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 font-mono text-sm md:text-base font-semibold transition-all relative ${
                      activeTab === tab.id
                        ? 'text-matrix-cyan'
                        : 'text-matrix-cyan/50 hover:text-matrix-cyan/80'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-matrix-cyan"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {activeTab === 'stacks' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Package className="w-4 h-4 text-matrix-cyan" />
                        <div className="text-matrix-cyan font-mono text-base font-semibold">
                          TECNOLOGIAS
                        </div>
                      </div>
                      {Object.entries(techByCategory).map(
                        ([category, techs]) =>
                          techs.length > 0 && (
                            <div key={category} className="mb-4">
                              <div className="text-matrix-cyan/70 font-mono text-xs font-medium mb-2.5 capitalize">
                                {category === 'language'
                                  ? 'Linguagens'
                                  : category === 'framework'
                                  ? 'Frameworks'
                                  : category === 'library'
                                  ? 'Bibliotecas'
                                  : category === 'tool'
                                  ? 'Ferramentas'
                                  : 'Bancos de Dados'}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {techs.map((tech, index) => (
                                  <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.01 }}
                                    className="group px-2.5 py-1.5 bg-[#0f1f3a] border border-matrix-cyan/25 rounded flex items-center gap-1.5 hover:border-matrix-cyan/50 hover:bg-[#152a4a] transition-colors"
                                  >
                                    <span className="text-sm">{tech.icon}</span>
                                    <span className="text-matrix-cyan font-mono text-xs">
                                      {tech.name}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'system' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* A DOR QUE RESOLVE */}
                    <div className="bg-gradient-to-br from-[#0f1f3a] to-[#1a2f4a] border-2 border-matrix-cyan/40 rounded-xl p-8 shadow-[0_0_30px_rgba(0,255,255,0.15)]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-matrix-cyan/20 rounded-lg">
                          <Target className="w-6 h-6 text-matrix-cyan" />
                        </div>
                        <div className="text-matrix-cyan font-mono text-2xl font-bold tracking-wide">
                          {project.painPoint.title}
                        </div>
                      </div>
                      <div className="text-matrix-cyan/90 font-mono text-base mb-8 leading-relaxed pl-12">
                        {project.painPoint.description}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.painPoint.problems.map((problem, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-3 bg-[#0a1628]/50 rounded-lg p-4 border border-matrix-cyan/20 hover:border-matrix-cyan/40 transition-colors"
                          >
                            <AlertCircle className="w-5 h-5 text-matrix-cyan flex-shrink-0 mt-0.5" />
                            <span className="text-matrix-cyan/90 font-mono text-sm leading-relaxed">
                              {problem}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Módulos e Funcionalidades */}
                    <div className="pt-8 border-t-2 border-matrix-cyan/30">
                      <div className="flex items-center gap-3 mb-8">
                        <TrendingUp className="w-6 h-6 text-matrix-cyan" />
                        <div className="text-matrix-cyan font-mono text-2xl font-bold tracking-wide">
                          MÓDULOS E FUNCIONALIDADES
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.modules.map((module, index) => {
                          const IconComponent = moduleIcons[module.name] || Package
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="group bg-gradient-to-br from-[#0f1f3a] to-[#1a2f4a] border-2 border-matrix-cyan/30 rounded-xl p-6 hover:border-matrix-cyan/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300"
                            >
                              <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-matrix-cyan/20 rounded-lg group-hover:bg-matrix-cyan/30 transition-colors">
                                  <IconComponent className="w-6 h-6 text-matrix-cyan" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-matrix-cyan font-mono text-lg font-bold mb-2">
                                    {module.name}
                                  </div>
                                  <div className="text-matrix-cyan/80 font-mono text-sm leading-relaxed">
                                    {module.description}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 pt-4 border-t border-matrix-cyan/20">
                                <div className="space-y-2.5">
                                  {module.features.map((feature, featIndex) => (
                                    <div
                                      key={featIndex}
                                      className="flex items-start gap-3 text-matrix-cyan/80 font-mono text-sm"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-matrix-cyan mt-2 flex-shrink-0" />
                                      <span className="flex-1 leading-relaxed">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'demo' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Play className="w-5 h-5 text-matrix-cyan" />
                        <div className="text-matrix-cyan font-mono text-lg font-bold tracking-wide">
                          PREVIEW DO SISTEMA
                        </div>
                      </div>
                      {project.demoUrl && (
                        <div className="flex gap-2">
                          <motion.button
                            onClick={() => setShowFullscreen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-matrix-cyan/20 border border-matrix-cyan/50 text-matrix-cyan font-mono text-xs font-medium hover:bg-matrix-cyan/30 hover:border-matrix-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all rounded-md flex items-center gap-2"
                          >
                            <Play className="w-3.5 h-3.5" />
                            <span>Tela Cheia</span>
                          </motion.button>
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-matrix-cyan/20 border border-matrix-cyan/50 text-matrix-cyan font-mono text-xs font-medium hover:bg-matrix-cyan/30 hover:border-matrix-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all rounded-md flex items-center gap-2"
                          >
                            <span>Abrir em nova aba</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        </div>
                      )}
                    </div>
                    <div className="bg-[#0f1f3a] border-2 border-matrix-cyan/40 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.15)] relative">
                      {project.demoUrl ? (
                        <>
                          {/* Iframe - tentativa de carregar */}
                          <iframe
                            src={project.demoUrl}
                            className={`w-full h-[600px] border-0 transition-opacity duration-200 ${
                              iframeLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            title="Preview do Sistema"
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
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0f1f3a]">
                              <div className="text-center">
                                <div className="text-matrix-cyan font-mono text-lg mb-4 animate-pulse">
                                  Carregando sistema...
                                </div>
                                <div className="w-16 h-16 border-4 border-matrix-cyan/30 border-t-matrix-cyan rounded-full animate-spin mx-auto"></div>
                              </div>
                            </div>
                          )}

                          {/* Error state - fallback */}
                          {iframeError && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0f1f3a] p-8">
                              <div className="text-center max-w-lg">
                                <div className="text-matrix-cyan/60 font-mono text-6xl mb-6">⚠️</div>
                                <div className="text-matrix-cyan font-mono text-xl font-bold mb-4">
                                  CONEXÃO RECUSADA
                                </div>
                                <div className="text-matrix-cyan/70 font-mono text-sm mb-6 leading-relaxed">
                                  O sistema não pode ser exibido em iframe devido a:
                                </div>
                                <div className="text-matrix-cyan/60 font-mono text-xs mb-8 space-y-2 text-left bg-[#0a1628] p-4 rounded border border-matrix-cyan/20">
                                  <div>• Restrições X-Frame-Options do servidor</div>
                                  <div>• Políticas de segurança do navegador</div>
                                  <div>• Bloqueio de iframes cross-origin</div>
                                </div>
                                <div className="text-matrix-cyan/70 font-mono text-sm mb-8 leading-relaxed">
                                  Use o botão <strong className="text-matrix-cyan">"Abrir em nova aba"</strong> acima para acessar o sistema completo.
                                </div>
                                <motion.a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="inline-block px-8 py-4 bg-matrix-cyan/20 border-2 border-matrix-cyan text-matrix-cyan font-mono text-sm font-bold hover:bg-matrix-cyan/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all rounded-lg"
                                >
                                  [ ABRIR SISTEMA EM NOVA ABA ]
                                </motion.a>
                                <div className="mt-6 text-matrix-cyan/50 font-mono text-xs">
                                  URL: {project.demoUrl}
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="p-12 min-h-[500px] flex items-center justify-center">
                          <div className="text-center max-w-md">
                            <div className="text-matrix-cyan/60 font-mono text-6xl mb-6">🖥️</div>
                            <div className="text-matrix-cyan font-mono text-xl font-bold mb-3">
                              DEMO EM DESENVOLVIMENTO
                            </div>
                            <div className="text-matrix-cyan/70 font-mono text-base leading-relaxed">
                              A visualização completa do sistema estará disponível em breve
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className="text-matrix-cyan/50 font-mono text-xs mb-2">
                        Sistema em execução: {project.demoUrl?.replace('https://', '').replace('/login', '')}
                      </div>
                      {project.demoUrl && (
                        <div className="text-matrix-cyan/40 font-mono text-xs">
                          Se a visualização não aparecer, use o botão "Abrir em nova aba" acima
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
      {project.demoUrl && (
        <DemoFullscreen
          isVisible={showFullscreen}
          onClose={() => setShowFullscreen(false)}
          demoUrl={project.demoUrl}
        />
      )}
    </AnimatePresence>
  )
}

