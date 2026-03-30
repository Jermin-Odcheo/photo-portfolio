import Image from "next/image";
import Link from "next/link";
import { featuredPhotos } from "@/app/data/photos";
import { FeaturedPhotoCard } from "@/app/components/PhotoCard";
import ContactForm from "@/app/components/Contactform";

export default function Home() {
  const heroPhoto = featuredPhotos[0];
  const showcasePhotos = featuredPhotos.slice(1, 5);

  return (
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-28">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                fill
                className="object-cover opacity-50"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center px-6">
            <p className="text-amber-400 text-xs tracking-[0.5em] uppercase mb-6">
              Photography Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-6">
              Jermin Odcheo
            </h1>
            <p className="text-white/60 text-base md:text-lg font-light tracking-widest max-w-md mx-auto mb-12">
              Capturing moments in time — landscapes, streets, and the quiet
              beauty in between.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                  href="/gallery"
                  className="px-8 py-3 bg-amber-400 text-black text-xs tracking-widest uppercase font-medium hover:bg-amber-300 transition-colors"
              >
                View Gallery
              </Link>
              <Link
                  href="/about"
                  className="px-8 py-3 border border-white/30 text-white/80 text-xs tracking-widest uppercase hover:border-white hover:text-white transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
                className="w-6 h-6 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </section>

        {/* Featured Work */}
        <section id="featured" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest">
              Featured Shots
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {showcasePhotos.map((photo, i) => (
                <FeaturedPhotoCard key={photo.id} photo={photo} priority={i < 2} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/60 hover:text-amber-400 transition-colors group"
            >
              View Full Gallery
              <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* Stats / Brief About */}
        <section id="stats" className="border-t border-white/10 py-20 px-6 lg:px-8 scroll-mt-28">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "15+", label: "Photos" },
              { value: "5", label: "Categories" },
              { value: "3+", label: "Years Shooting" },
              { value: "∞", label: "Stories Told" },
            ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-4xl md:text-5xl font-light text-amber-400 mb-2">
                    {value}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-white/40">
                    {label}
                  </p>
                </div>
            ))}
          </div>
        </section>

        {/* Contact section embedded on the home page */}
        <section id="contact" className="py-24 px-6 lg:px-8 scroll-mt-28">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/50 max-w-md mx-auto leading-relaxed">
              Interested in collaborating or just want to say hello? I&apos;d love
              to hear from you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </section>

      </div>
  );
}