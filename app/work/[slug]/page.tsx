import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectBySlug } from "@/lib/content";
import {
  Eyebrow,
  ButtonLink,
  FigureRow,
  PlaceholderNote,
} from "@/components/site/ui";
import { Glyph } from "@/components/site/glyphs";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.client}`,
    description: project.summary,
  };
}

export default async function CasePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Opening */}
      <header className="relative overflow-hidden border-b border-line bg-paper-alt pb-panel pt-[9.5rem]">
        <Glyph
          slug={project.glyph}
          className="pointer-events-none absolute -right-10 top-28 hidden h-72 w-auto opacity-[0.13] lg:block"
        />
        <div className="relative shell">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/work"
              className="link-draw type-title text-[0.875rem] text-ink-soft hover:text-brand"
            >
              &larr; All work
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            {project.live && (
              <span className="type-eyebrow inline-flex items-center gap-1.5 text-[0.625rem] text-signal">
                <span
                  aria-hidden
                  className="inline-block size-1.5 rounded-full bg-signal"
                />
                Live system of record
              </span>
            )}
            <Eyebrow className="text-ink-faint">{project.sector}</Eyebrow>
          </div>

          <h1 className="type-display mt-6 max-w-[20ch] text-[clamp(2.25rem,5.5vw,4rem)] text-ink">
            {project.headline}
          </h1>
          <p className="type-title mt-7 text-[1.125rem] text-brand">
            {project.client}
            <span className="text-ink-faint"> &middot; {project.name}</span>
          </p>
          <p className="type-lead mt-8 text-[clamp(1.0625rem,1.6vw,1.25rem)] text-ink-soft">
            {project.intro}
          </p>

          <div className="mt-panel flex flex-wrap gap-2.5">
            {project.capabilities.map((cap) => (
              <span
                key={cap}
                className="type-body rounded-sm border border-line bg-paper px-4 py-2 text-[0.8125rem] text-ink-soft"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </header>

      {project.figures.length > 0 && (
        <section className="shell pt-panel">
          <FigureRow figures={project.figures} />
        </section>
      )}

      {project.did && (
        <section className="shell pt-section">
          <div className="grid gap-panel lg:grid-cols-[18rem_minmax(0,1fr)]">
            <h2 className="type-eyebrow pt-2 text-brand-mid">What we did</h2>
            <ul className="border-t border-line">
              {project.did.map((item) => (
                <li
                  key={item}
                  className="type-headline border-b border-line py-6 text-[clamp(1.125rem,2vw,1.5rem)] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {project.detail ? (
        <>
          {/* Challenge */}
          <section className="shell py-section">
            <div className="grid gap-panel lg:grid-cols-[18rem_minmax(0,1fr)]">
              <h2 className="type-eyebrow pt-2 text-brand-mid">The problem</h2>
              <div className="space-y-6">
                {project.detail.challenge.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="type-body text-[clamp(1rem,1.4vw,1.125rem)] text-ink"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Approach */}
          <section className="border-y border-line bg-paper-alt py-section">
            <div className="shell">
              <div className="grid gap-panel lg:grid-cols-[18rem_minmax(0,1fr)]">
                <h2 className="type-eyebrow pt-2 text-brand-mid">
                  How we built it
                </h2>
                <div className="border-t border-line">
                  {project.detail.approach.map((item) => (
                    <div key={item.title} className="border-b border-line py-8">
                      <h3 className="type-headline text-[1.375rem] text-ink">
                        {item.title}
                      </h3>
                      <p className="type-body mt-3 text-[1rem] text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Chains */}
          {project.detail.chains && (
            <section className="on-dark bg-brand-deep py-section text-white">
              <div className="shell">
                <h2 className="type-eyebrow text-white/55">
                  The system at work
                </h2>

                {project.detail.chains.map((chain) => (
                  <div key={chain.title} className="mt-panel first:mt-12">
                    <h3 className="type-headline text-[clamp(1.5rem,2.4vw,1.875rem)]">
                      {chain.title}
                    </h3>
                    <ol className="mt-10 grid gap-y-8 lg:grid-flow-col lg:auto-cols-fr lg:gap-x-8">
                      {chain.stations.map((station, i) => (
                        <li
                          key={station.label}
                          className="relative border-t border-white/25 pt-6"
                        >
                          <span className="type-figure text-[0.75rem] text-white/45">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="type-title mt-3 text-[1rem] text-white">
                            {station.label}
                          </h4>
                          <p className="type-body mt-2 text-[0.875rem] text-white/65">
                            {station.body}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}

                <div className="mt-panel">
                  <PlaceholderNote>
                    Product screenshots of the live system are pending from the
                    client and will replace this section&rsquo;s diagrams.
                  </PlaceholderNote>
                </div>
              </div>
            </section>
          )}

          {/* Modules */}
          {project.detail.modules && (
            <section className="shell py-section">
              <div className="grid gap-panel lg:grid-cols-[18rem_minmax(0,1fr)]">
                <h2 className="type-eyebrow pt-2 text-brand-mid">
                  What the system owns
                </h2>
                <dl className="grid gap-px border-t border-line bg-line sm:grid-cols-2">
                  {project.detail.modules.map((mod) => (
                    <div key={mod.name} className="bg-paper p-7">
                      <dt className="type-title text-[1.0625rem] text-ink">
                        {mod.name}
                      </dt>
                      <dd className="type-body mt-2.5 text-[0.9375rem] text-ink-soft">
                        {mod.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          )}

          {project.detail.stack && (
            <section className="shell pb-section">
              <div className="grid gap-panel border-t border-line pt-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
                <h2 className="type-eyebrow text-brand-mid">Built with</h2>
                <ul className="flex flex-wrap gap-x-8 gap-y-3">
                  {project.detail.stack.map((tech) => (
                    <li
                      key={tech}
                      className="type-body text-[0.9375rem] text-ink-soft"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="shell py-section">
          <PlaceholderNote>
            A full case study for this project is in preparation.
          </PlaceholderNote>
        </section>
      )}

      {/* Next + CTA */}
      <section className="border-t border-line bg-paper-alt py-panel">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>Next</Eyebrow>
            <p className="type-headline mt-4 text-[clamp(1.5rem,2.6vw,2rem)] text-ink">
              {next.name}
            </p>
            <p className="type-body mt-2 text-[0.9375rem] text-ink-soft">
              {next.client}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={`/work/${next.slug}`} variant="outline">
              Read next case
            </ButtonLink>
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </div>
        </div>
      </section>
    </article>
  );
}
