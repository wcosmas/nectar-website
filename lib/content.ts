/**
 * Single source of truth for site content.
 *
 * TRUTH RULE: every figure and client name here is verified by the client.
 * Nothing in this file may be invented — no testimonials, pricing, awards,
 * certifications, press, or outcome metrics beyond the counts confirmed in
 * PRODUCT.md. Where a fact is not known, the field is simply absent.
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
    capabilities: ["Enterprise systems", "Systems integration", "Web applications"],
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
  {
    slug: "makerere-ehrms",
    name: "e-HRMS",
    headline:
      "Carrying ten thousand staff through a single HR lifecycle",
    client: "Makerere University",
    sector: "Higher education · Uganda",
    summary:
      "The full human-resource lifecycle for a university carrying more than ten thousand staff.",
    intro:
      "Makerere University's human resource operation spans recruitment, payroll, records, and exit for a workforce of more than ten thousand. e-HRMS carries that lifecycle end to end, with AI-assisted reporting layered on top of the record.",
    figures: [
      { value: "10,000+", label: "Staff on the system" },
      { value: "Full", label: "HR lifecycle covered" },
    ],
    did: [
      "Joined recruitment, payroll, records and exit onto one staff record",
      "Built AI-assisted reporting over the underlying data",
      "Scaled the system to a workforce of more than ten thousand",
    ],
    glyph: "enterprise-systems",
    capabilities: ["Enterprise systems", "AI & machine learning", "Web applications"],
    live: true,
    detail: {
      challenge: [
        "A workforce of this size generates more record-keeping than any manual process can carry consistently.",
        "Recruitment, payroll, records and exit were not joined, so the same fact was maintained in more than one place.",
      ],
      approach: [
        {
          title: "One record, many stages",
          body: "Recruitment through payroll, records, exit and reporting all read and write the same staff record, so a change made once is a change made everywhere.",
        },
        {
          title: "Reporting that answers questions",
          body: "AI-assisted report generation turns the underlying record into the summaries the university's administration actually asks for.",
        },
      ],
    },
  },
  {
    slug: "academic-records-management",
    name: "Academic Records Management System",
    headline:
      "Answering a verification request from the system, not the shelf",
    client: "Makerere University",
    sector: "Higher education · Uganda",
    summary:
      "Academic records digitised end to end, with document verification and certification support.",
    intro:
      "A university that issues academic documents by the tens of thousands needs to be able to verify any one of them on request. This system digitises the record and makes verification and certification a routine operation rather than an archival search.",
    figures: [
      { value: "48,839", label: "Student files" },
      { value: "49,038", label: "Total files" },
      { value: "1,942", label: "Users" },
    ],
    did: [
      "Digitised 48,839 student files with the structure needed to search them",
      "Built document verification and certification into routine operation",
      "Opened the record to 1,942 users across the university",
    ],
    glyph: "web-applications",
    capabilities: ["Enterprise systems", "Digitisation", "Web applications"],
    live: true,
    detail: {
      challenge: [
        "Verifying a single academic document meant searching a physical archive.",
        "Certification requests could not be served at the volume the university receives them.",
      ],
      approach: [
        {
          title: "Digitise the record, not just the document",
          body: "Files are captured with the structure needed to find and verify them later, rather than as flat scans.",
        },
        {
          title: "Verification as a routine operation",
          body: "Document verification and certification run against the digitised record, so a request is answered from the system rather than from the shelf.",
        },
      ],
    },
  },
  {
    slug: "graduate-research-information-management",
    name: "Graduate Research Information Management System",
    headline:
      "Seeing where every graduate research project actually stands",
    client: "Makerere University",
    sector: "Higher education · Uganda",
    summary:
      "Monitors the graduate research cycle from intent submission through supervision to thesis completion.",
    intro:
      "Graduate research runs for years and passes through many hands. This system follows a candidate from the submission of intent, through supervision, to a completed thesis — so the university can see where every project actually stands.",
    figures: [
      { value: "500+", label: "Students" },
      { value: "200+", label: "Theses completed" },
      { value: "150+", label: "Active projects" },
    ],
    did: [
      "Modelled the research cycle itself, from intent to completion",
      "Tracked supervision and milestones as real events",
      "Carried 500+ students and 200+ completed theses",
    ],
    glyph: "research-consulting",
    capabilities: ["Enterprise systems", "Research platforms", "Web applications"],
    live: true,
    detail: {
      challenge: [
        "The progress of a multi-year research project was visible only to the people directly involved in it.",
        "There was no single place to see how many projects were active, stalled, or complete.",
      ],
      approach: [
        {
          title: "Follow the cycle, not the paperwork",
          body: "The system models the research cycle itself — intent, supervision, milestones, completion — so status is derived from real events rather than reported by hand.",
        },
      ],
    },
  },
  {
    slug: "ubos-ehrms",
    name: "UBOS e-HRMS",
    headline:
      "Running human resources for Uganda's national statistics bureau",
    client: "Uganda Bureau of Statistics",
    sector: "National government · Uganda",
    summary:
      "Electronic human-resource management for Uganda's national statistics bureau.",
    intro:
      "The Uganda Bureau of Statistics is the country's national statistical authority. Its human-resource operation runs on a system we built and support.",
    figures: [{ value: "1,000+", label: "Users" }],
    did: [
      "Delivered electronic HR management for the bureau",
      "Scaled to more than a thousand users",
    ],
    glyph: "enterprise-systems",
    capabilities: ["Enterprise systems", "Web applications"],
    live: true,
  },
  {
    slug: "makadvance",
    name: "MakAdvance",
    headline:
      "One platform for the donations, and the portfolio they become",
    client: "Makerere University Endowment Fund",
    sector: "Institutional finance · Uganda",
    summary:
      "The endowment fund's digital platform, handling donations and investment portfolio management.",
    intro:
      "The Makerere University Endowment Fund raises and invests on behalf of the university. MakAdvance is the platform behind both halves of that work — the donations that come in, and the portfolio they become.",
    figures: [],
    did: [
      "Built donation handling for the university endowment",
      "Added investment portfolio management on the same platform",
    ],
    glyph: "web-applications",
    capabilities: ["Web applications", "Enterprise systems"],
    live: true,
  },
  {
    slug: "ppi-org",
    name: "PPI ORG",
    headline:
      "A research platform built on locally led political economy analysis",
    client: "Public Policy Institute",
    sector: "Policy research · Uganda",
    summary:
      "A platform for public policy research and engagement built on locally led political economy analysis.",
    intro:
      "The Public Policy Institute works through locally led political economy analysis. This platform carries that research and the multi-stakeholder engagement around it.",
    figures: [],
    did: [
      "Built the platform for the Institute's policy research and analysis",
      "Supported multi-stakeholder engagement around published work",
    ],
    glyph: "research-consulting",
    capabilities: ["Research platforms", "Web applications"],
    live: true,
  },
  {
    slug: "sickle-cell-identification",
    name: "Sickle Cell Identification",
    headline:
      "Detecting sickle cell disease earlier, from blood cell imagery",
    client: "Health research",
    sector: "Applied AI · Diagnostics",
    summary:
      "Early detection of sickle cell disease through machine analysis of blood cell imagery.",
    intro:
      "A research programme applying image analysis to the early detection of sickle cell disease from blood cell imagery.",
    figures: [],
    did: [
      "Applied machine image analysis to blood cell imagery",
      "Targeted earlier detection than routine screening allows",
    ],
    glyph: "ai-machine-learning",
    capabilities: ["AI & machine learning", "Research & consulting"],
    live: false,
  },
  {
    slug: "amr-ai",
    name: "AMR AI",
    headline:
      "Tracking antimicrobial resistance across African borders",
    client: "Pan-African health",
    sector: "Applied AI · Public health",
    summary:
      "Tracks antimicrobial resistance patterns across participating African countries.",
    intro:
      "Antimicrobial resistance does not respect borders. This programme tracks resistance patterns across participating African countries against a shared antibiotics database.",
    figures: [],
    did: [
      "Built resistance tracking across participating countries",
      "Worked against a shared antibiotics database",
    ],
    glyph: "mobile-applications",
    capabilities: ["AI & machine learning", "Research & consulting", "Mobile applications"],
    live: false,
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
export type ClientMark = { src: string; width: number; height: number };

/**
 * Each file was taken from the institution's own domain and cropped to the
 * mark alone — the lockups they ship carry their name baked in at five
 * different sizes, and Makerere's ships white for a dark header. Cropping to
 * the crest lets the wall set every name in one typeface at one size.
 *
 * Sources: mak.ac.ug · endowment.mak.ac.ug · ubos.org · ahpc.go.ug
 */
export const clientMarks: Record<string, ClientMark> = {
  "Makerere University": {
    src: "/clients/makerere-university.png",
    width: 207,
    height: 160,
  },
  "Makerere University Endowment Fund": {
    src: "/clients/makerere-university-endowment-fund.png",
    width: 196,
    height: 160,
  },
  "Uganda Bureau of Statistics": {
    src: "/clients/uganda-bureau-of-statistics.png",
    width: 160,
    height: 160,
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
    body: "We apply machine learning where it does something a rule could not: reading a blood cell image, extracting a document, generating a report from a record, tracking resistance patterns across countries. The research background of the team is the reason this work is credible rather than decorative.",
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
    value: "10,000+",
    claim: "Staff carried on one HR system at Makerere University",
    slug: "makerere-ehrms",
  },
  {
    value: "48,839",
    claim: "Student files digitised for Makerere University",
    slug: "academic-records-management",
  },
  {
    value: "49,038",
    claim: "Total files held in the academic record",
    slug: "academic-records-management",
  },
  {
    value: "1,942",
    claim: "Users on Makerere's Academic Records Management System",
    slug: "academic-records-management",
  },
  {
    value: "1,000+",
    claim: "Users on the Uganda Bureau of Statistics HR system",
    slug: "ubos-ehrms",
  },
  {
    value: "500+",
    claim: "Graduate students tracked through the research cycle at Makerere",
    slug: "graduate-research-information-management",
  },
  {
    value: "200+",
    claim: "Theses carried through to completion",
    slug: "graduate-research-information-management",
  },
  {
    value: "150+",
    claim: "Active research projects monitored at any one time",
    slug: "graduate-research-information-management",
  },
  {
    value: "4",
    claim:
      "Modules in production at the Allied Health Professionals Council",
    slug: "allied-health-professionals-council",
  },
  {
    value: "7",
    claim: "Roles in the Council's configurable approval chain",
    slug: "allied-health-professionals-council",
  },
  {
    value: "7",
    claim: "Systems of record currently in service across our clients",
  },
  {
    value: "2019",
    claim: "Building for African institutions since",
  },
];
