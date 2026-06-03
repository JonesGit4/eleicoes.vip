'use client'

import { motion } from 'framer-motion'

const trustItems = [
  {
    icon: 'gavel',
    titulo: 'Conformidade TSE',
    desc: 'Resolução nº 23.732/2024.',
  },
  {
    icon: 'shield',
    titulo: 'LGPD & Privacidade',
    desc: 'Dados criptografados. Zero vazamentos.',
  },
  {
    icon: 'lock',
    titulo: 'Infraestrutura Segura',
    desc: 'HTTPS, WAF, DDoS protection.',
  },
  {
    icon: 'verified',
    titulo: 'Compliance Jurídico',
    desc: 'Auditoria externa de campanhas.',
  },
]

export function Trust() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-emerald-400 font-[family-name:var(--font-lexend)] text-xs uppercase tracking-widest">
              Segurança e Compliance
            </span>
          </span>
          <h2 className="font-[family-name:var(--font-lexend)] font-bold text-3xl leading-[40px] tracking-[-0.02em] text-white mb-4">
            Sua campanha protegida
          </h2>
          <p className="font-[family-name:var(--font-jakarta)] text-base text-slate-400 max-w-xl mx-auto">
            Infraestrutura blindada com as certificações que candidaturas sérias exigem.
          </p>
        </motion.div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <span className="material-symbols-outlined text-2xl text-emerald-400">
                    {item.icon}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-[family-name:var(--font-lexend)] font-semibold text-sm text-white mb-2">
                  {item.titulo}
                </h4>

                {/* Description */}
                <p className="font-[family-name:var(--font-jakarta)] text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
