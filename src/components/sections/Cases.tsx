'use client'

import { motion } from 'framer-motion'

const cases = [
  {
    titulo: 'Dashboard BI — Campanha Prefeitura SP',
    servico: 'Dashboard BI de Campanha',
    prazo: 'Entregue em 48h',
    resultado: '+340% de visibilidade no primeiro mês',
    gradientFrom: 'from-primary/40',
    gradientTo: 'to-accent/20',
  },
  {
    titulo: 'Chatbot WhatsApp — Deputado Federal MG',
    servico: 'Chatbot Eleitoral',
    prazo: 'Go-live em 24h',
    resultado: '12.000 interações/dia no pico',
    gradientFrom: 'from-accent/30',
    gradientTo: 'to-primary/30',
  },
  {
    titulo: 'Disparo Segmentado — Senador BA',
    servico: 'Disparo WhatsApp & Telegram',
    prazo: 'Setup em 72h',
    resultado: '85% taxa de abertura média',
    gradientFrom: 'from-primary-light/30',
    gradientTo: 'to-accent/20',
  },
  {
    titulo: 'Social Listening — Governador PR',
    servico: 'Social Listening & Monitoramento',
    prazo: 'Setup em 48h',
    resultado: 'Detecção de crise 4h antes da mídia',
    gradientFrom: 'from-accent-warm/30',
    gradientTo: 'to-primary/30',
  },
]

export function Cases() {
  return (
    <section id="cases" className="px-6 md:px-14 py-20 md:py-28 border-t border-white/5">
      <div className="mb-12">
        <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase mb-4">
          // Cases
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl md:text-[2.8rem] tracking-tight leading-[1.05]">
          Prova visual do que
          <br />
          entregamos.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-white/[0.06] overflow-hidden hover:border-accent/20 transition-colors"
          >
            {/* Placeholder visual — will be replaced with real images from Payload */}
            <div className={`h-52 bg-gradient-to-br ${c.gradientFrom} ${c.gradientTo} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-[family-name:var(--font-mono)] text-xs text-white/30 tracking-widest uppercase">
                  [ preview em breve ]
                </div>
              </div>
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </div>

            {/* Info overlay */}
            <div className="p-6 bg-bg-card">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-base tracking-tight mb-2">
                {c.titulo}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded">
                  {c.servico}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-wider text-text-muted">
                  {c.prazo}
                </span>
              </div>
              <p className="text-sm text-text-dim">{c.resultado}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="font-[family-name:var(--font-mono)] text-xs text-text-muted tracking-wider">
          Cases gerenciados via Payload CMS — imagens e vídeos em breve
        </p>
      </div>
    </section>
  )
}
