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
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative group"
          >
            {/* Animated rotating border glow */}
            <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, #10b981 25%, #34d399 50%, #10b981 75%, transparent 100%)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            {/* Outer glow pulse */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Card body */}
            <div className="relative rounded-2xl p-8 text-center bg-slate-950/90 backdrop-blur-xl border border-white/[0.06] overflow-hidden">
              {/* Inner glass highlight */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(16,185,129,0.05) 100%)',
                }}
              />

              <div className="relative z-10">
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
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
