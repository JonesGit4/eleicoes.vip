'use client'

import Link from 'next/link'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 bg-bg/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="font-[family-name:var(--font-syne)] font-extrabold text-xl tracking-tight">
        ELEIÇÃO<span className="text-accent">.</span>VIP
      </Link>

      <div className="hidden md:flex items-center gap-10">
        <a href="#servicos" className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-text-dim hover:text-text transition-colors">
          Serviços
        </a>
        <a href="#processo" className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-text-dim hover:text-text transition-colors">
          Como Funciona
        </a>
        <a href="#planos" className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-text-dim hover:text-text transition-colors">
          Planos
        </a>
        <a
          href="#cta"
          className="bg-accent text-bg font-[family-name:var(--font-syne)] font-bold text-sm px-6 py-2.5 rounded-md hover:brightness-110 transition-all"
        >
          CONTRATAR
        </a>
      </div>
    </nav>
  )
}
