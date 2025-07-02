import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import { Ripple } from "./magicui/ripple";
import Iphone15Pro from "./magicui/iphone-15-pro";

// ✅ Tech stack data
const techStacks = [
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Supabase",
    img: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  },
  {
    name: "Vercel",
    img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
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
          videoSrc="https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4"
        />
      </div>
    </div>
  );
}
