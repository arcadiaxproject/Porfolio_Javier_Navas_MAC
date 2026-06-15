import { useState, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Window from "./Window";
import FolderIcon from "./FolderIcon";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import Terminal from "./Terminal";
import PhotoGallery from "./PhotoGallery";
import PhotoViewer from "./PhotoViewer";
import Calendar from "./Calendar";
import NebrijanGradoPage from "./NebrijanGradoPage";
import BlackboardDAMPage from "./BlackboardDAMPage";
import EverisPage from "./EverisPage";
import InetumPage from "./InetumPage";
import NfqPage from "./NfqPage";
import ArcadiaxPage from "./ArcadiaxPage";
import MiMarketplacePage from "./MiMarketplacePage";
import { textos } from "../textos";
import type { NfqEventRaw } from "../lib/mongodb.server";

// ─── Types ────────────────────────────────────────────────────────────────────

type WinId = "terminal" | "proyectos" | "experiencia" | "estudios" | "fotos" | "calendario";
type OpenDocFn = (title: string, content: ReactNode, opts?: { width?: number; height?: number }) => void;

interface WinState {
  id: WinId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  defaultPosition: { x: number; y: number };
  width: number;
  height: number;
}

interface DynWin {
  id: string;
  title: string;
  content: ReactNode;
  isMinimized: boolean;
  zIndex: number;
  defaultPosition: { x: number; y: number };
  width: number;
  height: number;
}

// ─── Document views ───────────────────────────────────────────────────────────

type Proyecto = typeof textos.terminal.proyectos[number];
type Trabajo  = typeof textos.terminal.trabajos[number];
type Estudio  = typeof textos.terminal.estudios[number];

function DocView({ children }: { children: ReactNode }) {
  return (
    <div className="h-full overflow-auto bg-[#111111] font-mono text-sm p-6 leading-relaxed">
      {children}
    </div>
  );
}

function ProyectoDoc({ p }: { p: Proyecto }) {
  return (
    <DocView>
      <p className="text-yellow-400 font-bold text-base mb-0.5">{p.name}</p>
      <p className="text-gray-500 text-xs mb-4">~/proyectos/{p.slug}</p>
      <div className="border-t border-white/10 pt-4 space-y-4">
        <div>
          <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Descripción</p>
          <p className="text-gray-300">{p.description}</p>
        </div>
        <div>
          <p className="text-cyan-400 text-xs uppercase tracking-wider mb-2">Tecnologías</p>
          <div className="flex gap-2 flex-wrap">
            {p.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded text-xs">{t}</span>
            ))}
          </div>
        </div>
        {p.url && (
          <div>
            <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">URL</p>
            <a href={p.url} target="_blank" rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300 break-all"
              onClick={(e) => e.stopPropagation()}
            >{p.url}</a>
          </div>
        )}
      </div>
    </DocView>
  );
}

function TrabajoDoc({ t }: { t: Trabajo }) {
  return (
    <DocView>
      <p className="text-yellow-400 font-bold text-base mb-0.5">{t.empresa}</p>
      <p className="text-gray-500 text-xs mb-4">~/trabajos/{t.slug}.txt</p>
      <div className="border-t border-white/10 pt-4 space-y-4">
        <div>
          <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Rol</p>
          <p className="text-gray-300">{t.rol}</p>
        </div>
        <div>
          <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Período</p>
          <p className="text-gray-300">{t.periodo}</p>
        </div>
        <div>
          <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Descripción</p>
          <p className="text-gray-300">{t.descripcion}</p>
        </div>
        {(t as { proyectos?: string }).proyectos && (
          <div>
            <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Proyectos</p>
            <p className="text-gray-500">{(t as { proyectos?: string }).proyectos}</p>
          </div>
        )}
      </div>
    </DocView>
  );
}

function EstudioDoc({ e }: { e: Estudio }) {
  return (
    <DocView>
      <p className="text-green-400 font-bold text-base mb-0.5">{e.titulo}</p>
      <p className="text-gray-500 text-xs mb-4">~/estudios/{e.slug}</p>
      <div className="border-t border-white/10 pt-4 space-y-4">
        <div>
          <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Período</p>
          <p className="text-gray-300">{e.periodo}</p>
        </div>
        <div>
          <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">Descripción</p>
          <p className="text-gray-300">{e.centro}</p>
        </div>
      </div>
    </DocView>
  );
}

// ─── Finder-style file icon ───────────────────────────────────────────────────

function TxtFileIcon({ name, onOpen, customIcon }: { name: string; onOpen: () => void; customIcon?: ReactNode }) {
  return (
    <div
      onDoubleClick={onOpen}
      className="flex flex-col items-center gap-1.5 cursor-pointer select-none group w-20"
    >
      <div className="group-hover:scale-110 transition-transform duration-150 drop-shadow">
        {customIcon ?? <span className="text-5xl">📄</span>}
      </div>
      <span className="text-xs text-white text-center group-hover:bg-blue-500/60 px-1 py-0.5 rounded leading-tight break-all">
        {name}.txt
      </span>
    </div>
  );
}

const NEBRIJA_ICON = (
  <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6 L24 1 L44 6 L44 28 Q44 44 24 51 Q4 44 4 28 Z" fill="#A50034"/>
    <path d="M8 9 L24 5 L40 9 L40 28 Q40 41 24 47 Q8 41 8 28 Z" fill="#C8102E"/>
    <line x1="24" y1="14" x2="24" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="34" y2="26" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <text x="24" y="50" fontFamily="Georgia,serif" fontSize="5" fill="white" textAnchor="middle" letterSpacing="1" opacity="0.7">NEBRIJA</text>
  </svg>
);

const DAM_ICON = (
  <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="44" height="44" rx="8" fill="#0f0f1a"/>
    <rect x="2" y="2" width="44" height="44" rx="8" stroke="#e87722" strokeWidth="1.5"/>
    <rect x="8" y="8" width="20" height="30" rx="3" fill="#e87722"/>
    <text x="10" y="29" fontFamily="Georgia,serif" fontSize="18" fontWeight="900" fill="#0f0f1a">Bb</text>
    <text x="34" y="20" fontFamily="Arial,sans-serif" fontSize="7" fontWeight="700" fill="#e87722" textAnchor="middle">DAM</text>
    <line x1="32" y1="22" x2="44" y2="22" stroke="#e87722" strokeWidth="1" opacity="0.4"/>
    <text x="38" y="30" fontFamily="Arial,sans-serif" fontSize="5" fill="#e87722" opacity="0.6" textAnchor="middle">2016</text>
    <text x="38" y="37" fontFamily="Arial,sans-serif" fontSize="5" fill="#e87722" opacity="0.6" textAnchor="middle">2018</text>
    <text x="24" y="50" fontFamily="Arial,sans-serif" fontSize="5" fill="#e87722" textAnchor="middle" letterSpacing="1" opacity="0.7">BLACKBOARD</text>
  </svg>
);

const NFQ_ICON = (
  <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="46" height="46" rx="8" fill="#0a0a0a"/>
    <rect x="1" y="1" width="46" height="46" rx="8" stroke="#F5A623" strokeWidth="1.2"/>
    <text x="24" y="30" fontFamily="Arial,sans-serif" fontSize="14" fontWeight="900" fill="#F5A623" textAnchor="middle" letterSpacing="1">NFQ</text>
    <line x1="10" y1="35" x2="38" y2="35" stroke="#F5A623" strokeWidth="1" opacity="0.3"/>
    <text x="24" y="51" fontFamily="Arial,sans-serif" fontSize="5" fill="#F5A623" textAnchor="middle" letterSpacing="1" opacity="0.7">ADVISORY</text>
  </svg>
);

const INETUM_ICON = (
  <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="46" height="46" rx="10" fill="#5C0FC8"/>
    {/* Letra "i" con punto */}
    <circle cx="24" cy="11" r="4" fill="white"/>
    <rect x="20" y="18" width="8" height="22" rx="4" fill="white"/>
    {/* Punto decorativo esquina */}
    <circle cx="38" cy="38" r="5" fill="#8B3DFF"/>
    <text x="24" y="51" fontFamily="Arial,sans-serif" fontSize="5" fill="white" textAnchor="middle" letterSpacing="1.5" opacity="0.7">INETUM</text>
  </svg>
);

const EVERIS_ICON = (
  <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fondo */}
    <rect x="1" y="1" width="46" height="46" rx="10" fill="#3d0073"/>
    {/* "e" de everis — arco superior */}
    <path d="M10 26 Q10 14 24 14 Q36 14 37 24 L11 24 Q11 34 24 34 Q30 34 34 30" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    {/* Punto naranja característico */}
    <circle cx="37" cy="33" r="4" fill="#FF6200"/>
    {/* Texto inferior */}
    <text x="24" y="51" fontFamily="Arial,sans-serif" fontSize="5" fill="white" textAnchor="middle" letterSpacing="1.5" opacity="0.7">EVERIS</text>
  </svg>
);

const ARCADIAX_ICON = (
  <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document base */}
    <rect x="4" y="2" width="36" height="46" rx="3" fill="#0d0d1a"/>
    <path d="M28 2 L40 14 L28 14 Z" fill="#1a1a2e"/>
    <path d="M28 2 L28 14 L40 14" fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.6"/>
    {/* Hexagon emblem */}
    <polygon points="22,16 29,20 29,28 22,32 15,28 15,20" fill="none" stroke="#00e5ff" strokeWidth="1.2"/>
    <polygon points="22,19 26,21.5 26,26.5 22,29 18,26.5 18,21.5" fill="#00e5ff" opacity="0.15"/>
    {/* A letter */}
    <text x="22" y="28" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="900" fill="#00e5ff" textAnchor="middle">A</text>
    {/* Scan lines */}
    <line x1="8" y1="37" x2="36" y2="37" stroke="#00e5ff" strokeWidth="0.6" opacity="0.4"/>
    <line x1="8" y1="40" x2="28" y2="40" stroke="#00e5ff" strokeWidth="0.6" opacity="0.25"/>
    <line x1="8" y1="43" x2="22" y2="43" stroke="#00e5ff" strokeWidth="0.6" opacity="0.15"/>
    {/* Corner fold */}
    <path d="M28 2 L40 14" stroke="#00e5ff" strokeWidth="0.5" opacity="0.4"/>
  </svg>
);

const MIMARKETPLACE_ICON = (
  <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document base */}
    <rect x="4" y="2" width="36" height="46" rx="3" fill="#0d1f0d"/>
    <path d="M28 2 L40 14 L28 14 Z" fill="#122012"/>
    <path d="M28 2 L28 14 L40 14" fill="none" stroke="#22c55e" strokeWidth="0.8" opacity="0.6"/>
    {/* Store bag */}
    <rect x="14" y="22" width="16" height="12" rx="2" fill="none" stroke="#22c55e" strokeWidth="1.3"/>
    <path d="M18 22 Q18 17 24 17 Q30 17 30 22" fill="none" stroke="#22c55e" strokeWidth="1.3"/>
    {/* Price tag dot */}
    <circle cx="24" cy="28" r="2" fill="#22c55e" opacity="0.8"/>
    {/* Text lines */}
    <line x1="8" y1="38" x2="36" y2="38" stroke="#22c55e" strokeWidth="0.6" opacity="0.4"/>
    <line x1="8" y1="41" x2="28" y2="41" stroke="#22c55e" strokeWidth="0.6" opacity="0.25"/>
    <line x1="8" y1="44" x2="20" y2="44" stroke="#22c55e" strokeWidth="0.6" opacity="0.15"/>
    {/* Corner fold */}
    <path d="M28 2 L40 14" stroke="#22c55e" strokeWidth="0.5" opacity="0.4"/>
  </svg>
);

const PROYECTOS_FOLDER_ICON = (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Folder body */}
    <path d="M4 14 Q4 10 8 10 L20 10 L24 14 L44 14 Q48 14 48 18 L48 42 Q48 46 44 46 L8 46 Q4 46 4 42 Z" fill="#1e3a5f"/>
    <path d="M4 18 L48 18 L48 42 Q48 46 44 46 L8 46 Q4 46 4 42 Z" fill="#2d5fa6"/>
    {/* Tab highlight */}
    <path d="M4 10 L20 10 L24 14 L4 14 Z" fill="#3a7bd5"/>
    {/* Code brackets < > */}
    <text x="14" y="35" fontFamily="'Courier New', monospace" fontSize="14" fontWeight="900" fill="#7dd3fc" opacity="0.9">&lt;</text>
    <text x="30" y="35" fontFamily="'Courier New', monospace" fontSize="14" fontWeight="900" fill="#7dd3fc" opacity="0.9">&gt;</text>
    {/* Slash / */}
    <text x="23" y="35" fontFamily="'Courier New', monospace" fontSize="11" fontWeight="700" fill="#38bdf8" opacity="0.7">/</text>
    {/* Gloss */}
    <path d="M8 18 L44 18 L44 24 Q26 28 8 24 Z" fill="white" opacity="0.07"/>
  </svg>
);

// ─── Finder window layout ─────────────────────────────────────────────────────

type FolderKey = "proyectos" | "trabajos" | "estudios";

// ─── Finder window — navigable between all 3 folders ─────────────────────────

function FinderContent({ initialFolder, onOpenDoc }: {
  initialFolder: FolderKey;
  onOpenDoc: OpenDocFn;
}) {
  const [active, setActive] = useState<FolderKey>(initialFolder);

  const allFolders: { key: FolderKey; label: string; icon: ReactNode; items: { name: string; onOpen: () => void; customIcon?: ReactNode }[] }[] = [
    {
      key: "proyectos", label: "proyectos", icon: PROYECTOS_FOLDER_ICON,
      items: textos.terminal.proyectos.map((p) => ({
        name: p.slug,
        customIcon: p.slug === "Arcadiax" ? ARCADIAX_ICON : p.slug === "Marketplace" ? MIMARKETPLACE_ICON : undefined,
        onOpen: () => {
          if (p.slug === "Arcadiax") return onOpenDoc("Arcadiax.txt", <ArcadiaxPage />, { width: 760, height: 560 });
          if (p.slug === "Marketplace") return onOpenDoc("MiMarketplace.txt", <MiMarketplacePage />, { width: 760, height: 560 });
          onOpenDoc(`${p.slug}.txt`, <ProyectoDoc p={p} />);
        },
      })),
    },
    {
      key: "trabajos", label: "trabajos", icon: "💼",
      items: textos.terminal.trabajos.map((t) => ({
        name: t.slug,
        customIcon: t.slug === "Everis" ? EVERIS_ICON : t.slug === "Inetum" ? INETUM_ICON : t.slug === "NFQ" ? NFQ_ICON : undefined,
        onOpen: () =>
          t.slug === "Everis"
            ? onOpenDoc("Prácticas en Everis", <EverisPage />, { width: 760, height: 560 })
            : t.slug === "Inetum"
            ? onOpenDoc("Inetum — Optimus Price", <InetumPage />, { width: 760, height: 560 })
            : t.slug === "NFQ"
            ? onOpenDoc("NFQ — Allfunds Bank", <NfqPage />, { width: 760, height: 560 })
            : onOpenDoc(`${t.slug}.txt`, <TrabajoDoc t={t} />),
      })),
    },
    {
      key: "estudios", label: "estudios", icon: "🎓",
      items: textos.terminal.estudios.map((e) => ({
        name: e.slug,
        customIcon: e.slug === "Ingeniería" ? NEBRIJA_ICON : e.slug === "DAM" ? DAM_ICON : undefined,
        onOpen: () =>
          e.slug === "Ingeniería"
            ? onOpenDoc("Ingeniería Informática — Nebrija", <NebrijanGradoPage />, { width: 760, height: 560 })
            : e.slug === "DAM"
            ? onOpenDoc("DAM — Blackboard", <BlackboardDAMPage />, { width: 760, height: 560 })
            : onOpenDoc(`${e.slug}.txt`, <EstudioDoc e={e} />),
      })),
    },
  ];

  const current = allFolders.find((f) => f.key === active)!;

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-36 shrink-0 bg-[#1a1a1a] border-r border-white/10 p-3 flex flex-col gap-0.5">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Favoritos</p>
        {allFolders.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`flex items-center gap-1.5 w-full px-2 py-1.5 rounded text-xs text-left transition-colors ${
              f.key === active
                ? "bg-blue-500/40 text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="w-4 h-4 shrink-0 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">{f.icon}</span>
            <span className="truncate font-mono">{f.label}</span>
          </button>
        ))}
      </div>
      {/* Files grid */}
      <div className="flex-1 bg-[#1e1e1e] p-5 overflow-auto">
        <div className="flex flex-wrap gap-5 content-start">
          {current.items.map((item) => (
            <TxtFileIcon key={item.name} name={item.name} onOpen={item.onOpen} customIcon={item.customIcon} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Folder content components ────────────────────────────────────────────────

function ProyectosContent({ onOpenDoc }: { onOpenDoc: OpenDocFn }) {
  return <FinderContent initialFolder="proyectos" onOpenDoc={onOpenDoc} />;
}
function ExperienciaContent({ onOpenDoc }: { onOpenDoc: OpenDocFn }) {
  return <FinderContent initialFolder="trabajos" onOpenDoc={onOpenDoc} />;
}
function EstudiosContent({ onOpenDoc }: { onOpenDoc: OpenDocFn }) {
  return <FinderContent initialFolder="estudios" onOpenDoc={onOpenDoc} />;
}

// ─── Initial windows ──────────────────────────────────────────────────────────

const INITIAL_WINDOWS: WinState[] = [
  {
    id: "terminal",
    title: "visitor@javier.dev — terminal",
    isOpen: true,
    isMinimized: false,
    zIndex: 10,
    defaultPosition: { x: 140, y: 50 },
    width: 720,
    height: 500,
  },
  {
    id: "proyectos",
    title: "📁  Proyectos",
    isOpen: false,
    isMinimized: false,
    zIndex: 10,
    defaultPosition: { x: 160, y: 50 },
    width: 640,
    height: 400,
  },
  {
    id: "experiencia",
    title: "💼  Experiencia",
    isOpen: false,
    isMinimized: false,
    zIndex: 10,
    defaultPosition: { x: 180, y: 60 },
    width: 580,
    height: 360,
  },
  {
    id: "estudios",
    title: "🎓  Estudios",
    isOpen: false,
    isMinimized: false,
    zIndex: 10,
    defaultPosition: { x: 170, y: 55 },
    width: 540,
    height: 320,
  },
  {
    id: "fotos",
    title: "📷  Fotos",
    isOpen: false,
    isMinimized: false,
    zIndex: 10,
    defaultPosition: { x: 190, y: 60 },
    width: 700,
    height: 480,
  },
  {
    id: "calendario",
    title: "📅  Calendario",
    isOpen: false,
    isMinimized: false,
    zIndex: 10,
    defaultPosition: { x: 150, y: 45 },
    width: 820,
    height: 520,
  },
];

// ─── Desktop ─────────────────────────────────────────────────────────────────

export default function Desktop({ nfqEvents = [] }: { nfqEvents?: NfqEventRaw[] }) {
  const [windows, setWindows]       = useState<WinState[]>(INITIAL_WINDOWS);
  const [dynWindows, setDynWindows] = useState<DynWin[]>([]);
  const topZRef = useRef(10);

  // ── Static window ops ────────────────────────────────────────────────────

  const bringToFront = useCallback((id: WinId) => {
    topZRef.current += 1;
    const z = topZRef.current;
    setWindows((ws) => ws.map((w) => w.id === id ? { ...w, zIndex: z } : w));
  }, []);

  const openWindow = useCallback((id: WinId) => {
    topZRef.current += 1;
    const z = topZRef.current;
    setWindows((ws) =>
      ws.map((w) => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: z } : w)
    );
  }, []);

  const closeWindow = useCallback((id: WinId) => {
    setWindows((ws) => ws.map((w) => w.id === id ? { ...w, isOpen: false, isMinimized: false } : w));
  }, []);

  const minimizeWindow = useCallback((id: WinId) => {
    setWindows((ws) => ws.map((w) => w.id === id ? { ...w, isMinimized: true } : w));
  }, []);

  // ── Dynamic document window ops ──────────────────────────────────────────

  const openDoc = useCallback((title: string, content: ReactNode, opts?: { width?: number; height?: number }) => {
    topZRef.current += 1;
    const z = topZRef.current;
    const id = `doc-${Date.now()}`;
    const offset = (topZRef.current % 6) * 18;
    setDynWindows((ws) => [...ws, {
      id, title, content,
      isMinimized: false,
      zIndex: z,
      defaultPosition: { x: 260 + offset, y: 50 + offset },
      width: opts?.width ?? 480,
      height: opts?.height ?? 420,
    }]);
  }, []);

  const closeDynWin = useCallback((id: string) => {
    setDynWindows((ws) => ws.filter((w) => w.id !== id));
  }, []);

  const focusDynWin = useCallback((id: string) => {
    topZRef.current += 1;
    const z = topZRef.current;
    setDynWindows((ws) => ws.map((w) => w.id === id ? { ...w, zIndex: z } : w));
  }, []);

  const minimizeDynWin = useCallback((id: string) => {
    setDynWindows((ws) => ws.map((w) => w.id === id ? { ...w, isMinimized: true } : w));
  }, []);

  // ── Content resolver ─────────────────────────────────────────────────────

  function getContent(id: WinId): ReactNode {
    switch (id) {
      case "terminal":     return <Terminal embedded />;
      case "proyectos":   return <ProyectosContent onOpenDoc={openDoc} />;
      case "experiencia": return <ExperienciaContent onOpenDoc={openDoc} />;
      case "estudios":    return <EstudiosContent onOpenDoc={openDoc} />;
      case "fotos":       return <PhotoGallery onOpenPhoto={(foto) => openDoc(foto, <PhotoViewer src={`/fotos/${foto}`} name={foto} />)} />;
      case "calendario":  return <Calendar nfqEvents={nfqEvents} />;
    }
  }

  // ── Folders + Dock ───────────────────────────────────────────────────────

  const folders: { id: string; label: string; icon: ReactNode; onOpen: () => void }[] = [
    { id: "proyectos",   label: "Proyectos",   icon: PROYECTOS_FOLDER_ICON, onOpen: () => window.open("https://www.google.com", "_blank") },
    { id: "experiencia", label: "Experiencia", icon: "💼",                  onOpen: () => openWindow("experiencia") },
    { id: "estudios",    label: "Estudios",    icon: "🎓",                  onOpen: () => openWindow("estudios") },
    { id: "fotos",       label: "Fotos",       icon: "📷",                  onOpen: () => openWindow("fotos") },
  ];

  const dockItems = [
    { id: "terminal",    icon: "🖥️", label: "Terminal",    onClick: () => openWindow("terminal"),    isOpen: windows.find((w) => w.id === "terminal")?.isOpen },
    { id: "proyectos",  icon: "📁",  label: "Proyectos",   onClick: () => window.open("https://www.google.com", "_blank"), isOpen: false },
    { id: "experiencia",icon: "💼",  label: "Experiencia", onClick: () => openWindow("experiencia"), isOpen: windows.find((w) => w.id === "experiencia")?.isOpen },
    { id: "estudios",   icon: "🎓",  label: "Estudios",    onClick: () => openWindow("estudios"),    isOpen: windows.find((w) => w.id === "estudios")?.isOpen },
    { id: "fotos",      icon: "📷",  label: "Fotos",       onClick: () => openWindow("fotos"),       isOpen: windows.find((w) => w.id === "fotos")?.isOpen },
    { id: "calendario", icon: "📅",  label: "Calendario",  onClick: () => openWindow("calendario"),  isOpen: windows.find((w) => w.id === "calendario")?.isOpen },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <MenuBar />

      {/* Desktop area */}
      <div className="absolute top-7 left-0 right-0 bottom-20 overflow-hidden">

        {/* Folder icons */}
        <div className="absolute top-4 left-6 flex flex-col gap-5">
          {folders.map((f) => (
            <FolderIcon key={f.id} label={f.label} icon={f.icon} onOpen={f.onOpen} />
          ))}
        </div>

        {/* Static windows */}
        {windows.filter((w) => w.isOpen).map((w) => (
          <Window
            key={w.id}
            title={w.title}
            onClose={() => closeWindow(w.id)}
            onMinimize={() => minimizeWindow(w.id)}
            onFocus={() => bringToFront(w.id)}
            zIndex={w.zIndex}
            defaultPosition={w.defaultPosition}
            width={w.width}
            height={w.height}
            isMinimized={w.isMinimized}
          >
            {getContent(w.id)}
          </Window>
        ))}

        {/* Dynamic document windows */}
        {dynWindows.map((w) => (
          <Window
            key={w.id}
            title={w.title}
            onClose={() => closeDynWin(w.id)}
            onMinimize={() => minimizeDynWin(w.id)}
            onFocus={() => focusDynWin(w.id)}
            zIndex={w.zIndex}
            defaultPosition={w.defaultPosition}
            width={w.width}
            height={w.height}
            isMinimized={w.isMinimized}
          >
            {w.content}
          </Window>
        ))}
      </div>

      <Dock items={dockItems} />
    </div>
  );
}
