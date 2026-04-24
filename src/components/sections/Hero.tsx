'use client'

import { motion } from 'framer-motion'
import { Countdown } from '@/components/ui/Countdown'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-14 pt-28 pb-20 relative overflow-hidden">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full gap-12">
        {/* Left: text */}
        <div className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-accent/10 border border-accent/30 px-5 py-2 rounded-md mb-10">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse" />
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-wider text-accent uppercase">
                Eleições 2026 — Vagas limitadas por região
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-syne)] font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.04em] mb-8">
              Sua campanha
              <br />
              <span className="text-accent">no digital. Do</span>
              <br />
              <span className="text-accent">zero</span>
              <br />
              <span className="text-accent">ao ar em 72h.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-text-dim text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Infraestrutura técnica de alto nível para candidatos, partidos e
              agências que não podem perder tempo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-[family-name:var(--font-syne)] font-bold text-base px-8 py-4 rounded-md hover:brightness-110 transition-all"
              >
                Contratar agora →
              </a>
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C+quero+saber+mais+sobre+os+servi%C3%A7os+da+ELEI%C3%87%C3%83O.VIP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-text font-[family-name:var(--font-syne)] font-semibold text-base px-8 py-4 rounded-md hover:border-white/30 hover:bg-white/[0.03] transition-all"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: countdown */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block"
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  )
}
