import Image from "next/image";
import Link from "next/link";
import { Photo } from "@/app/types";

interface PhotoCardProps {
    photo: Photo;
    priority?: boolean;
}

export default function PhotoCard({ photo, priority = false }: PhotoCardProps) {
    return (
        <div className="group relative overflow-hidden bg-zinc-900 cursor-pointer">
            <div
                className="relative w-full overflow-hidden"
                style={{
                    aspectRatio: `${photo.width} / ${photo.height}`,
                }}
            >
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={priority}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Info overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-medium text-sm tracking-wider">
                        {photo.title}
                    </h3>
                    {photo.location && (
                        <p className="text-white/60 text-xs mt-1 tracking-wide flex items-center gap-1">
                            <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            {photo.location}
                        </p>
                    )}
                    <span className="inline-block mt-2 text-xs text-amber-400 uppercase tracking-widest">
            {photo.category}
          </span>
                </div>
            </div>
        </div>
    );
}

interface FeaturedPhotoCardProps {
    photo: Photo;
    priority?: boolean;
}

export function FeaturedPhotoCard({
                                      photo,
                                      priority = false,
                                  }: FeaturedPhotoCardProps) {
    return (
        <Link href="/gallery" className="group block relative overflow-hidden">
            <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-xs text-amber-400 uppercase tracking-widest">
            {photo.category}
          </span>
                    <h3 className="text-white text-lg font-light mt-1 tracking-wide">
                        {photo.title}
                    </h3>
                    {photo.location && (
                        <p className="text-white/60 text-xs mt-1">{photo.location}</p>
                    )}
                </div>
            </div>
        </Link>
    );
}