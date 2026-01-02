export interface SystemModule {
  id: string
  name: string
  type: string
  status: 'ONLINE' | 'OFFLINE' | 'MAINTENANCE'
  access: 'PREVIEW' | 'DEMO' | 'RESTRICTED'
  description?: string
  comingSoon?: boolean
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
    status: 'MAINTENANCE',
    access: 'RESTRICTED',
    description: 'Sistema de Gestão para Clínicas Odontológicas',
    comingSoon: true,
  },
  {
    id: 'clinic-psico',
    name: 'CLINIC_PSICO',
    type: 'SaaS DEMO',
    status: 'MAINTENANCE',
    access: 'RESTRICTED',
    description: 'Sistema de Gestão para Clínicas de Psicologia',
    comingSoon: true,
  },
  {
    id: 'barber-shop',
    name: 'BARBER_SHOP',
    type: 'SaaS DEMO',
    status: 'MAINTENANCE',
    access: 'RESTRICTED',
    description: 'Plataforma de Gestão para Barbearias',
    comingSoon: true,
  },
  {
    id: 'portfolio-imobiliario',
    name: 'PORTFÓLIO IMOBILIÁRIO',
    type: 'SaaS DEMO',
    status: 'MAINTENANCE',
    access: 'RESTRICTED',
    description: 'Sistema de Gestão Imobiliária e Portfólio de Imóveis',
    comingSoon: true,
  },
]
