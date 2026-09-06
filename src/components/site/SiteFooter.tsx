import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl tracking-tight sm:text-4xl">
              Prince Dennis
              <span className="block text-muted-foreground">known as GLASSKID</span>
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Written, built and maintained from Lagos, Nigeria. This is my personal corner of the
              internet — not a résumé.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link
              to="/journey"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Journey
            </Link>
            <Link to="/blog" className="text-muted-foreground transition-colors hover:text-primary">
              Blog
            </Link>
            <Link
              to="/gallery"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="hairline mt-12" />
        <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Glasskid — Lagos, NG
        </p>
      </div>
    </footer>
  );
}
