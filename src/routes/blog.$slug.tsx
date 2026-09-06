import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPost, posts, formatDate } from "@/lib/posts";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post not found — GLASSKID" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — GLASSKID` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} — GLASSKID` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <h1 className="font-display text-4xl font-light">That post isn't here</h1>
      <p className="mt-4 text-muted-foreground">
        It may have been renamed, or it never existed in the first place.
      </p>
      <Link to="/blog" className="mt-8 inline-block text-sm text-primary">
        Back to the journal
      </Link>
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-5 sm:px-8">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Journal
      </Link>

      <header className="mt-8 animate-rise">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="tracking-[0.22em] text-primary uppercase">{post.category}</span>
          <span className="opacity-40">/</span>
          <span>{formatDate(post.date)}</span>
          <span className="opacity-40">/</span>
          <span>{post.readingTime} read</span>
        </div>
        <h1 className="mt-5 font-display text-4xl leading-tight font-light sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="hairline mt-10" />
      </header>

      <div className="mt-10 space-y-6">
        {post.body.map((para, i) =>
          para.startsWith("## ") ? (
            <h2 key={i} className="pt-6 font-display text-2xl font-light">
              {para.slice(3)}
            </h2>
          ) : (
            <p key={i} className="text-lg leading-[1.85] text-muted-foreground">
              {para}
            </p>
          ),
        )}
      </div>

      <div className="glass mt-16 rounded-3xl p-7">
        <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">Written by</p>
        <p className="mt-2 font-display text-xl">Prince Dennis — GLASSKID</p>
        <p className="mt-2 text-sm text-muted-foreground">Lagos, Nigeria</p>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-light">Keep reading</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="glass block h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <p className="text-xs tracking-[0.22em] text-primary uppercase">{p.category}</p>
                <h3 className="mt-2 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </article>
  );
}
