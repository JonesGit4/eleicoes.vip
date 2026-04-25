'use client'

import { motion } from 'framer-motion'

const servicos = [
  {
    icon: 'send',
    titulo: 'Disparo WhatsApp/Telegram',
    desc: 'Distribuição inteligente de conteúdo respeitando as normas vigentes do TSE.',
    tag: 'Go-live em 48h',
    preco: 'R$ 2.490',
    preview: 'Preview do Dashboard',
  },
  {
    icon: 'query_stats',
    titulo: 'CRM Eleitoral & BI',
    desc: 'Centralize leads, segmente eleitores e visualize o mapa de calor da sua campanha.',
    tag: 'Go-live em 72h',
    preco: 'R$ 4.900',
    preview: 'Interface de Gestão',
  },
  {
    icon: 'psychology',
    titulo: 'Análise de Sentimento IA',
    desc: 'Monitore redes sociais e identifique crises em tempo real com inteligência artificial.',
    tag: 'Go-live em 24h',
    preco: 'R$ 1.800',
    preview: 'Gráficos de IA',
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-surface-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-lexend)] font-bold text-4xl leading-[44px] tracking-[-0.02em] text-text-deep mb-4">
            Soluções Full-Stack Eleitorais
          </h2>
          <p className="font-[family-name:var(--font-jakarta)] text-base text-text-muted">
            Tecnologia avançada para dominar o território digital.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-emerald-50"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <span className="material-symbols-outlined text-3xl">
                  {s.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-lexend)] font-semibold text-2xl leading-8 text-text-deep mb-3">
                {s.titulo}
              </h3>
              <p className="font-[family-name:var(--font-jakarta)] text-sm text-text-muted mb-4">
                {s.desc}
              </p>

              {/* Tag */}
              <span className="inline-block bg-sunlight-yellow/20 text-on-surface-variant font-[family-name:var(--font-lexend)] text-xs font-medium px-3 py-1 rounded-full mb-6">
                {s.tag}
              </span>

              {/* Preview placeholder */}
              <div className="h-32 bg-slate-100 rounded-xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400 font-[family-name:var(--font-lexend)] text-xs italic">
                    {s.preview}
                  </span>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-text-muted uppercase">
                    A partir de
                  </p>
                  <p className="font-[family-name:var(--font-lexend)] font-bold text-4xl tracking-[-0.02em] text-emerald-600 leading-none">
                    {s.preco}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors">
                    <span className="material-symbols-outlined">info</span>
                  </button>
                  <button className="bg-primary text-white px-4 py-2 rounded-xl font-[family-name:var(--font-lexend)] text-xs font-bold">
                    Contratar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
