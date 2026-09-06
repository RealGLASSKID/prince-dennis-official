import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "My Journey — GLASSKID (Prince Dennis)" },
      {
        name: "description",
        content:
          "The chapters that made GLASSKID: growing up in Lagos, the first machine, the quiet years, and everything still ahead.",
      },
      { property: "og:title", content: "My Journey — GLASSKID (Prince Dennis)" },
      {
        property: "og:description",
        content: "Chapters, not a CV — the honest timeline of how I got here.",
      },
    ],
  }),
  component: Journey,
});

const chapters = [
  {
    year: "Chapter I",
    title: "Lagos, early",
    body: "A loud childhood in a loud city. I learned to read people before I learned to read rooms, and I learned that in Lagos you either move or the day moves you.",
  },
  {
    year: "Chapter II",
    title: "The first machine",
    body: "A second-hand laptop with a battery that lasted eleven minutes. I stayed near a socket for two years and taught myself everything I could reach through that screen.",
  },
  {
    year: "Chapter III",
    title: "Becoming GLASSKID",
    body: "A season where I felt completely see-through. Instead of hiding it, I made it my name. Glass: transparent, under pressure, still holding shape.",
  },
  {
    year: "Chapter IV",
    title: "The quiet years",
    body: "Almost two years of building things and telling nobody. No launch posts, no progress screenshots. It's the most useful thing I've ever done for my own taste.",
  },
  {
    year: "Chapter V",
    title: "Coming back out",
    body: "This site. A place I own, where the story is told in full sentences instead of captions, and nothing gets buried by an algorithm at 4pm.",
  },
  {
    year: "Now",
    title: "Still writing it",
    body: "Building in the dark hours, writing in the mornings, taking the long route home. Whatever comes next gets documented here first.",
  },
];

function Journey() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <section className="animate-rise">
        <p className="text-xs tracking-[0.32em] text-muted-foreground uppercase">My journey</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-light sm:text-6xl">
          Not a timeline of wins.
          <span className="block text-muted-foreground">A record of how I got here.</span>
        </h1>
      </section>

      <section className="relative mt-20 pb-4">
        <div className="absolute top-2 bottom-0 left-[7px] w-px bg-gradient-to-b from-primary/70 via-border to-transparent sm:left-[9px]" />
        <div className="space-y-12">
          {chapters.map((c, i) => (
            <Reveal key={c.year} delay={i * 60}>
              <div className="relative pl-10 sm:pl-14">
                <span className="absolute top-2 left-0 size-4 rounded-full border border-primary/60 bg-background shadow-[0_0_20px_var(--primary)] sm:size-5" />
                <p className="text-xs tracking-[0.28em] text-primary uppercase">{c.year}</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl">{c.title}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="glass mt-16 rounded-3xl p-8 sm:p-10">
          <p className="font-display text-xl leading-relaxed font-light sm:text-2xl">
            "The quiet stretch was never lost time. It was the part where the shape got decided."
          </p>
          <p className="mt-4 text-xs tracking-[0.28em] text-muted-foreground uppercase">
            Prince Dennis
          </p>
        </div>
      </Reveal>
    </div>
  );
}
