import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/lib/content";
import { PageHeader, PlaceholderNote } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes from Nectar Technologies on building systems of record — integration boundaries, derived data, and approval chains as configuration.",
};

export default function InsightsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the build"
        lead="What we have learned running systems of record for institutions — written by the engineers who maintain them."
      >
        <div className="mt-10">
          <PlaceholderNote>
            Draft — these pieces are written from real project architecture but
            are awaiting review and sign-off before publication.
          </PlaceholderNote>
        </div>
      </PageHeader>

      <section className="shell pb-section pt-panel">
        <ul className="border-t border-line">
          {insights.map((insight) => (
            <li key={insight.slug}>
              <Link
                href={`/insights/${insight.slug}`}
                className="group grid gap-y-4 border-b border-line py-10 transition-colors hover:bg-paper-alt md:grid-cols-[minmax(0,1fr)_14rem] md:gap-x-panel"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="type-eyebrow text-brand-mid">
                      {insight.topic}
                    </span>
                    <span className="type-body text-[0.8125rem] text-ink-faint">
                      {insight.readingTime}
                    </span>
                    {insight.draft && (
                      <span className="type-eyebrow rounded-sm border border-line px-2 py-1 text-[0.5625rem] text-ink-faint">
                        Draft
                      </span>
                    )}
                  </div>
                  <h2 className="type-headline mt-4 max-w-[22ch] text-[clamp(1.5rem,2.6vw,2rem)] text-ink transition-colors group-hover:text-brand">
                    {insight.title}
                  </h2>
                  <p className="type-body mt-3 text-[0.9375rem] text-ink-soft">
                    {insight.standfirst}
                  </p>
                </div>
                <div className="md:self-center md:text-right">
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
      </section>
    </>
  );
}
