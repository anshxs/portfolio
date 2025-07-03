import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { Ripple } from "./magicui/ripple";
import Iphone15Pro from "./magicui/iphone-15-pro";

// ✅ Tech stack data
const techStacks = [
  { name: "ReactJS", img: "https://cdn.simpleicons.org/react" },
  { name: "NextJS", img: "https://cdn.simpleicons.org/nextdotjs/black" },
  { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript" },
  { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Python", img: "https://cdn.simpleicons.org/python" },
  { name: "Dart", img: "https://cdn.simpleicons.org/dart" },
  { name: "Flutter", img: "https://cdn.simpleicons.org/flutter" },
  { name: "Javascript", img: "https://cdn.simpleicons.org/javascript" },
  { name: "HTML", img: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", img: "https://cdn.simpleicons.org/css" },
  { name: "Motion", img: "https://cdn.simpleicons.org/framer" },
  { name: "Supabase", img: "https://cdn.simpleicons.org/supabase" },
  { name: "Firebase", img: "https://cdn.simpleicons.org/firebase" },
  { name: "PostgreSQL", img: "https://cdn.simpleicons.org/postgresql/sky" },
  { name: "Git", img: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", img: "https://cdn.simpleicons.org/github/black" },
  { name: "Vercel", img: "https://cdn.simpleicons.org/vercel/black" },
  { name: "Clerk", img: "https://cdn.simpleicons.org/clerk" },
];


// ✅ Split into 3 rows
const firstRow = techStacks.slice(0, Math.ceil(techStacks.length / 3));
const secondRow = techStacks.slice(
  Math.ceil(techStacks.length / 3),
  Math.ceil((2 * techStacks.length) / 3)
);
const thirdRow = techStacks.slice(Math.ceil((2 * techStacks.length) / 3));

// ✅ Card component for tech stack
const TechStackCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg border px-2 py-1",
        // Light mode
        "border-2 bg-white hover:bg-gray-950/[.05]",
        // Dark mode
        "dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
      )}
    >
      <img src={img} alt={name} className="w-6 h-6 object-contain" />
      <span style={{fontFamily: 'marlin'}} className="text-sm font-medium text-center dark:text-white">
        {name}
      </span>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col items-center space-y-6 py-10 min-h-screen overflow-hidden">
      <h1 style={{fontFamily: 'marlin'}} className="text-2xl text-center font-bold tracking-wide select-none bg-gradient-to-b from-[#c900dbbb] to-[#ff009dc1] bg-clip-text text-transparent">
        Passionate about cutting edge technologies.
      </h1>

      {/* Tech stack rows */}
      <div className="relative flex w-full flex-col items-center justify-center space-y-4 z-10">
        <Marquee className="[--duration:20s]">
          {firstRow.map((tech) => (
            <TechStackCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {secondRow.map((tech) => (
            <TechStackCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee className="[--duration:20s]">
          {thirdRow.map((tech) => (
            <TechStackCard key={tech.name} {...tech} />
          ))}
        </Marquee>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary"></div>
      </div>

      {/* ✅ Ripple covers full screen but shifted to show only top part */}
      <div className="absolute bottom-0 left-0 w-full h-screen translate-y-1/4 z-0 pointer-events-none">
        <Ripple />
      </div>
      {/* 🔮 Background Ripple fixed to bottom, slightly shifted */}
      <div className="fixed bottom-0 left-0 w-full h-screen translate-y-2/4 z-0 pointer-events-none">
        <Ripple />
      </div>

      {/* 💻 Foreground content stays in place */}
      <div className="relative z-10">
        <Iphone15Pro
          className="size-full px-6"
          src="/phone.png"
        />
      </div>
    </div>
  );
}
