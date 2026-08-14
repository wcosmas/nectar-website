import type { Metadata } from "next";
import Link from "next/link";
import { outcomes } from "@/lib/content";
import { PageHeader, ButtonLink } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Outcomes",
  description:
    "Verified counts from systems Nectar Technologies has delivered — every figure attached to a named institution.",
};

export default function OutcomesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outcomes"
        title="The numbers, with names attached"
        lead="Every figure below comes from a system we built and a client we can name. We do not publish counts we cannot trace to an institution."
      />

      <section className="shell pb-section pt-panel">
        <ul className="border-t border-line">
          {outcomes.map((outcome, i) => {
            const Row = outcome.slug ? Link : "div";
            return (
              <li key={`${outcome.value}-${i}`}>
                <Row
                  {...(outcome.slug
                    ? { href: `/work/${outcome.slug}` }
                    : ({} as never))}
                  className={`group grid items-baseline gap-x-panel gap-y-2 border-b border-line py-9 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto] ${
                    outcome.slug ? "transition-colors hover:bg-paper-alt" : ""
                  }`}
                >
                  <span className="type-figure text-[clamp(2.5rem,6vw,4.5rem)] text-brand">
                    {outcome.value}
                  </span>
                  <span className="type-headline text-[clamp(1.125rem,2vw,1.5rem)] text-ink">
                    {outcome.claim}
                  </span>
                  {outcome.slug && (
                    <span
                      aria-hidden
                      className="type-title inline-flex items-center gap-2 text-[0.9375rem] text-brand md:self-center"
                    >
                      Read the case
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  )}
                </Row>
              </li>
            );
          })}
        </ul>

        <div className="mt-panel flex flex-wrap items-end justify-between gap-8">
          <h2 className="type-headline max-w-[20ch] text-[clamp(1.5rem,2.8vw,2.25rem)] text-ink">
            Want numbers like these for your institution?
          </h2>
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </div>
      </section>
    </>
  );
}
