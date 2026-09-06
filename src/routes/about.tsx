import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import portrait from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — GLASSKID (Prince Dennis)" },
      {
        name: "description",
        content:
          "Who Prince Dennis is behind the GLASSKID name: his values, personality, interests and the way he sees the world from Lagos.",
      },
      { property: "og:title", content: "About Me — GLASSKID (Prince Dennis)" },
      {
        property: "og:description",
        content: "The person behind the name — values, personality, interests and quiet obsessions.",
      },
    ],
  }),
  component: About,
});

const facts = [
  { k: "Full name", v: "Prince Dennis" },
  { k: "Known as", v: "GLASSKID" },
  { k: "Base", v: "Lagos, Nigeria" },
  { k: "Best hours", v: "Midnight to four" },
];

const interests = [
  { t: "Writing", d: "Long notes nobody asked for. This journal is the public half of that habit." },
  { t: "Sound", d: "Afrobeats, ambient, film scores. Anything that changes the temperature of a room." },
  { t: "Design", d: "Dark interfaces, quiet typography, things that feel expensive without shouting." },
  { t: "Night walks", d: "Lagos after midnight is the only tour I'd recommend." },
  { t: "Photography", d: "Mostly on my phone, mostly badly lit, occasionally perfect." },
  { t: "People", d: "Long conversations with three friends beats a room of two hundred." },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <section className="grid items-start gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div className="animate-rise">
          <p className="text-xs tracking-[0.32em] text-muted-foreground uppercase">About me</p>
          <h1 className="mt-6 font-display text-4xl leading-tight font-light sm:text-6xl">
            I'm Prince Dennis.
            <span className="block text-muted-foreground">Most people say GLASSKID.</span>
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I grew up in Lagos, a city that teaches you two things very early: how to move fast,
              and how to keep something of yourself back for later. I spent years doing only the
              first one. This site is me practising the second.
            </p>
            <p>
              I'm a builder and a writer, in that order on most days. I like taking an idea that
              only exists in my head at night and dragging it into daylight where it can be judged.
              I like the part where it doesn't work yet.
            </p>
            <p>
              Away from screens I'm quieter than people expect. I'd rather have one long
              conversation than five short ones. I take the long route home. I over-think song
              choices. I remember what people tell me.
            </p>
          </div>
        </div>

        <Reveal className="lg:pt-16">
          <div className="grain overflow-hidden rounded-[2rem] border border-glass-border">
            <img
              src={portrait}
              alt="Close portrait of Prince Dennis half-lit by violet light"
              loading="lazy"
              width={1000}
              height={1300}
              className="h-[28rem] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal>
          <div className="glass grid gap-px overflow-hidden rounded-3xl sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="p-6">
                <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">{f.k}</p>
                <p className="mt-2 font-display text-lg">{f.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-24">
        <Reveal>
          <h2 className="font-display text-3xl font-light sm:text-4xl">What holds my attention</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 80}>
              <div className="glass h-full rounded-3xl p-6 transition-colors duration-500 hover:border-primary/40">
                <h3 className="font-display text-lg">{i.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 max-w-3xl">
        <Reveal>
          <h2 className="font-display text-3xl font-light sm:text-4xl">What I believe</h2>
          <div className="mt-8 space-y-6">
            {[
              "Being transparent is not the same as being fragile.",
              "Taste is built in private, long before anyone claps.",
              "Softness is a discipline, especially in a hard city.",
              "Finish the thing. Explanations are cheap; artefacts are not.",
            ].map((b) => (
              <p key={b} className="border-l border-primary/50 pl-5 text-lg leading-relaxed">
                {b}
              </p>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
