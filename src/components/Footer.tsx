import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-light tracking-[0.3em] uppercase text-sm">
              Jermin Odcheo
            </p>
            <p className="text-white/40 text-xs mt-1 tracking-wider">
              Photography Portfolio
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {[
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <p className="text-white/30 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Jermin Odcheo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
