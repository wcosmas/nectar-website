# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four audiences arrive at this site, and all four were confirmed as primary:

- **Institutional and government procurement** — universities, ministries, councils, national bureaus. They are evaluating whether Nectar can be trusted with a system that thousands of civil servants or students depend on, and whether the firm can survive a formal procurement process. They need evidence of scale, delivery history, and named accountability.
- **Donors and research funders** — grant bodies and health/development funders. They need research credibility: named PhDs, real methodology, measurable impact.
- **Private enterprise clients** — organizations buying custom software. They need capability breadth and commercial confidence.
- **Partners and talent** — collaborating labs and engineers. They need to see the calibre of the work and of the people doing it.

The common job across all four: decide, fairly quickly, whether this team is real and whether the work is serious.

## Product Purpose

Nectar Technologies (also presenting as Nectar African Research) builds software and applied AI for African institutions — enterprise systems, research platforms, and health diagnostics. Founded 2019, based in Kampala, Uganda.

The website exists to convert institutional evaluation into contact. Success is a qualified inbound enquiry from a procurement officer, funder, or partner who arrived skeptical.

## Positioning

A research group that ships production systems. The team is drawn from Makerere University academia — the project lead is a PhD senior lecturer, the engineers hold MScs — and it operates real systems of record rather than publishing about them. That combination is the claim a neighboring dev shop cannot truthfully copy: consultancies do not carry the research credentials, and university labs do not carry a system in production against a national council's biometric terminals.

Makerere appears on the site only as the team's academic pedigree. It is not a client, and must not be presented as one.

With two clients rather than nine, depth is the argument. Two systems accounted for in full beat a longer list nobody can interrogate, and the site says so plainly rather than hoping the visitor does not count.

## Operating Context

Delivery follows a three-stage engagement the firm describes to clients: requirements elicitation with the client's own staff, design and scope agreement with a full conceptual overview before build, then development with client-side testing through to deployment and a support period.

Work is institutional and long-lived — systems of record with thousands of users, formal approval chains, audit requirements, and integration with equipment already installed on client premises. Evaluation happens on desktop in offices, often as part of a documented procurement review.

## Capabilities and Constraints

Services offered: web applications, mobile applications, embedded systems, desktop systems, AI and machine learning, research and consulting.

Confirmed project portfolio. **The site shows two clients and only two.** Earlier
entries (Makerere University, Uganda Bureau of Statistics, the Makerere
University Endowment Fund, Public Policy Institute, and the Sickle Cell and AMR
research programmes) were withdrawn from publication on 15 August 2026 at the
client's instruction. Do not reintroduce them without a fresh instruction.

| Project | Client | Substance |
|---|---|---|
| ACARIS | Buganda Royal Institute | Academic Records and Information System — versioned curricula, a four-stage results approval pipeline (lecturer → HoD → registrar → released), per-semester billing with derived financial clearance, timetables, staff records and graduation. Four role-based portals across 14 institutional roles. Laravel 12 / PHP 8.3 / MySQL. Legacy ETL off the `bribteacc` database migrated 33,311 student records, 189,619 payment transactions, 115,941 registrations, 179 staff and 75 programmes. Source of truth: `/Users/rtv-lpt-403/Desktop/Projects/ACARIS/acaris` |
| AHPC HRMS | Allied Health Professionals Council (Uganda) | Biometric attendance read from the Council's HikVision terminals, auditable leave workflow with a data-driven approval chain and balance ledger, staff records, establishment. Laravel 12 / PHP 8.3, four modules. Source of truth: `/Users/rtv-lpt-403/Desktop/Projects/Laravel Projects/uganda-allied-health-professionals` |

The client name **Allied Health Professionals Council (Uganda)** and the technical detail of that system are cleared for public use. **Buganda Royal Institute** and the ACARIS detail above are likewise cleared; its crest is not, so the client wall sets that name as type.

Team of six: Dr. Mary Nsabagwa (PhD, Project Lead & System Analyst, Senior Lecturer at Makerere University), Joshua Muhumuza (MSc CS, Lead Tech), Cosmas Wamozo (MSc CS, Lead Front End & AI Engineer), Conrad Suuna (MSc CS, Lead QA Engineer), David Gaamua (MSc IT, Infrastructure Engineer), Ben Wycliff Mugalu (MSc CS, Lead Backend Engineer).

Contact: P.O. Box 148745, Kampala, Uganda · +256 704 203849 · nectarug.technologies@gmail.com · www.nectartechnologies.com

Stack constraint: Next.js App Router, React 19, Tailwind v4, shadcn/ui components available.

## Brand Commitments

The company name, the 2019 founding date, the vision and mission statements, and the contact details are fixed.

An existing logotype exists in the company letterhead (`Nectar_Technologies_Letterhead.docx`) — a high-contrast serif "NECTAR" over a script "Technologies" in deep teal. **The user explicitly declined to make it binding**, asking instead that the site's look be thought through from scratch. It is available as evidence of the firm's self-image, not as a constraint.

Vision: to catalyse a new era in African connectivity and technology, driving positive change, economic growth, awareness, and global competitiveness.

Mission: to empower individuals and communities across Africa through innovative and accessible technology solutions, fostering connectivity, knowledge, and sustainable development.

## Evidence on Hand

- **Real:** the project list, client names, and the user/file/staff counts above are verified by the user and may be stated as fact.
- **Real:** the AHPC codebase, its module structure, and its documented behavior.
- **Real:** the ACARIS codebase and `docs/legacy-migration-analysis.md`, which is where every Buganda Royal Institute migration count on the site comes from.
- **Promised, not yet delivered:** product screenshots of the systems and team headshots. The user will supply these.
- **Absent:** testimonials, pricing, named references, press, certifications, awards, and case-study outcome metrics beyond the counts listed. **None of these may be fabricated.** Any placeholder standing in for real material must be visibly marked and listed for replacement.

## Product Principles

1. **Evidence over adjective.** This audience is procuring, not browsing. Numbers, named clients, and system specifics do the persuading; claims about excellence do not.
2. **Research credentials are the differentiator.** Credentials and named people carry more weight here than they would for a commercial agency, and should not be buried below the fold.
3. **The systems are the portfolio.** Nothing else the firm can show competes with a national HR system running against live biometric terminals.
4. **Institutional seriousness, not corporate blandness.** The visitor must believe this team can hold a government contract — which is a different feeling from a startup landing page, and also different from a dull one.
5. **African-built is the frame, not the decoration.** The work is for African institutions by African researchers; that is a position, not a motif to be illustrated with stock photography of skylines.

## Accessibility & Inclusion

No product-specific standard was established. Institutional and government audiences make WCAG AA a sensible working floor.
