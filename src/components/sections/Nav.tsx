'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-50 shadow-sm shadow-emerald-900/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_eleicao_vip.png"
            alt="Eleicao.vip"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#servicos"
            className="text-emerald-600 border-b-2 border-emerald-500 pb-1 font-[family-name:var(--font-lexend)] text-sm font-medium tracking-tight"
          >
            Serviços
          </a>
          <a
            href="#processo"
            className="text-slate-600 hover:text-emerald-500 transition-colors font-[family-name:var(--font-lexend)] text-sm font-medium tracking-tight"
          >
            Como Funciona
          </a>
          <a
            href="#planos"
            className="text-slate-600 hover:text-emerald-500 transition-colors font-[family-name:var(--font-lexend)] text-sm font-medium tracking-tight"
          >
            Preços
          </a>
          <a
            href="#cases"
            className="text-slate-600 hover:text-emerald-500 transition-colors font-[family-name:var(--font-lexend)] text-sm font-medium tracking-tight"
          >
            Segurança
          </a>
        </div>

        <a
          href="#planos"
          className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-[family-name:var(--font-lexend)] font-semibold text-sm active:scale-95 transition-transform duration-200"
        >
          Consultar Especialista
        </a>
      </div>
    </nav>
  )
}
