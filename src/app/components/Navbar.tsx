"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {type MouseEvent, useMemo, useState} from "react";

const routeLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navVisibilityClass = useMemo(() => "opacity-100 translate-y-0", []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (!section) {
            setIsMobileMenuOpen(false);
            return;
        }

        section.scrollIntoView({ behavior: "smooth", block: "center" });
        section.scrollIntoView({ behavior: "smooth", block: "center" });
        setIsMobileMenuOpen(false);
    };

    const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (isHomePage && href.startsWith("/#")) {
            event.preventDefault();
            scrollToSection(href.slice(2));
            return;
        }

        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-4 ${navVisibilityClass}`}
        >
            <div className="bg-black/85 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-white/15 shadow-2xl">
                <div className="hidden sm:flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-white font-light tracking-[0.3em] uppercase text-sm hover:text-amber-400 transition-colors"
                    >
                        Jermin
                    </Link>

                    <div className="flex items-center gap-3">
                        {routeLinks.map(({ href, label }) => {
                            const isHashLink = href.startsWith("/#");
                            const isActive = !isHashLink && (pathname === href || pathname.startsWith(`${href}/`));

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={(event) => handleNavLinkClick(event, href)}
                                    className={`px-3 py-1 rounded-full text-xs tracking-widest uppercase transition-all ${
                                        isActive
                                            ? "bg-white/15 text-white"
                                            : "text-white/70 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>

                </div>

                <div className="sm:hidden flex items-center justify-between gap-4 min-w-55">
                    <Link
                        href="/"
                        className="text-white font-light tracking-[0.3em] uppercase text-xs hover:text-amber-400 transition-colors"
                    >
                        Jermin
                    </Link>

                    <button
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className="text-white p-2 hover:text-amber-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md rounded-xl border border-white/15 shadow-2xl overflow-hidden">
                    {routeLinks.map(({ href, label }) => {
                        const isHashLink = href.startsWith("/#");
                        const isActive = !isHashLink && (pathname === href || pathname.startsWith(`${href}/`));

                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={(event) => handleNavLinkClick(event, href)}
                                className={`block px-4 py-3 text-xs tracking-widest uppercase transition-all border-b border-white/10 last:border-b-0 ${
                                    isActive
                                        ? "bg-white/15 text-white"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    </div>
            )}
        </nav>
    );
}