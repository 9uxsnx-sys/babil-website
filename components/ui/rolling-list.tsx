import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { Layers, Blocks, LayoutGrid } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ListItem {
  id: number;
  titleKey: string;
  categoryKey: string;
  src: string;
  alt: string;
  color: "blue" | "green" | "purple" | "orange" | "red" | "cyan";
  Icon: React.ElementType;
}

interface RollingTextItemProps {
  item: ListItem;
  onClick?: () => void;
}

const colorClassMap: Record<string, string> = {
  blue: "text-blue-600 dark:text-blue-500",
  green: "text-emerald-600 dark:text-emerald-500",
  purple: "text-purple-600 dark:text-purple-500",
  orange: "text-orange-600 dark:text-orange-500",
  red: "text-red-600 dark:text-red-500",
  cyan: "text-cyan-600 dark:text-cyan-500",
};

const RollingTextItem: React.FC<RollingTextItemProps> = ({ item, onClick }) => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language.startsWith('fr');
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Simulate navigation delay or action
    setTimeout(() => {
      setIsClicked(false);
      onClick?.();
    }, 500);
  };

  const title = t(item.titleKey);
  const category = t(item.categoryKey);

  return (
    <div 
      onClick={handleClick}
      className="group relative w-full cursor-pointer border-b border-neutral-200 dark:border-neutral-800 py-6 md:py-10"
    >
      {/* Rolling text */}
      <div className="relative overflow-hidden h-10 sm:h-12 md:h-20 lg:h-24 w-full pr-24 sm:pr-4">
        <div 
          className={cn(
            "transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
            isClicked ? "-translate-y-1/2" : "group-hover:-translate-y-1/2"
          )}
        >
          {/* State 1: Normal */}
          <div className="h-10 sm:h-12 md:h-20 lg:h-24 flex items-center">
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter whitespace-nowrap">
              {title}
            </h2>
          </div>

          {/* State 2: Hover (Italic + Specific Color) */}
          <div className="h-10 sm:h-12 md:h-20 lg:h-24 flex items-center">
            <h2
              className={cn(
                "text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter italic whitespace-nowrap",
                colorClassMap[item.color]
              )}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Category Label (Hidden on mobile to reduce clutter, visible on Desktop) */}
      <span className="absolute top-4 md:top-8 right-0 text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-400 transition-opacity duration-300 group-hover:opacity-0 hidden sm:block">
        {category}
      </span>

      {/* MOBILE: Icon View - Minimalist / Raw with Index */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 sm:hidden flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-widest text-neutral-300 dark:text-neutral-700 font-mono">
            0{item.id}
          </span>
          <item.Icon 
            className={cn(
                "size-6 transition-colors duration-300 text-neutral-900 dark:text-white"
            )}
            strokeWidth={1}
          />
      </div>

      {/* DESKTOP: Image Reveal Effect */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl",
          "transition-all duration-500 ease-out",
          // Sizes: Desktop only now
          "hidden sm:block sm:h-24 sm:w-36 md:h-40 md:w-64",
          
          // Desktop state: Hidden initially, reveal on hover. 
          "opacity-0 scale-95 rotate-3 translate-x-4",
          "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0"
        )}
      >
        <div className="relative h-full w-full bg-neutral-200 dark:bg-neutral-800">
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
          />
          <div className={cn("absolute inset-0 opacity-20 mix-blend-overlay", {
             "bg-blue-600": item.color === "blue",
             "bg-emerald-600": item.color === "green",
             "bg-purple-600": item.color === "purple",
             "bg-orange-600": item.color === "orange",
             "bg-red-600": item.color === "red",
             "bg-cyan-600": item.color === "cyan",
          })} />
        </div>
      </div>
    </div>
  );
};

export function RollingTextList({ onItemClick }: { onItemClick?: (id: number) => void }) {
  // We store keys instead of text here
  const items: ListItem[] = [
    {
      id: 1,
      titleKey: "services_list.web_design",
      categoryKey: "services_list.categories.digital",
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60",
      alt: "Website Solutions",
      color: "blue",
      Icon: Layers,
    },
    {
      id: 2,
      titleKey: "services_list.business_systems",
      categoryKey: "services_list.categories.solutions",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
      alt: "Business Systems",
      color: "blue",
      Icon: Blocks,
    },
    {
      id: 3,
      titleKey: "services_list.platforms",
      categoryKey: "services_list.categories.platforms",
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=60",
      alt: "Complete Platforms",
      color: "blue",
      Icon: LayoutGrid,
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 md:px-8 py-12">
      <div className="w-full flex flex-col">
        {items.map((item) => (
          <RollingTextItem 
            key={item.id} 
            item={item} 
            onClick={() => onItemClick?.(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
