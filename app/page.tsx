import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    name: "Academic Records Management System",
    client: "Makerere University",
    description:
      "Digitizing academic records with document verification and certification support.",
    stats: ["1,942 Users", "48,839 Student Files", "49,038 Total Files"],
    tags: ["Web App", "Digitization"],
  },
  {
    name: "Graduate Research Information Management System",
    client: "Makerere University",
    description:
      "Monitors the entire graduate research cycle from intent submission to thesis completion.",
    stats: ["150+ Active Projects", "500+ Students", "200+ Completed Theses"],
    tags: ["Web App", "Research"],
  },
  {
    name: "e-HRMS",
    client: "Makerere University",
    description:
      "Full lifecycle human resource management from recruitment through payroll, records, exit, and AI-powered reports.",
    stats: ["10,000+ Staff", "Full HR Lifecycle", "AI Reports"],
    tags: ["Enterprise", "AI"],
  },
  {
    name: "UBOS e-HRMS",
    client: "Uganda Bureau of Statistics",
    description:
      "Electronic Human Resource management system supporting the national statistics bureau.",
    stats: ["1,000+ Users"],
    tags: ["Government", "Enterprise"],
  },
  {
    name: "PPI ORG",
    client: "Public Policy Institute",
    description:
      "A platform for public policy research, analysis and engagements using locally led political economy analysis.",
    stats: ["Policy Research", "Multi-Stakeholder"],
    tags: ["Web App", "Research"],
  },
  {
    name: "MakAdvance",
    client: "Makerere University Endowment Fund",
    description:
      "Digital platform for the university endowment fund supporting donations and investment portfolio management.",
    stats: ["Fundraising", "Investment Tracking"],
    tags: ["Web App", "Finance"],
  },
  {
    name: "Sickle Cell Identification",
    client: "Health Research",
    description:
      "AI-powered early detection of sickle cell disease through blood cell image analysis.",
    stats: ["AI Diagnosis", "Early Detection"],
    tags: ["AI", "Health"],
  },
  {
    name: "AMR AI",
    client: "Pan-African Health",
    description:
      "Tracking antimicrobial resistance patterns across participating African countries.",
    stats: ["Multi-Country", "Antibiotics Database"],
    tags: ["AI", "Health", "Mobile"],
  },
];

const team = [
  {
    name: "Dr. Mary Nsabagwa",
    credential: "PhD",
    role: "Project Lead & System Analyst",
    detail: "Senior Lecturer at Makerere University",
  },
  {
    name: "Joshua Muhumuza",
    credential: "MSc Computer Science",
    role: "Lead Tech",
    detail: "AI to systems development",
  },
  {
    name: "Cosmas Wamozo",
    credential: "MSc Computer Scientist",
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
    credential: "MSc IT",
    role: "Infrastructure Engineer",
    detail: "Infrastructure and operations",
  },
  {
    name: "Ben Wycliff Mugalu",
    credential: "MSc Computer Science",
    role: "Lead Backend Engineer",
    detail: "Backend systems and architecture",
  },
];

const services = [
  {
    title: "Web Applications",
    description:
      "Full-stack web platforms from management systems to public-facing portals.",
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile solutions for field use and data collection.",
  },
  {
    title: "Embedded Systems",
    description:
      "Hardware-software integration for IoT and specialized computing.",
  },
  {
    title: "Desktop Systems",
    description:
      "Robust desktop applications for enterprise workflows and data processing.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Language translation, image analysis, OCR, report generation, and health diagnostics.",
  },
  {
    title: "Research & Consulting",
    description:
      "Technology research, requirements analysis, and digital transformation advisory.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Meeting Our Clients",
    description:
      "We send in our experts in the requirements elicitation phase to draft business processes and remodel them into a complete requirements specification that details the client's needs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    step: "02",
    title: "Designing the Product",
    description:
      "We draft designs and work with clients to agree on the flows, scope, and infrastructural requirements. At this level, the client has a complete conceptual overview of the product.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
  },
  {
    step: "03",
    title: "Development & Implementation",
    description:
      "The client is involved in development as tests are run together until satisfaction is reached. The product is deployed and support is provided for the agreed period.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
];

function NectarLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="size-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="3" fill="currentColor" />
          <circle cx="16" cy="6" r="2" fill="currentColor" />
          <circle cx="16" cy="26" r="2" fill="currentColor" />
          <circle cx="6" cy="16" r="2" fill="currentColor" />
          <circle cx="26" cy="16" r="2" fill="currentColor" />
          <circle cx="8.9" cy="8.9" r="1.5" fill="currentColor" />
          <circle cx="23.1" cy="23.1" r="1.5" fill="currentColor" />
          <circle cx="23.1" cy="8.9" r="1.5" fill="currentColor" />
          <circle cx="8.9" cy="23.1" r="1.5" fill="currentColor" />
          <line
            x1="16"
            y1="13"
            x2="16"
            y2="8"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="16"
            y1="24"
            x2="16"
            y2="19"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="13"
            y1="16"
            x2="8"
            y2="16"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="24"
            y1="16"
            x2="19"
            y2="16"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="13.9"
            y1="13.9"
            x2="10.3"
            y2="10.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="21.7"
            y1="21.7"
            x2="18.1"
            y2="18.1"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="18.1"
            y1="13.9"
            x2="21.7"
            y2="10.3"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="10.3"
            y1="21.7"
            x2="13.9"
            y2="18.1"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-[0.25em] uppercase">
            Nectar
          </span>
          <span className="text-[9px] tracking-[0.15em] text-muted-foreground">
            African Research
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <NectarLogo />
          <div className="hidden items-center gap-8 text-xs text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#process"
              className="transition-colors hover:text-foreground"
            >
              Process
            </a>
            <a href="#team" className="transition-colors hover:text-foreground">
              Team
            </a>
            <a href="#contact">
              <Button size="sm">Get in Touch</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-14">
        <Image
          src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1920&q=80"
          alt="African city skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs tracking-[0.35em] uppercase text-white/80">
            Developing Technologies for the African Community
          </p>
          <h1 className="mb-6 text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            A team of brilliant minds together changing the face of Africa
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/70">
            We are a group of researchers who have come together to support the
            digitization of Africa through change-leading projects in software
            development, artificial intelligence, and enterprise systems.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#projects">
              <Button size="lg">View Our Work</Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="h-8 w-px bg-white/30" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            Since 2019
          </div>
          <h2 className="mb-12 text-2xl font-light tracking-tight sm:text-3xl">
            Our Story
          </h2>
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Vision
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-foreground/80">
                To catalyse a new era in African connectivity and technology,
                driving positive change, economic growth, awareness, and global
                competitiveness.
              </p>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Mission
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                To empower individuals and communities across Africa through
                innovative and accessible technology solutions, fostering
                connectivity, knowledge, and sustainable development.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Objectives
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="mb-1 text-xs font-medium text-foreground">
                    Innovation & Versatility
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Continuous innovation in developing technology solutions
                    across web, mobile, embedded, and AI platforms.
                  </p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="mb-1 text-xs font-medium text-foreground">
                    Empowering Communities
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Making technology accessible to individuals and
                    organizations across the African continent.
                  </p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="mb-1 text-xs font-medium text-foreground">
                    Sustainable Development
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Driving social impact through research-backed,
                    context-appropriate technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <Separator />
      </div>

      {/* Services */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            What We Do
          </div>
          <h2 className="mb-12 text-2xl font-light tracking-tight sm:text-3xl">
            Our Capabilities
          </h2>
          <div className="grid gap-px bg-border/30 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background p-6 transition-colors hover:bg-card"
              >
                <h3 className="mb-2 text-sm font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <Separator />
      </div>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            Our Work
          </div>
          <h2 className="mb-4 text-2xl font-light tracking-tight sm:text-3xl">
            Lead Projects
          </h2>
          <p className="mb-12 max-w-lg text-sm leading-relaxed text-muted-foreground">
            From enterprise systems managing thousands of users to AI-powered
            health diagnostics, our projects drive real impact across Africa.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name} className="transition-colors hover:bg-card/80">
                <CardHeader>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-sm">{project.name}</CardTitle>
                  <CardDescription className="text-xs text-primary/70">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="text-[10px] font-medium text-foreground/70"
                      >
                        {stat}
                        {project.stats.indexOf(stat) <
                          project.stats.length - 1 && (
                          <span className="ml-2 text-border">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <Separator />
      </div>

      {/* Process */}
      <section id="process" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            How We Work
          </div>
          <h2 className="mb-12 text-2xl font-light tracking-tight sm:text-3xl">
            Our Process
          </h2>
          <div className="grid gap-0 md:grid-cols-3">
            {processSteps.map((item, i) => (
              <div
                key={item.step}
                className="relative border-l border-border/50 py-2 pl-8 md:border-l-0 md:border-t md:pl-0 md:pt-8 md:pr-8"
              >
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-light text-primary/40">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-3 text-sm font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden text-border md:block">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <Separator />
      </div>

      {/* Team */}
      <section id="team" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
            Our People
          </div>
          <h2 className="mb-12 text-2xl font-light tracking-tight sm:text-3xl">
            Meet the Team
          </h2>
          <div className="grid gap-px bg-border/30 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="bg-background p-6">
                <div className="mb-3 flex size-10 items-center justify-center bg-card text-sm font-medium text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h3 className="text-sm font-medium text-foreground">
                  {member.name}
                </h3>
                <p className="text-[10px] text-primary/70">{member.credential}</p>
                <p className="mt-2 text-xs font-medium text-foreground/80">
                  {member.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {member.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <Separator />
      </div>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 text-xs tracking-[0.3em] uppercase text-primary">
                Get in Touch
              </div>
              <h2 className="mb-6 text-2xl font-light tracking-tight sm:text-3xl">
                Let&apos;s work together
              </h2>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                Whether you need a custom system, AI research, or digital
                transformation consulting, we&apos;re ready to help you build
                technology that makes a difference.
              </p>
              <div className="space-y-4 text-sm text-foreground/80">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    Address
                  </span>
                  <span>P.O. Box 148745, Kampala, Uganda</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    Phone
                  </span>
                  <span>+256 704 203849</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    Email
                  </span>
                  <a
                    href="mailto:nectarug.technologies@gmail.com"
                    className="text-primary transition-colors hover:text-primary/80"
                  >
                    nectarug.technologies@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    Web
                  </span>
                  <a
                    href="https://www.nectartechnologies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors hover:text-primary/80"
                  >
                    www.nectartechnologies.com
                  </a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80"
                  alt="Kampala city"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6 right-6">
                  <NectarLogo className="mb-3 text-white" />
                  <p className="text-xs leading-relaxed text-white/70 max-w-xs">
                    Developing technologies for the African community since
                    2019.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="text-[10px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Nectar Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-muted-foreground">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
