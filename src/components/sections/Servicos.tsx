'use client'

import { motion } from 'framer-motion'

const servicos = [
  {
    icon: 'ads_click',
    titulo: 'Gestão de Tráfego Político',
    desc: 'Meta ADS + Google ADS eleitoral com regras TSE.',
    tag: 'Go-live 48h',
    preco: 'R$ 2.500',
  },
  {
    icon: 'send',
    titulo: 'Disparo WhatsApp & Telegram',
    desc: 'Infraestrutura de disparo segmentado por CEP/bairro.',
    tag: 'Go-live 72h',
    preco: 'R$ 3.000',
  },
  {
    icon: 'contact_page',
    titulo: 'CRM Eleitoral Automatizado',
    desc: 'Cadastro, segmentação por zona, follow-up automático.',
    tag: 'Setup 1 sem',
    preco: 'R$ 4.000',
  },
  {
    icon: 'smart_toy',
    titulo: 'Chatbot Eleitoral',
    desc: 'Bot de propostas, voluntários e atendimento 24/7.',
    tag: 'Go-live 48h',
    preco: 'R$ 1.800',
  },
  {
    icon: 'web',
    titulo: 'Landing Page do Candidato',
    desc: 'Captação de apoiadores, doadores e cabos eleitorais.',
    tag: 'Go-live 72h',
    preco: 'R$ 2.200',
  },
  {
    icon: 'monitoring',
    titulo: 'Social Listening & Monitoramento',
    desc: 'Menções, sentimento e análise de adversários em tempo real.',
    tag: 'Setup 48h',
    preco: 'R$ 2.800',
  },
  {
    icon: 'ballot',
    titulo: 'Pesquisa de Intenção de Voto',
    desc: 'Survey digital segmentado por zona, idade e perfil.',
    tag: 'Setup 1 sem',
    preco: 'R$ 3.200',
  },
  {
    icon: 'query_stats',
    titulo: 'Dashboard BI de Campanha',
    desc: 'Métricas em tempo real + relatório semanal automatizado.',
    tag: 'Setup 1 sem',
    preco: 'R$ 3.500',
  },
  {
    icon: 'psychology',
    titulo: 'Análise de Sentimento com IA',
    desc: 'Comentários de redes, pautas quentes por região.',
    tag: 'Setup 72h',
    preco: 'R$ 2.000',
  },
  {
    icon: 'call',
    titulo: 'Robô de Ligação / URA Política',
    desc: 'Twilio/VoIP com mensagem segmentada por eleitorado.',
    tag: 'Setup 1 sem',
    preco: 'R$ 3.800',
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-surface-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-lexend)] font-bold text-4xl leading-[44px] tracking-[-0.02em] text-text-deep mb-4">
            Serviços Full-Stack Eleitorais
          </h2>
          <p className="font-[family-name:var(--font-jakarta)] text-base text-text-muted">
            Tecnologia avançada para dominar o território digital.
          </p>
        </div>

        {/* Cards Grid — 2 rows of 5 on desktop, 2 cols mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicos.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-emerald-50 hover:border-emerald-200 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    {s.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-lexend)] font-semibold text-base leading-6 text-text-deep mb-2">
                  {s.titulo}
                </h3>
                <p className="font-[family-name:var(--font-jakarta)] text-xs text-text-muted mb-4 leading-relaxed">
                  {s.desc}
                </p>

                {/* Tag */}
                <span className="inline-block bg-sunlight-yellow/20 text-on-surface-variant font-[family-name:var(--font-lexend)] text-[10px] font-medium px-2.5 py-0.5 rounded-full mb-4">
                  {s.tag}
                </span>

                {/* Price + CTA */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <p className="text-[9px] text-text-muted uppercase">
                      A partir de
                    </p>
                    <p className="font-[family-name:var(--font-lexend)] font-bold text-xl tracking-[-0.02em] text-emerald-600 leading-none">
                      {s.preco}
                    </p>
                  </div>
                  <button className="bg-primary text-white px-3 py-1.5 rounded-xl font-[family-name:var(--font-lexend)] text-[10px] font-bold hover:bg-emerald-700 transition-colors">
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
