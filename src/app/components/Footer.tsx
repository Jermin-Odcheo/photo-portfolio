"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    const scrollToContact = () => {
        const section = document.getElementById("contact");
        if (!section) {
            return;
        }

        const offset = 112;
        const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });

        // Keep URL clean like the navbar section buttons.
        if (window.location.hash) {
            window.history.replaceState({}, "", window.location.pathname + window.location.search);
        }
    };

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
                        <Link
                            href="/gallery"
                            className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/about"
                            className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors"
                        >
                            About
                        </Link>
                        {pathname === "/" ? (
                            <button
                                type="button"
                                onClick={scrollToContact}
                                className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors"
                            >
                                Contact
                            </button>
                        ) : (
                            <Link
                                href="/#contact"
                                className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors"
                            >
                                Contact
                            </Link>
                        )}
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