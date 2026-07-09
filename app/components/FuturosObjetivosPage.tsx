export default function FuturosObjetivosPage() {
  return (
    <div className="h-full overflow-auto font-sans text-sm" style={{ background: "#f8f9ff", color: "#1a1a2e" }}>

      {/* Hero */}
      <div className="px-8 pt-12 pb-8 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "#6366f1" }}>
          Aportación Empresarial
        </p>
        <h1 className="text-5xl font-black mb-3" style={{ color: "#0f0e1a" }}>
          Backend + IA
        </h1>
        <div className="w-12 h-0.5 mx-auto mb-5 rounded-full" style={{ background: "#6366f1" }} />
        <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#555" }}>
          Mi objetivo principal es dedicarme al desarrollo <strong style={{ color: "#4f46e5" }}>backend</strong>, construyendo soluciones escalables en la nube e integrando{" "}
          <strong style={{ color: "#6366f1" }}>inteligencia artificial</strong> para generar impacto real.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="px-6 pb-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">

        {/* BACKEND */}
        <div className="rounded-2xl p-6 border" style={{ background: "#fff", borderColor: "#e5e7eb" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#ede9fe" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <p className="font-black text-base mb-1" style={{ color: "#0f0e1a" }}>BACKEND</p>
          <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: "#6366f1" }} />
          <ul className="space-y-2">
            {[
              "Desarrollo de APIs REST y servicios web",
              "Python, FastAPI",
              "SQL y NoSQL (PostgreSQL, MongoDB)",
              "Diseño de arquitecturas limpias",
              "Seguridad y buenas prácticas",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "#555" }}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#6366f1" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CLOUD */}
        <div className="rounded-2xl p-6 border" style={{ background: "#fff", borderColor: "#e5e7eb" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#e0f2fe" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
            </svg>
          </div>
          <p className="font-black text-base mb-1" style={{ color: "#0f0e1a" }}>CLOUD</p>
          <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: "#0ea5e9" }} />
          <ul className="space-y-2">
            {[
              "AWS (S3, Lambda, EC2, RDS, etc.)",
              "Azure (en formación)",
              "Contenedores con Docker",
              "CI/CD y automatización",
              "Escalabilidad y alta disponibilidad",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "#555" }}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#0ea5e9" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IA APLICADA */}
        <div className="rounded-2xl p-6 border" style={{ background: "#fff", borderColor: "#e5e7eb" }}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#dcfce7" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
            </svg>
          </div>
          <p className="font-black text-base mb-1" style={{ color: "#0f0e1a" }}>IA APLICADA</p>
          <div className="w-8 h-0.5 rounded-full mb-4" style={{ background: "#22c55e" }} />
          <ul className="space-y-2">
            {[
              "Integración de modelos de IA",
              "RAG y agentes inteligentes",
              "Automatización de procesos",
              "APIs de IA (OpenAI, LangChain, etc.)",
              "IA aplicada a problemas reales",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "#555" }}>
                <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#22c55e" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mx-6 mb-8 rounded-2xl border overflow-hidden max-w-3xl mx-auto" style={{ borderColor: "#e5e7eb" }}>
        <div className="flex flex-col sm:flex-row">
          {/* Meta profesional */}
          <div className="flex flex-col gap-4 p-8 sm:w-96 shrink-0 border-b sm:border-b-0 sm:border-r" style={{ borderColor: "#e5e7eb", background: "#fff" }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "#ede9fe" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#6366f1" }}>Mi meta profesional</p>
              <p className="text-base font-extrabold leading-snug mb-3" style={{ color: "#0f0e1a" }}>
                Crecer como ingeniero backend con impacto real
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                Seguir creciendo como ingeniero backend, combinando{" "}
                <span style={{ color: "#6366f1" }}>lógica</span>,{" "}
                <span style={{ color: "#0ea5e9" }}>tecnología</span> e{" "}
                <span style={{ color: "#22c55e" }}>inteligencia artificial</span>{" "}
                para construir soluciones escalables, útiles y con impacto.
              </p>
            </div>
          </div>

          {/* Roadmap */}
          <div className="flex-1 p-6 flex items-center" style={{ background: "#fafafa" }}>
            <div className="flex items-start gap-2 w-full justify-between">
              {[
                { icon: "👤", label: "APRENDER",  desc: "Formación continua en tecnologías y arquitecturas modernas." },
                { icon: "💻", label: "CONSTRUIR", desc: "Desarrollar soluciones robustas, escalables y eficientes." },
                { icon: "🚀", label: "APORTAR",   desc: "Generar valor real mediante tecnología e innovación." },
                { icon: "🏔️", label: "LIDERAR",   desc: "Crecer hacia roles de mayor responsabilidad e impacto." },
              ].map(({ icon, label, desc }, i, arr) => (
                <div key={label} className="flex items-start gap-1.5">
                  <div className="text-center w-16 shrink-0">
                    <div className="text-xl mb-1">{icon}</div>
                    <p className="font-black text-[10px] uppercase tracking-widest mb-1" style={{ color: "#0f0e1a" }}>{label}</p>
                    <p className="text-[10px] leading-relaxed" style={{ color: "#888" }}>{desc}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-gray-300 mt-5 shrink-0">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
