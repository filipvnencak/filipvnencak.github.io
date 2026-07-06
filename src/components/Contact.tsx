import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import { profile } from "../data/content";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "filipvnencak",
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Filip Vnenčák",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:py-28"
    >
      <Reveal>
        <div className="glass relative overflow-hidden p-8 sm:p-14">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-brand/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-cyan-brand/20 blur-3xl" />

          <div className="relative">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let's build something{" "}
              <span className="text-gradient">worth using.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-zinc-400">
              Open to full-stack and frontend roles, freelance work, or just a
              good conversation about the craft. Fastest way to reach me is
              email.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} className="text-violet-brand" />
              {profile.location}
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all hover:border-violet-brand/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-brand/15 text-violet-brand">
                    <c.icon size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                      {c.label}
                    </span>
                    <span className="block truncate font-medium text-white">
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
