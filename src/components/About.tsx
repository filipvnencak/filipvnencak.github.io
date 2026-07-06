import { Code2, Sparkles, Boxes } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { profile } from "../data/content";

const traits = [
  {
    icon: Code2,
    title: "Clean code",
    text: "Readable, typed, maintainable — code the next person (or me in 6 months) can trust.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful UX",
    text: "The details that make an interface feel effortless: focus, feedback, empty states.",
  },
  {
    icon: Boxes,
    title: "Full-stack glue",
    text: "Comfortable across the stack — backend APIs, frontend UI, and the wiring in between.",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-zinc-300">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4">
          {traits.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1}>
              <div className="glass glass-hover flex gap-4 p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-brand/15 text-violet-brand">
                  <t.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {t.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
