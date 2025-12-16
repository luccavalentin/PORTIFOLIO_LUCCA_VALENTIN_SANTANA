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
    id: 'erp-core',
    name: 'ERP_CORE',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Sistema de Planejamento de Recursos Empresariais',
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
  {
    id: 'law-office',
    name: 'LAW_OFFICE',
    type: 'SaaS DEMO',
    status: 'ONLINE',
    access: 'PREVIEW',
    description: 'Plataforma de Gestão para Escritórios de Advocacia',
  },
]

