export interface SystemModule {
  id: string
  name: string
  type: string
  status: 'ONLINE' | 'OFFLINE' | 'MAINTENANCE'
  access: 'PREVIEW' | 'DEMO' | 'RESTRICTED'
  description?: string
}

export const systemModules: SystemModule[] = [
  {
    id: 'gestao-pro-plus',
    name: 'GESTÃO PRO +',
    type: 'SaaS ERP',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema SaaS Multi-Tenant completo com Dashboard, PDV, Caixa, Estoque, Financeiro e Relatórios',
  },
  {
    id: 'law-office',
    name: 'GESTÃO ESCRITÓRIO ADVOCACIA',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema completo de gestão para escritórios de advocacia com funcionamento offline',
  },
  {
    id: 'segurabolso',
    name: 'SEGURABOLSO',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema completo de gestão financeira pessoal para controle total das finanças',
  },
  {
    id: 'atlas-finance',
    name: 'ATLAS FINANCE',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema completo de gestão financeira empresarial e pessoal com investimentos e calculadoras',
  },
  {
    id: 'clinic-odonto',
    name: 'CLINIC_ODONTO',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema de Gestão para Clínicas Odontológicas',
  },
  {
    id: 'clinic-med',
    name: 'CLINIC_MED',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema de Gestão para Clínicas Médicas',
  },
  {
    id: 'barber-shop',
    name: 'BARBER_SHOP',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Plataforma de Gestão para Barbearias',
  },
  {
    id: 'task-manager',
    name: 'TASK_MANAGER',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema Avançado de Gerenciamento de Tarefas',
  },
]

