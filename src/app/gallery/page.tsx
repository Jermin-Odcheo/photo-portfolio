import { photos } from "@/data/photos";
import GalleryGrid from "@/components/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Jermin Odcheo Photography",
  description:
    "Browse the full photography gallery — landscapes, portraits, street, nature, and architecture.",
};

export default function GalleryPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page header */}
      <div className="pt-32 pb-16 px-6 lg:px-8 text-center">
        <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4">
          Gallery
        </h1>
        <p className="text-white/40 text-sm tracking-wide max-w-md mx-auto">
          {photos.length} photographs across 5 categories
        </p>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <GalleryGrid photos={photos} />
      </div>
    </div>
  );
}
