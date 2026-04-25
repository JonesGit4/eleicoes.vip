'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ChatIA() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[340px] h-[440px] bg-white border border-emerald-100 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-emerald-50 flex items-center justify-between bg-emerald-50/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-600 text-lg">
                    smart_toy
                  </span>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-lexend)] font-bold text-sm text-text-deep">
                    Assistente IA
                  </div>
                  <div className="font-[family-name:var(--font-lexend)] text-[10px] text-emerald-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-text-deep transition-colors text-lg"
              >
                ×
              </button>
            </div>

            {/* Chat body placeholder */}
            <div className="flex-1 flex items-center justify-center p-6 bg-white">
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-emerald-300 mb-4 block">
                  smart_toy
                </span>
                <p className="font-[family-name:var(--font-lexend)] font-semibold text-sm text-text-deep mb-2">
                  Em breve
                </p>
                <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
                  Chat com IA conectado ao Vercel AI SDK para qualificação de
                  leads 24/7.
                </p>
              </div>
            </div>

            {/* Input placeholder */}
            <div className="px-4 py-3 border-t border-emerald-50">
              <div className="flex items-center gap-2 bg-surface-container rounded-lg px-4 py-3">
                <span className="text-sm text-text-muted flex-1">
                  Em breve...
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-white shadow-2xl relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: open
            ? 'none'
            : '0 0 24px rgba(16, 185, 129, 0.4)',
        }}
      >
        <span className="material-symbols-outlined text-3xl">smart_toy</span>
        <span className="absolute -top-1 -right-1 bg-joy-coral text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-[family-name:var(--font-lexend)]">
          IA
        </span>
      </motion.button>
    </div>
  )
}
