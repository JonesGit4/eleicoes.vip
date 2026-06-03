'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/[0.06]">
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

        <a
          href="#planos"
          className="bg-emerald-500 text-white px-6 py-2 rounded-full font-[family-name:var(--font-lexend)] font-semibold text-sm hover:bg-emerald-400 active:scale-95 transition-all duration-200"
        >
          Consultar Especialista
        </a>
      </div>
    </nav>
  )
}
