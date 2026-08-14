import type { Metadata } from "next";
import { company, services } from "@/lib/content";
import { PageHeader, Eyebrow } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Nectar Technologies about a system of record, applied AI research, or a digital transformation programme. Kampala, Uganda.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what needs to run"
        lead="Whether it is a system of record, applied AI research, or a programme that has to survive a procurement process — start with a conversation. We will tell you honestly whether we are the right people for it."
      />

      <section className="shell py-section">
        <div className="grid gap-panel lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <Eyebrow>Reach us directly</Eyebrow>
            <dl className="mt-8 border-t border-line">
              <div className="border-b border-line py-7">
                <dt className="type-title text-[0.875rem] text-ink-faint">
                  Email
                </dt>
                <dd className="mt-2.5">
                  <a
                    href={`mailto:${company.email}`}
                    className="type-headline link-draw break-words text-[clamp(1.25rem,2.4vw,1.875rem)] text-brand"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-7">
                <dt className="type-title text-[0.875rem] text-ink-faint">
                  Telephone
                </dt>
                <dd className="mt-2.5">
                  <a
                    href={company.phoneHref}
                    className="type-headline link-draw text-[clamp(1.25rem,2.4vw,1.875rem)] text-brand"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-7">
                <dt className="type-title text-[0.875rem] text-ink-faint">
                  Office
                </dt>
                <dd className="type-body mt-2.5 text-[1.0625rem] text-ink">
                  {company.address}
                </dd>
              </div>
            </dl>

            <p className="type-body mt-10 text-[0.9375rem] text-ink-soft">
              For procurement enquiries, please include the institution, the
              scope as you currently understand it, and any deadline you are
              working to. We will come back with questions before we come back
              with a proposal.
            </p>
          </div>

          <aside className="h-fit rounded-sm border border-line bg-paper-alt p-8">
            <h2 className="type-eyebrow text-brand-mid">
              What we can help with
            </h2>
            <ul className="mt-6 space-y-3.5">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="type-body text-[0.9375rem] text-ink-soft"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
