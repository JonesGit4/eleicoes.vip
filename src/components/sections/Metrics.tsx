'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const metrics = [
  { value: 80, prefix: '+', suffix: '', label: 'Projetos de tráfego\ngerenciados', color: 'text-accent' },
  { value: 72, prefix: '', suffix: 'h', label: 'Tempo médio\nde go-live', color: 'text-text' },
  { value: 0, prefix: 'R$', suffix: '', label: 'Taxa de setup\nnos planos anuais', color: 'text-primary-light' },
  { value: 99.9, prefix: '', suffix: '%', label: 'Uptime da\ninfraestrutura', color: 'text-accent-warm' },
]

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)))
      if (progress >= 1) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

export function Metrics() {
  return (
    <section className="border-t border-b border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="px-6 md:px-10 py-8 border-r border-white/5 last:border-r-0 flex items-baseline gap-4"
          >
            <span className={`font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-extrabold tracking-tight ${m.color}`}>
              <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </span>
            <span className="text-xs text-text-dim whitespace-pre-line leading-snug">
              {m.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
