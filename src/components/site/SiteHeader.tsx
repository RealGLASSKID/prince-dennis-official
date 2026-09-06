import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journey", label: "Journey" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-3" : "py-6",
        )}
      >
        <Link
          to="/"
          className="font-display text-sm font-semibold tracking-[0.32em] text-foreground uppercase"
          onClick={() => setOpen(false)}
        >
          Glass<span className="text-primary">kid</span>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 md:flex",
            scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : "",
          )}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-white/5" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="glass flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="glass-strong mx-5 animate-rise rounded-3xl p-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground"
              activeProps={{ className: "text-foreground bg-white/5" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
