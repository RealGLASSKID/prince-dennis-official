import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { posts, formatDate } from "@/lib/posts";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — GLASSKID (Prince Dennis)" },
      {
        name: "description",
        content:
          "Personal stories, thoughts, updates and announcements written by Prince Dennis (GLASSKID) in Lagos.",
      },
      { property: "og:title", content: "Journal — GLASSKID (Prince Dennis)" },
      {
        property: "og:description",
        content: "Stories, thoughts, updates and announcements — written in full sentences.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [filter, setFilter] = useState<string>("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [],
  );
  const list = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <section className="animate-rise">
        <p className="text-xs tracking-[0.32em] text-muted-foreground uppercase">The journal</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-light sm:text-6xl">
          Everything I'd rather say properly
          <span className="block text-muted-foreground">than in a caption.</span>
        </h1>
      </section>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors",
              filter === c
                ? "bg-primary text-primary-foreground"
                : "glass text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="mt-12 space-y-4">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="glass group block rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 sm:p-9"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="tracking-[0.22em] text-primary uppercase">{p.category}</span>
                <span className="opacity-40">/</span>
                <span>{formatDate(p.date)}</span>
                <span className="opacity-40">/</span>
                <span>{p.readingTime} read</span>
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl">{p.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                Read
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
