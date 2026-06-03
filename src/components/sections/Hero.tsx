'use client'

import { motion } from 'framer-motion'
import { Countdown } from '@/components/ui/Countdown'

export function Hero() {
  return (
    <section className="relative hero-gradient pt-32 pb-24 overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 particle-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-emerald-400 font-[family-name:var(--font-lexend)] text-xs uppercase tracking-widest">
              Eleições 2026 — Vagas limitadas por região
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-lexend)] font-bold text-[42px] leading-[50px] lg:text-[48px] lg:leading-[56px] tracking-[-0.02em] text-white mb-6"
          >
            Sua campanha no digital.
            <br />
            Do zero ao ar em 72 horas.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-[family-name:var(--font-jakarta)] text-lg leading-7 text-slate-300 mb-10 max-w-xl"
          >
            Infraestrutura técnica de alto nível para candidatos, partidos e
            agências que não podem perder tempo.
          </motion.p>

          {/* CTA + WhatsApp side by side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <a
              href="#planos"
              className="bg-emerald-500 text-white px-8 py-4 rounded-full font-[family-name:var(--font-lexend)] font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-900/30"
            >
              Contratar agora
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-slate-400 hover:text-white font-[family-name:var(--font-lexend)] font-medium text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Countdown />
          </motion.div>
        </div>

        {/* Right — Visual placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden backdrop-blur-sm">
            {/* Abstract dashboard visual */}
            <div className="absolute inset-0 flex flex-col gap-3 p-6">
              <div className="flex gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <div className="h-2 w-2 rounded-full bg-slate-600" />
                <div className="h-2 w-2 rounded-full bg-slate-600" />
              </div>
              <div className="h-3 w-3/4 rounded bg-white/10" />
              <div className="h-3 w-1/2 rounded bg-white/5" />
              <div className="flex-1 grid grid-cols-3 gap-3 mt-2">
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 flex flex-col justify-end">
                  <div className="h-2 w-2/3 rounded bg-emerald-500/40 mb-1" />
                  <div className="h-4 w-1/2 rounded bg-emerald-400/60" />
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 flex flex-col justify-end">
                  <div className="h-2 w-2/3 rounded bg-white/10 mb-1" />
                  <div className="h-4 w-1/2 rounded bg-white/20" />
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 flex flex-col justify-end">
                  <div className="h-2 w-2/3 rounded bg-white/10 mb-1" />
                  <div className="h-4 w-1/2 rounded bg-white/20" />
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.05] mt-1" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
