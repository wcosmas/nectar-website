import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, insightBySlug } from "@/lib/content";
import { ButtonLink, PlaceholderNote, Eyebrow } from "@/components/site/ui";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const insight = insightBySlug(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.standfirst,
    robots: insight.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function InsightPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const insight = insightBySlug(slug);
  if (!insight) notFound();

  const more = insights.filter((i) => i.slug !== slug);

  return (
    <article>
      <header className="border-b border-line bg-paper-alt pb-panel pt-[9.5rem]">
        <div className="shell max-w-[52rem]">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/insights"
              className="link-draw type-title text-[0.875rem] text-ink-soft hover:text-brand"
            >
              &larr; All insights
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="type-eyebrow text-brand-mid">{insight.topic}</span>
            <span className="type-body text-[0.8125rem] text-ink-faint">
              {insight.readingTime}
            </span>
          </div>

          <h1 className="type-display mt-6 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">
            {insight.title}
          </h1>
          <p className="type-lead mt-7 text-[clamp(1.0625rem,1.6vw,1.25rem)] text-ink-soft">
            {insight.standfirst}
          </p>
        </div>
      </header>

      <div className="shell max-w-[52rem] py-section">
        {insight.draft && (
          <div className="mb-12">
            <PlaceholderNote>
              Draft — written from real project architecture, awaiting review
              and sign-off before publication.
            </PlaceholderNote>
          </div>
        )}

        <div className="space-y-7">
          {insight.body.map((para) => (
            <p
              key={para.slice(0, 24)}
              className="type-body text-[clamp(1.0625rem,1.5vw,1.1875rem)] text-ink"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-panel border-t border-line pt-panel">
          <Eyebrow>More notes</Eyebrow>
          <ul className="mt-8 space-y-6">
            {more.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/insights/${other.slug}`}
                  className="group block"
                >
                  <h2 className="type-title text-[1.125rem] text-ink transition-colors group-hover:text-brand">
                    {other.title}
                  </h2>
                  <p className="type-body mt-1.5 text-[0.9375rem] text-ink-soft">
                    {other.standfirst}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="border-t border-line bg-paper-alt py-panel">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <h2 className="type-headline max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.25rem)] text-ink">
            Have a system that has to be right?
          </h2>
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </div>
      </section>
    </article>
  );
}
