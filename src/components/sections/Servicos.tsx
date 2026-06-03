'use client'

import { motion } from 'framer-motion'

const servicos = [
  {
    icon: 'ads_click',
    titulo: 'Gestão de Tráfego Político',
    desc: 'Meta ADS + Google ADS eleitoral com regras TSE. Segmentação por zona, idade e perfil.',
    tag: 'Go-live 48h',
    preco: 'R$ 2.500',
    highlight: true,
  },
  {
    icon: 'send',
    titulo: 'Disparo WhatsApp & Telegram',
    desc: 'Infraestrutura de disparo segmentado por CEP/bairro com tracking de entrega.',
    tag: 'Go-live 72h',
    preco: 'R$ 3.000',
    highlight: false,
  },
  {
    icon: 'contact_page',
    titulo: 'CRM Eleitoral Automatizado',
    desc: 'Cadastro, segmentação por zona, follow-up automático.',
    tag: 'Setup 1 sem',
    preco: 'R$ 4.000',
    highlight: false,
  },
  {
    icon: 'smart_toy',
    titulo: 'Chatbot Eleitoral',
    desc: 'Bot de propostas, voluntários e atendimento 24/7.',
    tag: 'Go-live 48h',
    preco: 'R$ 1.800',
    highlight: false,
  },
  {
    icon: 'web',
    titulo: 'Landing Page do Candidato',
    desc: 'Captação de apoiadores, doadores e cabos eleitorais.',
    tag: 'Go-live 72h',
    preco: 'R$ 2.200',
    highlight: false,
  },
  {
    icon: 'monitoring',
    titulo: 'Social Listening & Monitoramento',
    desc: 'Menções, sentimento e análise de adversários em tempo real.',
    tag: 'Setup 48h',
    preco: 'R$ 2.800',
    highlight: false,
  },
  {
    icon: 'ballot',
    titulo: 'Pesquisa de Intenção de Voto',
    desc: 'Survey digital segmentado por zona, idade e perfil.',
    tag: 'Setup 1 sem',
    preco: 'R$ 3.200',
    highlight: false,
  },
  {
    icon: 'query_stats',
    titulo: 'Dashboard BI de Campanha',
    desc: 'Métricas em tempo real + relatório semanal automatizado.',
    tag: 'Setup 1 sem',
    preco: 'R$ 3.500',
    highlight: false,
  },
  {
    icon: 'psychology',
    titulo: 'Análise de Sentimento com IA',
    desc: 'Comentários de redes, pautas quentes por região.',
    tag: 'Setup 72h',
    preco: 'R$ 2.000',
    highlight: false,
  },
  {
    icon: 'call',
    titulo: 'Robô de Ligação / URA Política',
    desc: 'Twilio/VoIP com mensagem segmentada por eleitorado e tracking de resposta.',
    tag: 'Setup 1 sem',
    preco: 'R$ 3.800',
    highlight: false,
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

        {/* Cards Grid — 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicos.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '80px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative rounded-3xl p-6 border transition-all duration-300 ${
                s.highlight
                  ? 'bg-emerald-500 text-white border-emerald-400 shadow-xl shadow-emerald-200/30'
                  : 'bg-white border-emerald-50 hover:border-emerald-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Hover glow para cards normais */}
              {!s.highlight && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    s.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {s.icon}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-[family-name:var(--font-lexend)] font-semibold text-base leading-6 mb-2 ${
                    s.highlight ? 'text-white' : 'text-text-deep'
                  }`}
                >
                  {s.titulo}
                </h3>

                {/* Description */}
                <p
                  className={`font-[family-name:var(--font-jakarta)] text-xs leading-relaxed mb-5 flex-grow ${
                    s.highlight ? 'text-white/80' : 'text-text-muted'
                  }`}
                >
                  {s.desc}
                </p>

                {/* Tag */}
                <span
                  className={`inline-block text-[10px] font-medium px-2.5 py-0.5 rounded-full mb-4 w-fit font-[family-name:var(--font-lexend)] ${
                    s.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-sunlight-yellow/20 text-on-surface-variant'
                  }`}
                >
                  {s.tag}
                </span>

                {/* Price + CTA */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <p
                      className={`text-[9px] uppercase ${
                        s.highlight ? 'text-white/60' : 'text-text-muted'
                      }`}
                    >
                      A partir de
                    </p>
                    <p
                      className={`font-[family-name:var(--font-lexend)] font-bold text-xl tracking-[-0.02em] leading-none ${
                        s.highlight ? 'text-white' : 'text-emerald-600'
                      }`}
                    >
                      {s.preco}
                    </p>
                  </div>
                  <button
                    className={`px-3 py-1.5 rounded-xl font-[family-name:var(--font-lexend)] text-[10px] font-bold transition-colors ${
                      s.highlight
                        ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                        : 'bg-primary text-white hover:bg-emerald-700'
                    }`}
                  >
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
