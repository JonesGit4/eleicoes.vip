export function Footer() {
  return (
    <footer className="px-6 md:px-14 py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <div className="font-[family-name:var(--font-syne)] font-extrabold text-lg tracking-tight mb-1">
            ELEIÇÃO<span className="text-accent">.</span>VIP
          </div>
          <p className="text-sm text-text-muted">
            Tecnologia que elege. — by Duobro Digital
          </p>
          <div className="flex gap-3 mt-5">
            {['SSL', 'LGPD', 'PIX'].map((b) => (
              <span
                key={b}
                className="font-[family-name:var(--font-mono)] text-[10px] text-text-muted bg-white/[0.03] border border-white/5 px-3 py-1 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-16">
          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-text-muted uppercase mb-3 font-semibold">
              Navegação
            </div>
            <div className="flex flex-col gap-1.5">
              {['Serviços', 'Planos', 'Cases'].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-text-dim hover:text-text transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-text-muted uppercase mb-3 font-semibold">
              Contato
            </div>
            <div className="flex flex-col gap-1.5">
              <a href="#" className="text-sm text-text-dim hover:text-text transition-colors">
                WhatsApp
              </a>
              <a href="#" className="text-sm text-text-dim hover:text-text transition-colors">
                Email
              </a>
              <a href="#" className="text-sm text-text-dim hover:text-text transition-colors">
                Agendar call
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
