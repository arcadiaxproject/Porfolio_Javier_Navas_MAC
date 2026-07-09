interface DockItem {
  id: string;
  icon: string;
  label: string;
  onClick: () => void;
  isOpen?: boolean;
}

interface DockProps {
  items: DockItem[];
}

export default function Dock({ items }: DockProps) {
  return (
    <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="flex items-end gap-1 px-4 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/50">
        {items.map((item, i) => (
          <div key={item.id} className="flex flex-col items-center">
            {i > 0 && i === items.length - 1 && (
              <div className="w-px h-7 bg-white/20 mx-2 self-center" />
            )}
            <button
              onClick={item.onClick}
              title={item.label}
              className="flex flex-col items-center gap-1 group px-2"
            >
              <span className="text-4xl drop-shadow-lg group-hover:scale-125 transition-transform duration-200 origin-bottom inline-block">
                {item.icon}
              </span>
              {item.isOpen && (
                <span className="w-1 h-1 rounded-full bg-white/70" />
              )}
              {!item.isOpen && <span className="w-0.5 h-0.5" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
