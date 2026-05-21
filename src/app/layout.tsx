import type { Metadata, Viewport } from 'next'
import { Lexend, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
})

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eleições 2026 | Sua campanha no digital',
  description:
    'Infraestrutura técnica de alto nível para candidatos, partidos e agências. Do zero ao ar em 72 horas.',
  openGraph: {
    title: 'Eleições 2026 — Sua campanha no digital',
    description: 'Do zero ao ar em 72 horas. Soluções Full-Stack Eleitorais.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Eleições 2026',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${lexend.variable} ${jakartaSans.variable}`}
    >
      <head>
        {/* Material Symbols — non-blocking load */}
        <Script
          id="material-symbols"
          strategy="afterInteractive"
          src="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface font-[family-name:var(--font-jakarta)] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
