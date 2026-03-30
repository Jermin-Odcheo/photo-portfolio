import Link from "next/link";

const PORTFOLIO_URL = "https://jermin-odcheo.github.io/";

export default function PortfolioWidget() {
  return (
    <Link
      href={PORTFOLIO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-xs tracking-widest uppercase text-white/80 backdrop-blur hover:border-amber-400 hover:text-amber-300 transition-colors"
      aria-label="Visit professional portfolio"
    >
      Portfolio
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 3h7m0 0v7m0-7L10 14"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5h5M5 5v14h14v-5"
        />
      </svg>
    </Link>
  );
}

