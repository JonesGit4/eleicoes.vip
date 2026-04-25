'use client'

import { motion } from 'framer-motion'

const planos = [
  {
    nome: 'Starter',
    desc: 'Essencial para vereadores em cidades pequenas.',
    preco: 'R$ 1.9k',
    periodo: '/mês',
    features: [
      'Landing Page Otimizada',
      'CRM Básico (5k contatos)',
      'Suporte via Ticket',
    ],
    cta: 'Contratar Starter',
    highlight: false,
    dark: false,
  },
  {
    nome: 'Campanha',
    desc: 'Completo para Majoritária ou Federal.',
    preco: 'R$ 5.9k',
    periodo: '/mês',
    features: [
      'CRM Full (100k contatos)',
      'WhatsApp Segmentado',
      'BI em Tempo Real',
      'Suporte VIP WhatsApp',
    ],
    cta: 'Contratar Campanha',
    highlight: true,
    dark: false,
  },
  {
    nome: 'War Room',
    desc: 'Para Governos e Senado. Defesa e ataque total.',
    preco: 'Custom',
    periodo: '/sob consulta',
    features: [
      'Monitoramento 24/7 AI',
      'Análise de Sentiment Score',
      'Gestão de Tráfego Massiva',
      'Gabinete Cibernético Dedicado',
    ],
    cta: 'Falar com Consultor',
    highlight: false,
    dark: true,
  },
]

export function Planos() {
  return (
    <section id="planos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-lexend)] font-bold text-4xl leading-[44px] tracking-[-0.02em] text-text-deep mb-4">
            Escolha sua armadura digital
          </h2>
          <p className="font-[family-name:var(--font-jakarta)] text-base text-text-muted">
            Planos sob medida para cada estágio da campanha.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {planos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className={`rounded-[32px] p-8 flex flex-col ${
                p.dark
                  ? 'bg-slate-900'
                  : 'bg-white border border-slate-100'
              } ${
                p.highlight
                  ? 'border-4 border-emerald-500 relative transform md:scale-105 shadow-2xl shadow-emerald-200/50'
                  : ''
              }`}
            >
              {/* "Mais escolhido" badge */}
              {p.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full font-[family-name:var(--font-lexend)] text-xs font-bold">
                  Mais escolhido
                </div>
              )}

              {/* Title */}
              <div className="mb-8">
                <h3
                  className={`font-[family-name:var(--font-lexend)] font-semibold text-2xl leading-8 mb-2 ${
                    p.dark ? 'text-white' : 'text-text-deep'
                  }`}
                >
                  {p.nome}
                </h3>
                <p
                  className={`font-[family-name:var(--font-jakarta)] text-sm ${
                    p.dark ? 'opacity-60 text-white' : 'text-text-muted'
                  }`}
                >
                  {p.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p
                  className={`font-[family-name:var(--font-lexend)] font-bold text-[48px] leading-[56px] tracking-[-0.02em] ${
                    p.dark ? 'text-white' : 'text-text-deep'
                  }`}
                >
                  {p.preco}
                  <span
                    className={`text-lg font-normal ${
                      p.dark ? 'opacity-60' : 'text-text-muted'
                    }`}
                  >
                    {p.periodo}
                  </span>
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-center gap-3 font-[family-name:var(--font-jakarta)] text-sm ${
                      p.dark ? 'text-white/80' : 'text-text-deep'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-sm ${
                        p.dark ? 'text-emerald-400' : 'text-emerald-500'
                      }`}
                    >
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 rounded-2xl font-[family-name:var(--font-lexend)] text-sm font-bold transition-colors ${
                  p.highlight
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200'
                    : p.dark
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
