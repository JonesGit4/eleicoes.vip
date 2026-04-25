'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const metrics = [
  { value: 80, prefix: '+', suffix: '', label: 'Projetos Ativos' },
  { value: 72, prefix: '', suffix: 'h', label: 'Go-live Recorde' },
  { value: 0, prefix: 'R$', suffix: '', label: 'Taxa de Setup' },
  { value: 99.9, prefix: '', suffix: '%', label: 'Uptime Garantido' },
]

function AnimatedNumber({
  value,
  prefix,
  suffix,
}: {
  value: number
  prefix: string
  suffix: string
}) {
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
      setDisplay(
        Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0))
      )
      if (progress >= 1) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export function Metrics() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 text-center"
          >
            <h3 className="font-[family-name:var(--font-lexend)] text-4xl font-bold leading-[44px] tracking-[-0.02em] text-emerald-400 mb-2">
              <AnimatedNumber
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
              />
            </h3>
            <p className="font-[family-name:var(--font-jakarta)] text-sm text-slate-400 uppercase tracking-wide">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
