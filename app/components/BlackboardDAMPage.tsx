export default function BlackboardDAMPage() {

  const accent = "#e87722";
  const accentDim = "rgba(232,119,34,0.12)";
  const accentBorder = "rgba(232,119,34,0.25)";
  const bg = "#0d0d1a";
  const card = "#111128";

  const Header = () => (
    <div className="shrink-0">
      <div className="px-6 py-1.5" style={{ background: "#08080f", borderBottom: "1px solid rgba(232,119,34,0.15)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: accent, opacity: 0.7 }}>Blackboard Learn · DAM</span>
          <span className="text-[10px] hidden sm:block" style={{ color: "#555" }}>Ciclo Formativo · Grado Superior · 2016–2018</span>
        </div>
      </div>
      <header className="px-6 py-4" style={{ background: "#0f0f1a", borderBottom: "1px solid rgba(232,119,34,0.2)" }}>
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: accent }}>
            <span className="font-black text-base" style={{ fontFamily: "Georgia,serif", color: "#0f0f1a" }}>Bb</span>
          </div>
          <div>
            <p className="font-extrabold text-base leading-none" style={{ color: "#fff" }}>Blackboard</p>
            <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: accent, opacity: 0.6 }}>DAM · Learn</p>
          </div>
          <div className="ml-auto hidden sm:flex gap-6 text-[11px] font-medium uppercase tracking-wide" style={{ color: "#555" }}>
            <span className="hover:text-white cursor-pointer transition-colors">Inicio</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cursos</span>
            <span className="cursor-pointer font-semibold" style={{ color: accent }}>Mi perfil</span>
          </div>
        </div>
      </header>
      <nav className="px-6 py-2 text-[11px]" style={{ background: "#0b0b16", borderBottom: "1px solid rgba(255,255,255,0.04)", color: "#444" }}>
        <div className="max-w-2xl mx-auto">
          Mis cursos &rsaquo; Ciclos Formativos &rsaquo;{" "}
          <span style={{ color: accent }}>DAM — Desarrollo de Aplicaciones Multiplataforma</span>
        </div>
      </nav>
    </div>
  );

  const SectionLabel = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 mb-8">
      <span className="w-0.5 h-6 rounded-full shrink-0" style={{ background: accent }} />
      <h2 className="font-bold text-xs uppercase tracking-widest" style={{ color: accent }}>{text}</h2>
    </div>
  );

  const ScrollHint = ({ label = "Siguiente" }: { label?: string }) => (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center">
      <div className="flex items-center gap-2" style={{ color: "#333" }}>
        <span className="text-[10px] uppercase tracking-widest">{label}</span>
        <span>↓</span>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-auto font-sans text-sm" style={{ background: bg, color: "#e2e2f0" }}>

      {/* ── SECCIÓN 1: HERO ── */}
      <div className="min-h-full flex flex-col">
        <Header />
        <div className="relative flex-1 px-6 flex items-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #12122e 60%, #0f0f1a 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #e87722 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <div className="absolute right-0 top-0 bottom-0 w-48 opacity-20"
            style={{ background: "linear-gradient(to left, #e87722, transparent)" }} />
          <div className="relative z-10 max-w-2xl mx-auto w-full py-10">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4caf50" }} />
                Completado · 2016–2018
              </span>
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: "rgba(255,255,255,0.04)", color: "#888", borderColor: "rgba(255,255,255,0.1)" }}>
                2.000 horas
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#fff", letterSpacing: "-0.01em" }}>
              Desarrollo de<br />
              <span style={{ color: accent }}>Aplicaciones Multiplataforma</span>
            </h1>
            <p className="text-sm leading-relaxed max-w-lg"
              style={{ color: "#888", borderLeft: "2px solid rgba(232,119,34,0.4)", paddingLeft: "14px" }}>
              Ciclo Formativo de Grado Superior orientado al diseño, desarrollo y mantenimiento de aplicaciones para múltiples plataformas: Android, escritorio y entornos cliente-servidor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Duración", value: "2 años" },
                { label: "Periodo", value: "2016–2018" },
                { label: "Modalidad", value: "Presencial" },
                { label: "Familia", value: "Informática" },
                { label: "Nivel", value: "Grado Superior" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg px-3 py-2 text-xs border" style={{ background: card, borderColor: accentBorder }}>
                  <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#555" }}>{label}</p>
                  <p className="font-semibold" style={{ color: "#e2e2f0" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <ScrollHint label="El ciclo" />
        </div>
      </div>

      {/* ── SECCIÓN 2: SOBRE EL CICLO ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0b0b16", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Sobre el ciclo" />
          <div className="rounded-2xl p-8 border mb-6" style={{ background: card, borderColor: accentBorder }}>
            <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
              El Ciclo Formativo de Grado Superior en DAM prepara para el desarrollo de aplicaciones en distintos entornos y plataformas. Combiné programación orientada a objetos, bases de datos relacionales, desarrollo móvil nativo para Android y arquitecturas cliente-servidor, sentando la base técnica que apliqué en mis años de experiencia profesional posterior.
            </p>
          </div>
          <SectionLabel text="Competencias adquiridas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "🧩", text: "Programación orientada a objetos" },
              { icon: "📱", text: "Desarrollo de aplicaciones móviles Android" },
              { icon: "🗄️", text: "Diseño de bases de datos relacionales" },
              { icon: "🔗", text: "Acceso a datos y ORMs" },
              { icon: "🖥️", text: "Desarrollo de interfaces de usuario" },
              { icon: "🌐", text: "APIs REST y servicios web" },
              { icon: "🔄", text: "Entornos cliente-servidor" },
              { icon: "📦", text: "Control de versiones con Git" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                style={{ background: card, borderColor: "rgba(232,119,34,0.08)" }}>
                <span className="text-base shrink-0">{icon}</span>
                <span className="text-xs" style={{ color: "#aaa" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <ScrollHint label="Aprendizajes" />
      </div>

      {/* ── SECCIÓN 3: APRENDIZAJES ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0d0d1a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Lo que me llevé" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { n: "01", title: "Base técnica sólida", desc: "Fundamentos que apliqué directamente en mis primeras prácticas en Everis y en proyectos propios." },
              { n: "02", title: "Mentalidad multiplataforma", desc: "Aprendí a pensar en cómo un mismo producto puede vivir en distintos entornos con distintas restricciones." },
              { n: "03", title: "Proyecto MiMarketplace", desc: "Apliqué los conocimientos DAM para desarrollar una app móvil real en Android e iOS durante la etapa universitaria." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="rounded-2xl p-6 border flex flex-col gap-3" style={{ background: card, borderColor: accentBorder }}>
                <span className="font-black text-3xl" style={{ color: "rgba(232,119,34,0.2)", fontFamily: "Georgia,serif", lineHeight: 1 }}>{n}</span>
                <p className="font-bold text-sm" style={{ color: "#e2e2f0" }}>{title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#666" }}>{desc}</p>
              </div>
            ))}
          </div>
          <SectionLabel text="Habilidades reflejadas" />
          <div className="flex flex-wrap gap-3">
            {["Desarrollador Android", "Full Stack", "Bases de datos", "APIs REST", "Interfaces nativas", "Lógica de negocio", "Cliente-Servidor"].map((s) => (
              <span key={s} className="text-sm px-5 py-3 rounded-full font-medium border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 text-[11px]" style={{ background: "#08080f", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#333" }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span>© Blackboard Learn · Ciclo DAM · 2016–2018</span>
          <span className="font-semibold shrink-0" style={{ color: accent }}>blackboard.com</span>
        </div>
      </footer>

    </div>
  );
}
