export default function NebrijanGradoPage() {

  const accent = "#A50034";
  const accentDim = "rgba(165,0,52,0.12)";
  const accentBorder = "rgba(165,0,52,0.25)";
  const bg = "#0d0008";
  const card = "#130006";

  const Header = () => (
    <div className="shrink-0">
      <div className="px-6 py-1.5" style={{ background: "#080003", borderBottom: "1px solid rgba(165,0,52,0.2)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: accent, opacity: 0.7 }}>Universidad Nebrija</span>
          <span className="text-[10px] hidden sm:block" style={{ color: "#444" }}>Campus Madrid · Facultad de Tecnología y Ciencia</span>
        </div>
      </div>
      <header className="px-6 py-4" style={{ background: "#0f0005", borderBottom: "1px solid rgba(165,0,52,0.25)" }}>
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: accent }}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M4 3 L16 0.5 L28 3 L28 17 Q28 26 16 31 Q4 26 4 17 Z" fill="white" opacity="0.25" stroke="white" strokeWidth="0.8"/>
              <line x1="16" y1="8" x2="16" y2="22" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="10" y1="15" x2="22" y2="15" stroke="white" strokeWidth="2" opacity="0.9"/>
            </svg>
          </div>
          <div>
            <p className="font-extrabold text-base leading-none" style={{ color: "#fff", fontFamily: "Georgia,serif" }}>NEBRIJA</p>
            <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: accent, opacity: 0.6 }}>Universidad</p>
          </div>
          <div className="ml-auto hidden sm:flex gap-6 text-[11px] font-medium uppercase tracking-wide" style={{ color: "#444" }}>
            <span className="hover:text-white cursor-pointer transition-colors">Grados</span>
            <span className="hover:text-white cursor-pointer transition-colors">Posgrados</span>
            <span className="cursor-pointer font-semibold" style={{ color: accent }}>Mi expediente</span>
          </div>
        </div>
      </header>
      <nav className="px-6 py-2 text-[11px]" style={{ background: "#0b0004", borderBottom: "1px solid rgba(255,255,255,0.04)", color: "#444" }}>
        <div className="max-w-2xl mx-auto">
          Inicio &rsaquo; Oferta académica &rsaquo; Grados &rsaquo;{" "}
          <span style={{ color: accent }}>Ingeniería Informática</span>
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
    <div className="h-full overflow-auto font-sans text-sm" style={{ background: bg, color: "#f0e8e8" }}>

      {/* ── SECCIÓN 1: HERO ── */}
      <div className="min-h-full flex flex-col">
        <Header />
        <div className="relative flex-1 px-6 flex items-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f0005 0%, #1a0010 60%, #0f0005 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,#A50034 0,#A50034 1px,transparent 0,transparent 20px)", backgroundSize: "20px 20px" }} />
          <div className="absolute right-0 top-0 bottom-0 w-48 opacity-15"
            style={{ background: "linear-gradient(to left, #A50034, transparent)" }} />
          <div className="relative z-10 max-w-2xl mx-auto w-full py-10">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4caf50" }} />
                En curso · 2018–2026
              </span>
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: "rgba(255,255,255,0.04)", color: "#888", borderColor: "rgba(255,255,255,0.1)" }}>
                240 ECTS
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#fff", letterSpacing: "-0.01em", fontFamily: "Georgia,serif" }}>
              Grado en<br />
              <span style={{ color: accent }}>Ingeniería Informática</span>
            </h1>
            <p className="text-sm leading-relaxed max-w-lg"
              style={{ color: "#888", borderLeft: "2px solid rgba(165,0,52,0.4)", paddingLeft: "14px" }}>
              Formación integral en arquitectura de computadores, sistemas operativos, redes, estructuras de datos e inteligencia artificial. Desarrollada en colaboración con Telefónica, Indra, BQ Educación y Atos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Inicio", value: "Septiembre 2018" },
                { label: "Duración", value: "4 años · 240 ECTS" },
                { label: "Campus", value: "Madrid" },
                { label: "Modalidad", value: "Presencial" },
                { label: "Nivel", value: "Grado Oficial" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg px-3 py-2 text-xs border" style={{ background: card, borderColor: accentBorder }}>
                  <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#555" }}>{label}</p>
                  <p className="font-semibold" style={{ color: "#f0e8e8" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <ScrollHint label="El programa" />
        </div>
      </div>

      {/* ── SECCIÓN 2: DESCRIPCIÓN + COMPETENCIAS ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0b0004", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="El programa" />
          <div className="rounded-2xl p-8 border mb-8" style={{ background: card, borderColor: accentBorder }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888" }}>
              El Grado en Ingeniería Informática de la Universidad Nebrija ofrece una educación de vanguardia, respaldada por líderes de la industria. Su plan de estudios combina tres años de formación académica seguidos de un año de prácticas en empresa.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
              El claustro está compuesto por profesionales con sólida trayectoria empresarial y docentes del centro de investigación ARIES en Inteligencia Artificial y Sistemas Emergentes.
            </p>
          </div>
          <SectionLabel text="Aprendizajes durante la carrera" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "💻", text: "Diseño y desarrollo de software" },
              { icon: "🌐", text: "Arquitectura de sistemas y redes" },
              { icon: "🗄️", text: "Bases de datos y gestión de información" },
              { icon: "🤖", text: "Inteligencia Artificial y Machine Learning" },
              { icon: "🔐", text: "Seguridad informática y criptografía" },
              { icon: "⚙️", text: "Ingeniería del software y metodologías ágiles" },
              { icon: "☁️", text: "Cloud computing y sistemas distribuidos" },
              { icon: "🚀", text: "Proyectos tecnológicos en entornos reales" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                style={{ background: card, borderColor: "rgba(165,0,52,0.1)" }}>
                <span className="text-base shrink-0">{icon}</span>
                <span className="text-xs" style={{ color: "#aaa" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <ScrollHint label="Salidas profesionales" />
      </div>

      {/* ── SECCIÓN 3: SALIDAS Y REFLEXIÓN ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0d0008", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Habilidades reflejadas en mi carrera" />
          <div className="flex flex-wrap gap-3 mb-10">
            {["Desarrollador Full Stack", "Ingeniero de Software", "Arquitecto de Sistemas", "Data Engineer", "DevOps Engineer", "Consultor Tecnológico"].map((s) => (
              <span key={s} className="text-sm px-5 py-3 rounded-full font-medium border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>{s}</span>
            ))}
          </div>
          <SectionLabel text="Lo que me llevé" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "01", text: "Base técnica que apliqué directamente en Everis, Inetum y NFQ" },
              { n: "02", text: "Capacidad para diseñar sistemas fiables desde el hardware hasta el software" },
              { n: "03", text: "Pensamiento de ingeniero: descomponer problemas complejos en partes manejables" },
              { n: "04", text: "Visión de seguridad y sistemas distribuidos en entornos de producción" },
            ].map(({ n, text }) => (
              <div key={n} className="flex items-start gap-5 rounded-2xl p-6 border"
                style={{ background: card, borderColor: "rgba(165,0,52,0.1)" }}>
                <span className="font-black text-3xl shrink-0" style={{ color: "rgba(165,0,52,0.2)", fontFamily: "Georgia,serif", lineHeight: 1 }}>{n}</span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "#888" }}>{text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-8 border mt-6" style={{ background: card, borderColor: accentBorder }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#555" }}>Reflexión</p>
            <p className="text-base leading-relaxed font-medium" style={{ color: "#aaa" }}>
              La carrera me dio el marco para entender los sistemas en su totalidad — no solo escribir código, sino entender por qué funciona y cómo falla.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 text-[11px]" style={{ background: "#080003", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#333" }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span>© 2025 Universidad Nebrija — Todos los derechos reservados</span>
          <span className="font-semibold shrink-0" style={{ color: accent }}>nebrija.es</span>
        </div>
      </footer>

    </div>
  );
}
