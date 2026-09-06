import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import lagosNight from "@/assets/lagos-night.jpg";
import { Reveal } from "@/components/site/Reveal";
import { posts, formatDate } from "@/lib/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLASSKID — Prince Dennis, Lagos" },
      {
        name: "description",
        content:
          "The official personal home of Prince Dennis (GLASSKID) — his story, journey, writing and life in Lagos, Nigeria.",
      },
      { property: "og:title", content: "GLASSKID — Prince Dennis, Lagos" },
      {
        property: "og:description",
        content: "Stories, thoughts and life from Lagos, Nigeria.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const latest = posts.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-rise">
            <p className="flex items-center gap-2 text-xs tracking-[0.32em] text-muted-foreground uppercase">
              <MapPin className="size-3.5 text-primary" />
              Lagos, Nigeria
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] font-light sm:text-7xl lg:text-8xl">
              <span className="text-gradient">Glasskid</span>
              <span className="mt-3 block text-xl font-light tracking-tight text-muted-foreground sm:text-2xl">
                Prince Dennis
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              This isn't a portfolio. It's where I keep the honest version — the story behind the
              name, the years that shaped it, the things I think about at 2AM, and the life I'm
              still building in the loudest city I know.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Who I am
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/blog"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-foreground transition-colors hover:bg-white/10"
              >
                Read the journal
              </Link>
            </div>
          </div>

          <div className="violet-halo relative animate-rise" style={{ animationDelay: "150ms" }}>
            <div className="grain overflow-hidden rounded-[2rem] border border-glass-border">
              <img
                src={heroPortrait}
                alt="Portrait of Prince Dennis, known as GLASSKID, lit by violet light"
                width={1280}
                height={1600}
                className="h-[26rem] w-full object-cover object-top sm:h-[34rem]"
              />
            </div>
            <div className="glass-strong animate-float absolute -bottom-6 -left-4 rounded-2xl px-5 py-4 sm:-left-8">
              <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Currently</p>
              <p className="mt-1 text-sm">Writing, building, mostly at night</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto mt-36 max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="font-display text-2xl leading-snug font-light sm:text-4xl">
            I named myself after glass because I got tired of pretending to be opaque.
            <span className="text-muted-foreground">
              {" "}
              Everything here is the same idea: let the light through, keep the shape.
            </span>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="hairline mt-14" />
        </Reveal>
      </section>

      {/* Chapters */}
      <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              to: "/about" as const,
              title: "About me",
              copy: "The person behind the name — where I come from, what I value, what I'm still figuring out.",
            },
            {
              to: "/journey" as const,
              title: "My journey",
              copy: "The years laid out honestly. The quiet stretches count as much as the loud ones.",
            },
            {
              to: "/gallery" as const,
              title: "Gallery",
              copy: "Frames from my life. Rooms, streets, skies and the occasional self-portrait.",
            },
          ].map((c, i) => (
            <Reveal key={c.to} delay={i * 110}>
              <Link
                to={c.to}
                className="glass group flex h-full flex-col justify-between rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <h2 className="font-display text-xl">{c.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                </div>
                <ArrowUpRight className="mt-8 size-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lagos band */}
      <section className="relative mt-36">
        <div className="grain relative h-[24rem] overflow-hidden sm:h-[30rem]">
          <img
            src={lagosNight}
            alt="Lagos skyline at night reflected in dark water"
            loading="lazy"
            width={1600}
            height={1008}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
              <Reveal>
                <p className="max-w-xl font-display text-3xl leading-tight font-light sm:text-5xl">
                  Made by Lagos.
                  <span className="block text-primary">Sharpened by its nights.</span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Latest writing */}
      <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-light sm:text-4xl">Latest from the journal</h2>
            <Link
              to="/blog"
              className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              All posts
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="glass group flex flex-col gap-3 rounded-3xl p-6 transition-all duration-500 hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <div className="max-w-2xl">
                  <p className="text-xs tracking-[0.22em] text-primary uppercase">{p.category}</p>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{formatDate(p.date)}</span>
                  <ArrowUpRight className="size-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto mt-32 max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="glass-strong violet-halo rounded-[2rem] px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl font-light sm:text-5xl">Say something real</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
              I read everything that comes through. If it matters to you, it's worth sending.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
