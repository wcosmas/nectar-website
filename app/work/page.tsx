import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/content";
import { PageHeader, ArrowLink } from "@/components/site/ui";
import { Glyph } from "@/components/site/glyphs";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Two systems of record in service for Ugandan institutions — a tertiary institute carrying thirty thousand student records, and a national health regulator.",
};

export default function WorkIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Systems in service"
        lead="Two systems of record, both live, both for named institutions. We would rather show you two we can account for in full than a list we cannot. Every figure below is a real count taken from one of them."
      />

      <section className="shell pb-section pt-panel">
        <ul className="border-t border-line">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-y-5 border-b border-line py-10 transition-colors hover:bg-paper-alt md:grid-cols-[7rem_minmax(0,1.5fr)_minmax(0,1fr)_auto] md:gap-x-panel md:py-12"
              >
                <Glyph
                  slug={project.glyph}
                  className="hidden h-14 w-auto self-start opacity-75 transition-opacity group-hover:opacity-100 md:block"
                />
                <div>
                  <div className="flex items-center gap-3">
                    {project.live && (
                      <span className="type-eyebrow inline-flex items-center gap-1.5 text-[0.625rem] text-signal">
                        <span
                          aria-hidden
                          className="inline-block size-1.5 rounded-full bg-signal"
                        />
                        Live
                      </span>
                    )}
                    <span className="type-eyebrow text-ink-faint">
                      {project.sector}
                    </span>
                  </div>
                  <h2 className="type-headline mt-4 max-w-[26ch] text-[clamp(1.5rem,2.6vw,2rem)] text-ink transition-colors group-hover:text-brand">
                    {project.headline}
                  </h2>
                  <p className="type-title mt-3.5 text-[0.9375rem] text-ink-faint">
                    {project.name}
                  </p>
                  <p className="type-body mt-3 text-[0.9375rem] text-ink-soft">
                    {project.summary}
                  </p>
                </div>

                <div className="md:pt-9">
                  <p className="type-title text-[0.9375rem] text-ink">
                    {project.client}
                  </p>
                  {project.figures.length > 0 && (
                    <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                      {project.figures.map((f) => (
                        <div key={f.label}>
                          <dd className="type-figure text-[1.25rem] text-brand">
                            {f.value}
                          </dd>
                          <dt className="type-body mt-1 text-[0.75rem] text-ink-faint">
                            {f.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>

                <div className="md:self-center">
                  <span
                    aria-hidden
                    className="type-title inline-flex items-center gap-2 text-[0.9375rem] text-brand"
                  >
                    Read
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-panel">
          <ArrowLink href="/contact">Discuss a system with us</ArrowLink>
        </div>
      </section>
    </>
  );
}
