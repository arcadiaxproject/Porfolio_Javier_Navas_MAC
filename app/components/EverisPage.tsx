export default function EverisPage() {

  const accent = "#9b59e8";
  const accentDim = "rgba(155,89,232,0.15)";
  const accentBorder = "rgba(155,89,232,0.25)";
  const bg = "#0d0812";
  const card = "#110e20";

  // Barra superior fija (header + breadcrumb) ~88px total
  const Header = () => (
    <div className="shrink-0" style={{ background: bg }}>
      <div className="px-6 py-1.5" style={{ background: "#08050f", borderBottom: "1px solid rgba(109,0,180,0.2)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: accent, opacity: 0.7 }}>everis · NTT DATA</span>
          <span className="text-[10px] hidden sm:block" style={{ color: "#444" }}>Consultoría · Tecnología · Innovación</span>
        </div>
      </div>
      <header className="px-6 py-4" style={{ background: "#0f0a1a", borderBottom: "1px solid rgba(109,0,180,0.25)" }}>
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#3d0073" }}>
            <span className="font-black text-sm" style={{ color: "#fff" }}>ev</span>
          </div>
          <div>
            <p className="font-extrabold text-base leading-none" style={{ color: "#fff" }}>everis</p>
            <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: accent, opacity: 0.6 }}>an NTT DATA company</p>
          </div>
          <div className="ml-auto hidden sm:flex gap-6 text-[11px] font-medium uppercase tracking-wide" style={{ color: "#444" }}>
            <span className="hover:text-white cursor-pointer transition-colors">Servicios</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sectores</span>
            <span className="cursor-pointer font-semibold" style={{ color: accent }}>Mi expediente</span>
          </div>
        </div>
      </header>
      <nav className="px-6 py-2 text-[11px]" style={{ background: "#0b0816", borderBottom: "1px solid rgba(255,255,255,0.04)", color: "#444" }}>
        <div className="max-w-2xl mx-auto">
          Talento &rsaquo; Prácticas &rsaquo; Expediente &rsaquo;{" "}
          <span style={{ color: accent }}>Javier Navas — Everis 2018</span>
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
          style={{ background: "linear-gradient(135deg, #0f0a1a 0%, #16082e 60%, #0f0a1a 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #9b59e8 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <div className="absolute right-0 top-0 bottom-0 w-48 opacity-15"
            style={{ background: "linear-gradient(to left, #6c00cc, transparent)" }} />
          <div className="relative z-10 max-w-2xl mx-auto w-full py-10">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4caf50" }} />
                Prácticas completadas
              </span>
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded font-semibold border"
                style={{ background: "rgba(255,160,50,0.08)", color: "#e8a830", borderColor: "rgba(255,160,50,0.2)" }}>
                Proyecto con Orange
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#fff", letterSpacing: "-0.01em" }}>
              Prácticas en <span style={{ color: accent }}>everis</span><br />
              <span className="text-2xl sm:text-3xl font-bold" style={{ color: "#555" }}>— Proyecto Orange</span>
            </h1>
            <p className="text-sm leading-relaxed max-w-lg"
              style={{ color: "#888", borderLeft: "2px solid rgba(155,89,232,0.4)", paddingLeft: "14px" }}>
              Primera experiencia profesional en consultoría tecnológica. Tres meses trabajando junto a Orange en la automatización del proceso de baja de líneas móviles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Inicio", value: "Marzo 2018" },
                { label: "Fin", value: "Junio 2018" },
                { label: "Duración", value: "3 meses" },
                { label: "Cliente", value: "Orange España" },
                { label: "Ubicación", value: "Madrid" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg px-3 py-2 text-xs border" style={{ background: card, borderColor: accentBorder }}>
                  <p className="text-[10px] uppercase tracking-wide mb-0.5" style={{ color: "#555" }}>{label}</p>
                  <p className="font-semibold" style={{ color: "#e2dff0" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
          <ScrollHint label="Contexto" />
        </div>
      </div>

      {/* ── SECCIÓN 2: CONTEXTO ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0b0816", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Contexto del proyecto" />
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1 rounded-2xl p-8 border" style={{ background: card, borderColor: accentBorder }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: accentDim }}>
                <span className="text-2xl">🏢</span>
              </div>
              <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>La empresa</p>
              <p className="font-extrabold text-xl mb-4" style={{ color: "#fff" }}>Orange España</p>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                Operadora de telecomunicaciones con millones de líneas móviles activas. El proceso manual de gestión de bajas generaba ineficiencias y errores en la operativa diaria.
              </p>
            </div>
            <div className="flex-1 rounded-2xl p-8 border" style={{ background: card, borderColor: accentBorder }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: accentDim }}>
                <span className="text-2xl">👨‍💻</span>
              </div>
              <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>Mi rol</p>
              <p className="font-extrabold text-xl mb-4" style={{ color: "#fff" }}>Desarrollador en Prácticas</p>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                Integrado en el equipo de automatización de procesos de everis, con responsabilidad directa sobre el diseño e implementación del flujo de bajas.
              </p>
            </div>
          </div>
        </div>
        <ScrollHint label="El reto" />
      </div>

      {/* ── SECCIÓN 3: PROBLEMA Y SOLUCIÓN ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0a0812", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Problema · Solución" />
          <div className="space-y-5">
            <div className="rounded-2xl p-8 border" style={{ background: "#1a0a0a", borderColor: "rgba(220,50,50,0.25)" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚠️</span>
                <p className="font-bold text-sm uppercase tracking-widest" style={{ color: "#e05555" }}>El problema</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
                El proceso de baja de líneas móviles de Orange se gestionaba de forma completamente manual: los agentes revisaban solicitudes, validaban datos y ejecutaban la baja una a una. Tiempos elevados, errores humanos frecuentes y coste operativo alto.
              </p>
            </div>
            <div className="rounded-2xl p-8 border" style={{ background: "#0a1a0a", borderColor: "rgba(50,180,80,0.25)" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <p className="font-bold text-sm uppercase tracking-widest" style={{ color: "#4cba6a" }}>La solución</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
                Desarrollé un proceso automatizado que detectaba las solicitudes de baja entrantes, validaba los datos del titular y ejecutaba las acciones necesarias de forma autónoma — sin intervención manual, reduciendo tiempos y eliminando errores sistemáticos.
              </p>
            </div>
          </div>
        </div>
        <ScrollHint label="Aprendizajes" />
      </div>

      {/* ── SECCIÓN 4: APRENDIZAJES ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0b0816", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Aprendizajes clave" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "01", text: "Primera toma de contacto con entornos empresariales reales" },
              { n: "02", text: "Automatización de procesos de negocio en producción" },
              { n: "03", text: "Trabajo en equipo dentro de una gran consultora tecnológica" },
              { n: "04", text: "Comunicación directa con cliente (Orange)" },
              { n: "05", text: "Metodología de proyectos en consultoría" },
              { n: "06", text: "Documentación técnica de procesos" },
            ].map(({ n, text }) => (
              <div key={n} className="flex items-start gap-5 rounded-2xl p-6 border"
                style={{ background: card, borderColor: "rgba(155,89,232,0.1)" }}>
                <span className="font-black text-3xl shrink-0" style={{ color: "rgba(155,89,232,0.2)", fontFamily: "Georgia,serif", lineHeight: 1 }}>{n}</span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "#888" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <ScrollHint label="Tecnologías" />
      </div>

      {/* ── SECCIÓN 5: STACK ── */}
      <div className="min-h-full flex flex-col justify-center relative px-6 py-16"
        style={{ background: "#0a0812", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-2xl mx-auto w-full">
          <SectionLabel text="Tecnologías y herramientas" />
          <div className="flex flex-wrap gap-3 mb-10">
            {["Automatización de procesos", "Java", "Scripting", "Gestión de datos", "Orange API", "Consultoría TI"].map((s) => (
              <span key={s} className="text-sm px-5 py-3 rounded-full font-medium border"
                style={{ background: accentDim, color: accent, borderColor: accentBorder }}>
                {s}
              </span>
            ))}
          </div>
          {/* Cierre elegante */}
          <div className="rounded-2xl p-8 border mt-4" style={{ background: card, borderColor: accentBorder }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#555" }}>Reflexión final</p>
            <p className="text-base leading-relaxed font-medium" style={{ color: "#aaa" }}>
              Everis fue el primer contacto real con la industria. Aprendí que la tecnología en una gran empresa no es solo código — es proceso, comunicación y responsabilidad.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 text-[11px]" style={{ background: "#08050f", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#333" }}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span>© 2018 everis Spain S.L.U. — An NTT DATA Company</span>
          <span className="font-semibold shrink-0" style={{ color: accent }}>everis.com</span>
        </div>
      </footer>

    </div>
  );
}
