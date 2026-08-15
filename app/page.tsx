import Link from "next/link";
import { projects, services, insights, company } from "@/lib/content";
import { SystemGraphic } from "@/components/site/system-graphic";
import { Eyebrow, ButtonLink, ArrowLink } from "@/components/site/ui";
import { Glyph } from "@/components/site/glyphs";
import { ClientMark } from "@/components/site/client-mark";

// Every figure names the institution it came from. A floating stat is not proof.
const figures = [
  { value: "33,311", label: "Student records migrated at Buganda Royal Institute" },
  { value: "189,619", label: "Payment transactions carried across intact" },
  {
    value: "4",
    label: "Modules in production at the Allied Health Professionals Council",
  },
  { value: "2019", label: "Building for African institutions since" },
];

export default function HomePage() {
  const clients = Array.from(new Set(projects.map((p) => p.client)));

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line pt-[9.5rem]">
        <div className="shell">
          <div className="grid items-center gap-panel pb-section lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            <div>
              <Eyebrow>Kampala, Uganda</Eyebrow>
              <h1 className="type-display mt-7 text-[clamp(2.75rem,6.4vw,4.75rem)] text-ink">
                We build the systems{" "}
                <span className="type-accent">institutions</span> run on.
              </h1>
              <p className="type-lead mt-8 text-[clamp(1.0625rem,1.7vw,1.3125rem)] text-ink-soft">
                Enterprise platforms, research systems and applied AI —
                specified with the people who will use them, engineered to be
                audited, and supported long after launch.
              </p>
              <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
                <ButtonLink href="/contact">Start a conversation</ButtonLink>
                <ArrowLink href="/work">See our work</ArrowLink>
              </div>
            </div>

            <div className="lg:pl-8">
              <SystemGraphic className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Who we build for */}
      <section className="border-b border-line bg-paper-alt py-panel">
        <div className="shell grid gap-panel lg:grid-cols-[22rem_minmax(0,1fr)]">
          <div>
            <h2 className="type-eyebrow text-ink-faint">
              Trusted with systems of record by
            </h2>
            <p className="type-body mt-5 max-w-[34ch] text-[0.9375rem] text-ink-soft">
              Two institutions, two systems their working day depends on. We
              specified both with the people who use them, and we are still the
              people supporting them.
            </p>
          </div>
          {/* items-end so the typeset names sit on one baseline, whatever
              height each crest crops to — and whether or not one exists. */}
          <ul className="grid items-end gap-x-panel gap-y-10 sm:grid-cols-2">
            {clients.map((client) => (
              <li key={client}>
                <ClientMark name={client} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="shell py-section">
        <div className="grid gap-panel lg:grid-cols-[22rem_minmax(0,1fr)]">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="type-headline mt-5 text-[clamp(1.875rem,3.4vw,2.875rem)] text-ink">
              Six capabilities, one discipline
            </h2>
            <p className="type-body mt-6 text-[1rem] text-ink-soft">
              Most of our work is a system of record — the single place an
              institution keeps the facts it cannot afford to lose.
            </p>
            <div className="mt-9">
              <ArrowLink href="/services">All services</ArrowLink>
            </div>
          </div>

          <ul className="border-t border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-8 border-b border-line py-7 transition-colors hover:bg-paper-alt"
                >
                  <Glyph
                    slug={service.slug}
                    className="hidden h-12 w-auto shrink-0 opacity-80 transition-opacity group-hover:opacity-100 sm:block"
                  />
                  <div className="flex-1">
                    <h3 className="type-title text-[clamp(1.0625rem,1.7vw,1.25rem)] text-ink transition-colors group-hover:text-brand">
                      {service.name}
                    </h3>
                    <p className="type-body mt-2 text-[0.9375rem] text-ink-soft">
                      {service.summary}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="type-title shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Figures */}
      <section className="on-dark bg-brand py-section text-white">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-x-panel gap-y-5">
            <h2 className="type-eyebrow text-white/55">In service today</h2>
            <ArrowLink href="/outcomes" tone="light">
              All outcomes
            </ArrowLink>
          </div>
          <dl className="mt-12 grid gap-x-panel gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {figures.map((figure) => (
              <div key={figure.label} className="border-t border-white/25 pt-7">
                <dd className="type-figure text-[clamp(2.25rem,4.4vw,3.5rem)] text-white">
                  {figure.value}
                </dd>
                <dt className="type-body mt-4 text-[0.9375rem] text-white/70">
                  {figure.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Selected work */}
      <section className="shell py-section">
        <div className="flex flex-wrap items-end justify-between gap-x-panel gap-y-6">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="type-headline mt-5 text-[clamp(1.875rem,3.4vw,2.875rem)] text-ink">
              Systems currently in service
            </h2>
          </div>
          <ArrowLink href="/work">Both case studies</ArrowLink>
        </div>

        <ul className="mt-panel grid gap-px border-t border-line bg-line md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug} className="bg-paper">
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col p-8 transition-colors hover:bg-paper-alt lg:p-10"
              >
                <Glyph
                  slug={project.glyph}
                  className="mb-7 h-14 w-auto self-start opacity-85 transition-opacity group-hover:opacity-100"
                />
                <div className="flex items-center gap-3">
                  {project.live && (
                    <span className="type-eyebrow inline-flex items-center gap-1.5 text-[0.5625rem] text-signal">
                      <span
                        aria-hidden
                        className="inline-block size-1.5 rounded-full bg-signal"
                      />
                      Live
                    </span>
                  )}
                  <span className="type-eyebrow text-[0.5625rem] text-ink-faint">
                    {project.sector}
                  </span>
                </div>

                <h3 className="type-headline mt-5 text-[clamp(1.25rem,2vw,1.625rem)] text-ink transition-colors group-hover:text-brand">
                  {project.headline}
                </h3>
                <p className="type-title mt-4 text-[0.9375rem] text-brand">
                  {project.client}
                </p>
                <p className="type-body mt-3 flex-1 text-[0.9375rem] text-ink-soft">
                  {project.name}
                </p>

                {project.figures.length > 0 && (
                  <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6">
                    {project.figures.map((f) => (
                      <div key={f.label}>
                        <dd className="type-figure text-[1.375rem] text-ink">
                          {f.value}
                        </dd>
                        <dt className="type-body mt-1.5 text-[0.75rem] text-ink-faint">
                          {f.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Insights */}
      <section className="border-y border-line bg-paper-alt py-section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-x-panel gap-y-6">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <h2 className="type-headline mt-5 text-[clamp(1.875rem,3.4vw,2.875rem)] text-ink">
                Notes from the build
              </h2>
            </div>
            <ArrowLink href="/insights">All insights</ArrowLink>
          </div>

          <ul className="mt-panel grid gap-panel md:grid-cols-3">
            {insights.map((insight) => (
              <li key={insight.slug}>
                <Link href={`/insights/${insight.slug}`} className="group block">
                  <span className="type-eyebrow text-brand-mid">
                    {insight.topic}
                  </span>
                  <h3 className="type-headline mt-4 text-[clamp(1.125rem,1.9vw,1.375rem)] text-ink transition-colors group-hover:text-brand">
                    {insight.title}
                  </h3>
                  <p className="type-body mt-3 text-[0.9375rem] text-ink-soft">
                    {insight.standfirst}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close */}
      <section className="on-dark bg-brand-deep py-section text-white">
        <div className="shell grid gap-panel lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 className="type-display max-w-[16ch] text-[clamp(2rem,4.6vw,3.5rem)]">
              Tell us what <span className="type-accent">needs</span> to run.
            </h2>
            <p className="type-lead mt-7 text-[clamp(1rem,1.5vw,1.1875rem)] text-white/70">
              We will tell you honestly whether we are the right people for it —
              and what we would need to know before saying so.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/contact" variant="light">
              Start a conversation
            </ButtonLink>
            <ButtonLink href={`mailto:${company.email}`} variant="ghost">
              Email us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
