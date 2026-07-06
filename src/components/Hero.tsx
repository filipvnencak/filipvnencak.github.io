import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { profile, stats } from "../data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const heroStack = ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-28"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left — text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for interesting work
          </motion.div>

          <motion.p variants={item} className="eyebrow mb-4">
            {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Filip <span className="text-gradient">Vnenčák</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3 font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-medium text-zinc-200 transition-colors hover:border-white/25 hover:text-white"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-medium text-zinc-200 transition-colors hover:border-white/25 hover:text-white"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-violet-brand" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-200"
            >
              <Mail size={15} className="text-violet-brand" /> {profile.email}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
            {heroStack.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-gradient opacity-30 blur-2xl" />

            {/* Rotating conic border */}
            <div className="relative rounded-[1.75rem] p-[1.5px]">
              <div
                className="absolute inset-0 rounded-[1.75rem] opacity-70 animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #8b5cf6, #22d3ee, #d946ef, #8b5cf6)",
                }}
              />
              <div className="relative overflow-hidden rounded-[1.65rem] bg-ink-900">
                <img
                  src={profile.photo}
                  alt="Filip Vnenčák"
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating status card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-5 -left-5 hidden px-4 py-3 sm:block"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-cyan-brand/80">
                Currently
              </p>
              <p className="mt-0.5 text-sm font-medium text-white">
                Frontend @ Ynput / AYON
              </p>
            </motion.div>

            {/* Floating years badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-4 top-6 hidden px-4 py-3 md:block"
            >
              <p className="font-display text-2xl font-bold text-gradient">5+</p>
              <p className="text-[11px] text-zinc-400">years shipping</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-20 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
