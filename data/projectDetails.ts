export interface TechStack {
  name: string
  icon: string
  category: 'language' | 'framework' | 'library' | 'tool' | 'database'
}

export interface ProjectDetails {
  id: string
  painPoint: {
    title: string
    description: string
    problems: string[]
  }
  modules: {
    name: string
    description: string
    features: string[]
  }[]
  techStack: TechStack[]
  demoUrl?: string
}

export const gestaoProPlusDetails: ProjectDetails = {
  id: 'gestao-pro-plus',
  painPoint: {
    title: 'A DOR QUE RESOLVE',
    description: 'Pequenas e médias empresas enfrentam desafios críticos na gestão do negócio, dependendo de planilhas, processos manuais e sistemas desconectados.',
    problems: [
      'Falta de controle financeiro - Empresários não sabem exatamente quanto lucram',
      'Gestão de estoque ineficiente - Vendas de produtos sem estoque, falta de reposição no momento certo',
      'Processo de vendas desorganizado - Dependência de papel, planilhas ou sistemas desconectados',
      'Gestão de caixa manual - Caixa nunca fecha, dificuldade em controlar sangrias e suprimentos',
      'Falta de relacionamento com clientes - Perda de vendas por falta de acompanhamento, sem histórico de compras',
      'Ausência de planejamento - Tarefas e lembretes espalhados, falta de organização',
      'Dificuldade em tomar decisões - Decisões baseadas em "achismo" sem dados reais',
      'Dependência de planilhas e papel - Planilhas bagunçadas, perda de dados, falta de backup',
    ],
  },
  modules: [
    {
      name: 'Dashboard Executivo',
      description: 'Visão geral do negócio em tempo real com métricas principais e gráficos interativos',
      features: [
        'Métricas principais: Vendas do dia, Clientes ativos, Produtos em estoque, Lucro do mês',
        'Gráficos interativos de vendas e estoque',
        'Últimas vendas realizadas',
        'Ações rápidas para operações frequentes',
        'Filtros por período personalizados',
      ],
    },
    {
      name: 'PDV (Ponto de Venda)',
      description: 'Interface otimizada para vendas rápidas com múltiplas formas de pagamento',
      features: [
        'Busca de produtos por código, nome ou código de barras',
        'Múltiplas formas de pagamento: PIX, Cartão de Crédito, Débito, Dinheiro',
        'Desconto por item ou na venda completa',
        'Seleção de cliente (PF ou PJ)',
        'Cálculo automático de troco',
        'Histórico completo de vendas',
        'Impressão de recibos',
        'Visualização e edição de vendas anteriores',
      ],
    },
    {
      name: 'Gerenciador de Caixa',
      description: 'Controle profissional de caixa com abertura, fechamento e movimentações',
      features: [
        'Abertura e fechamento de caixa',
        'Controle de sangrias (retiradas)',
        'Controle de suprimentos (entradas)',
        'Relatórios detalhados por período',
        'Filtros por tipo de movimentação',
        'Exportação de dados para Excel',
        'Gráficos de movimentações',
        'Análise por forma de pagamento',
      ],
    },
    {
      name: 'Gestão de Clientes (CRM)',
      description: 'CRM completo com histórico de compras, timeline e sistema de tags',
      features: [
        'Cadastro completo de clientes (PF e PJ)',
        'Validação automática de CPF/CNPJ',
        'Busca de endereço por CEP',
        'Histórico completo de compras',
        'Timeline de interações',
        'Sistema de tags e categorização',
        'Anotações personalizadas',
        'Controle de limite de crédito',
        'Desconto personalizado por cliente',
        'Filtros avançados de busca',
      ],
    },
    {
      name: 'Controle de Estoque',
      description: 'Controle inteligente de estoque com alertas e código de barras',
      features: [
        'Cadastro completo de produtos',
        'Código de barras e código interno',
        'Controle de estoque mínimo e máximo',
        'Alertas de estoque baixo',
        'Histórico de movimentações (entradas/saídas)',
        'Categorização de produtos',
        'Múltiplos fornecedores',
        'Cálculo automático de custo e margem',
        'Relatórios de reposição',
        'Exportação de dados',
      ],
    },
    {
      name: 'Módulo Financeiro',
      description: 'Controle completo de receitas, despesas e fluxo de caixa',
      features: [
        'Controle de receitas e despesas',
        'Categorização de transações',
        'Contas a pagar e receber',
        'Fluxo de caixa projetado',
        'Relatórios financeiros detalhados',
        'Gráficos de análise financeira',
        'Filtros por período, categoria e status',
        'Exportação para Excel e PDF',
        'Dashboard financeiro com métricas principais',
      ],
    },
    {
      name: 'Recibos e Orçamentos',
      description: 'Geração de recibos profissionais e criação de orçamentos',
      features: [
        'Geração de recibos profissionais',
        'Criação de orçamentos',
        'Conversão de orçamento em venda',
        'Impressão em PDF formatado',
        'Histórico de documentos emitidos',
        'Personalização de templates',
      ],
    },
    {
      name: 'Relatórios Gerenciais',
      description: 'Análises completas com exportação para Excel e PDF',
      features: [
        'Relatório de vendas (diário, semanal, mensal)',
        'Relatório de estoque',
        'Relatório financeiro detalhado',
        'Relatório de clientes',
        'Análise de lucratividade',
        'Exportação para Excel e PDF',
        'Gráficos e visualizações interativas',
      ],
    },
    {
      name: 'Lembretes e Tarefas',
      description: 'Sistema de tarefas e lembretes integrado com notificações',
      features: [
        'Criação de tarefas e lembretes',
        'Sistema de prioridades',
        'Notificações automáticas',
        'Vinculação com clientes',
        'Status de conclusão',
        'Filtros e busca avançada',
      ],
    },
    {
      name: 'Suporte Integrado',
      description: 'Sistema de tickets para atendimento e suporte',
      features: [
        'Sistema de tickets',
        'Categorização de solicitações',
        'Histórico de atendimentos',
        'Status de resolução',
        'Anexos e documentos',
      ],
    },
    {
      name: 'Configurações',
      description: 'Personalização e configurações gerais do sistema',
      features: [
        'Configurações da empresa',
        'Personalização de categorias',
        'Configurações de impressão',
        'Integrações',
        'Preferências do sistema',
      ],
    },
  ],
  demoUrl: 'https://demo-portifolio-erp-gestao-pro.vercel.app/login',
  techStack: [
    // Fundamentos Web
    { name: 'HTML5', icon: '🌐', category: 'language' },
    { name: 'CSS3', icon: '🎨', category: 'language' },
    { name: 'JavaScript (ES6+)', icon: '📜', category: 'language' },
    
    // Frontend Core
    { name: 'React 18', icon: '⚛️', category: 'framework' },
    { name: 'TypeScript', icon: '🔷', category: 'language' },
    { name: 'Vite', icon: '⚡', category: 'tool' },
    { name: 'React Router', icon: '🛣️', category: 'library' },
    
    // UI/UX
    { name: 'Tailwind CSS', icon: '💨', category: 'library' },
    { name: 'shadcn/ui', icon: '🎨', category: 'library' },
    { name: 'Radix UI', icon: '🧩', category: 'library' },
    { name: 'Lucide React', icon: '🎯', category: 'library' },
    { name: 'Recharts', icon: '📊', category: 'library' },
    { name: 'Sonner', icon: '🔔', category: 'library' },
    
    // Estado e Dados
    { name: 'TanStack Query', icon: '🔄', category: 'library' },
    { name: 'React Context API', icon: '🌐', category: 'library' },
    { name: 'localStorage', icon: '💾', category: 'tool' },
    
    // Formulários e Validação
    { name: 'React Hook Form', icon: '📋', category: 'library' },
    { name: 'Zod', icon: '🛡️', category: 'library' },
    
    // Utilitários
    { name: 'Date-fns', icon: '📅', category: 'library' },
    
    // Desenvolvimento
    { name: 'ESLint', icon: '🔍', category: 'tool' },
    { name: 'PostCSS', icon: '🎨', category: 'tool' },
    
    // Arquitetura
    { name: 'Multi-tenant', icon: '🏢', category: 'tool' },
    { name: 'PWA Ready', icon: '📱', category: 'tool' },
    { name: 'JWT Auth', icon: '🔐', category: 'tool' },
  ],
}

