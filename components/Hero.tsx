"use client";

// app/page.tsx or any component
import { getAge } from "@/utils/getAge";
import Image from "next/image";
import { BentoDemo } from "./Bento";
import SkillsSection from "./Skills";
import ScrollingHighlights from "./ScrollingHighlights";
import AboutMe from "./AboutMe";
import { AuroraText } from "./magicui/aurora-text";
import CardUses from "./CardUses";
import { BorderBeam } from "./magicui/border-beam";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import GithubActivity from "./GithubActivity";
import BlogComponent from "./Blog";

export default function HeroIntro() {
  const age = getAge();
  const router = useRouter();

  return (
    <>
      <section className=" mx-auto px-6 md:px-10 lg:px-20 pt-20 md:pt-30 mb-8">
        {/* Header: Name + Title + Avatar */}
        <div className="flex justify-between items-center gap-4 pr-4">
          <div>
            <h1 style={{fontFamily: 'marlin'}} className="text-lg mt-1 font-semibold text-gray-900">
              Ansh Sharma
            </h1>
            <span style={{fontFamily: 'marlin'}} className="text-sm -mt-1 text-gray-500 font-medium">
              Software Developer ⟷ Designer
            </span>
          </div>
          <div className="relative pr-0">
            <div className="w-16 h-16">
              <Image
                src="/profile.png"
                alt="Ansh Sharma"
                width={80}
                height={80}
                className="object-cover w-full h-full  rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200"
              />
            </div>

            <div className="rounded-full absolute bottom-1 right-1 border-white border-2 z-20 w-4 h-4 container bg-green-500" />
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 space-y-2">
          <h2 style={{fontFamily: 'marlin'}} className="text-2xl font-bold tracking-wide text-black">
            Hey 👋🏼 I’m a {age}-year-old developer and designer based in India.
            <div className="text-gray-500 mt-2">
              You can call me a dev, but it’s mostly ChatGPT doing unpaid labor while I take all the credit and cry over broken builds.
            </div>
          </h2>
        </div>
        <BentoDemo />
        <SkillsSection />
        
      </section>
      <ScrollingHighlights />
      <GithubActivity/>
      <section className=" mx-auto px-6 md:px-10 lg:px-20 pt-20 md:pt-0 mb-8">
        <AboutMe />
      </section>
      <section className="relative mx-auto max-w-7xl px-4 mt-40 py-10">
        <h2
          className="relative z-20 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center mb-4 md:mb-4 max-w-xl mx-auto"
          style={{
            textShadow:
              "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
          }}
        >
          <p style={{fontFamily: 'marlin'}} className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            My Site
          </p>
          <span style={{fontFamily: 'marlin'}}>
            <span  className="font-semibold">Explore, experiment</span>{" "}
            <span style={{ fontFamily: "lovelace" }}>
              <AuroraText
                className="font-lovelace"
                colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
              >
                && say hello
              </AuroraText>
            </span>
          </span>
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-3 md:grid-cols-12">
          <CardUses />
          <div className="group flex size-full flex-col bg-secondary hover:bg-secondary justify-between overflow-hidden rounded-xl relative col-span-12 h-[300px] md:col-span-6 md:row-span-6 lg:col-span-4">
            <div className="size-full relative p-4">
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"></div>

              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/5gxiGjBD0vOHC5h6ecgv9z?utm_source=generator"
                width="100%"
                height="200"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              ></iframe>
              <div className="pointer-events-none z-10 flex flex-col gap-1 px-1 -mt-4">
                <h3 style={{fontFamily: 'marlin'}} className="max-w-lg text-neutral-400">
                  Beat Behind the Code
                </h3>
                <p style={{fontFamily: 'marlin'}} className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                  Don’t judge — sad songs just help me focus.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
          </div>
          <div
            onClick={() => {
              router.push("https://instagram.com/official_diya_taneja");
            }}
            className="group cursor-pointer flex size-full flex-col bg-red-500 hover:bg-red-500 justify-between overflow-hidden rounded-xl relative col-span-12 h-[300px] md:col-span-6 md:row-span-6 lg:col-span-4"
          >
            <div className="size-full relative p-4">
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"></div>
              <div className="absolute right-4 bottom-4 z-[999] flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-black/15 opacity-0 transition-all duration-300 group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100 dark:bg-white/15">
                <ArrowIcon />
              </div>
              {/* Cute Message or Image */}
              <div className="flex items-center justify-center h-[200px] rounded-xl relative">
                <Image
                  src={"/ours.png"}
                  alt={"ours"}
                  height={300}
                  width={300}
                />
              </div>

              {/* Caption */}
              <div className="pointer-events-none z-10 flex flex-col gap-1 px-1 -mt-4">
                <h3 style={{fontFamily: 'marlin'}} className="max-w-lg text-gray-200">Partner in Prime</h3>
                <p style={{fontFamily: 'marlin'}} className="text-xl font-semibold text-white">
                  She’s the reason my code compiles—and my world does too.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
          </div>

          {/* Add Guestbook and RecentFavorite as components here similarly */}
        </div>
      </section>
      <BlogComponent/>
      <div className="relative mx-6 md:mx-12 lg:mx-24 rounded-3xl my-40 overflow-hidden border-4 border-black">
        <Image
          src="/gradient.webp"
          alt="Gradient"
          width={1200}
          height={600}
          className="w-full h-[600px] object-cover rounded-xl hue-rotate-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-8 rounded-xl">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold">
            FROM CONCEPT TO CREATION
          </h2>
          <p className="text-black text-lg sm:text-xl mt-2 mb-4">
            LET&apos;S MAKE IT HAPPEN!
          </p>
          <InteractiveHoverButton>Get Started</InteractiveHoverButton>
        </div>
      </div>
      
    </>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.25 15.25V6.75H8.75"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7L6.75 17.25"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
