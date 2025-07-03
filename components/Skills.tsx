"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { AuroraText } from "./magicui/aurora-text";

const skills = [
  { name: "ReactJS", src: "https://cdn.simpleicons.org/react" },
  { name: "NextJS", src: "https://cdn.simpleicons.org/nextdotjs/black" },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Python", src: "https://cdn.simpleicons.org/python" },
  { name: "Dart", src: "https://cdn.simpleicons.org/dart" },
  { name: "Flutter", src: "https://cdn.simpleicons.org/flutter" },
  { name: "Javascript", src: "https://cdn.simpleicons.org/javascript" },
  { name: "HTML", src: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", src: "https://cdn.simpleicons.org/css" },
  { name: "Motion", src: "https://cdn.simpleicons.org/framer" },

  { name: "Supabase", src: "https://cdn.simpleicons.org/supabase" },
  { name: "Firebase", src: "https://cdn.simpleicons.org/firebase" },
  // { name: "Sanity", src: "https://cdn.simpleicons.org/sanity" },
  // { name: "Contentful", src: "https://cdn.simpleicons.org/contentful" },
  // { name: "NodeJS", src: "https://cdn.simpleicons.org/nodedotjs/darkgreen" },
  // { name: "ExpressJS", src: "https://cdn.simpleicons.org/express/black" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/sky" },
  // { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/darkgreen" },
  // { name: "Prisma", src: "https://cdn.simpleicons.org/prisma/blue" },
  // { name: "Zustand", src: "https://cdn.simpleicons.org/redux/pink" },
  // { name: "Zod", src: "https://cdn.simpleicons.org/zod" },
  // { name: "pnpm", src: "https://cdn.simpleicons.org/pnpm" },
  // { name: "Bun", src: "https://cdn.simpleicons.org/bun/black" },
  { name: "Git", src: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/black" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/black" },
  // { name: "AWS", src: "https://cdn.simpleicons.org/amazonwebservices/gray" },
  // { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  // { name: "Expo", src: "https://cdn.simpleicons.org/expo/gray" },
  { name: "Clerk", src: "https://cdn.simpleicons.org/clerk" },
  // { name: "Linux", src: "https://cdn.simpleicons.org/linux" },
];

export default function SkillsSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rotate = window.scrollY / 10;
        imageRef.current.style.transform = `rotate(${rotate}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      className="relative mx-auto mt-10 flex flex-col rounded-3xl py-0 md:px-10"
    >
      <div className="relative mx-auto overflow-hidden">
        <div className="[mask-image:linear-gradient(to_top,transparent,black_50%,black_90%,transparent)]">
          <div
            ref={imageRef}
            className="relative mx-auto size-[300px] md:size-[380px] translate-y-36 md:translate-y-40 transition-transform duration-300"
          >
            <Image
              draggable={false}
              alt="skills cover rotating image"
              className="z-10 w-full opacity-65 select-none"
              src="/glasssphere.avif"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <h2
        className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center z-30 mb-0 md:mb-0 w-full -translate-y-6 md:-translate-y-10"
        style={{
          textShadow:
            "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
        }}
      >
        <p
          style={{ fontFamily: "marlin" }}
          className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm"
        >
          My Skills
        </p>
        <span style={{ fontFamily: "marlin" }}>
          The Secret{" "}
          <span style={{ fontFamily: "lovelace" }}>
            <AuroraText
              className="font-lovelace"
              colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
            >
              Sauce
            </AuroraText>
          </span>
        </span>
      </h2>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 lg:gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm whitespace-nowrap gap-2 text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/20 bg-white-2 md:px-4 md:py-1.5"
          >
            <Image
              alt={skill.name}
              src={skill.src}
              width={18}
              height={18}
              className="w-4"
            />
            <span style={{ fontFamily: "marlin" }}>{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
