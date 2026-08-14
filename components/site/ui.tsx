import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Section eyebrow: one small label above a section heading. */
export function Eyebrow({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "type-eyebrow",
        tone === "brand" ? "text-brand-mid" : "text-white/55",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & {
  variant?: "solid" | "outline" | "light" | "ghost";
}) {
  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "type-title inline-flex items-center gap-2.5 rounded-sm px-7 py-3.5 text-[0.9375rem] transition-colors duration-200",
        variant === "solid" && "bg-brand text-white hover:bg-brand-deep",
        variant === "outline" &&
          "border border-line text-ink hover:border-brand hover:text-brand",
        variant === "light" && "bg-white text-brand-deep hover:bg-brand-soft",
        variant === "ghost" &&
          "border border-white/30 text-white hover:border-white hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/** A link that reads as an onward step rather than a button. */
export function ArrowLink({
  href,
  children,
  tone = "brand",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "brand" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "type-title group inline-flex items-center gap-2 text-[0.9375rem]",
        tone === "brand" ? "text-brand" : "text-white",
        className,
      )}
    >
      <span className="link-draw">{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}

/**
 * Sets the final word of a title in the letterhead Didone italic. One serif
 * word per heading — see DESIGN notes on .type-accent.
 */
function accentLastWord(title: string) {
  const words = title.trim().split(" ");
  if (words.length < 2) return title;
  const last = words.pop() as string;
  return (
    <>
      {words.join(" ")} <span className="type-accent">{last}</span>
    </>
  );
}

/** The standard page opening: eyebrow, title, lead. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-paper-alt pb-panel pt-[9.5rem]">
      <div className="shell">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="type-display mt-6 max-w-[16ch] text-[clamp(2.5rem,6vw,4.25rem)] text-ink">
          {accentLastWord(title)}
        </h1>
        {lead && (
          <p className="type-lead mt-7 text-[clamp(1.0625rem,1.6vw,1.25rem)] text-ink-soft">
            {lead}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}

/** Verified counts, shown as a rule-separated row. */
export function FigureRow({
  figures,
  tone = "ink",
  className,
}: {
  figures: { value: string; label: string }[];
  tone?: "ink" | "light";
  className?: string;
}) {
  if (!figures.length) return null;
  return (
    <dl
      className={cn(
        "grid gap-px border-t sm:grid-cols-2 lg:grid-cols-3",
        tone === "ink" ? "border-line bg-line" : "border-white/20 bg-white/20",
        className,
      )}
    >
      {figures.map((f) => (
        <div
          key={f.label}
          className={cn("px-1 py-7", tone === "ink" ? "bg-paper" : "bg-brand-deep")}
        >
          <dd
            className={cn(
              "type-figure text-[clamp(1.875rem,3.5vw,2.75rem)]",
              tone === "ink" ? "text-brand" : "text-white",
            )}
          >
            {f.value}
          </dd>
          <dt
            className={cn(
              "type-body mt-3 text-[0.875rem]",
              tone === "ink" ? "text-ink-soft" : "text-white/65",
            )}
          >
            {f.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

/** Marks content that stands in for material the client will supply. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="type-body inline-flex items-center gap-2.5 rounded-sm border border-dashed border-line px-4 py-2.5 text-[0.8125rem] text-ink-faint">
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-signal" />
      {children}
    </p>
  );
}
