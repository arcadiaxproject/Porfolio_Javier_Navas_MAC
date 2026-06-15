export default function NfqPage() {

  const accent = "#F5A623";
  const accentDim = "rgba(245,166,35,0.1)";
  const accentBorder = "rgba(245,166,35,0.22)";
  const bg = "#0a0a0a";
  const card = "#141414";

  const Header = () => (
    <div className="shrink-0">
      <div className="px-6 py-1.5" style={{ background: "#000", borderBottom: "1px solid rgba(245,166,35,0.15)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: accent, opacity: 0.7 }}>NFQ Advisory Solutions</span>
          <span className="text-[10px] hidden sm:block" style={{ color: "#444" }}>Consultoría · Banca · Financial Services</span>
        </div>
      </div>
      <header className="px-6 py-4" style={{ background: "#111", borderBottom: "1px solid rgba(245,166,35,0.2)" }}>
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: accent }}>
            <span className="font-black text-xs" style={{ color: "#0a0a0a" }}>NFQ</span>
          </div>
          <div>
            <p className="font-extrabold text-base leading-none" style={{ color: "#fff" }}>NFQ</p>
            <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: accent, opacity: 0.6 }}>Advisory Solutions</p>
          </div>
          <div className="ml-auto hidden sm:flex gap-6 text-[11px] font-medium uppercase tracking-wide" style={{ color: "#444" }}>
            <span className="hover:text-white cursor-pointer transition-colors">Servicios</span>
            <span className="hover:text-white cursor-pointer transition-colors">Proyectos</span>
            <span className="cursor-pointer font-semibold" style={{ color: accent }}>Mi expediente</span>
          </div>
        </div>
      </header>
      <nav className="px-6 py-2 text-[11px]" style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.04)", color: "#444" }}>
        <div className="max-w-2xl mx-auto">
          Talento &rsaquo; Consultores &rsaquo; Expediente &rsaquo;{" "}
          <span style={{ color: accent }}>Javier Navas — NFQ 2025–2026</span>
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
    <div className="h-full overflow-auto font-sans text-sm" style={{ background: bg, color: "#e8e8e8" }}>

      {/* ── SECCIÓN 1: HERO ── */}
      <div className="min-h-full flex flex-col">
        <Header />
        <div className="relative flex-1 px-6 flex items-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111100 60%, #0a0a0a 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(90deg,#F5A623 0,#F5A623 1px,transparent 0,transparent 40px), repeating-linear-gradient(0deg,#F5A623 0,#F5A623 1px,transparent 0,transparent 40px)", backgroundSize: "40px 40px" }} />
          <div className="absolute right-0 top-0 bottom-0 w-48 opacity-10"
            style={{ background: "linear-gradient(to left, #F5A623, transparent)" }} />
          <div className="relative z-10 max-w-2xl mx-auto w-full py-10">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                Associate Consultant
              </span>
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: "rgba(245,166,35,0.06)", color: "#c8880e", borderColor: "rgba(245,166,35,0.15)" }}>
                Proyecto Allfunds Bank
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#fff", letterSpacing: "-0.01em" }}>
              Consultor en <span style={{ color: accent }}>NFQ</span><br />
              <span className="text-2xl sm:text-3xl font-bold" style={{ color: "#555" }}>— Allfunds Bank</span>
            </h1>
            <p className="text-sm leading-relaxed max-w-lg"
              style={{ color: "#777", borderLeft: "2px solid rgba(245,166,35,0.4)", paddingLeft: "14px" }}>
              Trabajo como Associate en consultoría financiera para Allfunds Bank, uno de los mayores distribuidores de fondos de inversión del mundo, automatizando procesos críticos de datos internacionales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Inicio", value: "Octubre 2025" },
                { label: "Fin", value: "Junio 2026" },
                { label: "Duración", value: "9 meses" },
                { label: "Cliente", value: "Allfunds Bank" },
                { label: "Rol", value: "Associate" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg px-3 py-2 text-xs border" style={{ background: card, borderColor: accentBorder }}>
                  <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#555" }}>{label}</p>
                  <p className="font-semibold" style={{ color: "#e8e8e8" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <ScrollHint label="Contexto" />
        </div>
      </div>

      {/* ── SECCIÓN 2: CONTEXTO ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Contexto del cliente" />
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1 rounded-2xl p-8 border" style={{ background: card, borderColor: accentBorder }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: accentDim }}>
                <span className="text-2xl">🏦</span>
              </div>
              <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>Allfunds Bank</p>
              <p className="font-extrabold text-xl mb-4" style={{ color: "#fff" }}>Distribuidor de fondos global</p>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                Uno de los mayores distribuidores de fondos de inversión del mundo, con presencia en más de 60 países. Conecta gestoras con distribuidores (bancos, aseguradoras, family offices) procesando miles de operaciones diariamente.
              </p>
            </div>
            <div className="flex-1 rounded-2xl p-8 border" style={{ background: card, borderColor: accentBorder }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: accentDim }}>
                <span className="text-2xl">👨‍💻</span>
              </div>
              <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>Mi rol</p>
              <p className="font-extrabold text-xl mb-4" style={{ color: "#fff" }}>Associate Consultant</p>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                Integrado en el equipo de ingeniería de datos financiera de NFQ, con responsabilidad sobre la automatización y gestión de procesos críticos de distribuidores y operaciones internacionales.
              </p>
            </div>
          </div>
        </div>
        <ScrollHint label="Trabajo realizado" />
      </div>

      {/* ── SECCIÓN 3: TRABAJO REALIZADO ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Trabajo realizado" />
          <div className="space-y-4">
            {[
              { icon: "🔄", title: "Automatización — Francia y Polonia", desc: "Pipelines automáticos para procesar información operacional proveniente de Francia y Polonia. Transformación, validación y carga de ficheros con formatos específicos de cada mercado." },
              { icon: "🏗️", title: "Gestión de datos sobre distribuidores", desc: "Procesos de transformación y gestión de datos de distribuidores de fondos: validaciones, conciliaciones y preparación de información para los flujos de compra/venta en la plataforma." },
              { icon: "☁️", title: "Ingeniería de datos en cloud", desc: "Trabajo sobre infraestructura cloud (AWS y BigQuery): pipelines de datos financieros, migraciones, validaciones de esquema y checks automáticos de integridad." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 rounded-2xl p-7 border"
                style={{ background: card, borderColor: accentBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: accentDim, border: `1px solid ${accentBorder}` }}>
                  <span className="text-2xl">{icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-2" style={{ color: accent }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ScrollHint label="Stack técnico" />
      </div>

      {/* ── SECCIÓN 4: STACK ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Stack técnico" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {[
              { tech: "Python",      role: "Automatización y ETL"        },
              { tech: "PostgreSQL",  role: "Base de datos relacional"     },
              { tech: "BigQuery",    role: "Data warehouse cloud"         },
              { tech: "AWS",         role: "Infraestructura cloud"        },
              { tech: "SQL",         role: "Consultas y transformaciones" },
              { tech: "Excel", role: "Procesos legacy Francia"      },
            ].map(({ tech, role }) => (
              <div key={tech} className="rounded-2xl px-6 py-5 border"
                style={{ background: card, borderColor: accentBorder }}>
                <p className="font-bold text-sm mb-1" style={{ color: accent }}>{tech}</p>
                <p className="text-xs" style={{ color: "#555" }}>{role}</p>
              </div>
            ))}
          </div>
          <SectionLabel text="Aprendizajes clave" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "01", text: "Ingeniería de datos en banca de inversión" },
              { n: "02", text: "Automatización de procesos financieros" },
              { n: "03", text: "Pipelines cloud (AWS → BigQuery)" },
              { n: "04", text: "Validación y calidad de datos financieros" },
              { n: "05", text: "Consultoría en entornos regulados" },
              { n: "06", text: "Gestión de distribuidores de fondos" },
            ].map(({ n, text }) => (
              <div key={n} className="flex items-start gap-5 rounded-2xl p-6 border"
                style={{ background: card, borderColor: "rgba(245,166,35,0.08)" }}>
                <span className="font-black text-3xl shrink-0" style={{ color: "rgba(245,166,35,0.2)", fontFamily: "Georgia,serif", lineHeight: 1 }}>{n}</span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "#888" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 text-[11px]" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#333" }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span>© 2026 NFQ Advisory Solutions — All rights reserved</span>
          <span className="font-semibold shrink-0" style={{ color: accent }}>nfq.com</span>
        </div>
      </footer>

    </div>
  );
}
