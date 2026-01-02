import { ProjectDetails } from './projectDetails'

export const lawOfficeDetails: ProjectDetails = {
  id: 'law-office',
  painPoint: {
    title: 'A DOR QUE RESOLVE',
    description: 'Escritórios de advocacia enfrentam desafios críticos na organização e gestão do negócio jurídico, dependendo de sistemas desconectados e processos manuais.',
    problems: [
      'Desorganização de informações - Clientes, processos e documentos espalhados em diferentes sistemas',
      'Gestão financeira ineficiente - Controle manual de contas, dificuldade em calcular comissões',
      'Falta de controle de processos - Processos sem rastreamento adequado, dificuldade em acompanhar prazos',
      'Gestão de atendimentos desorganizada - Fila sem controle, falta de registro de demandas',
      'Ausência de relatórios e análises - Falta de dados para tomada de decisão, sem visão clara do desempenho',
      'Dependência de internet - Sistemas online que não funcionam sem conexão',
      'Preocupação com privacidade - Dados sensíveis em servidores externos',
    ],
  },
  modules: [
    {
      name: 'Dashboard',
      description: 'Visão geral do escritório com métricas em tempo real e gráficos interativos',
      features: [
        'Cards informativos com totais de clientes, contas e tarefas',
        'Gráficos de receita, despesas e comparações mensais',
        'Distribuição de status de contas e tarefas',
        'Atividades recentes do sistema',
        'Filtros por período para análises personalizadas',
      ],
    },
    {
      name: 'Atendimentos (Sistema de Fila)',
      description: 'Sistema completo de fila de atendimento com geração automática de senhas',
      features: [
        'Geração automática de senhas sequenciais (A001, A002)',
        'Registro de atendimentos com tipo de demanda',
        'Painel de chamada com alertas sonoros',
        'Filtros por status e tipo de demanda',
        'Estatísticas de atendimentos do dia',
        'Histórico completo de atendimentos',
      ],
    },
    {
      name: 'Clientes',
      description: 'Gestão completa de clientes com histórico e integração',
      features: [
        'Cadastro completo de clientes (PF e PJ)',
        'Informações de contato, endereço e documentos',
        'Histórico de interações e processos vinculados',
        'Busca e filtros avançados',
        'Integração com CEP para preenchimento automático',
        'Visualização detalhada de cada cliente',
      ],
    },
    {
      name: 'Processos',
      description: 'Rastreamento completo de processos jurídicos com controle de prazos',
      features: [
        'Cadastro completo de processos jurídicos',
        'Número do processo, CNJ, tipo, status e prioridade',
        'Informações da vara, comarca e juiz',
        'Acompanhamento de prazos e vencimentos',
        'Histórico de movimentações',
        'Valor da causa e atualizações',
        'Sistema de tags para organização',
        'Filtros por status, tipo, prioridade e período',
      ],
    },
    {
      name: 'Contas a Receber',
      description: 'Controle completo de receitas com recorrência e parcelamento',
      features: [
        'Cadastro de receitas vinculadas a clientes',
        'Controle de vencimentos e status (pendente, pago, vencido, parcial)',
        'Pagamentos parciais com histórico',
        'Recorrência automática (diária, semanal, mensal, anual)',
        'Parcelamento de valores',
        'Filtros por data, status e cliente',
        'Alertas de vencimento e inadimplência',
      ],
    },
    {
      name: 'Contas a Pagar',
      description: 'Gestão completa de despesas do escritório',
      features: [
        'Gestão completa de despesas',
        'Controle de vencimentos e status',
        'Categorização de despesas',
        'Pagamentos parciais',
        'Recorrência e parcelamento',
        'Filtros avançados',
        'Relatórios de despesas',
      ],
    },
    {
      name: 'Comissionado',
      description: 'Cálculo automático de comissões por advogado',
      features: [
        'Cálculo automático de comissões',
        'Percentual configurável por advogado',
        'Visualização de comissões a receber e recebidas',
        'Filtros por advogado e período',
        'Relatórios de comissões',
      ],
    },
    {
      name: 'Agenda e Tarefas',
      description: 'Calendário visual e gestão de tarefas com prioridades',
      features: [
        'Calendário visual de compromissos',
        'Tarefas com prioridade (baixa, média, alta)',
        'Status de tarefas (pendente, em andamento, concluída)',
        'Vinculação de tarefas a clientes',
        'Lembretes e notificações',
        'Visualização por dia, semana e mês',
      ],
    },
    {
      name: 'Contratos',
      description: 'Gestão completa de contratos com controle de vigência',
      features: [
        'Cadastro de contratos com clientes',
        'Tipos de contrato (honorários, consultoria, etc.)',
        'Controle de vigência e renovação',
        'Valores mensais e totais',
        'Formas de pagamento',
        'Renovação automática configurável',
        'Alertas de vencimento',
        'Filtros por status, tipo e período',
      ],
    },
    {
      name: 'Recibos e Orçamentos',
      description: 'Geração de documentos profissionais em PDF',
      features: [
        'Geração de recibos em PDF',
        'Criação de orçamentos profissionais',
        'Produtos e serviços cadastráveis',
        'Cálculo automático de valores',
        'Histórico de recibos e orçamentos',
        'Exportação em PDF',
      ],
    },
    {
      name: 'Relatórios',
      description: 'Análises completas com exportação em PDF e CSV',
      features: [
        'Relatório de Contas a Receber',
        'Relatório de Contas a Pagar',
        'Fluxo de Caixa (Receitas vs Despesas)',
        'Receitas por Cliente',
        'Despesas por Categoria',
        'Crescimento de Clientes',
        'Extrato de Cliente',
        'Inadimplência',
        'Tarefas Pendentes e Concluídas',
        'Desempenho Operacional',
        'Exportação em PDF e CSV',
      ],
    },
    {
      name: 'Configurações',
      description: 'Personalização e gestão do sistema',
      features: [
        'Gestão de usuários e permissões',
        'Cadastro de advogados e comissões',
        'Configurações da empresa',
        'Produtos e serviços',
        'Personalização do sistema',
      ],
    },
  ],
  demoUrl: 'https://demo-gest-o-de-escritorio-advocacia.vercel.app/login',
  techStack: [
    // Fundamentos Web
    { name: 'HTML5', icon: '🌐', category: 'language' },
    { name: 'CSS3', icon: '🎨', category: 'language' },
    { name: 'JavaScript (ES6+)', icon: '📜', category: 'language' },
    
    // Frontend Core
    { name: 'Next.js 14', icon: '▲', category: 'framework' },
    { name: 'React 18', icon: '⚛️', category: 'framework' },
    { name: 'TypeScript', icon: '🔷', category: 'language' },
    { name: 'Tailwind CSS', icon: '💨', category: 'library' },
    
    // UI/UX
    { name: 'Lucide React', icon: '🎯', category: 'library' },
    { name: 'Recharts', icon: '📊', category: 'library' },
    { name: 'React Hot Toast', icon: '🔔', category: 'library' },
    
    // Utilitários
    { name: 'Date-fns', icon: '📅', category: 'library' },
    { name: 'jsPDF', icon: '📄', category: 'library' },
    { name: 'jsPDF AutoTable', icon: '📋', category: 'library' },
    
    // Armazenamento
    { name: 'localStorage', icon: '💾', category: 'tool' },
    
    // Desenvolvimento
    { name: 'ESLint', icon: '🔍', category: 'tool' },
    { name: 'PostCSS', icon: '🎨', category: 'tool' },
    
    // Arquitetura
    { name: 'PWA Ready', icon: '📱', category: 'tool' },
    { name: 'Offline First', icon: '🔌', category: 'tool' },
  ],
}

