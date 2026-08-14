import type { Metadata } from "next";
import { people, company, engagement } from "@/lib/content";
import {
  PageHeader,
  Eyebrow,
  ButtonLink,
  PlaceholderNote,
} from "@/components/site/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nectar Technologies is a research group drawn from Makerere University academia, building and operating systems of record for African institutions since 2019.",
};

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A research group that ships"
        lead="Nectar Technologies was founded in Kampala in 2019. The team is drawn from Makerere University academia — one PhD and five MScs — and it operates production systems for national institutions rather than publishing about them."
      />

      <section className="shell py-section">
        <div className="grid gap-panel lg:grid-cols-2">
          <div>
            <Eyebrow>Vision</Eyebrow>
            <p className="type-body mt-5 text-[clamp(1.0625rem,1.5vw,1.1875rem)] text-ink">
              {company.vision}
            </p>
          </div>
          <div>
            <Eyebrow>Mission</Eyebrow>
            <p className="type-body mt-5 text-[clamp(1.0625rem,1.5vw,1.1875rem)] text-ink">
              {company.mission}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-alt py-section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-x-panel gap-y-6">
            <div>
              <Eyebrow>The team</Eyebrow>
              <h2 className="type-headline mt-5 text-[clamp(1.75rem,3.2vw,2.75rem)] text-ink">
                Who does the work
              </h2>
            </div>
            <p className="type-body max-w-[40ch] text-[0.9375rem] text-ink-soft">
              The same people who specify a system are the people who build and
              support it. For institutional buyers, that continuity is the point.
            </p>
          </div>

          <ul className="mt-panel grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <li key={person.name} className="bg-paper-alt p-8">
                <span
                  aria-hidden
                  className="type-display flex size-14 items-center justify-center rounded-sm bg-brand text-[1.125rem] text-white"
                >
                  {initials(person.name)}
                </span>
                <h3 className="type-title mt-6 text-[1.0625rem] text-ink">
                  {person.name}
                </h3>
                <p className="type-eyebrow mt-2.5 text-[0.625rem] text-brand">
                  {person.credential}
                </p>
                <p className="type-title mt-4 text-[0.875rem] text-ink">
                  {person.role}
                </p>
                <p className="type-body mt-1.5 text-[0.875rem] text-ink-soft">
                  {person.detail}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <PlaceholderNote>
              Team portraits pending — monograms shown in the meantime.
            </PlaceholderNote>
          </div>
        </div>
      </section>

      <section className="shell py-section">
        <div className="grid gap-panel lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div>
            <Eyebrow>How we engage</Eyebrow>
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
      </section>

      <section className="on-dark bg-brand-deep py-section text-white">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <h2 className="type-headline max-w-[20ch] text-[clamp(1.875rem,3.6vw,3rem)]">
            Bring us a system that has to be right
          </h2>
          <ButtonLink href="/contact" variant="light">
            Start a conversation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
