import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:py-28"
    >
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {intro}
          </p>
        )}
      </Reveal>
      <div className="mt-14">{children}</div>
    </section>
  );
}
