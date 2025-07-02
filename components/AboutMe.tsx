"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AuroraText } from "./magicui/aurora-text";
import Image from "next/image";

const images = [
  "/heart.png",
  "/profile.png",
  "/sign.png",
  "/glasssphere.avif",
  "/images/about4.jpg",
];

export default function AboutMe() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 md:px-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
        {/* LEFT: Text Content */}
        <div className="flex-1">
          <h2
            className="relative z-2 mb-8 text-center text-4xl font-medium tracking-tight text-balance md:mt-28 md:text-6xl lg:text-left sm:text-4xl"
            style={{
              textShadow:
                "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
            }}
          >
            <p style={{fontFamily: 'marlin'}} className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
              KNOW ABOUT ME
            </p>
            <span style={{fontFamily: 'marlin'}}>
              <span>Full-Stack Developer and a little bit of </span>
              <span style={{ fontFamily: "lovelace" }}>
                <AuroraText
                  className="font-lovelace"
                  colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
                >
                  everything
                </AuroraText>
              </span>
            </span>
          </h2>

          <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-300">
            <p>
              I'm Ansh Sharma — a full-stack developer and product builder who loves bringing bold ideas to life. Whether it's crafting beautiful UIs with Next.js and Tailwind or architecting scalable backends with Supabase, I thrive at the intersection of creativity and code.
            </p>
            <p>
              I enjoy solving real problems, shipping fast, and constantly learning along the way. From resume builders to dev tools, if it helps someone move faster or think better — I'm probably building it.
<br/>
<br/>
When I'm not deep in code, I’m usually experimenting with a new product idea, helping other devs, or just soaking in good tech and design.
            </p>
            <p>Every day’s a chance to build something awesome — and I’m here for it.</p>

            <div className="flex gap-3 mx-auto -mt-4 w-fit lg:mx-0">
              <a
                href="https://linkedin.com/in/iaayushbharti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/aayushbharti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/iaayushbharti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Image (on large), Below (on small) */}
        <div className="mt-12 lg:mt-24 flex-1 flex flex-col items-center lg:items-end">
  {/* Image with fixed height and auto width */}
  <div className="relative h-[400px] w-full max-w-xs lg:max-w-sm">
    <Image
      src={images[currentImage]}
      alt="About Image"
      fill
      className="rounded-2xl object-contain bg-secondary border-2 transition-opacity duration-1000"
    />
  </div>

  {/* Dots */}
  <div className="mt-3 flex gap-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`h-2 w-2 rounded-full transition-all ${
          currentImage === index
            ? "bg-black dark:bg-white scale-110"
            : "bg-black/30 dark:bg-white/30"
        }`}
        aria-label={`Go to image ${index + 1}`}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
