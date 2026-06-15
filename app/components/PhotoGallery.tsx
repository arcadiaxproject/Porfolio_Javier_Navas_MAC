import { useState } from "react";

const FOTOS: string[] = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.JPG",
];

interface PhotoGalleryProps {
  onOpenPhoto: (foto: string) => void;
}

export default function PhotoGallery({ onOpenPhoto }: PhotoGalleryProps) {
  const [selected, setSelected] = useState<string | null>(null);

  if (FOTOS.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-[#111] text-gray-500 font-mono text-sm gap-3">
        <span className="text-5xl">📷</span>
        <p className="text-gray-400">No hay fotos todavía</p>
      </div>
    );
  }

  // Layout según número de fotos:
  // 1 foto  → 1 columna
  // 2 fotos → 2 columnas
  // 3 fotos → 3 columnas
  // 4 fotos → 2×2
  // 5 fotos → fila superior 3 + fila inferior 2 (centrada)
  const n = FOTOS.length;
  const top = n === 5 ? FOTOS.slice(0, 3) : FOTOS;
  const bottom = n === 5 ? FOTOS.slice(3) : [];

  const colClass = (count: number) =>
    count === 1 ? "grid-cols-1"
    : count === 2 ? "grid-cols-2"
    : "grid-cols-3";

  const cellBase =
    "relative overflow-hidden cursor-pointer group border-2 transition-all duration-150 bg-black";
  const cellBorder = (foto: string) =>
    selected === foto ? "border-blue-500" : "border-transparent hover:border-white/30";

  const renderCell = (foto: string) => (
    <button
      key={foto}
      onClick={() => setSelected(selected === foto ? null : foto)}
      onDoubleClick={() => onOpenPhoto(foto)}
      className={`${cellBase} ${cellBorder(foto)}`}
    >
      <img
        src={`/fotos/${foto}`}
        alt={foto}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-150 flex items-end justify-start p-2 opacity-0 group-hover:opacity-100">
        <span className="text-[10px] text-white/70 font-mono bg-black/50 px-1.5 py-0.5 rounded">
          Doble clic para abrir
        </span>
      </div>
    </button>
  );

  return (
    <div className="h-full flex flex-col bg-[#111] overflow-hidden">
      {n === 5 ? (
        <>
          {/* Fila superior: 3 fotos */}
          <div className={`grid ${colClass(3)} gap-0.5 flex-1`}>
            {top.map(renderCell)}
          </div>
          {/* Fila inferior: 3 columnas, 2 fotos + hueco vacío */}
          <div className="grid grid-cols-3 gap-0.5 flex-1">
            {bottom.map(renderCell)}
            <div className="bg-[#111]" />
          </div>
        </>
      ) : (
        <div className={`grid ${colClass(n)} gap-0.5 h-full`}>
          {FOTOS.map(renderCell)}
        </div>
      )}
    </div>
  );
}
