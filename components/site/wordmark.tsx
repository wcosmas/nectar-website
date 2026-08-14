import { cn } from "@/lib/utils";

/**
 * The wordmark, following the company letterhead: a Didone "NECTAR" with
 * "Technologies" set small and letter-spaced beneath it.
 */
export function Wordmark({
  className,
  tone = "ink",
  size = "sm",
}: {
  className?: string;
  tone?: "ink" | "light";
  size?: "sm" | "lg";
}) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "type-accent not-italic",
          size === "lg" ? "text-[2rem] sm:text-[2.5rem]" : "text-[1.375rem]",
          tone === "ink" ? "text-brand" : "text-white",
        )}
        style={{ letterSpacing: size === "lg" ? "0.06em" : "0.05em" }}
      >
        NECTAR
      </span>
      <span
        className={cn(
          "type-eyebrow",
          size === "lg" ? "mt-2 text-[0.6875rem]" : "mt-1.5 text-[0.5rem]",
          tone === "ink" ? "text-ink-faint" : "text-white/60",
        )}
        style={{ letterSpacing: "0.34em" }}
      >
        Technologies
      </span>
    </span>
  );
}
