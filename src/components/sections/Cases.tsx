'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cases = [
  {
    tag: 'BI DASHBOARD',
    titulo: 'Candidatura Federal',
    prazo: '48h Entrega',
    resultado: '+12% Intenção',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjrWhaB2_P_ndKjIgcXWrL-5-wk8NqNiTGmnUqoJDh4PzmQBGJttxQmkViDd4dD94-rI-EzESEdr2Pfn7KKSOFIQeqIGcstf122KayMXnsc02cikG4my8EyCK-pJTixJK4KU3pgqenYw7i8Az0KSRwsCVqQ8qhUsbRmv2XW00KKUgrNdsg6JNzNsHaZ0wrmmimU4jFkENjT_qqkXqior2XlyofGEc9ZYWaB4Nshwr4XqAmOVcbqrla48LTzjJefrQO_2iwXv7yfofT',
    alt: 'Digital dashboard with colorful bar charts',
  },
  {
    tag: 'CHATBOT',
    titulo: 'Prefeitura SP',
    prazo: '24h Entrega',
    resultado: '94% Assertividade',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEvPyQkCQfyN3xorAdFmcXCDrd0AAnghPPrYtuk3saBG1sCMWzhcdhn0ZfUfsTZmgZ75VW9f0uOUuO1AWLeNFie2KLhYLh4HhTypthkQShJNx_oBebor9CH36BjaDN-j7jjLb79TNfjKyNU5IdKgWq6K4X1cpgK0KXovyl5l4kTHDtcj4JI8fPkZ-mOaTFamVZo4EqEzQMxbGRLc4ioZIbU9P4oNL59qP0bbdwaI79wdkUEDWglODFjXmkDmvT7ofD8vug48Mts3hH',
    alt: 'Person typing on laptop with messaging notifications',
  },
  {
    tag: 'MONITORAMENTO',
    titulo: 'Gabinete Crise',
    prazo: '72h Entrega',
    resultado: 'Aviso < 2min',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkGzxKYGE3v9RANmEVhOaXqx9JcemhoPWHqWBb3rAwem_uvSQHkCCkhJPB54HdQzfDKIa0IcXCKfiil2jFw2m7YgEr_pSXT_vCaNqTZfWbwl05Fa8H5HWlo90a-Som34_7LAz0KAi5KKEx9Jz_zdOynwGEcBVjWrKwy_0hYPnixEKZQg2ZDHY-MbMJcbfJy0rgPoAyP5zl2uv2doRAAs0vgCnrDBq4sjQhj0NcRx_myMaemHbXoykUNaT2p8NUcj5F70ocj_IRjF8B',
    alt: 'Monitoring room with screens showing graphs and news',
  },
  {
    tag: 'SOCIAL LISTENING',
    titulo: 'Estadual Sul',
    prazo: '48h Entrega',
    resultado: 'Relatório Diário',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbVEmpc7PWCflAG31TozmLyuI4iQQ-MADRHyxL99NANZCol-qNoD3ucLj91f0LnRBzhq3cSvzbvarYrGFcdo6AlpTZw9V-kJDetxv-uXKRqGg6mDYJ7cr3PIbHodMLDM-ftwdcQVb2gZXfZSg9-ZDXvtnxKNB46ZMQtUKexqqglDCqLGlUHQ9M9P-6s1u4fe_U7ow_gzebmpg34oqPq8S7-h598DzkdMwJhP9SyutaNeDVpIaAiAyz4B2xYY0wM4bJMemM-lGaUnbi',
    alt: 'Abstract tech visual with interconnected nodes',
  },
]

export function Cases() {
  return (
    <section id="cases" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-[family-name:var(--font-lexend)] font-bold text-4xl leading-[44px] tracking-[-0.02em]">
              Resultados Reais
            </h2>
            <p className="font-[family-name:var(--font-jakarta)] text-base text-text-muted">
              O que já entregamos para grandes candidaturas.
            </p>
          </div>
          <button className="text-primary font-[family-name:var(--font-lexend)] text-sm font-medium flex items-center gap-2">
            Ver todos{' '}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
            >
              <Image
                src={c.image}
                alt={c.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-[10px] bg-emerald-500 text-white px-2 py-1 rounded mb-2 inline-block font-[family-name:var(--font-lexend)]">
                  {c.tag}
                </span>
                <h4 className="text-white font-[family-name:var(--font-lexend)] font-semibold text-2xl leading-8 mb-1">
                  {c.titulo}
                </h4>
                <div className="flex justify-between text-slate-300 text-xs">
                  <span>{c.prazo}</span>
                  <span className="text-emerald-400 font-bold">
                    {c.resultado}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
