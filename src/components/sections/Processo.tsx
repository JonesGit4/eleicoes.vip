'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: 1,
    titulo: 'Contrata online',
    desc: 'Escolha o seu plano e faça o checkout seguro em 2 minutos.',
    bgColor: 'bg-primary',
    textColor: 'text-white',
    shadowColor: 'shadow-emerald-200',
  },
  {
    num: 2,
    titulo: 'Brief em 30 min',
    desc: 'Nossa equipe técnica faz o onboarding imediato dos dados.',
    bgColor: 'bg-primary',
    textColor: 'text-white',
    shadowColor: 'shadow-emerald-200',
  },
  {
    num: 3,
    titulo: 'Campanha no ar',
    desc: 'Sua infraestrutura funcionando com segurança e performance.',
    bgColor: 'bg-sunlight-yellow',
    textColor: 'text-on-surface',
    shadowColor: 'shadow-yellow-200',
  },
]

export function Processo() {
  return (
    <section id="processo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-lexend)] font-bold text-4xl leading-[44px] tracking-[-0.02em] text-center mb-20">
          Velocidade é a nossa religião
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-100 hidden md:block -translate-y-1/2 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center md:w-1/3"
            >
              <div
                className={`w-16 h-16 ${s.bgColor} rounded-full flex items-center justify-center ${s.textColor} font-[family-name:var(--font-lexend)] font-bold text-4xl leading-[44px] tracking-[-0.02em] mb-6 shadow-xl ${s.shadowColor}`}
              >
                {s.num}
              </div>
              <h4 className="font-[family-name:var(--font-lexend)] font-semibold text-2xl leading-8 mb-2">
                {s.titulo}
              </h4>
              <p className="font-[family-name:var(--font-jakarta)] text-sm text-text-muted">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
