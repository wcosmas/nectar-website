import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug, projects } from "@/lib/content";
import { Eyebrow, ButtonLink, ArrowLink } from "@/components/site/ui";
import { Glyph } from "@/components/site/glyphs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = projects.filter((p) => p.capabilities.includes(service.name));
  const others = services.filter((s) => s.slug !== slug);

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line bg-paper-alt pb-panel pt-[9.5rem]">
        <Glyph
          slug={service.slug}
          className="pointer-events-none absolute -right-8 top-24 hidden h-64 w-auto opacity-[0.14] lg:block"
        />
        <div className="relative shell">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/services"
              className="link-draw type-title text-[0.875rem] text-ink-soft hover:text-brand"
            >
              &larr; All services
            </Link>
          </nav>
          <Eyebrow>Service</Eyebrow>
          <h1 className="type-display mt-6 max-w-[16ch] text-[clamp(2.25rem,5.5vw,4rem)] text-ink">
            {service.name}
          </h1>
          <p className="type-lead mt-8 text-[clamp(1.0625rem,1.6vw,1.25rem)] text-ink-soft">
            {service.summary}
          </p>
        </div>
      </header>

      <section className="shell py-section">
        <div className="grid gap-panel lg:grid-cols-[minmax(0,1fr)_22rem]">
          <p className="type-body text-[clamp(1.0625rem,1.5vw,1.1875rem)] text-ink">
            {service.body}
          </p>
          <div>
            <h2 className="type-eyebrow text-brand-mid">What this includes</h2>
            <ul className="mt-6 border-t border-line">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="type-body border-b border-line py-4 text-[0.9375rem] text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-y border-line bg-paper-alt py-section">
          <div className="shell">
            <Eyebrow>Where we&rsquo;ve done this</Eyebrow>
            <ul className="mt-10 grid gap-px border-t border-line bg-line md:grid-cols-2 lg:grid-cols-3">
              {related.map((project) => (
                <li key={project.slug} className="bg-paper-alt">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex h-full flex-col p-8 transition-colors hover:bg-paper"
                  >
                    <p className="type-eyebrow text-ink-faint">
                      {project.client}
                    </p>
                    <h3 className="type-title mt-3.5 flex-1 text-[1.0625rem] text-ink transition-colors group-hover:text-brand">
                      {project.name}
                    </h3>
                    <span
                      aria-hidden
                      className="type-title mt-6 inline-flex items-center gap-2 text-[0.875rem] text-brand"
                    >
                      Read the case
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="shell py-section">
        <Eyebrow>Other services</Eyebrow>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          {others.map((other) => (
            <li key={other.slug}>
              <ArrowLink href={`/services/${other.slug}`}>
                {other.name}
              </ArrowLink>
            </li>
          ))}
        </ul>

        <div className="mt-panel flex flex-wrap items-end justify-between gap-8 border-t border-line pt-panel">
          <h2 className="type-headline max-w-[18ch] text-[clamp(1.75rem,3.2vw,2.75rem)] text-ink">
            Tell us what needs to run
          </h2>
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
        </div>
      </section>
    </article>
  );
}
