import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GLASSKID (Prince Dennis)" },
      {
        name: "description",
        content:
          "Send Prince Dennis (GLASSKID) a message — collaborations, conversations, or just something you wanted to say.",
      },
      { property: "og:title", content: "Contact — GLASSKID (Prince Dennis)" },
      { property: "og:description", content: "Say something real. I read everything." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast("Message noted", {
        description: "Delivery isn't switched on yet — ask me to connect it and it will send.",
      });
    }, 600);
  };

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <section className="animate-rise">
        <p className="text-xs tracking-[0.32em] text-muted-foreground uppercase">Contact</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-light sm:text-6xl">
          Say something real.
          <span className="block text-muted-foreground">I read everything.</span>
        </h1>
      </section>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  Name
                </span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full resize-none rounded-xl border border-input bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me what's on your mind."
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Sending" : "Send message"}
              <Send className="size-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-strong flex h-full flex-col justify-between rounded-3xl p-7 sm:p-9">
            <div className="space-y-7">
              <div>
                <p className="flex items-center gap-2 text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  <MapPin className="size-3.5 text-primary" /> Based in
                </p>
                <p className="mt-2 font-display text-lg">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  <Mail className="size-3.5 text-primary" /> Email
                </p>
                <p className="mt-2 font-display text-lg">Add your address here</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  Response time
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Usually a few days. Always eventually.
                </p>
              </div>
            </div>
            <div className="hairline mt-10" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              For collaborations, conversations, or something you've been meaning to say for a
              while.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
