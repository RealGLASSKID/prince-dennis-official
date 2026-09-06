import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — GLASSKID (Prince Dennis)" },
      {
        name: "description",
        content:
          "Frames from the life of Prince Dennis (GLASSKID): Lagos streets, late nights, skies and quiet rooms.",
      },
      { property: "og:title", content: "Gallery — GLASSKID (Prince Dennis)" },
      { property: "og:description", content: "Frames from my life, mostly after dark." },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: g1, alt: "Hands writing in a notebook under a single dim light", caption: "Notes, 3AM", w: 1000, h: 1250 },
  { src: g2, alt: "A rainy city street at night with violet neon reflections", caption: "Rain, mainland", w: 1200, h: 900 },
  { src: g3, alt: "Headphones beside a laptop glowing violet in darkness", caption: "The desk", w: 1000, h: 1000 },
  { src: g4, alt: "Close portrait half-lit by violet light", caption: "Self, unedited", w: 1000, h: 1300 },
  { src: g5, alt: "City lights seen through an airplane window at dusk", caption: "Leaving, briefly", w: 1200, h: 900 },
  { src: g6, alt: "Empty rooftop against a violet dusk sky", caption: "Rooftop, no plans", w: 1000, h: 1250 },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <section className="animate-rise">
        <p className="text-xs tracking-[0.32em] text-muted-foreground uppercase">Gallery</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-light sm:text-6xl">
          Frames from my life,
          <span className="block text-muted-foreground">mostly after dark.</span>
        </h1>
      </section>

      <section className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {shots.map((s, i) => (
          <Reveal key={s.caption} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group grain relative block w-full overflow-hidden rounded-3xl border border-glass-border"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                width={s.w}
                height={s.h}
                className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 text-left text-sm text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {s.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-5 backdrop-blur-xl"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="glass absolute top-6 right-6 flex size-11 items-center justify-center rounded-full"
          >
            <X className="size-4" />
          </button>
          <figure className="max-h-full animate-rise">
            <img
              src={shots[active].src}
              alt={shots[active].alt}
              className="max-h-[78vh] rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {shots[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
