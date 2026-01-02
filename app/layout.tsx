import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucca Valentin | Portfolio Dev',
  description: 'Portfólio de desenvolvimento de sistemas e aplicações web',
  icons: {
    icon: '/favicon.png',
  },
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

