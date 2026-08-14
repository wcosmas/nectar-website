import Link from "next/link";
import { Wordmark } from "./wordmark";
import { Lockup } from "./monogram";
import { company, services } from "@/lib/content";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/work", label: "Work" },
      { href: "/outcomes", label: "Outcomes" },
      { href: "/services", label: "Services" },
      { href: "/insights", label: "Insights" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="on-dark border-t border-brand-deep bg-brand-deep text-white">
      <div className="shell py-panel">
        <div className="grid gap-panel lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Lockup tone="light" size="lg">
              <Wordmark tone="light" size="lg" />
            </Lockup>
            <p className="type-body mt-7 max-w-[34ch] text-[0.9375rem] text-white/65">
              Enterprise systems, research platforms and applied AI for
              institutions across Africa. Operating from Kampala since{" "}
              {company.founded}.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="type-eyebrow text-white/45">{col.heading}</h2>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-draw type-body text-[0.9375rem] text-white/85 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Services">
            <h2 className="type-eyebrow text-white/45">Services</h2>
            <ul className="mt-6 space-y-3.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="link-draw type-body text-[0.9375rem] text-white/85 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="type-eyebrow text-white/45">Contact</h2>
            <address className="mt-6 space-y-4 not-italic">
              <p className="type-body text-[0.9375rem] text-white/85">
                {company.address}
              </p>
              <p>
                <a
                  href={company.phoneHref}
                  className="link-draw type-body text-[0.9375rem] text-white/85 hover:text-white"
                >
                  {company.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="link-draw type-body break-words text-[0.9375rem] text-white/85 hover:text-white"
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-panel flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8">
          <p className="type-body text-[0.8125rem] text-white/50">
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <p className="type-body text-[0.8125rem] text-white/50">
            Kampala, Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
