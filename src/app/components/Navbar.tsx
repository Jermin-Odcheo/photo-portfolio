"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const routeLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

const homeSections = [
    { id: "featured", label: "Featured" },
    { id: "stats", label: "Stats" },
    { id: "contact", label: "Contact" },
];

const homeRouteLinks = [{ href: "/about", label: "About" }];

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navVisibilityClass = useMemo(() => {
        if (!isHomePage || isVisible) {
            return "opacity-100 translate-y-0";
        }
        return "opacity-0 -translate-y-4 pointer-events-none";
    }, [isHomePage, isVisible]);

    useEffect(() => {
        if (!isHomePage) {
            return;
        }

        const syncNavFromViewport = () => {
            setIsVisible(window.scrollY > 80);

            const sections = document.querySelectorAll("section[id]");
            let currentSection = "hero";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const probeLine = window.innerHeight / 3;
                if (rect.top <= probeLine && rect.top + rect.height > probeLine) {
                    currentSection = section.id;
                }
            });

            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;
            if (pageHeight - scrollPosition < 100) {
                currentSection = "contact";
            }

            setActiveSection(currentSection);
        };

        // Run multiple times to cover browser back/forward scroll restoration timing.
        syncNavFromViewport();
        requestAnimationFrame(syncNavFromViewport);

        window.addEventListener("scroll", syncNavFromViewport, { passive: true });
        window.addEventListener("pageshow", syncNavFromViewport);
        window.addEventListener("resize", syncNavFromViewport);

        return () => {
            window.removeEventListener("scroll", syncNavFromViewport);
            window.removeEventListener("pageshow", syncNavFromViewport);
            window.removeEventListener("resize", syncNavFromViewport);
        };
    }, [isHomePage]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (!section) {
            setIsMobileMenuOpen(false);
            return;
        }

        const offset = 112;
        const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    const mobileItems = isHomePage
        ? [
              ...homeSections.map(({ id, label }) => ({ key: id, label, onClick: () => scrollToSection(id) })),
              ...homeRouteLinks.map(({ href, label }) => ({ key: href, label, href })),
          ]
        : routeLinks.map(({ href, label }) => ({ key: href, label, href }));

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-4 ${navVisibilityClass}`}
        >
            <div className="bg-black/85 backdrop-blur-md rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-white/15 shadow-2xl">
                <div className="hidden sm:flex items-center gap-6">
                    {isHomePage ? (
                        <button
                            onClick={() => scrollToSection("hero")}
                            className={`font-light tracking-[0.3em] uppercase text-sm transition-colors ${
                                activeSection === "hero"
                                    ? "text-amber-400"
                                    : "text-white hover:text-amber-400"
                            }`}
                        >
                            Jermin
                        </button>
                    ) : (
                        <Link
                            href="/"
                            className="text-white font-light tracking-[0.3em] uppercase text-sm hover:text-amber-400 transition-colors"
                        >
                            Jermin
                        </Link>
                    )}

                    <div className="flex items-center gap-3">
                        {isHomePage
                            ? homeSections.map(({ id, label }) => (
                                  <button
                                      key={id}
                                      onClick={() => scrollToSection(id)}
                                      className={`px-3 py-1 rounded-full text-xs tracking-widest uppercase transition-all ${
                                          activeSection === id
                                              ? "bg-white/15 text-white"
                                              : "text-white/70 hover:text-white hover:bg-white/10"
                                      }`}
                                  >
                                      {label}
                                  </button>
                              ))
                            : routeLinks.map(({ href, label }) => {
                                  const isActive =
                                      href === "/"
                                          ? pathname === "/"
                                          : pathname === href || pathname.startsWith(`${href}/`);
                                  return (
                                      <Link
                                          key={href}
                                          href={href}
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

                        {isHomePage &&
                            homeRouteLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="px-3 py-1 rounded-full text-xs tracking-widest uppercase transition-all text-white/70 hover:text-white hover:bg-white/10"
                                >
                                    {label}
                                </Link>
                            ))}
                    </div>

                </div>

                <div className="sm:hidden flex items-center justify-between gap-4 min-w-55">
                    {isHomePage ? (
                        <button
                            onClick={() => scrollToSection("hero")}
                            className={`font-light tracking-[0.3em] uppercase text-xs transition-colors ${
                                activeSection === "hero"
                                    ? "text-amber-400"
                                    : "text-white hover:text-amber-400"
                            }`}
                        >
                            Jermin
                        </button>
                    ) : (
                        <Link
                            href="/"
                            className="text-white font-light tracking-[0.3em] uppercase text-xs hover:text-amber-400 transition-colors"
                        >
                            Jermin
                        </Link>
                    )}

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
                    {mobileItems.map((item) => {
                        const isActive = "onClick" in item ? activeSection === item.key : pathname === item.href;

                        if ("onClick" in item) {
                            return (
                                <button
                                    key={item.key}
                                    onClick={item.onClick}
                                    className={`w-full text-left px-4 py-3 text-xs tracking-widest uppercase transition-all border-b border-white/10 last:border-b-0 ${
                                        isActive
                                            ? "bg-white/15 text-white"
                                            : "text-white/70 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={item.key}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-3 text-xs tracking-widest uppercase transition-all border-b border-white/10 last:border-b-0 ${
                                    isActive
                                        ? "bg-white/15 text-white"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    </div>
            )}
        </nav>
    );
}