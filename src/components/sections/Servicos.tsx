'use client'

import { motion } from 'framer-motion'

const servicos = [
  {
    icone: '📡',
    titulo: 'Gestão de Tráfego Político',
    desc: 'Meta ADS + Google ADS eleitoral com regras TSE.',
    tag: 'Go-live 48h',
    preco: 'R$ 2.500/mês',
  },
  {
    icone: '💬',
    titulo: 'Disparo WhatsApp & Telegram',
    desc: 'Infraestrutura de disparo segmentado por CEP/bairro.',
    tag: 'Go-live 72h',
    preco: 'R$ 3.000/mês',
  },
  {
    icone: '🗃️',
    titulo: 'CRM Eleitoral Automatizado',
    desc: 'Cadastro, segmentação por zona, follow-up automático.',
    tag: 'Setup 1 sem',
    preco: 'R$ 4.000/mês',
  },
  {
    icone: '🤖',
    titulo: 'Chatbot Eleitoral',
    desc: 'Bot de propostas, voluntários e atendimento 24/7.',
    tag: 'Go-live 48h',
    preco: 'R$ 1.800/mês',
  },
  {
    icone: '🌐',
    titulo: 'Landing Page do Candidato',
    desc: 'Captação de apoiadores, doadores e cabos eleitorais.',
    tag: 'Go-live 72h',
    preco: 'R$ 2.200',
  },
  {
    icone: '📊',
    titulo: 'Dashboard BI de Campanha',
    desc: 'Métricas em tempo real + relatório semanal automatizado.',
    tag: 'Setup 1 sem',
    preco: 'R$ 3.500/mês',
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="px-6 md:px-14 py-20 md:py-28">
      <div className="mb-12">
        <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] text-accent uppercase mb-4">
          // Serviços
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl md:text-[2.8rem] tracking-tight leading-[1.05]">
          Tudo que sua campanha
          <br />
          precisa. Num só lugar.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicos.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-bg-card border border-white/[0.06] rounded-xl p-7 flex flex-col justify-between hover:border-accent/20 transition-colors"
          >
            <div>
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-xl mb-5">
                {s.icone}
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg tracking-tight mb-1.5">
                {s.titulo}
              </h3>
              <p className="text-sm text-text-dim leading-relaxed">{s.desc}</p>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
              <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-wider text-accent bg-accent/10 px-3 py-1 rounded">
                {s.tag}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-sm text-text-dim">
                {s.preco}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
