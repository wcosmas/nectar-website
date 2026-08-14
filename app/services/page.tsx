import type { Metadata } from "next";
import Link from "next/link";
import { services, engagement } from "@/lib/content";
import { PageHeader, Eyebrow, ButtonLink } from "@/components/site/ui";
import { Glyph } from "@/components/site/glyphs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise systems, web and mobile applications, embedded and desktop systems, applied AI, and research and consulting for African institutions.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we build, and how"
        lead="Most of our work is a system of record — the single place an institution keeps the facts it cannot afford to lose. Everything else we do supports that, or grows out of it."
      />

      <section className="shell pb-section pt-panel">
        <ul className="grid gap-px border-t border-line bg-line md:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug} className="bg-paper">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col p-9 transition-colors hover:bg-paper-alt lg:p-11"
              >
                <Glyph
                  slug={service.slug}
                  className="mb-8 h-16 w-auto self-start opacity-90 transition-opacity group-hover:opacity-100"
                />
                <h2 className="type-headline text-[clamp(1.375rem,2.2vw,1.75rem)] text-ink transition-colors group-hover:text-brand">
                  {service.name}
                </h2>
                <p className="type-body mt-4 flex-1 text-[0.9375rem] text-ink-soft">
                  {service.summary}
                </p>
                <span
                  aria-hidden
                  className="type-title mt-7 inline-flex items-center gap-2 text-[0.9375rem] text-brand"
                >
                  Read more
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-paper-alt py-section">
        <div className="shell">
          <div className="grid gap-panel lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>How we engage</Eyebrow>
              <h2 className="type-headline mt-5 text-[clamp(1.75rem,3vw,2.5rem)] text-ink">
                Three stages, and a client in every one
              </h2>
            </div>
            <ol className="border-t border-line">
              {engagement.map((stage, i) => (
                <li
                  key={stage.name}
                  className="grid gap-x-8 gap-y-3 border-b border-line py-8 md:grid-cols-[3rem_minmax(0,1fr)]"
                >
                  <span className="type-figure text-[0.9375rem] text-brand-mid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="type-title text-[1.125rem] text-ink">
                      {stage.name}
                    </h3>
                    <p className="type-body mt-2.5 text-[0.9375rem] text-ink-soft">
                      {stage.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="shell py-section">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="type-headline max-w-[18ch] text-[clamp(1.75rem,3.2vw,2.75rem)] text-ink">
            Tell us what needs to run
          </h2>
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </div>
      </section>
    </>
  );
}
