export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  readingTime: string;
  category: "Story" | "Thoughts" | "Update" | "Announcement" | "Experience";
  excerpt: string;
  /** Plain paragraphs. A line starting with "## " renders as a subheading. */
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "why-i-call-myself-glasskid",
    title: "Why I call myself GLASSKID",
    date: "2026-08-21",
    readingTime: "4 min",
    category: "Story",
    excerpt:
      "Glass breaks, but it also reflects, refracts and lets light through. That contradiction is the closest thing I have to a self-portrait.",
    body: [
      "People ask about the name more than anything else. They expect a clever brand story. The truth is quieter than that.",
      "I picked GLASSKID during a season where I felt completely see-through. Everything I was going through was visible on my face before I could find words for it. Instead of hiding it, I decided to make it the name.",
      "## Transparent, not fragile",
      "Glass gets treated as a synonym for weak. I disagree. Glass is what we use when we want light to pass through without losing shape. It holds pressure. It holds heat. It just refuses to pretend to be opaque.",
      "That's the version of myself I'm building: honest about the process, still standing.",
      "## The kid part",
      "The kid part is a promise. Whatever happens, I don't want to lose the part of me that gets genuinely excited about a new idea at 2am in Lagos, laptop light on my face, nobody watching.",
      "So: GLASSKID. Prince Dennis when my mother is talking.",
    ],
  },
  {
    slug: "lagos-at-2am",
    title: "Lagos at 2AM",
    date: "2026-07-04",
    readingTime: "3 min",
    category: "Experience",
    excerpt:
      "The city changes character after midnight. The noise thins out and what's left is the version of Lagos I actually love.",
    body: [
      "Lagos in the day is a negotiation. Everybody is going somewhere, everybody is slightly late, and the city takes something from you before it gives anything back.",
      "But at 2AM it exhales.",
      "## What I hear",
      "A generator two compounds away. Someone's speaker still refusing to sleep. Rain if we're lucky. Under all of it there's a low hum that feels like the city thinking.",
      "I do my best work in that window. Not because I'm disciplined, but because it's the only time nothing is asking me for anything.",
      "## What I'm learning",
      "That there's a difference between being alone and being unbothered. Lagos taught me the second one.",
    ],
  },
  {
    slug: "on-building-quietly",
    title: "On building quietly",
    date: "2026-05-16",
    readingTime: "5 min",
    category: "Thoughts",
    excerpt:
      "For two years I shipped almost nothing publicly. It was the most useful thing I have ever done for myself.",
    body: [
      "There's a pressure to document everything in real time. Post the process, post the wins, post the lessons. I tried it. It made me optimise for the post instead of the work.",
      "## The quiet stretch",
      "So I stopped. For nearly two years I built things, broke them, rebuilt them, and told almost nobody. No launch threads. No progress screenshots.",
      "What I found: taste develops fastest when there's no audience clapping at the halfway point. You start finishing things because they aren't finished yet, not because a caption is due.",
      "## Coming back",
      "This site is me coming back out — on my own terms, in my own house. Not a feed. Not an algorithm. Just a place I own where I can put things down properly.",
    ],
  },
  {
    slug: "things-im-carrying-into-this-year",
    title: "Things I'm carrying into this year",
    date: "2026-02-02",
    readingTime: "3 min",
    category: "Update",
    excerpt:
      "A short list. Not resolutions — those never survive Lagos traffic. Just things I refuse to put down.",
    body: [
      "## One",
      "Answer the message. The version of me that leaves people on read for three weeks isn't mysterious, he's just avoidant.",
      "## Two",
      "Make the thing before explaining the thing. Explanation is cheap. Artefacts are not.",
      "## Three",
      "Protect the mornings. Everything good I've made came from an untouched first three hours.",
      "## Four",
      "Stay soft. Lagos will offer you a hundred reasons to harden. Decline politely.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
