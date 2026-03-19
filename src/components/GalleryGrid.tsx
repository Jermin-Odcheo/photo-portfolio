"use client";

import { useState } from "react";
import { Photo, Category } from "@/types";
import PhotoCard from "./PhotoCard";

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "landscape", label: "Landscape" },
  { value: "portrait", label: "Portrait" },
  { value: "street", label: "Street" },
  { value: "nature", label: "Nature" },
  { value: "architecture", label: "Architecture" },
];

interface GalleryGridProps {
  photos: Photo[];
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActiveCategory(value)}
            className={`px-5 py-2 text-xs tracking-widest uppercase transition-all border ${
              activeCategory === value
                ? "bg-amber-400 text-black border-amber-400"
                : "bg-transparent text-white/60 border-white/20 hover:border-white/60 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((photo, index) => (
          <div key={photo.id} className="break-inside-avoid">
            <PhotoCard photo={photo} priority={index < 3} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-white/40 py-24">
          No photos in this category yet.
        </div>
      )}
    </div>
  );
}
