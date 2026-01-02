import { ProjectDetails } from './projectDetails'

export const atlasFinanceDetails: ProjectDetails = {
    id: 'atlas-finance',
    painPoint: {
        title: 'A DOR QUE RESOLVE',
        description: 'O Atlas Finance foi desenvolvido para resolver as principais dores de pequenos e médios empresários que precisam gerenciar suas finanças de forma profissional, eliminando planilhas desconectadas e processos manuais.',
        problems: [
            'Falta de Visibilidade Financeira - Não saber quanto tem para receber, quanto deve, nem o fluxo de caixa real',
            'Finanças Pessoais Misturadas com Empresariais - Dificuldade em separar contas pessoais das da empresa',
            'Gestão Manual e Desorganizada - Uso de planilhas Excel espalhadas sem controle centralizado',
            'Dificuldade para Tomar Decisões - Falta de relatórios claros para decidir sobre investimentos ou cortes',
            'Investimentos Desorganizados - Sem visibilidade da rentabilidade dos investimentos PJ ou PF',
            'Falta de Ferramentas de Cálculo - Necessidade de calcular juros compostos, ROI, empréstimos',
            'Tarefas Financeiras Esquecidas - Perda de prazos de pagamento e recebimento',
        ],
    },
    modules: [
        {
            name: 'Dashboard Executivo',
            description: 'Dashboard unificado com métricas consolidadas em tempo real e visão completa do negócio',
            features: [
                'Métricas financeiras consolidadas em tempo real',
                'Gráficos interativos de receitas vs despesas',
                'Análise de fluxo de caixa',
                'Alertas de contas a vencer',
                'Visão geral PJ e PF integrada',
            ],
        },
        {
            name: 'Finanças Empresariais (PJ)',
            description: 'Módulo completo para gestão financeira empresarial com contas a pagar/receber e DRE',
            features: [
                'Contas a Pagar com controle de vencimentos',
                'Contas a Receber com rastreamento de recebíveis',
                'Faturamento e emissão de documentos',
                'DRE Gerencial automatizado',
                'Fluxo de caixa projetado',
                'Categorização de transações',
            ],
        },
        {
            name: 'Finanças Pessoais (PF)',
            description: 'Gestão financeira pessoal separada mas integrada para controle total',
            features: [
                'Controle de receitas e despesas pessoais',
                'Gestão de contas e cartões',
                'Orçamento mensal',
                'Metas financeiras pessoais',
                'Relatórios de gastos por categoria',
            ],
        },
        {
            name: 'Investimentos PJ',
            description: 'Módulo de investimentos empresariais com simuladores e acompanhamento de carteira',
            features: [
                'Carteira de investimentos empresariais',
                'Simuladores de rentabilidade',
                'Acompanhamento de performance',
                'Análise de risco',
                'Relatórios de investimentos',
            ],
        },
        {
            name: 'Investimentos PF',
            description: 'Gestão de investimentos pessoais com regras fiscais específicas para pessoa física',
            features: [
                'Carteira de investimentos pessoais',
                'Simuladores com regras PF',
                'Controle de IR sobre investimentos',
                'Diversificação de portfólio',
                'Metas de investimento',
            ],
        },
        {
            name: 'Calculadoras Financeiras',
            description: 'Ferramentas de cálculo integradas para tomada de decisões financeiras',
            features: [
                'Calculadora de Juros Compostos',
                'Calculadora de ROI',
                'Simulador de Empréstimos',
                'Calculadora de Financiamento',
                'Análise de Payback',
            ],
        },
        {
            name: 'Relatórios Executivos',
            description: 'Relatórios completos para análise e tomada de decisão',
            features: [
                'Relatórios de fluxo de caixa',
                'Análises comparativas avançadas',
                'Exportação para PDF e Excel',
                'Gráficos e visualizações interativas',
                'DRE detalhado por período',
            ],
        },
        {
            name: 'Gestão de Tarefas',
            description: 'Sistema de tarefas com priorização para atividades financeiras',
            features: [
                'Tarefas financeiras com prioridade',
                'Lembretes de vencimentos',
                'Vinculação com contas a pagar/receber',
                'Status de conclusão',
                'Notificações automáticas',
            ],
        },
    ],
    demoUrl: 'https://demo-portifolio-atlas-finance.vercel.app/',
    techStack: [
        // Fundamentos Web
        { name: 'HTML5', icon: '🌐', category: 'language' },
        { name: 'CSS3', icon: '🎨', category: 'language' },
        { name: 'JavaScript (ES6+)', icon: '📜', category: 'language' },

        // Frontend Core
        { name: 'React 18.3', icon: '⚛️', category: 'framework' },
        { name: 'TypeScript 5.8', icon: '🔷', category: 'language' },
        { name: 'Vite 5.4', icon: '⚡', category: 'tool' },
        { name: 'React Router DOM 6.30', icon: '🛣️', category: 'library' },

        // Estilização & UI
        { name: 'TailwindCSS 3.4', icon: '💨', category: 'library' },
        { name: 'shadcn/ui', icon: '🎨', category: 'library' },
        { name: 'Radix UI', icon: '🧩', category: 'library' },
        { name: 'Framer Motion 12', icon: '🎬', category: 'library' },
        { name: 'Lucide React 0.462', icon: '🎯', category: 'library' },

        // Gráficos e Visualização
        { name: 'Recharts 2.15', icon: '📊', category: 'library' },

        // Estado e Dados
        { name: 'TanStack Query 5.83', icon: '🔄', category: 'library' },
        { name: 'React Hook Form 7.61', icon: '📋', category: 'library' },
        { name: 'Zod 3.25', icon: '🛡️', category: 'library' },

        // Utilitários
        { name: 'date-fns 3.6', icon: '📅', category: 'library' },

        // Exportação & Documentos
        { name: 'jsPDF 3.x', icon: '📄', category: 'library' },
        { name: 'jspdf-autotable 5.x', icon: '📋', category: 'library' },
        { name: 'xlsx 0.18', icon: '📊', category: 'library' },
        { name: 'file-saver 2.x', icon: '💾', category: 'library' },

        // UX & Notificações
        { name: 'Sonner 1.7', icon: '🔔', category: 'library' },
        { name: 'SweetAlert2 11', icon: '🍬', category: 'library' },

        // Desenvolvimento
        { name: 'ESLint', icon: '🔍', category: 'tool' },
        { name: 'PostCSS', icon: '🎨', category: 'tool' },

        // Arquitetura
        { name: 'PWA Ready', icon: '📱', category: 'tool' },
    ],
}
