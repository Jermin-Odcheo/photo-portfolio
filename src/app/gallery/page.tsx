import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { photos } from "@/app/data/photos";

export const metadata: Metadata = {
    title: "Gallery | Jermin Odcheo Photography",
    description: "Browse a curated gallery of landscapes, street scenes, portraits, nature, and architecture.",
};

const categories = Array.from(new Set(photos.map((photo) => photo.category)));
const introPhotos = photos.slice(0, 6);

function formatCategoryLabel(category: string) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function GalleryPage() {
    const heroPhoto = photos[0];

    return (
        <div className="bg-black text-white min-h-screen">
            <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10">
                <Image
                    src={heroPhoto.src}
                    alt={heroPhoto.alt}
                    fill
                    priority
                    className="object-cover opacity-35"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/70 to-black" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 flex flex-col gap-10">
                    <div className="max-w-3xl">
                        <p className="text-amber-400 text-xs tracking-[0.45em] uppercase mb-4">
                            Visual Journal
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest leading-tight mb-6">
                            Explore the Gallery
                        </h1>
                        <p className="text-white/65 max-w-2xl text-sm md:text-base leading-relaxed">
                            Scroll through different styles, jump between categories, and discover moments captured from landscapes, streets, portraits, nature, and architecture.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="#gallery-grid"
                            className="px-6 py-3 bg-amber-400 text-black text-xs tracking-widest uppercase font-medium hover:bg-amber-300 transition-colors"
                        >
                            Start Exploring
                        </a>
                        {categories.map((category) => (
                            <a
                                key={category}
                                href={`#category-${category}`}
                                className="px-4 py-2 border border-white/25 text-white/75 text-xs tracking-widest uppercase hover:border-amber-400 hover:text-amber-300 transition-colors"
                            >
                                {formatCategoryLabel(category)}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <div className="flex items-center justify-between gap-4 mb-5">
                    <p className="text-amber-400 text-xs tracking-[0.35em] uppercase">
                        Quick Preview
                    </p>
                    <p className="text-white/40 text-xs tracking-widest uppercase">
                        {photos.length} Total Photos
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {introPhotos.map((photo) => (
                        <Link
                            key={photo.id}
                            href={`#category-${photo.category}`}
                            className="group relative aspect-3/4 overflow-hidden border border-white/10"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
                            <div className="absolute bottom-2 left-2 right-2">
                                <p className="text-[10px] tracking-[0.2em] uppercase text-amber-300 mb-1">
                                    {formatCategoryLabel(photo.category)}
                                </p>
                                <p className="text-xs text-white/90 truncate">{photo.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <div id="gallery-grid" className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 space-y-24 scroll-mt-28">
                {categories.map((category) => {
                    const photosInCategory = photos.filter((photo) => photo.category === category);
                    const [leadPhoto, ...otherPhotos] = photosInCategory;
                    const topStripPhotos = otherPhotos.slice(0, 2);
                    const galleryPhotos = otherPhotos.slice(2);
                    const isReversed = categories.indexOf(category) % 2 === 1;

                    return (
                        <section key={category} id={`category-${category}`} className="scroll-mt-28 space-y-6">
                            <div className="flex items-end justify-between gap-4">
                                <h2 className="text-xl md:text-2xl font-light tracking-wider capitalize">
                                    {formatCategoryLabel(category)}
                                </h2>
                                <span className="text-xs tracking-widest uppercase text-white/40">
                                    {photosInCategory.length} Photos
                                </span>
                            </div>

                            <div className="border border-white/10 bg-zinc-950/40 p-3 md:p-4 lg:p-5">
                                <div className="grid lg:grid-cols-12 gap-4">
                                    <article
                                        className={`group relative overflow-hidden border border-white/10 ${
                                            isReversed ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"
                                        }`}
                                    >
                                        <div
                                            className="relative w-full"
                                            style={{ aspectRatio: `${leadPhoto.width} / ${leadPhoto.height}` }}
                                        >
                                            <Image
                                                src={leadPhoto.src}
                                                alt={leadPhoto.alt}
                                                fill
                                                priority
                                                sizes="(max-width: 1024px) 100vw, 58vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                                <p className="text-[10px] tracking-[0.25em] uppercase text-amber-300 mb-2">
                                                    Spotlight
                                                </p>
                                                <h3 className="text-lg md:text-2xl font-light tracking-wide text-white">
                                                    {leadPhoto.title}
                                                </h3>
                                                {leadPhoto.location && (
                                                    <p className="text-white/70 text-xs mt-2 tracking-wide">
                                                        {leadPhoto.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </article>

                                    <div
                                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 ${
                                            isReversed ? "lg:order-1 lg:col-span-5 lg:grid-rows-2" : "lg:col-span-5 lg:grid-rows-2"
                                        }`}
                                    >
                                        {topStripPhotos.map((photo) => (
                                            <article key={photo.id} className="group relative overflow-hidden border border-white/10 lg:h-full">
                                                <div
                                                    className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-auto lg:h-full min-h-60"
                                                >
                                                    <Image
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        fill
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                                        <p className="text-sm text-white/90 tracking-wide">{photo.title}</p>
                                                        {photo.location && (
                                                            <p className="text-[11px] text-white/60 mt-1">{photo.location}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>

                                {galleryPhotos.length > 0 && (
                                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                        {galleryPhotos.map((photo) => (
                                            <article key={photo.id} className="group relative overflow-hidden border border-white/10">
                                                <div
                                                    className="relative w-full"
                                                    style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                                                >
                                                    <Image
                                                        src={photo.src}
                                                        alt={photo.alt}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
                                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                        <p className="text-sm text-white/90 tracking-wide">{photo.title}</p>
                                                        {photo.location && (
                                                            <p className="text-[11px] text-white/60 mt-1">{photo.location}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

