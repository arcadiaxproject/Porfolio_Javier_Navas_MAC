export default function InetumPage() {

  const accent = "#8b5cf6";
  const accentDim = "rgba(139,92,246,0.12)";
  const accentBorder = "rgba(139,92,246,0.25)";
  const bg = "#08050f";
  const card = "#0e0b1a";

  const Header = () => (
    <div className="shrink-0">
      <div className="px-6 py-1.5" style={{ background: "#050308", borderBottom: "1px solid rgba(92,15,200,0.2)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: accent, opacity: 0.7 }}>Inetum · Positive digital flow</span>
          <span className="text-[10px] hidden sm:block" style={{ color: "#444" }}>Consultoría · IA · Data Analytics</span>
        </div>
      </div>
      <header className="px-6 py-4" style={{ background: "#0a0714", borderBottom: "1px solid rgba(92,15,200,0.25)" }}>
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#5C0FC8" }}>
            <span className="font-black text-xs" style={{ color: "#fff" }}>ine</span>
          </div>
          <div>
            <p className="font-extrabold text-base leading-none" style={{ color: "#fff" }}>inetum</p>
            <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: accent, opacity: 0.6 }}>positive digital flow</p>
          </div>
          <div className="ml-auto hidden sm:flex gap-6 text-[11px] font-medium uppercase tracking-wide" style={{ color: "#444" }}>
            <span className="hover:text-white cursor-pointer transition-colors">Servicios</span>
            <span className="hover:text-white cursor-pointer transition-colors">Proyectos</span>
            <span className="cursor-pointer font-semibold" style={{ color: accent }}>Mi expediente</span>
          </div>
        </div>
      </header>
      <nav className="px-6 py-2 text-[11px]" style={{ background: "#070510", borderBottom: "1px solid rgba(255,255,255,0.04)", color: "#444" }}>
        <div className="max-w-2xl mx-auto">
          Talento &rsaquo; Becarios &rsaquo; Expediente &rsaquo;{" "}
          <span style={{ color: accent }}>Javier Navas — Inetum 2024–2025</span>
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
    <div className="h-full overflow-auto font-sans text-sm" style={{ background: bg, color: "#e2dff0" }}>

      {/* ── SECCIÓN 1: HERO ── */}
      <div className="min-h-full flex flex-col">
        <Header />
        <div className="relative flex-1 px-6 flex items-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a0714 0%, #120a2e 60%, #0a0714 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #8b5cf6 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <div className="absolute right-0 top-0 bottom-0 w-48 opacity-15"
            style={{ background: "linear-gradient(to left, #5C0FC8, transparent)" }} />
          <div className="relative z-10 max-w-2xl mx-auto w-full py-10">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4caf50" }} />
                Prácticas completadas
              </span>
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: "rgba(250,200,50,0.08)", color: "#f0c040", borderColor: "rgba(250,200,50,0.2)" }}>
                Tech Lead · 2 proyectos
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#fff", letterSpacing: "-0.01em" }}>
              Prácticas en <span style={{ color: accent }}>inetum</span><br />
              <span className="text-2xl sm:text-3xl font-bold" style={{ color: "#555" }}>— IA · Data Quality</span>
            </h1>
            <p className="text-sm leading-relaxed max-w-lg"
              style={{ color: "#888", borderLeft: "2px solid rgba(139,92,246,0.4)", paddingLeft: "14px" }}>
              1.200 horas en consultoría tecnológica. Dos proyectos distintos: primero como desarrollador en optimización publicitaria con IA, y después liderando un equipo de becarios en Data Quality & Observability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Inicio", value: "Octubre 2024" },
                { label: "Fin", value: "Julio 2025" },
                { label: "Duración", value: "10 meses · 1.200h" },
                { label: "Rol final", value: "Tech Lead" },
                { label: "Ubicación", value: "Madrid" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg px-3 py-2 text-xs border" style={{ background: card, borderColor: accentBorder }}>
                  <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#555" }}>{label}</p>
                  <p className="font-semibold" style={{ color: "#e2dff0" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <ScrollHint label="Proyecto 1" />
        </div>
      </div>

      {/* ── SECCIÓN 2: PROYECTO 1 — OPTIMUS PRICE ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0b0818", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: "#5C0FC8", color: "#fff" }}>Proyecto 1</span>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#555" }}>/ 2</span>
          </div>
          <SectionLabel text="Optimus Price — IA publicitaria" />
          <div className="rounded-2xl p-8 border mb-5" style={{ background: card, borderColor: accentBorder }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: accentDim }}>
                <span className="text-2xl">📊</span>
              </div>
              <p className="font-extrabold text-lg" style={{ color: "#fff" }}>Optimización de inversión publicitaria</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
              Dado un presupuesto inicial, el sistema determinaba la distribución óptima entre canales (TV, YouTube, Instagram) y calculaba el punto de saturación a partir del cual la inversión dejaba de ser rentable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-6 border" style={{ background: "#1a0a0a", borderColor: "rgba(220,50,50,0.2)" }}>
              <div className="flex items-center gap-2 mb-3"><span>⚠️</span>
                <p className="font-bold text-xs uppercase tracking-widest" style={{ color: "#e05555" }}>Problema</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#888" }}>Sin modelo cuantitativo para asignar presupuesto, se perdía margen de forma sistemática sin saber qué canal era más rentable.</p>
            </div>
            <div className="rounded-2xl p-6 border" style={{ background: "#0a1a0a", borderColor: "rgba(50,180,80,0.2)" }}>
              <div className="flex items-center gap-2 mb-3"><span>✅</span>
                <p className="font-bold text-xs uppercase tracking-widest" style={{ color: "#4cba6a" }}>Solución</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#888" }}>Modelos de IA sobre históricos de inversión/retorno. Resultados en web FastAPI y dashboard Power BI con datos de Grafana.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Python", "FastAPI", "Power BI", "Grafana", "SQL", "Pandas"].map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>{s}</span>
            ))}
          </div>
        </div>
        <ScrollHint label="Proyecto 2" />
      </div>

      {/* ── SECCIÓN 3: PROYECTO 2 — DATA QUALITY ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0a0714", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: "#7c3aed", color: "#fff" }}>Proyecto 2</span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border"
              style={{ background: "rgba(250,200,50,0.1)", color: "#f0c040", borderColor: "rgba(250,200,50,0.3)" }}>Tech Lead</span>
          </div>
          <SectionLabel text="Data Quality & Observability" />
          <div className="rounded-2xl p-8 border mb-5" style={{ background: card, borderColor: "rgba(167,139,250,0.2)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)" }}>
                <span className="text-2xl">🔬</span>
              </div>
              <p className="font-extrabold text-lg" style={{ color: "#fff" }}>Calidad y observabilidad de datos corporativos</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
              Plataforma que mide automáticamente la calidad de datos en distintas bases de datos corporativas y expone indicadores para detectar nulos, inconsistencias, duplicados y anomalías de esquema.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Dashboard screenshot */}
            <div className="flex-1 rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(167,139,250,0.2)" }}>
              <div className="flex items-center gap-2 px-4 py-2" style={{ background: "#0a0714" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="w-2 h-2 rounded-full" style={{ background: "#ffbd2e" }} />
                <span className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
                <span className="text-[10px] font-mono ml-2" style={{ color: "#555" }}>Dashboard — captura real</span>
              </div>
              <img src="/fotos/dasboard.jpg" alt="Dashboard Data Quality" className="w-full h-full object-contain" style={{ maxHeight: "200px" }} />
            </div>

            {/* Liderazgo */}
            <div className="flex-1 rounded-2xl p-6 border flex flex-col justify-center" style={{ background: "#14110a", borderColor: "rgba(250,200,50,0.2)" }}>
              <div className="flex items-center gap-2 mb-3"><span>⭐</span>
                <p className="font-bold text-xs uppercase tracking-widest" style={{ color: "#f0c040" }}>Liderazgo del equipo</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                La empresa reconoció mi implicación y contexto acumulado y me asignó la coordinación del equipo de becarios. Gestioné tareas, resolví bloqueos técnicos y fui el punto de referencia entre el equipo y los responsables del proyecto.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Python", "SQL", "Great Expectations", "dbt", "Power BI", "Observabilidad"].map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium border"
                style={{ background: "rgba(124,58,237,0.1)", color: "#a78bfa", borderColor: "rgba(124,58,237,0.2)" }}>{s}</span>
            ))}
          </div>
        </div>
        <ScrollHint label="Aprendizajes" />
      </div>

      {/* ── SECCIÓN 4: APRENDIZAJES ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0b0818", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Aprendizajes de la etapa" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "01", text: "IA aplicada a decisiones de negocio" },
              { n: "02", text: "Desarrollo de APIs con FastAPI" },
              { n: "03", text: "Visualización con Power BI y Grafana" },
              { n: "04", text: "Diseño de sistemas de calidad de datos" },
              { n: "05", text: "Liderazgo técnico de equipo" },
              { n: "06", text: "Comunicación con stakeholders" },
              { n: "07", text: "Monitorización y observabilidad de datos" },
              { n: "08", text: "Gestión de proyecto en entorno real" },
            ].map(({ n, text }) => (
              <div key={n} className="flex items-start gap-5 rounded-2xl p-6 border"
                style={{ background: card, borderColor: "rgba(139,92,246,0.1)" }}>
                <span className="font-black text-3xl shrink-0" style={{ color: "rgba(139,92,246,0.2)", fontFamily: "Georgia,serif", lineHeight: 1 }}>{n}</span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "#888" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 text-[11px]" style={{ background: "#050308", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#333" }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span>© 2025 Inetum — Positive digital flow</span>
          <span className="font-semibold shrink-0" style={{ color: accent }}>inetum.com</span>
        </div>
      </footer>

    </div>
  );
}
