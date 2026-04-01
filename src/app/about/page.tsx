import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Jermin Odcheo Photography",
    description:
        "Learn more about Jermin Odcheo, a software developer who enjoys photography as a hobby.",
};

export default function AboutPage() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Page header */}
            <div className="pt-32 pb-16 px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-light tracking-widest">
                    About Me
                </h1>
            </div>

            {/* Main content */}
            <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Photo */}
                    <div className="relative aspect-4/5 bg-zinc-900 overflow-hidden">
                        <Image
                            src="https://picsum.photos/seed/aboutme/800/1000"
                            alt="Jermin Odcheo"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col justify-center gap-8 pt-4 md:pt-0">
                        <div>
                            <h2 className="text-2xl font-light tracking-wider mb-4">
                                Hi, I&apos;m Jermin
                            </h2>
                            <div className="space-y-4 text-white/60 leading-relaxed">
                                <p>
                                    I&apos;m a software developer based in Australia/Philippines, and
                                    photography is one of my favorite hobbies. It helps me slow
                                    down, pay attention, and appreciate the quiet moments that
                                    often go unnoticed.
                                </p>
                                <p>
                                    Photography and programming share the same core joy for
                                    me — both are about solving creative problems, paying
                                    attention to detail, and building something meaningful from
                                    nothing.
                                </p>
                                <p>
                                    I gravitate toward landscapes and street scenes, but I enjoy
                                    exploring any style that challenges me to see things
                                    differently.
                                </p>
                                <p>
                                    For a broader look at my projects and background, visit my{" "}
                                    <Link
                                        href="https://jermin-odcheo.github.io/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-400 hover:text-amber-300 transition-colors"
                                    >
                                        professional portfolio
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="text-xs tracking-[0.4em] uppercase text-amber-400 mb-4">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "Javascript",
                                    "Java",
                                    "TypeScript",
                                    "React",
                                    "Tailwind CSS",
                                    "Node.js",
                                    "Python",
                                    "SQL",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 border border-white/20 text-xs tracking-wide text-white/60"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy */}
                <div className="mt-24 border-t border-white/10 pt-24 text-center">
                    <blockquote className="text-xl md:text-2xl font-light italic text-white/70 max-w-2xl mx-auto leading-relaxed">
                        &ldquo;Photography is a hobby that keeps me curious and reminds me to
                        notice the beauty in everyday life.&rdquo;
                    </blockquote>
                    <p className="text-white/30 text-xs tracking-widest uppercase mt-4">
                        — Personal philosophy
                    </p>
                </div>
            </div>
        </div>
    );
}