import { experience, education } from "@/content/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading kicker="Track record" title="Experience" />
        <ol className="relative ml-2 space-y-10 border-l border-white/15 pl-8">
          {experience.map((role) => (
            <Reveal key={role.dates}>
              <li className="relative">
                <span
                  className="absolute -left-[38.5px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-sky-400 bg-[#06090f]"
                  aria-hidden
                />
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                  {role.dates}
                </p>
                <h3 className="font-display mt-1.5 text-lg font-bold text-white">
                  {role.role}
                </h3>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-slate-400">
                  {role.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <h3 className="font-display mb-6 mt-14 text-xl font-bold text-white">
          Education
        </h3>
        {education.map((e) => (
          <Reveal key={e.degree}>
            <div className="card-lift flex max-w-2xl items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/nsbm.png"
                alt="NSBM Green University logo"
                className="h-12 w-auto shrink-0 opacity-60 brightness-0 invert"
              />
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                  {e.dates}
                </p>
                <h4 className="font-display mt-1.5 text-lg font-bold text-white">
                  {e.degree}
                </h4>
                <p className="mt-1 text-[15px] text-slate-400">{e.institution}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
