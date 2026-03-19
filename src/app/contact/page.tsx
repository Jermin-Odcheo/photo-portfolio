import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Jermin Odcheo Photography",
  description: "Get in touch with Jermin Odcheo for collaborations or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page header */}
      <div className="pt-32 pb-16 px-6 lg:px-8 text-center">
        <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-3">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4">
          Contact
        </h1>
        <p className="text-white/40 text-sm tracking-wide max-w-md mx-auto">
          Whether you have a project in mind or just want to connect — I&apos;d
          love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xs tracking-[0.4em] uppercase text-amber-400 mb-6">
                Let&apos;s Talk
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Available for portrait sessions, commercial shoots, and creative
                collaborations. Feel free to send a message using the form.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@jerminodcheo.com",
                },
                {
                  icon: (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  label: "Location",
                  value: "California, USA",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-amber-400 mt-0.5">{icon}</span>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-white/30 mb-1">
                      {label}
                    </p>
                    <p className="text-sm text-white/60">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-xs tracking-[0.4em] uppercase text-white/30 mb-4">
                Follow Along
              </h3>
              <div className="flex gap-4">
                {[
                  { label: "Instagram", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "GitHub", href: "#" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-xs tracking-widest uppercase text-white/40 hover:text-amber-400 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
