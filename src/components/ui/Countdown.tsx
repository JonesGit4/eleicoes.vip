'use client'

import { useEffect, useState } from 'react'

// Target: October 2026 election day
const TARGET = new Date('2026-10-04T08:00:00-03:00').getTime()

function getTimeLeft() {
  const now = Date.now()
  const diff = Math.max(TARGET - now, 0)

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card rounded-2xl p-6 inline-flex flex-col items-center gap-2">
      <p className="text-white/60 font-[family-name:var(--font-lexend)] text-xs uppercase tracking-tighter">
        Oportunidade encerra em:
      </p>
      <div className="flex gap-4 text-white font-[family-name:var(--font-lexend)] text-4xl font-bold leading-[44px] tracking-[-0.02em]">
        <div className="flex flex-col items-center">
          <span>{String(time.dias).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-50 font-normal tracking-normal">
            Dias
          </span>
        </div>
        <span className="opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span>{String(time.horas).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-50 font-normal tracking-normal">
            Horas
          </span>
        </div>
        <span className="opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span>{String(time.min).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-50 font-normal tracking-normal">
            Min
          </span>
        </div>
      </div>
    </div>
  )
}
