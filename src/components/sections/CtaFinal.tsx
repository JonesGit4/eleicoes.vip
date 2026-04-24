'use client'

import { motion } from 'framer-motion'

export function CtaFinal() {
  return (
    <section
      id="cta"
      className="relative px-6 md:px-14 py-24 md:py-32 text-center border-t border-white/5 overflow-hidden"
    >
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-6xl tracking-tight leading-[1] mb-5">
          Eleições 2026
          <br />
          não esperam.
        </h2>
        <p className="text-text-dim text-lg mb-10">
          Sua campanha digital começa hoje. Ou prefere falar com um especialista?
        </p>
        <a
          href="#planos"
          className="inline-flex items-center gap-2 bg-text text-bg font-[family-name:var(--font-syne)] font-bold text-lg px-12 py-5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Quero começar agora →
        </a>
      </motion.div>
    </section>
  )
}
