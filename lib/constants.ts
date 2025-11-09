export type Event = {
  title: string;
  image: string; // path relative to public/ (used by next/image)
  slug: string;
  location: string;
  date: string; // human-readable (supports single day or range)
  time: string; // local event time window
};

// Curated list of popular and upcoming developer events.
// Images referenced from public/images
export const events: Event[] = [
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, USA",
    date: "Dec 1–5, 2025",
    time: "09:00–18:00 PST",
  },
  {
    title: "GitHub Universe 2025",
    image: "/images/event2.png",
    slug: "github-universe-2025",
    location: "San Francisco, USA",
    date: "Nov 19–20, 2025",
    time: "09:30–17:30 PST",
  },
  {
    title: "Google Cloud Next 2026",
    image: "/images/event3.png",
    slug: "google-cloud-next-2026",
    location: "San Jose, USA",
    date: "Mar 10–12, 2026",
    time: "09:00–18:00 PT",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event4.png",
    slug: "kubecon-eu-2026",
    location: "Vienna, Austria",
    date: "Apr 14–17, 2026",
    time: "09:00–18:00 CEST",
  },
  {
    title: "JSConf EU (Community Edition)",
    image: "/images/event5.png",
    slug: "jsconf-eu-community-2026",
    location: "Berlin, Germany",
    date: "May 23–24, 2026",
    time: "10:00–18:00 CEST",
  },
  {
    title: "ETHGlobal Hackathon – Paris",
    image: "/images/event6.png",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "Jul 10–12, 2026",
    time: "24/7 (in-person) CEST",
  },
  {
    title: "Open Source Summit North America 2026",
    image: "/images/event-full.png",
    slug: "oss-summit-na-2026",
    location: "Vancouver, Canada",
    date: "Jun 22–24, 2026",
    time: "09:00–17:30 PDT",
  },
];
