import { MapPin } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Tag from "./ui/Tag";
import { jobs } from "../data/content";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      intro="Five-plus years across startups and open-source — from ski-resort access control to a large open-source production platform."
    >
      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-brand/60 via-white/10 to-transparent md:left-[9px]" />

        <div className="space-y-8">
          {jobs.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.05}>
              <div className="relative pl-9 md:pl-12">
                {/* Node */}
                <span
                  className={`absolute left-0 top-2 grid h-[15px] w-[15px] place-items-center rounded-full md:h-[19px] md:w-[19px] ${
                    job.current
                      ? "bg-brand-gradient shadow-glow"
                      : "border border-white/20 bg-ink-850"
                  }`}
                >
                  {job.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </span>

                <div className="glass glass-hover p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-zinc-300">
                        <span className="text-violet-brand">{job.company}</span>
                        {job.detail && (
                          <span className="text-zinc-500"> · {job.detail}</span>
                        )}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                        {job.current && (
                          <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                            Now
                          </span>
                        )}
                        {job.period}
                      </p>
                      <p className="mt-1 flex items-center justify-end gap-1 text-xs text-zinc-500">
                        <MapPin size={12} /> {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-brand/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {job.stack && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
