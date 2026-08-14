"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./wordmark";
import { Lockup } from "./monogram";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    closerRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        openerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-paper transition-shadow duration-200",
          scrolled ? "border-b border-line" : "border-b border-transparent",
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-8">
          <Link href="/" aria-label="Nectar Technologies, home">
            <Lockup>
              <Wordmark />
            </Lockup>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "type-title relative py-1 text-[0.9375rem] transition-colors",
                    active ? "text-brand" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-brand"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="type-title rounded-sm bg-brand px-6 py-3 text-[0.9375rem] text-white transition-colors hover:bg-brand-deep"
            >
              Start a conversation
            </Link>
          </nav>

          <button
            ref={openerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="type-title rounded-sm border border-line px-5 py-2.5 text-[0.9375rem] text-ink lg:hidden"
          >
            Menu
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="on-dark fixed inset-0 z-[60] flex flex-col bg-brand-deep px-6 py-5 text-white lg:hidden"
      >
        <div className="flex items-center justify-between">
          <Lockup tone="light">
            <Wordmark tone="light" />
          </Lockup>
          <button
            ref={closerRef}
            type="button"
            onClick={() => {
              setOpen(false);
              openerRef.current?.focus();
            }}
            className="type-title rounded-sm border border-white/25 px-5 py-2.5 text-[0.9375rem] text-white"
          >
            Close
          </button>
        </div>

        <nav className="mt-16 flex flex-1 flex-col" aria-label="Primary">
          {nav.concat({ href: "/contact", label: "Contact" }).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="type-headline border-t border-white/15 py-6 text-[1.75rem] text-white last:border-b"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
