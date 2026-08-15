/**
 * Single source of truth for site content.
 *
 * TRUTH RULE: every figure and client name here is verified by the client.
 * Nothing in this file may be invented — no testimonials, pricing, awards,
 * certifications, press, or outcome metrics beyond the counts confirmed in
 * PRODUCT.md. Where a fact is not known, the field is simply absent.
 *
 * TWO CLIENTS, DELIBERATELY. Buganda Royal Institute and the Allied Health
 * Professionals Council are the whole portfolio this site publishes. Earlier
 * entries were withdrawn on 15 August 2026 at the client's instruction; see
 * PRODUCT.md before adding anything back. Makerere University appears only as
 * the team's academic pedigree on the About page, never as a client.
 *
 * Where the counts come from:
 *   Buganda Royal Institute — acaris/docs/legacy-migration-analysis.md
 *                             (the "Already Migrated" table), the roles seeder,
 *                             and the portal table in its README.
 *   Allied Health Professionals Council — the AHPC HRMS repository and its PRD.
 */

export type Figure = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  /** Outcome-shaped title. What changed for the client, not what we shipped. */
  headline: string;
  client: string;
  sector: string;
  /** One line for cards and list rows. */
  summary: string;
  /** The opening paragraph on the case page. */
  intro: string;
  figures: Figure[];
  /** Scannable "what we did" list, shown high on the case page. */
  did?: string[];
  capabilities: string[];
  /**
   * Which capability glyph represents this project. Set explicitly rather than
   * derived, so the mark is the most apt one and adjacent rows never repeat.
   */
  glyph:
    | "enterprise-systems"
    | "web-applications"
    | "ai-machine-learning"
    | "mobile-applications"
    | "embedded-desktop-systems"
    | "research-consulting";
  /** True where the system is a live system of record. */
  live: boolean;
  /** Present only where we can describe the build in real detail. */
  detail?: {
    challenge: string[];
    approach: { title: string; body: string }[];
    chains?: { title: string; stations: { label: string; body: string }[] }[];
    modules?: { name: string; body: string }[];
    stack?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "buganda-royal-institute",
    name: "ACARIS",
    headline:
      "Carrying thirty-three thousand student records onto a system built for them",
    client: "Buganda Royal Institute",
    sector: "Tertiary education · Uganda",
    summary:
      "Admissions, curriculum, results, finance and graduation for a tertiary institute — with the whole legacy record migrated onto it.",
    intro:
      "Buganda Royal Institute ran its academic and financial operation out of a single wide database that had been growing for years: students, fees, debtors, payroll and the general ledger all in one place. ACARIS replaces the academic half of that with a system shaped like the work actually is — versioned curricula, a results approval pipeline, per-semester billing — and brings the history across rather than leaving it behind.",
    figures: [
      { value: "33,311", label: "Student records migrated" },
      { value: "189,619", label: "Payment transactions carried across" },
      { value: "4", label: "Role-based portals in service" },
    ],
    did: [
      "Migrated 33,311 student records and 189,619 payment transactions off the legacy database",
      "Modelled curriculum as versions, so a student is held to the syllabus they were admitted under",
      "Built a four-stage results pipeline from lecturer to registrar, with send-back as a real step",
      "Made financial clearance a derived fact rather than a declared one",
      "Delivered four role-based portals across fifteen institutional roles",
    ],
    glyph: "enterprise-systems",
    capabilities: [
      "Enterprise systems",
      "Web applications",
      "Research & consulting",
    ],
    live: true,
    detail: {
      challenge: [
        "The record and the books were the same database. Students, fees, debtors, payroll, vendors and the general ledger shared one legacy schema, so nothing in it could be changed without putting everything else in it at risk.",
        "The curriculum moved and the record did not. A student admitted under one programme version and taught under the next had nowhere in the system to say so, and no way to be told which courses still counted.",
        "Results travelled by hand. Marks moved between lecturer, head of department and registrar as documents, so nobody could see where a set of them had stopped, or why.",
        "Clearance was asserted. Whether a student had paid enough to sit an exam was a judgement someone made, not a number the system could stand behind.",
      ],
      approach: [
        {
          title: "We took the academic half, and said so",
          body: "The migration study drew an explicit line: students, programmes, registrations and student-facing finance come across; payroll, vendor accounts, the asset register and the general ledger stay where they are. Saying plainly what a system does not replace is what made the rest of it safe to replace.",
        },
        {
          title: "Curriculum is versioned, not overwritten",
          body: "A programme carries versions, and a student is bound to the version they were admitted under. Course equivalences and curriculum transitions handle the case where they move between them, with the gaps calculated rather than argued about.",
        },
        {
          title: "One pipeline, and a way back down it",
          body: "Marks go draft, submitted, head of department, registrar, released. The head of department can send a set back to the lecturer, so correction is a stage in the pipeline rather than an exception to it. Release is what opens the fourteen-day complaint window and computes the GPA.",
        },
        {
          title: "Clearance is derived from the ledger",
          body: "A student counts as financially cleared only when fees have actually been billed against their study period and the balance is zero or below. An unbilled student is not a cleared student, and no permit is printed on the assumption that they are.",
        },
        {
          title: "The migration is a command, not an event",
          body: "Eight domain migrators run in dependency order behind a single artisan command, with a dry-run mode, a verification phase, and an ID-mapping table that lets the whole thing be run again. A migration you can only perform once is a migration you cannot rehearse.",
        },
      ],
      chains: [
        {
          title: "How a set of marks becomes a released result",
          stations: [
            {
              label: "The lecturer enters",
              body: "Per-assessment marks against a configurable distribution — coursework and exam weighted as the programme defines.",
            },
            {
              label: "The lecturer submits",
              body: "The set leaves draft and becomes visible to the department. Nothing is released yet.",
            },
            {
              label: "Head of department",
              body: "Approves, or sends the set back to the lecturer with a reason. The send-back is recorded, not just performed.",
            },
            {
              label: "The registrar approves",
              body: "The final academic check before anything reaches a student.",
            },
            {
              label: "Released",
              body: "GPA and CGPA are computed credit-weighted, academic standing is evaluated, and the fourteen-day complaint window opens.",
            },
          ],
        },
        {
          title: "How the legacy record became a live one",
          stations: [
            {
              label: "One wide database",
              body: "Students, fees, debtors, payroll and the ledger, together in a schema built for a different decade.",
            },
            {
              label: "Decide what belongs",
              body: "The study named what comes across and what does not, so the scope of the migration was a management decision rather than a technical accident.",
            },
            {
              label: "Map, don't copy",
              body: "One wide student row becomes a user, a student and a profile, with real keys to programme, department and study period.",
            },
            {
              label: "Run it in phases",
              body: "Programmes, staff, students, fees, payments, reference data, registrations — each its own migrator, each re-runnable against an ID map.",
            },
            {
              label: "Verify, then commit",
              body: "A dry run and a verification phase come before anything is written for real.",
            },
          ],
        },
      ],
      modules: [
        {
          name: "Academics & Curriculum",
          body: "Programmes, departments, course units, programme versions, course mappings, prerequisites, equivalences, curriculum transitions and generated study plans.",
        },
        {
          name: "Exams & Assessment",
          body: "Per-assessment marks, configurable distributions, the four-stage approval pipeline, GPA and CGPA, grading policies, complaints and a revision history.",
        },
        {
          name: "Finance",
          body: "Per-student per-semester bills, individual payment transactions, balance and threshold tracking, and the derived clearance status behind every exam permit.",
        },
        {
          name: "Student Lifecycle",
          body: "Admission and automatic curriculum binding, semester registration, withdrawal, suspension and reinstatement, academic standing, and graduation lists.",
        },
        {
          name: "Timetable",
          body: "Department timetables with venue and lecturer assignment, conflict detection, the create–approve–publish workflow, and exam manifests.",
        },
        {
          name: "Staff Records",
          body: "Staff profiles, contracts, qualifications, publications, position and course assignments, and departmental reporting.",
        },
      ],
      stack: [
        "Laravel 12",
        "PHP 8.3",
        "MySQL",
        "Role-based portals",
        "Legacy ETL migrators",
      ],
    },
  },
  {
    slug: "allied-health-professionals-council",
    name: "AHPC Human Resource Management System",
    headline:
      "Making a regulator's attendance auditable, without replacing its terminals",
    client: "Allied Health Professionals Council",
    sector: "Health regulation · Uganda",
    summary:
      "Biometric attendance, an auditable leave workflow and the staff establishment for Uganda's allied health regulator.",
    intro:
      "The Allied Health Professionals Council regulates the training and practice of allied health professionals across Uganda. Its own workforce — registration officers, inspectors, laboratory and public-health officers, corporate services — was being managed across a biometric terminal export, a spreadsheet and a paper leave form. We replaced that with a single system of record, built around the hardware the Council already owned.",
    figures: [
      { value: "4", label: "Modules in production" },
      { value: "7", label: "Roles in the approval chain" },
      { value: "100%", label: "Read-only at the terminal boundary" },
    ],
    did: [
      "Read the Council's existing biometric terminals rather than replacing them",
      "Rebuilt leave as a configurable, auditable approval chain",
      "Replaced hand-calculated balances with a ledger",
      "Digitised staff records, the establishment and the holiday calendar",
      "Delivered four modules against a live regulator's workload",
    ],
    glyph: "embedded-desktop-systems",
    capabilities: [
      "Enterprise systems",
      "Embedded & desktop systems",
      "Web applications",
    ],
    live: true,
    detail: {
      challenge: [
        "Attendance was unauditable. The terminals held the truth, but nobody could answer “was she here on the 12th?” without asking ICT to open the device database.",
        "Leave stalled invisibly. A form sat on a desk, with no way to see where a request was, who was holding it, or how long they had held it.",
        "Balances were contested. Days remaining were recalculated by hand each time, and weekends and public holidays were counted inconsistently.",
      ],
      approach: [
        {
          title: "We changed nothing about the hardware",
          body: "The Council had already invested in HikVision terminals. We read them rather than replacing them, and the integration is strictly read-only — the system never writes to the device database it depends on.",
        },
        {
          title: "The network is assumed to fail",
          body: "Punches are mirrored into the application's own store, so every report still renders when the link to the terminals is down. A failed read produces an empty result and an honest banner, never an error thrown into the interface.",
        },
        {
          title: "Derived once, on write",
          body: "Each person-day is aggregated a single time as it is written — first in, last out, hours, minutes late, and a status. Because the derivation happens once, no two reports can disagree with each other.",
        },
        {
          title: "The approval chain is data, not code",
          body: "Leave types, tiers and entitlements are configured rather than hard-coded, so the Council can change its own policy without a release.",
        },
      ],
      chains: [
        {
          title: "How a punch becomes an auditable record",
          stations: [
            {
              label: "The terminal",
              body: "Staff punch in on the Council's own readers, exactly as before.",
            },
            {
              label: "Read-only from the source",
              body: "The remote attendance log is read with retry and backoff, and never written to.",
            },
            {
              label: "Cached locally",
              body: "Punches are mirrored into the application's own store so reports survive a link failure.",
            },
            {
              label: "Aggregated once, on write",
              body: "One row per person per day: first in, last out, hours, minutes late, and a status.",
            },
            {
              label: "The monthly grid",
              body: "The screen the Council actually opens — by month, week and year, per unit and per person.",
            },
          ],
        },
        {
          title: "How a leave request finds its approver",
          stations: [
            {
              label: "Staff apply",
              body: "Against a balance the ledger computed, not one recalculated by hand.",
            },
            {
              label: "Supervisor recommends",
              body: "The first tier sees only their own team's requests.",
            },
            {
              label: "Head of department",
              body: "The second approval tier, with the department's attendance beside it.",
            },
            {
              label: "HR reviews",
              body: "The daily inbox: approvals, correction requests, and what is overdue.",
            },
            {
              label: "Registrar signs",
              body: "Final approval on long leave, then the ledger is written and audited.",
            },
          ],
        },
      ],
      modules: [
        {
          name: "Attendance",
          body: "Remote log reader, punch cache, daily aggregation, the monthly grid, analytics, corrections, follow-ups, devices and ID mapping.",
        },
        {
          name: "Leave Management",
          body: "Configurable leave types, a data-driven approval chain, an auditable balance ledger, the leave calendar and official travel.",
        },
        {
          name: "Staff Records",
          body: "The staff master, personal files, supervision, acting appointments, transfers, file tracking, ID cards and bulk import.",
        },
        {
          name: "Establishment",
          body: "Units, posts, approved establishment slots, and the public-holiday calendar the leave ledger counts against.",
        },
      ],
      stack: ["Laravel 12", "PHP 8.3", "Modular monolith", "Read-only device integration"],
    },
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/**
 * Institution marks for the "trusted with systems of record by" wall.
 *
 * TRUTH RULE applies, and hardest here: a crest is an institution's legal
 * identity. An entry appears only once that institution's own file is in
 * /public and its use on this site has been cleared with them. Until then the
 * key is simply absent and the wall falls back to the name set as type — we do
 * not draw an approximation of someone else's coat of arms.
 *
 * Width and height are the file's intrinsic pixels, so the row reserves its
 * space before the image decodes.
 */
export type ClientMark = {
  src: string;
  width: number;
  height: number;
  /**
   * Optical correction on the row's common height, set by eye. Omit for a
   * roughly square mark; raise it for a portrait one, which otherwise draws
   * less ink at the same height and reads as the smaller crest.
   */
  scale?: number;
};

/**
 * Each file was taken from the institution's own domain and cropped to the
 * mark alone — the lockups they ship carry their name baked in at several
 * sizes. Cropping to the crest lets the wall set every name in one typeface at
 * one size.
 *
 * Both crests carry their institution's name as engraved lettering inside the
 * mark itself, so neither needed cropping — they arrive as the mark alone.
 * Buganda's is much taller than it is wide; sizing the row to a common height
 * is what keeps that from reading as the larger of the two.
 *
 * Sources: bribte.ac.ug · ahpc.go.ug
 */
export const clientMarks: Record<string, ClientMark> = {
  "Buganda Royal Institute": {
    src: "/clients/buganda-royal-institute.png",
    width: 221,
    height: 301,
    // A tall shield beside AHPC's roundel. At an equal height it draws about a
    // third less ink; 1.12 is where the two stop arguing about which is bigger.
    scale: 1.12,
  },
  "Allied Health Professionals Council": {
    src: "/clients/allied-health-professionals-council.png",
    width: 115,
    height: 111,
  },
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  body: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "enterprise-systems",
    name: "Enterprise systems",
    summary:
      "Systems of record for institutions — the ones that have to be right, and have to still be running in ten years.",
    body: "Most of what we build is a system of record: the single place an institution keeps the facts it cannot afford to lose. Human resources, academic records, research cycles, establishment and payroll. These systems carry formal approval chains, audit requirements, and thousands of users who did not choose the software, so they are designed around the workflow that already exists rather than around a workflow we would prefer.",
    includes: [
      "Requirements elicitation with your own staff",
      "Role-based access and data-driven approval chains",
      "Audit trails and activity logging",
      "Integration with equipment and systems already on site",
      "Bulk import and migration from spreadsheets and legacy stores",
    ],
  },
  {
    slug: "web-applications",
    name: "Web applications",
    summary:
      "Full-stack platforms, from institutional management systems to public-facing portals.",
    body: "The majority of our delivered work is on the web, because it is the only platform an institution can deploy to every desk without touching every desk. We build both the internal management systems staff use daily and the public-facing portals their stakeholders see.",
    includes: [
      "Server-rendered applications built for slow and intermittent connections",
      "Public portals and stakeholder-facing platforms",
      "Reporting and analytics interfaces",
      "Accessibility to a WCAG AA working floor",
    ],
  },
  {
    slug: "ai-machine-learning",
    name: "AI & machine learning",
    summary:
      "Applied models where they earn their place — diagnostics, document processing, translation and reporting.",
    body: "We apply machine learning where it does something a rule could not — reading an image, extracting a document, generating a report from a record. The research background of the team is the reason this work is credible rather than decorative, and it is also the reason we will tell you when a problem does not need a model.",
    includes: [
      "Image analysis and health diagnostics",
      "OCR and document processing",
      "Language translation",
      "Report generation over existing records",
    ],
  },
  {
    slug: "mobile-applications",
    name: "Mobile applications",
    summary:
      "Native and cross-platform builds for field use and data collection.",
    body: "Field work happens away from a desk and often away from a signal. Where a mobile application is the right answer, we build for the conditions the work actually happens in — offline capture, deferred sync, and interfaces usable on the hardware people already carry.",
    includes: [
      "Offline-first data collection",
      "Cross-platform and native builds",
      "Field survey and inspection tooling",
    ],
  },
  {
    slug: "embedded-desktop-systems",
    name: "Embedded & desktop systems",
    summary:
      "Hardware and software integrated for IoT and specialised computing, plus desktop applications for heavy workflows.",
    body: "Some problems are not web problems. We build embedded systems where hardware and software have to be designed together, and desktop applications where an enterprise workflow needs local processing power or direct access to equipment.",
    includes: [
      "Hardware and software integration",
      "IoT and specialised computing",
      "Desktop applications for enterprise workflows",
      "Local data processing",
    ],
  },
  {
    slug: "research-consulting",
    name: "Research & consulting",
    summary:
      "Technology research, requirements analysis, and digital transformation advisory.",
    body: "Not every engagement should start with a build. We are a research group first, and a substantial part of our work is helping an institution understand what it actually needs — mapping the processes as they really run, and saying honestly when the answer is not software.",
    includes: [
      "Requirements elicitation and specification",
      "Business process mapping",
      "Technology research and feasibility",
      "Digital transformation advisory",
    ],
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Person = {
  name: string;
  credential: string;
  role: string;
  detail: string;
};

export const people: Person[] = [
  {
    name: "Dr. Mary Nsabagwa",
    credential: "PhD",
    role: "Project Lead & System Analyst",
    detail: "Senior Lecturer, Makerere University",
  },
  {
    name: "Joshua Muhumuza",
    credential: "MSc Computer Science",
    role: "Lead Tech",
    detail: "Applied AI through to systems development",
  },
  {
    name: "Ben Wycliff Mugalu",
    credential: "MSc Computer Science",
    role: "Lead Backend Engineer",
    detail: "Backend systems and architecture",
  },
  {
    name: "Cosmas Wamozo",
    credential: "MSc Computer Science",
    role: "Lead Front End & AI Engineer",
    detail: "Intuitiveness and user experience",
  },
  {
    name: "Conrad Suuna",
    credential: "MSc Computer Science",
    role: "Lead QA Engineer",
    detail: "Systems quality assurance",
  },
  {
    name: "David Gaamua",
    credential: "MSc Information Technology",
    role: "Infrastructure Engineer",
    detail: "Infrastructure and operations",
  },
];

export const engagement = [
  {
    name: "Meeting our clients",
    body: "Our people sit in on requirements elicitation, draft the business processes as they actually run, and remodel them into a specification that states what the client needs rather than what we would like to build.",
  },
  {
    name: "Designing the product",
    body: "Designs go back to the client until the flows, the scope and the infrastructure are agreed. Nobody starts building before the client holds a complete conceptual overview of the product.",
  },
  {
    name: "Development and implementation",
    body: "The client tests alongside us until they are satisfied. Then it is deployed, and supported for the agreed period.",
  },
];

export const company = {
  name: "Nectar Technologies",
  founded: "2019",
  address: "P.O. Box 148745, Kampala, Uganda",
  phone: "+256 704 203849",
  phoneHref: "tel:+256704203849",
  email: "nectarug.technologies@gmail.com",
  web: "https://www.nectartechnologies.com",
  vision:
    "To catalyse a new era in African connectivity and technology, driving positive change, economic growth, awareness, and global competitiveness.",
  mission:
    "To empower individuals and communities across Africa through innovative and accessible technology solutions, fostering connectivity, knowledge, and sustainable development.",
};

/**
 * DRAFT CONTENT — written by Nectar's engineering team from real project
 * architecture, but NOT yet reviewed or approved for publication by the
 * client. These are on the replacement list. Do not treat as published.
 */
export type Insight = {
  slug: string;
  title: string;
  standfirst: string;
  topic: string;
  readingTime: string;
  draft: true;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "read-only-at-the-boundary",
    title: "Read-only at the boundary",
    standfirst:
      "When you integrate with equipment an institution already owns, the safest thing your system can do is refuse to write.",
    topic: "Systems integration",
    readingTime: "4 min",
    draft: true,
    body: [
      "Institutions rarely buy software into an empty room. There is already a biometric terminal on the wall, a payroll package in finance, and a database somebody's predecessor configured. The question is never whether to integrate; it is how much damage the integration can do when it goes wrong.",
      "Our working rule is that the boundary is read-only. A system we build reads the device or the legacy store and never writes back to it. This costs us some convenience — we cannot correct bad data at source, and we have to model corrections separately — but it buys something worth more: the integration cannot corrupt the thing it depends on.",
      "The second rule is that a failed read is a result, not an exception. If the link to the terminals is down, the correct behaviour is an empty set and an honest banner explaining why, not an error thrown into the interface of somebody trying to approve leave. Retry and backoff belong in the reader; they do not belong in the user's afternoon.",
      "The third is a local cache. Once you have read something, keep it. Reports should render when the network does not, because the network in a Kampala office building is not the network in a datacentre.",
    ],
  },
  {
    slug: "derive-once-on-write",
    title: "Derive once, on write",
    standfirst:
      "If two reports can disagree about the same day, the argument will be about your software rather than about the work.",
    topic: "Systems architecture",
    readingTime: "5 min",
    draft: true,
    body: [
      "Attendance looks like a simple problem until you try to answer a specific question: was this person here on the twelfth, and how late were they? Suddenly you need a definition of arrival, a definition of lateness, a rule for a missing punch, a rule for a public holiday, and a rule for a terminal that reports no direction.",
      "The failure mode is not getting those rules wrong. It is implementing them more than once. When the monthly grid computes lateness one way and the punctuality report computes it another, the institution stops trusting both, and every subsequent conversation is about reconciling reports rather than about attendance.",
      "So we derive once, on write. As a punch lands, the person-day is aggregated a single time — first in, last out, hours, minutes late, and a status — and every screen afterwards reads that row. No report recalculates. If the rule changes, it changes in one place and the history is rebuilt deliberately.",
      "This is not a performance optimisation, although it performs well. It is a consistency guarantee, and consistency is what an auditable record actually means.",
    ],
  },
  {
    slug: "approval-chains-are-data",
    title: "Approval chains are data, not code",
    standfirst:
      "An institution changes its leave policy more often than it changes its software vendor.",
    topic: "Enterprise systems",
    readingTime: "4 min",
    draft: true,
    body: [
      "Every institution we have worked with has an approval chain, and every one of them has changed it. A tier is added, a delegation is introduced, a category of leave gets a different signatory. If that chain is expressed in code, each of those changes is a release, a test cycle, and an invoice.",
      "We model the chain as configuration instead: leave types, tiers, entitlements and the rules that connect them are records the institution's own administrator can edit. The application walks the chain it finds rather than the chain we assumed.",
      "The discipline this requires is resisting the special case. The moment one leave type gets a hard-coded exception, the model has failed and the next change goes back to being a release.",
      "The payoff is that the Council owns its own policy. That is a better outcome for them, and — counter-intuitively for a firm that bills for changes — a better one for us, because the support relationship stops being about paperwork we could have avoided.",
    ],
  },
];

export function insightBySlug(slug: string) {
  return insights.find((i) => i.slug === slug);
}

/**
 * The outcomes wall. Every entry is a verified count attached to a named
 * client — never a floating firmographic stat. If a number cannot be tied to
 * a specific institution, it does not belong on this page.
 */
export type Outcome = {
  value: string;
  claim: string;
  slug?: string;
};

export const outcomes: Outcome[] = [
  {
    value: "33,311",
    claim: "Student records migrated onto Buganda Royal Institute's system",
    slug: "buganda-royal-institute",
  },
  {
    value: "189,619",
    claim: "Historical payment transactions carried across intact",
    slug: "buganda-royal-institute",
  },
  {
    value: "115,941",
    claim: "Semester registrations preserved from the legacy record",
    slug: "buganda-royal-institute",
  },
  {
    value: "179",
    claim: "Staff files migrated into the Institute's staff records",
    slug: "buganda-royal-institute",
  },
  {
    value: "75",
    claim: "Programmes mapped onto the versioned curriculum model",
    slug: "buganda-royal-institute",
  },
  {
    value: "15",
    claim: "Institutional roles carried by ACARIS across four portals",
    slug: "buganda-royal-institute",
  },
  {
    value: "4",
    claim: "Modules in production at the Allied Health Professionals Council",
    slug: "allied-health-professionals-council",
  },
  {
    value: "7",
    claim: "Roles in the Council's configurable approval chain",
    slug: "allied-health-professionals-council",
  },
  {
    value: "100%",
    claim: "Read-only at the Council's biometric terminal boundary",
    slug: "allied-health-professionals-council",
  },
  {
    value: "2019",
    claim: "Building for African institutions since",
  },
];
