export function Footer() {
  return (
    <footer className="w-full py-16 bg-slate-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-[family-name:var(--font-lexend)] font-bold text-2xl leading-9 tracking-[-0.02em] text-white mb-4">
          Tecnologia para a Democracia.
        </p>
        <p className="font-[family-name:var(--font-jakarta)] text-sm text-slate-500">
          By{' '}
          <span className="text-emerald-400 font-semibold">Duobro</span>
          {' '}· 2026
        </p>
      </div>
    </footer>
  )
}
