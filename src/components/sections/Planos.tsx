'use client'

import { motion } from 'framer-motion'

const planos = [
  {
    nome: 'Starter',
    publico: 'Vereadores e candidatos locais',
    preco: '2.900',
    features: ['3 serviços core', 'Go-live em 72h', 'Suporte WhatsApp', 'Relatório mensal'],
    cta: 'Contratar',
    highlight: false,
  },
  {
    nome: 'Campanha',
    publico: 'Deputados e prefeitos',
    preco: '7.500',
    features: ['7 serviços inclusos', 'Go-live em 48h', 'Gerente de conta dedicado', 'Relatório semanal + BI'],
    cta: 'Contratar →',
    highlight: true,
  },
  {
    nome: 'War Room',
    publico: 'Governadores, senadores e agências',
    preco: '18.000',
    features: ['Todos os serviços + IA', 'Go-live em 24h', 'Squad dedicado', 'Dashboard real-time'],
    cta: 'Falar com consultor',
    highlight: false,
  },
]

export function Planos() {
  return (
    <section id="planos" className="px-6 md:px-14 py-20 md:py-28 border-t border-white/5">
      <div className="mb-12">
        <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase mb-4">
          // Planos
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl md:text-[2.8rem] tracking-tight leading-[1.05]">
          Escolha o nível
          <br />
          da sua operação.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {planos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className={`relative rounded-2xl p-8 md:p-10 border transition-transform ${
              p.highlight
                ? 'bg-bg-elevated border-accent/40 scale-[1.02]'
                : 'bg-bg border-white/[0.06]'
            }`}
          >
            {p.highlight && (
              <div className="inline-block bg-accent text-bg font-[family-name:var(--font-syne)] font-bold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full mb-5">
                ★ Mais escolhido
              </div>
            )}

            <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-2xl tracking-tight mb-1">
              {p.nome}
            </h3>
            <p className="text-sm text-text-dim mb-6">{p.publico}</p>

            <div className="flex items-baseline gap-1 mb-7">
              <span className="font-[family-name:var(--font-syne)] text-lg text-text-dim font-semibold">
                R$
              </span>
              <span className="font-[family-name:var(--font-syne)] text-5xl font-extrabold tracking-tight">
                {p.preco}
              </span>
              <span className="text-sm text-text-muted">/mês</span>
            </div>

            <div className="border-t border-white/5 mb-6" />

            <ul className="space-y-0 mb-8">
              {p.features.map((f, j) => (
                <li
                  key={j}
                  className="flex items-center gap-3 py-3 text-sm text-text-dim border-b border-white/[0.03] last:border-b-0"
                >
                  <span className="text-accent text-sm">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`block w-full text-center py-4 rounded-lg font-[family-name:var(--font-syne)] font-bold text-sm transition-all ${
                p.highlight
                  ? 'bg-accent text-bg hover:brightness-110'
                  : 'border border-white/15 text-text hover:border-white/30'
              }`}
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
