import { useState } from "react";

const BALL_COLORS: Record<number, { bg: string; stripe?: boolean }> = {
  1:  { bg: "#f5c518" },
  2:  { bg: "#1a6ec7" },
  3:  { bg: "#c0392b" },
  4:  { bg: "#6c2fa7" },
  5:  { bg: "#e07b1a" },
  6:  { bg: "#1a7a3c" },
  7:  { bg: "#7b1a2a" },
  8:  { bg: "#1a1a1a" },
  9:  { bg: "#f5c518", stripe: true },
  10: { bg: "#1a6ec7", stripe: true },
};

function Ball({ n, selected, onClick }: { n: number; selected: boolean; onClick: () => void }) {
  const isWhite = n === 0;
  const color = isWhite ? null : BALL_COLORS[n];

  return (
    <svg
      width="52" height="52" viewBox="0 0 40 40" fill="none"
      className="cursor-pointer transition-transform duration-150 drop-shadow-lg"
      style={{ transform: selected ? "scale(1.22)" : "scale(1)", filter: selected ? "drop-shadow(0 0 8px #c9a84c)" : undefined }}
      onClick={onClick}
    >
      {/* Base */}
      <circle cx="20" cy="20" r="18" fill={isWhite ? "#f0ece0" : color!.bg} />

      {/* Stripe for stripe balls */}
      {color?.stripe && (
        <clipPath id={`clip${n}`}><circle cx="20" cy="20" r="18" /></clipPath>
      )}
      {color?.stripe && (
        <rect x="2" y="13" width="36" height="14" fill="white" clipPath={`url(#clip${n})`} />
      )}

      {/* White circle label */}
      {!isWhite && (
        <circle cx="20" cy="20" r="8" fill="white" opacity="0.92" />
      )}

      {/* Number */}
      {!isWhite && (
        <text x="20" y="24" fontFamily="Arial,sans-serif" fontSize={n >= 10 ? "8" : "9"} fontWeight="900" fill="#111" textAnchor="middle">{n}</text>
      )}

      {/* White ball: billiard spot */}
      {isWhite && (
        <circle cx="20" cy="20" r="3.5" fill="#bbb" opacity="0.5" />
      )}

      {/* Gloss */}
      <ellipse cx="13" cy="12" rx="5" ry="3" fill="white" opacity="0.22" transform="rotate(-30 13 12)" />

      {/* Border */}
      <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1.2" />

      {/* Gold ring when selected */}
      {selected && (
        <circle cx="20" cy="20" r="17" fill="none" stroke="#c9a84c" strokeWidth="1.8" opacity="0.9" />
      )}
    </svg>
  );
}

// Triangle rows: row 0 = apex (ball 1), row 3 = base (balls 7-10)
// White cue ball = separate (index 0 in data)
const RACK_ROWS = [
  [1],
  [2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];

export default function ArcadiaxPage() {
  const [selected, setSelected] = useState<number | null>(null);

  // 0 = white (origin), 1–10 = timeline items
  const items = [
    {
      ball: 0, year: "2018", icon: "⬤", title: "El origen — la bola blanca",
      desc: "Primer interés por el billar durante el tiempo libre. El gasto ronda los 100€ al mes — 1.200€ al año. Nace la idea de instalar una mesa en casa y, siendo ingeniero informático, rodearlo de domótica.",
    },
    {
      ball: 1, year: "2020", icon: "🏠", title: "El plan toma forma",
      desc: "El confinamiento acelera la reflexión. El objetivo: una mesa de billar en casa rodeada de tecnología propia. El principal obstáculo era la inversión inicial.",
    },
    {
      ball: 2, year: "2024", icon: "🤖", title: "RAG + Ollama",
      desc: "Proyecto universitario (1ª evaluación): Ollama en un PC de sobremesa con un sistema RAG que comprende mi información personal y responde con contexto propio.",
    },
    {
      ball: 3, year: "2024", icon: "📷", title: "Visión artificial — lista de la compra",
      desc: "2ª evaluación: cámara en la cocina que detecta productos faltantes y actualiza la lista de la compra automáticamente cuando falta un alimento.",
    },
    {
      ball: 4, year: "2024", icon: "🎨", title: "Generación de imagen con IA",
      desc: "ComfyUI + Flux con LoRA entrenada con mi cara. Vídeos transcritos con Whisper e integrados en el RAG. Objetivo: YouTube. Quedó pausado por falta de tiempo.",
    },
    {
      ball: 5, year: "2024–25", icon: "🎬", title: "TFG — Multimedia distribuido",
      desc: "Sistema OpenClaw que distribuye contenido por todas las estancias del piso controlado por voz. También se construyó una máquina arcade con juegos retro reproducibles de forma distribuida.",
    },
    {
      ball: 6, year: "2025", icon: "🚀", title: "Estética retrofuturista",
      desc: "Rediseño completo del piso: ambientación retrofuturista centrada en la mesa de billar y la IA como entretenimiento. El espacio pasa de sobrio a inmersivo.",
    },
    {
      ball: 7, year: "2025", icon: "🪟", title: "Domótica — ventanas y luces",
      desc: "Domotización de todas las ventanas e iluminación del piso. Todo controlado desde una app móvil: apertura, cierre y cambio de ambiente con un simple click.",
    },
    {
      ball: 8, year: "2025", icon: "📹", title: "Seguridad y visión en la mesa",
      desc: "Videocámaras de seguridad con sistema de grabación. Cámara cenital sobre la mesa de billar con visión artificial para detectar cuándo una bola entra en una tronera.",
    },
    {
      ball: 9, year: "2025", icon: "⌚", title: "Pulseras BLE — juego interactivo",
      desc: "Pulseras con giroscopio y acelerómetro que detectan el golpe de taco. Al encestar, la cámara lo confirma y lanza una animación cómica en la televisión del salón.",
    },
    {
      ball: 10, year: "2025", icon: "💪", title: "Gimnasio personalizado con IA",
      desc: "Una habitación convertida en gimnasio: al entrar con la pulsera de 10 a 12 los fines de semana, el proyector se enciende automáticamente con la rutina de ejercicios.",
    },
  ];

  const selectedItem = selected !== null ? items.find((i) => i.ball === selected) : null;

  const handleBall = (n: number) => setSelected(selected === n ? null : n);

  return (
    <div className="h-full overflow-auto font-sans text-sm" style={{ background: "#0e1208", color: "#e8dfc0" }}>

      {/* Top bar */}
      <div style={{ background: "#0a0e05", borderBottom: "1px solid #8b6914" }} className="px-4 py-1">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: "#c9a84c", opacity: 0.7 }}>Arcadiax · Ecosistema personal</span>
          <span className="text-xs hidden sm:block" style={{ color: "#c9a84c", opacity: 0.4 }}>Domótica · IA · Billar · 2018–2025</span>
        </div>
      </div>

      {/* Header */}
      <header className="px-4 py-4" style={{ background: "#111608", borderBottom: "1px solid #5a4210" }}>
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2" style={{ borderColor: "#c9a84c", background: "#1a2008" }}>
            <span className="text-2xl">🎱</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl leading-none tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#e8dfc0", letterSpacing: "0.15em" }}>ARCADIAX</span>
            <span className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#c9a84c", opacity: 0.6 }}>Billiards Room · Home Lab · AI Studio</span>
          </div>
        </div>
      </header>

      {/* Ornamental divider */}
      <div className="flex items-center gap-3 px-4 py-2 max-w-3xl mx-auto">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #5a4210)" }} />
        <span className="text-xs" style={{ color: "#c9a84c", opacity: 0.5 }}>✦</span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #5a4210)" }} />
      </div>

      {/* Hero */}
      <div className="relative px-4 py-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #0e1208 0%, #162010 50%, #0e1208 100%)", borderBottom: "1px solid #5a4210" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-2" style={{ fontFamily: "Georgia, serif", color: "#e8dfc0" }}>
            Un piso. <span style={{ color: "#c9a84c" }}>Una mesa de billar.</span>
          </h1>
          <p className="text-xs sm:text-sm leading-relaxed max-w-xl" style={{ color: "#a89870", borderLeft: "2px solid #5a4210", paddingLeft: "12px" }}>
            Lo que empezó como querer ahorrar 1.200€ al año se convirtió en un ecosistema completo de domótica, inteligencia artificial y entretenimiento distribuido. Selecciona cada bola para descubrir la historia.
          </p>
        </div>
      </div>

      {/* ── BILLIARD RACK ── */}
      <div className="px-4 py-8" style={{ background: "#0d1a0d" }}>
        <div className="max-w-3xl mx-auto">

          {/* Felt table surface */}
          <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a3a1a, #0f2a0f, #1a3a1a)", border: "3px solid #4a3010", boxShadow: "inset 0 0 40px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.6)" }}>

            {/* Felt texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 4px)", backgroundSize: "6px 6px" }} />

            {/* Rail shadow */}
            <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "inset 0 0 20px rgba(0,0,0,0.4)" }} />

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 justify-center">

              {/* White cue ball — separate to the left */}
              <div className="flex flex-col items-center gap-2 sm:mt-16">
                <Ball n={0} selected={selected === 0} onClick={() => handleBall(0)} />
                <span className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: "#c9a84c", opacity: 0.7 }}>Origen</span>
              </div>

              {/* Cue stick separator */}
              <div className="hidden sm:flex items-center self-center" style={{ height: "2px", width: "32px", background: "linear-gradient(to right, #8b6914, #c9a84c)", borderRadius: "1px", opacity: 0.5 }} />

              {/* Triangle rack */}
              <div className="flex flex-col items-center gap-1.5">
                {RACK_ROWS.map((row, ri) => (
                  <div key={ri} className="flex gap-1.5">
                    {row.map((n) => (
                      <Ball key={n} n={n} selected={selected === n} onClick={() => handleBall(n)} />
                    ))}
                  </div>
                ))}
              </div>

            </div>

            {/* Hint text */}
            <p className="relative z-10 text-center text-[10px] mt-4 uppercase tracking-widest" style={{ color: "#c9a84c", opacity: 0.35 }}>
              Pulsa una bola para ver su historia
            </p>
          </div>
        </div>
      </div>

      {/* ── INFO PANEL ── */}
      <div className="px-4 pb-6 max-w-3xl mx-auto">
        {selectedItem ? (
          <div className="rounded-xl p-5 border" style={{ background: "#111608", borderColor: "#5a4210" }}>
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-0.5">
                <Ball n={selectedItem.ball} selected={false} onClick={() => {}} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm" style={{ background: "#c9a84c12", color: "#c9a84c", border: "1px solid #c9a84c30" }}>{selectedItem.year}</span>
                  <p className="font-bold text-sm" style={{ color: "#e8dfc0", fontFamily: "Georgia, serif" }}>{selectedItem.title}</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#9a8a6a" }}>{selectedItem.desc}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl p-5 border text-center" style={{ background: "#0e1208", borderColor: "#3a2c08" }}>
            <p className="text-xs uppercase tracking-widest" style={{ color: "#5a4a28" }}>Selecciona una bola para ver su historia</p>
          </div>
        )}
      </div>

      {/* Stack */}
      <div className="px-4 pb-6 max-w-3xl mx-auto space-y-6">

        {/* Ornamental divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #5a4210)" }} />
          <span className="text-xs" style={{ color: "#c9a84c", opacity: 0.4 }}>✦ ✦ ✦</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #5a4210)" }} />
        </div>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-px h-6" style={{ background: "#c9a84c" }} />
            <h2 className="font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#c9a84c" }}>Herramientas y tecnologías</h2>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #5a4210, transparent)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { tech: "Ollama",          role: "Modelos LLM locales"     },
              { tech: "RAG",             role: "Contexto personalizado"   },
              { tech: "ComfyUI + Flux",  role: "Generación de imagen IA" },
              { tech: "Whisper",         role: "Transcripción voz/vídeo" },
              { tech: "OpenClaw",        role: "Multimedia distribuido"   },
              { tech: "Computer Vision", role: "Detección objetos/bolas" },
              { tech: "BLE / IoT",       role: "Pulseras + sensores"      },
              { tech: "App móvil",       role: "Control domótica"         },
              { tech: "Python",          role: "Automatización e IA"      },
              { tech: "LoRA",            role: "Fine-tuning de imagen"    },
            ].map(({ tech, role }) => (
              <div key={tech} className="rounded px-4 py-3 border transition-colors hover:border-[#8b6914]" style={{ background: "#111608", borderColor: "#3a2c08" }}>
                <p className="font-bold text-xs mb-0.5" style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>{tech}</p>
                <p className="text-[10px]" style={{ color: "#6a5a3a" }}>{role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-px h-6" style={{ background: "#c9a84c" }} />
            <h2 className="font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "Georgia, serif", color: "#c9a84c" }}>Áreas cubiertas</h2>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, #5a4210, transparent)" }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Inteligencia Artificial", "Domótica · IoT", "Visión Artificial", "LLM / RAG", "Multimedia distribuido", "BLE / Sensores", "App móvil", "Retrofuturismo"].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-sm font-medium border" style={{ background: "#c9a84c0d", color: "#c9a84c", borderColor: "#c9a84c30" }}>{s}</span>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-4 py-3 text-xs border-t" style={{ background: "#0a0e05", borderColor: "#3a2c08", color: "#6a5a3a" }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
          <span>Arcadiax · Proyecto personal en evolución continua</span>
          <span className="font-semibold shrink-0" style={{ color: "#c9a84c" }}>2018 – presente</span>
        </div>
      </footer>

    </div>
  );
}
