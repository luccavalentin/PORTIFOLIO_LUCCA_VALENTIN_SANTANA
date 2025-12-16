import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PORTFÓLIO DO SISTEMA',
  description: 'Acesso concedido',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

