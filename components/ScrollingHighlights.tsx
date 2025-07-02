"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const HIGHLIGHTS = [
  "Accessible",
  "Responsive",
  "Dynamic",
  "Scalable",
  "Search Optimized",
  "Interactive",
  "Secure",
  "Reliable",
  "Engaging",
];

const HighlightItem = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 lg:gap-4">
    <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
      {text}
    </span>
    <Star color="white" fill="white"/>
  </div>
);

export default function ScrollingHighlights() {
  return (
    <section className="my-20 py-20 mt-40 relative ">
      {/* Background gradient layers */}
      
      {/* Marquee wrapper */}
      <div className="relative z-10 -mx-1 flex -rotate-3 items-center justify-center overflow-x-clip bg-gradient-to-r from-blue-400 to-blue-800 py-1.5 lg:py-3 mb-4">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--duration:30s]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
            >
              {HIGHLIGHTS.map((text) => (
                <HighlightItem key={text + i} text={text} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 -mx-1 flex -rotate-3 items-center justify-center overflow-x-clip bg-gradient-to-r from-blue-800 to-blue-400 py-1.5 lg:py-3">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--duration:30s]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
            >
              {HIGHLIGHTS.map((text) => (
                <HighlightItem key={text + i} text={text} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
