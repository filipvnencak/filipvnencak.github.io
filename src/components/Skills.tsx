import { motion } from "framer-motion";
import { Layout, Server, Cloud, Bot } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { skillGroups, languages } from "../data/content";

const icons = [Layout, Server, Cloud, Bot];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills & tools"
      intro="The stack I reach for — end to end, from the database to the pixels."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="glass glass-hover h-full p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-violet-brand/40 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Languages */}
      <Reveal delay={0.1}>
        <div className="glass mt-5 p-6 sm:p-8">
          <p className="eyebrow mb-6">Languages</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="font-display font-medium text-white">
                    {lang.name}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {lang.level}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-brand-gradient"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
