import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient font-display text-xs font-bold text-white">
            FV
          </span>
          <p className="text-sm text-zinc-500">
            © 2026 {profile.name}. Built with React, Vite & Tailwind.
          </p>
        </div>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
        >
          Back to top
          <ArrowUp
            size={15}
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
}
