import { Check, ExternalLink } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Tag from "./ui/Tag";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Side projects"
      title="Things I build on my own"
      intro="Where I get to own the whole thing — architecture, product decisions and the last 10% that makes it real."
    >
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <article className="glass glass-hover group relative overflow-hidden p-8">
              {/* Corner glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-brand/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {p.name}
                    </h3>
                    {p.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-sm text-cyan-brand/80">
                    {p.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>

                <div className="lg:border-l lg:border-white/10 lg:pl-8">
                  <p className="eyebrow mb-4">Highlights</p>
                  <ul className="space-y-3">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-zinc-300">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-cyan-brand/15 text-cyan-brand">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        {/* More on GitHub */}
        <Reveal delay={0.1}>
          <a
            href="https://github.com/filipvnencak"
            target="_blank"
            rel="noreferrer"
            className="glass glass-hover group flex items-center justify-between p-6"
          >
            <div>
              <p className="font-display font-semibold text-white">
                More on GitHub
              </p>
              <p className="mt-0.5 text-sm text-zinc-400">
                Experiments, tooling and open-source contributions.
              </p>
            </div>
            <ExternalLink
              size={20}
              className="text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-white"
            />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
