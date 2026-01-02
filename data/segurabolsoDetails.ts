import { ProjectDetails } from './projectDetails'

export const segurabolsoDetails: ProjectDetails = {
  id: 'segurabolso',
  painPoint: {
    title: 'O PROBLEMA QUE RESOLVE',
    description: 'Muitas pessoas enfrentam dificuldades para controlar suas finanças pessoais, organizar receitas e despesas, e planejar o futuro financeiro sem ferramentas adequadas.',
    problems: [
      'Controlar gastos - Não saber para onde vai o dinheiro',
      'Organizar receitas e despesas - Falta de organização simples e visual',
      'Planejar o futuro financeiro - Ausência de ferramentas adequadas',
      'Evitar surpresas - Contas a vencer ou saldo negativo sem aviso',
      'Acompanhar múltiplas contas - Dificuldade em gerenciar vários cartões e contas em um só lugar',
      'Categorizar gastos - Não entender padrões de consumo',
      'Ter visão clara - Falta de visão do fluxo de caixa mensal',
    ],
  },
  modules: [
    {
      name: 'Dashboard Inteligente',
      description: 'Visão geral do saldo total e disponível com gráficos interativos e alertas',
      features: [
        'Visão geral do saldo total e disponível',
        'Gráficos interativos de receitas vs despesas',
        'Análise de gastos por categoria',
        'Alertas de contas a vencer',
        'Ações rápidas para adicionar receitas, despesas e contas',
      ],
    },
    {
      name: 'Gestão de Receitas',
      description: 'Cadastro completo de receitas com categorias personalizadas e controle de status',
      features: [
        'Cadastro de receitas com categorias personalizadas',
        'Controle de status (recebido/pendente)',
        'Suporte a receitas recorrentes',
        'Filtros por período, categoria e status',
        'Histórico completo de entradas',
      ],
    },
    {
      name: 'Gestão de Despesas',
      description: 'Registro detalhado de despesas com categorização automática e alertas',
      features: [
        'Registro detalhado de despesas',
        'Categorização automática',
        'Controle de parcelamentos',
        'Alertas de vencimento',
        'Análise de padrões de gasto',
      ],
    },
    {
      name: 'Contas e Cartões',
      description: 'Gerenciamento de múltiplas contas bancárias e cartões com saldo consolidado',
      features: [
        'Gerenciamento de múltiplas contas bancárias',
        'Controle de cartões de crédito e débito',
        'Saldo consolidado de todas as contas',
        'Histórico de movimentações por conta',
      ],
    },
    {
      name: 'Fluxo de Caixa',
      description: 'Visualização completa do fluxo mensal com entradas e saídas organizadas',
      features: [
        'Visualização completa do fluxo mensal',
        'Entradas e saídas organizadas por data',
        'Saldo projetado',
        'Filtros avançados por período e tipo',
      ],
    },
    {
      name: 'Categorias Personalizadas',
      description: 'Criação de categorias customizadas com organização por emojis e cores',
      features: [
        'Criação de categorias customizadas',
        'Organização por emojis e cores',
        'Limites de gasto por categoria',
        'Relatórios por categoria',
      ],
    },
    {
      name: 'Agenda Financeira',
      description: 'Calendário com todas as movimentações e alertas de contas a vencer',
      features: [
        'Calendário com todas as movimentações',
        'Alertas de contas a vencer',
        'Planejamento de despesas futuras',
        'Visualização mensal e semanal',
      ],
    },
    {
      name: 'Relatórios e Análises',
      description: 'Relatórios detalhados com gráficos, estatísticas e exportação de dados',
      features: [
        'Relatórios detalhados de receitas e despesas',
        'Gráficos e estatísticas',
        'Exportação de dados',
        'Análise de tendências',
      ],
    },
    {
      name: 'Produtividade',
      description: 'Gestão de tarefas integrada com controle de estudos e timer Pomodoro',
      features: [
        'Gestão de tarefas integrada',
        'Controle de estudos e cursos',
        'Timer Pomodoro para foco',
        'Dashboard de produtividade',
      ],
    },
    {
      name: 'Configurações',
      description: 'Perfil do usuário, configurações de segurança e notificações personalizadas',
      features: [
        'Perfil do usuário',
        'Configurações de segurança',
        'Notificações personalizadas',
        'Tema claro/escuro',
      ],
    },
  ],
  demoUrl: 'https://demo-finan-as-pessoais-segurabolso.vercel.app/auth',
  techStack: [
    // Fundamentos Web
    { name: 'HTML5', icon: '🌐', category: 'language' },
    { name: 'CSS3', icon: '🎨', category: 'language' },
    { name: 'JavaScript (ES6+)', icon: '📜', category: 'language' },
    
    // Frontend Core
    { name: 'React 18.3', icon: '⚛️', category: 'framework' },
    { name: 'TypeScript', icon: '🔷', category: 'language' },
    { name: 'Vite', icon: '⚡', category: 'tool' },
    { name: 'React Router DOM', icon: '🛣️', category: 'library' },
    
    // UI/UX
    { name: 'Tailwind CSS', icon: '💨', category: 'library' },
    { name: 'shadcn/ui', icon: '🎨', category: 'library' },
    { name: 'Radix UI', icon: '🧩', category: 'library' },
    { name: 'Lucide React', icon: '🎯', category: 'library' },
    { name: 'Recharts', icon: '📊', category: 'library' },
    { name: 'Sonner', icon: '🔔', category: 'library' },
    { name: 'next-themes', icon: '🌓', category: 'library' },
    
    // Estado e Dados
    { name: 'TanStack Query', icon: '🔄', category: 'library' },
    { name: 'React Hook Form', icon: '📋', category: 'library' },
    { name: 'Zod', icon: '🛡️', category: 'library' },
    { name: 'localStorage', icon: '💾', category: 'tool' },
    
    // Utilitários
    { name: 'Date-fns', icon: '📅', category: 'library' },
    { name: 'class-variance-authority', icon: '🎭', category: 'library' },
    { name: 'tailwind-merge', icon: '🔀', category: 'library' },
    { name: 'clsx', icon: '📦', category: 'library' },
    
    // Desenvolvimento
    { name: 'ESLint', icon: '🔍', category: 'tool' },
    { name: 'TypeScript ESLint', icon: '🔷', category: 'tool' },
    { name: 'PostCSS', icon: '🎨', category: 'tool' },
    { name: 'Autoprefixer', icon: '🔧', category: 'tool' },
    
    // Arquitetura
    { name: 'PWA Ready', icon: '📱', category: 'tool' },
  ],
}

