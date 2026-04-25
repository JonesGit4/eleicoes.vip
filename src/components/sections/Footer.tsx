export function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:flex md:justify-between items-center gap-8">
        <div className="text-lg font-bold text-slate-900 font-[family-name:var(--font-lexend)]">
          Eleições 2026
        </div>

        <div className="flex flex-wrap gap-6">
          {['Termos', 'Privacidade', 'Compliance', 'Contato'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-500 hover:text-emerald-500 transition-all font-[family-name:var(--font-lexend)] text-sm"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="text-right">
          <p className="font-[family-name:var(--font-lexend)] text-sm text-slate-500">
            © 2026 Soluções Eleitorais. Tecnologia para a Democracia.
          </p>
          <p className="font-[family-name:var(--font-lexend)] text-xs text-slate-400 mt-1">
            By{' '}
            <span className="text-emerald-500 font-semibold">Duobro</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
