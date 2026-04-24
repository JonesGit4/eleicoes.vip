'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ChatIA() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[340px] h-[440px] bg-bg-card border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/40"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm">🤖</span>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-syne)] font-bold text-sm">
                    Assistente IA
                  </div>
                  <div className="font-[family-name:var(--font-mono)] text-[10px] text-accent flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-text transition-colors text-lg"
              >
                ×
              </button>
            </div>

            {/* Chat body placeholder */}
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-3xl mb-4">💬</div>
                <p className="font-[family-name:var(--font-syne)] font-semibold text-sm mb-2">
                  Em breve
                </p>
                <p className="text-xs text-text-dim leading-relaxed max-w-[200px]">
                  Chat com IA conectado ao Vercel AI SDK para qualificação de leads 24/7.
                </p>
              </div>
            </div>

            {/* Input placeholder */}
            <div className="px-4 py-3 border-t border-white/5">
              <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3">
                <span className="text-sm text-text-muted flex-1">Em breve...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-accent text-bg flex items-center justify-center shadow-lg shadow-accent/20 hover:brightness-110 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: open ? 'none' : '0 0 20px rgba(34,211,238,0.3)' }}
      >
        {open ? (
          <span className="text-xl">×</span>
        ) : (
          <span className="text-xl">💬</span>
        )}
      </motion.button>
    </div>
  )
}
