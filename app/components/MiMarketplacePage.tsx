export default function MiMarketplacePage() {
  const features = [
    {
      icon: "🔄",
      title: "Intercambio de puntos por productos",
      desc: "Lógica central de la plataforma: los usuarios acumulan puntos y los canjean por productos dentro del marketplace. Sistema de suscripción como modelo de negocio.",
    },
    {
      icon: "📱",
      title: "App móvil — Android e iOS",
      desc: "Aplicación multiplataforma desarrollada aplicando los conocimientos del ciclo DAM. Experiencia nativa en ambas plataformas con una única base de código.",
    },
    {
      icon: "🗺️",
      title: "Geolocalización con Google Maps API",
      desc: "Implementación de geolocalización de usuarios en tiempo real a través de la API de Google Maps. Los usuarios pueden verse y orientarse dentro de la plataforma.",
    },
    {
      icon: "💬",
      title: "Chat entre usuarios",
      desc: "Sistema de mensajería en tiempo real entre usuarios de la aplicación, integrado directamente en la plataforma.",
    },
    {
      icon: "🔐",
      title: "Autenticación y permisos con Supabase",
      desc: "Supabase como base de datos principal. Gestión completa de autenticaciones, permisos por rol y políticas de acceso a datos sin necesidad de backend propio.",
    },
    {
      icon: "💳",
      title: "Modelo de suscripción",
      desc: "Lógica de negocio basada en suscripción: distintos niveles de acceso, gestión de estados de usuario y control de permisos según el plan contratado.",
    },
  ];

  const stack = [
    { tech: "App móvil",      role: "Android + iOS (DAM)"     },
    { tech: "Supabase",       role: "Base de datos + auth"     },
    { tech: "Google Maps API", role: "Geolocalización"         },
    { tech: "Realtime Chat",  role: "Mensajería en tiempo real" },
    { tech: "Suscripción",    role: "Modelo de negocio"        },
    { tech: "RLS / Permisos", role: "Control de acceso"        },
  ];

  return (
    <div className="h-full overflow-auto bg-[#050f05] font-sans text-sm">

      {/* Top bar */}
      <div className="bg-[#22c55e]/5 border-b border-[#22c55e]/10 px-4 py-1">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          <span className="text-[#22c55e]/60 text-xs tracking-widest uppercase font-semibold">MiMarketplace · Proyecto universitario</span>
          <span className="text-[#22c55e]/30 text-xs hidden sm:block">Mobile · Supabase · Google Maps · Chat</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#0a150a] px-4 py-3 border-b border-[#22c55e]/15">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-3 shrink-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="7" fill="#22c55e" opacity="0.1"/>
              <rect width="36" height="36" rx="7" stroke="#22c55e" strokeWidth="1" opacity="0.4"/>
              <rect x="9" y="14" width="18" height="13" rx="2" fill="none" stroke="#22c55e" strokeWidth="1.3"/>
              <path d="M13 14 Q13 9 18 9 Q23 9 23 14" fill="none" stroke="#22c55e" strokeWidth="1.3"/>
              <circle cx="18" cy="20.5" r="2" fill="#22c55e" opacity="0.8"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg leading-none tracking-tight">MiMarketplace</span>
              <span className="text-[#22c55e]/40 text-[10px] uppercase tracking-widest">Proyecto universitario</span>
            </div>
          </div>
          <div className="ml-auto hidden sm:flex gap-5 text-[#22c55e]/30 text-xs font-medium uppercase tracking-wide">
            <span className="hover:text-[#22c55e] cursor-pointer transition-colors">Funcionalidades</span>
            <span className="hover:text-[#22c55e] cursor-pointer transition-colors">Stack</span>
            <span className="text-[#22c55e] font-semibold cursor-pointer">Proyecto</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#050f05] via-[#0a1f0a] to-[#001a08] px-4 py-10 text-white overflow-hidden border-b border-[#22c55e]/10">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(90deg,#22c55e 0,#22c55e 1px,transparent 0,transparent 40px), repeating-linear-gradient(0deg,#22c55e 0,#22c55e 1px,transparent 0,transparent 40px)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#22c55e]/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-white/5 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              Beta lanzada
            </span>
            <span className="bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
              Proyecto NDA
            </span>
          </div>
          <h1 className="text-xl sm:text-3xl font-extrabold leading-tight mb-2">
            <span className="text-[#22c55e]">MiMarketplace</span> — App móvil de intercambio
          </h1>
          <p className="text-white/40 text-xs sm:text-sm font-medium mb-4">
            Mobile · Supabase · Google Maps · Chat en tiempo real · Etapa universitaria
          </p>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed border-l-2 border-[#22c55e]/40 pl-3">
            Marketplace móvil para Android e iOS donde los usuarios intercambian puntos por productos. Desarrollado durante la etapa universitaria junto a una empresa externa — bajo NDA. Se completó la beta y la primera versión funcional.
          </p>
        </div>
      </div>

      {/* Info pills */}
      <div className="bg-[#0a150a] border-b border-[#22c55e]/10 px-4 py-4">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
          {[
            { icon: "📱", label: "Plataforma",  value: "Android + iOS"     },
            { icon: "🏦", label: "Backend",     value: "Supabase"          },
            { icon: "💼", label: "Modelo",      value: "Suscripción"       },
            { icon: "🎓", label: "Contexto",    value: "Etapa universitaria" },
            { icon: "🔒", label: "Estado",      value: "NDA · Beta lanzada" },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-2 bg-[#0e1f0e] border border-[#22c55e]/15 rounded-lg px-3 py-2 text-xs min-w-0">
              <span className="text-sm shrink-0">{icon}</span>
              <div className="min-w-0">
                <p className="text-[#22c55e]/30 font-medium uppercase tracking-wide leading-none mb-0.5 text-[10px]">{label}</p>
                <p className="text-white font-semibold truncate">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* NDA notice */}
        <div className="flex gap-3 p-4 bg-yellow-400/5 border border-yellow-400/20 rounded-xl">
          <span className="text-lg shrink-0">🔒</span>
          <div>
            <p className="text-yellow-300 font-bold text-xs uppercase tracking-wide mb-1">Proyecto bajo NDA</p>
            <p className="text-white/50 text-xs leading-relaxed">
              Firmé un contrato de confidencialidad con la empresa. No puedo revelar detalles concretos del negocio ni del cliente. Lo que aquí se describe corresponde a las funcionalidades técnicas desarrolladas a nivel general.
            </p>
          </div>
        </div>

        {/* Contexto */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 rounded-full bg-[#22c55e] shrink-0" />
            <h2 className="text-white font-bold text-sm uppercase tracking-widest">Contexto</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 bg-[#0e1f0e] border border-[#22c55e]/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                  <span className="text-base">🎓</span>
                </div>
                <p className="text-white font-bold text-sm">Origen</p>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                Participé activamente en la construcción del marketplace durante mi etapa universitaria. Una empresa externa me contrató para desarrollar la aplicación móvil completa.
              </p>
            </div>
            <div className="flex-1 bg-[#0e1f0e] border border-[#22c55e]/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                  <span className="text-base">📉</span>
                </div>
                <p className="text-white font-bold text-sm">Por qué se abandonó</p>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                La carga universitaria se volvió demasiado exigente y la empresa se quedó sin recursos para contratarme. La beta y la primera versión funcional quedaron operativas, pero el proyecto murió a los pocos meses de nacer.
              </p>
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 rounded-full bg-[#22c55e] shrink-0" />
            <h2 className="text-white font-bold text-sm uppercase tracking-widest">Funcionalidades desarrolladas</h2>
          </div>
          <div className="space-y-3">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 bg-[#0e1f0e] border border-[#22c55e]/10 rounded-xl hover:border-[#22c55e]/25 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-base">{icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[#22c55e] font-bold text-xs mb-1.5">{title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 rounded-full bg-[#22c55e] shrink-0" />
            <h2 className="text-white font-bold text-sm uppercase tracking-widest">Stack técnico</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stack.map(({ tech, role }) => (
              <div key={tech} className="bg-[#0e1f0e] border border-[#22c55e]/10 rounded-xl px-4 py-3 hover:border-[#22c55e]/30 transition-colors">
                <p className="text-[#22c55e] font-bold text-xs mb-0.5">{tech}</p>
                <p className="text-white/35 text-[10px]">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aprendizajes */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 rounded-full bg-[#22c55e] shrink-0" />
            <h2 className="text-white font-bold text-sm uppercase tracking-widest">Aprendizajes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Desarrollo móvil multiplataforma (Android + iOS)",
              "Gestión de autenticación y permisos con Supabase",
              "Integración de Google Maps API",
              "Chat en tiempo real",
              "Lógica de negocio por suscripción",
              "Trabajo en entorno profesional real con NDA",
              "Ciclo completo: beta → versión funcional",
              "Gestión del abandono de un proyecto",
            ].map((c) => (
              <div key={c} className="flex items-start gap-2 bg-[#0e1f0e] border border-[#22c55e]/8 rounded-lg px-3 py-2.5 text-xs text-white/55 hover:border-[#22c55e]/20 transition-colors">
                <span className="text-[#22c55e] font-bold shrink-0 mt-0.5">›</span>
                {c}
              </div>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-5 rounded-full bg-[#22c55e] shrink-0" />
            <h2 className="text-white font-bold text-sm uppercase tracking-widest">Habilidades reflejadas</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Mobile Developer", "Supabase", "Google Maps", "Realtime Chat", "DAM · Multiplataforma", "Modelo freemium", "Startup experience"].map((s) => (
              <span key={s} className="bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 text-xs px-3 py-1 rounded-full font-medium">
                {s}
              </span>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-black text-white/20 px-4 py-3 text-xs border-t border-[#22c55e]/10">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span>MiMarketplace · Beta funcional entregada · Proyecto cerrado</span>
          <span className="text-[#22c55e] font-semibold shrink-0">Etapa universitaria</span>
        </div>
      </footer>

    </div>
  );
}
