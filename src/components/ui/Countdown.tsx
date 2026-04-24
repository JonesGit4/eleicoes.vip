'use client'

import { useEffect, useState } from 'react'

// Target: October 2026 election day (approximate)
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
    const interval = setInterval(() => setTime(getTimeLeft()), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-right">
      <div className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-text-muted uppercase mb-4">
        Campanha começa em
      </div>
      <div className="flex gap-3">
        {[
          { value: time.dias, label: 'DIAS' },
          { value: time.horas.toString().padStart(2, '0'), label: 'HORAS' },
          { value: time.min.toString().padStart(2, '0'), label: 'MIN' },
        ].map((item) => (
          <div
            key={item.label}
            className="w-[72px] h-[80px] border border-accent/20 rounded-lg flex flex-col items-center justify-center bg-bg-card"
          >
            <span className="font-[family-name:var(--font-mono)] text-2xl font-semibold text-accent">
              {item.value}
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-widest text-text-muted mt-0.5">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
