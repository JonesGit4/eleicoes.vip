'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: 1,
    titulo: 'Contrata online',
    desc: 'Escolha o seu plano e faça o checkout seguro em 2 minutos.',
  },
  {
    num: 2,
    titulo: 'Brief em 30 min',
    desc: 'Nossa equipe técnica faz o onboarding imediato dos dados.',
  },
  {
    num: 3,
    titulo: 'Campanha no ar',
    desc: 'Sua infraestrutura funcionando com segurança e performance.',
  },
]

export function Processo() {
  return (
    <section id="processo" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-lexend)] font-bold text-4xl leading-[44px] tracking-[-0.02em] text-center mb-20">
          Velocidade é a nossa religião
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Animated connecting line */}
          <div className="absolute top-8 left-[calc(16.67%)] right-[calc(16.67%)] h-0.5 hidden md:block z-0">
            {/* Base line */}
            <div className="absolute inset-0 bg-emerald-100" />
            {/* Animated glow pulse traveling across the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-24 h-[3px] rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #10b981, #34d399, #10b981, transparent)',
                boxShadow: '0 0 12px rgba(16, 185, 129, 0.6), 0 0 24px rgba(16, 185, 129, 0.3)',
              }}
              animate={{ left: ['-10%', '110%'] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1,
              }}
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center md:w-1/3"
            >
              {/* Number circle with animated glow ring */}
              <div className="relative mb-6">
                {/* Outer pulsating glow ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background: i < 2
                      ? 'conic-gradient(from 0deg, transparent, #10b981, #34d399, #10b981, transparent)'
                      : 'conic-gradient(from 0deg, transparent, #fbbf24, #f59e0b, #fbbf24, transparent)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                {/* Inner mask to create ring effect */}
                <div className="absolute -inset-0.5 rounded-full bg-white" />
                {/* Pulsing outer glow */}
                <motion.div
                  className="absolute -inset-3 rounded-full"
                  style={{
                    background: i < 2
                      ? 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)',
                  }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                />
                {/* The circle itself */}
                <div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center font-[family-name:var(--font-lexend)] font-bold text-3xl shadow-xl ${
                    i < 2
                      ? 'bg-primary text-white shadow-emerald-200'
                      : 'bg-sunlight-yellow text-on-surface shadow-yellow-200'
                  }`}
                >
                  {s.num}
                </div>
              </div>

              <h4 className="font-[family-name:var(--font-lexend)] font-semibold text-2xl leading-8 mb-2">
                {s.titulo}
              </h4>
              <p className="font-[family-name:var(--font-jakarta)] text-sm text-text-muted max-w-xs">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
