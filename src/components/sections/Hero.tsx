'use client'

import { motion } from 'framer-motion'
import { Countdown } from '@/components/ui/Countdown'

export function Hero() {
  return (
    <section className="relative hero-gradient pt-32 pb-24 overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 particle-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
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
          className="font-[family-name:var(--font-lexend)] font-bold text-[48px] leading-[56px] tracking-[-0.02em] text-white mb-6 max-w-4xl"
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
          className="font-[family-name:var(--font-jakarta)] text-lg leading-7 text-slate-300 mb-10 max-w-2xl"
        >
          Infraestrutura técnica de alto nível para candidatos, partidos e
          agências que não podem perder tempo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#planos"
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-[family-name:var(--font-lexend)] font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-emerald-900/20"
          >
            Contratar agora
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-[family-name:var(--font-lexend)] font-bold text-lg hover:bg-white/5 transition-all"
          >
            <span className="material-symbols-outlined">chat</span>
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
    </section>
  )
}
