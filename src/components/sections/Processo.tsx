'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    icone: '⚡',
    titulo: 'Contrate online',
    desc: 'Checkout direto ou WhatsApp em menos de 5 minutos. Sem burocracia.',
    tempo: '< 5 min',
  },
  {
    num: '02',
    icone: '🎯',
    titulo: 'Brief rápido',
    desc: 'Call de 30 minutos ou formulário inteligente com tudo que precisamos.',
    tempo: '30 min',
  },
  {
    num: '03',
    icone: '🚀',
    titulo: 'Campanha no ar',
    desc: 'Entrega técnica dentro do prazo prometido. Monitoramento contínuo.',
    tempo: '24–72h',
  },
]

export function Processo() {
  return (
    <section id="processo" className="px-6 md:px-14 py-20 md:py-28 border-t border-white/5">
      <div className="mb-12">
        <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase mb-4">
          // Processo
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl md:text-[2.8rem] tracking-tight leading-[1.05]">
          Do contato ao ar
          <br />
          em 3 passos.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className={`relative p-8 md:p-10 border border-white/[0.06] ${
              i === 0 ? 'rounded-t-2xl md:rounded-t-none md:rounded-l-2xl' : ''
            } ${
              i === 2 ? 'rounded-b-2xl md:rounded-b-none md:rounded-r-2xl' : ''
            } ${i > 0 ? 'border-t-0 md:border-t md:border-l-0' : ''}`}
          >
            {/* Ghost number */}
            <span className="absolute top-4 right-6 font-[family-name:var(--font-syne)] text-6xl font-extrabold text-white/[0.03] select-none">
              {s.num}
            </span>

            <div className="text-2xl mb-5">{s.icone}</div>
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg mb-2">
              {s.titulo}
            </h3>
            <p className="text-sm text-text-dim leading-relaxed mb-4">{s.desc}</p>
            <span className="font-[family-name:var(--font-mono)] text-xs text-accent">
              {s.tempo}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
