import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ELEIÇÃO.VIP — Marketing Político Digital | Eleições 2026',
  description:
    'Infraestrutura técnica de alto nível para candidatos, partidos e agências. Do zero ao ar em 72 horas.',
  openGraph: {
    title: 'ELEIÇÃO.VIP — Marketing Político Digital',
    description: 'Sua campanha no digital. Do zero ao ar em 72 horas.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ELEIÇÃO.VIP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text font-[family-name:var(--font-dm)] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
