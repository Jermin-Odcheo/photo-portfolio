"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate a network delay — replace with your actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-light tracking-wider mb-2">
          Message Sent!
        </h3>
        <p className="text-white/50 text-sm">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-8 text-xs tracking-widest uppercase text-amber-400 hover:text-amber-300 transition-colors"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-widest uppercase text-white/40 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-widest uppercase text-white/40 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs tracking-widest uppercase text-white/40 mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="What&apos;s this about?"
          className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-widest uppercase text-white/40 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hello..."
          className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-amber-400 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-10 py-4 bg-amber-400 text-black text-xs tracking-widest uppercase font-medium hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
