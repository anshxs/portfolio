'use client'

import Image from "next/image";
import { AuroraText } from "./magicui/aurora-text";

const tools = [
  {
    name: "VSCode",
    src: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png",
    url: "https://code.visualstudio.com/",
    hoverColor: "indigo-400",
  },
  {
    name: "Spotify",
    src: "https://cdn.simpleicons.org/spotify",
    url: "https://spotify.com/",
    hoverColor: "border-green-400",
  },
  {
    name: "Claude AI",
    src: "https://cdn.simpleicons.org/claude",
    url: "https://claude.ai/",
    hoverColor: "border-purple-400",
  },
  {
    name: "ChatGPT",
    src: "https://cdn.simpleicons.org/openai/black",
    url: "https://chat.openai.com/",
    hoverColor: "border-emerald-400",
  },
  {
    name: "GitHub",
    src: "https://cdn.simpleicons.org/github",
    url: "https://github.com/",
    hoverColor: "border-gray-500",
  },
];


const ToolsSection = () => {
  return (
    <section
      style={{ fontFamily: "marlin" }}
      className="w-full max-w-5xl mx-auto text-center pt-42 min-h-screen px-4"
    >

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
          Tools
        </p>
        <span style={{ fontFamily: "marlin" }}>
          Everyday{" "}
          <span style={{ fontFamily: "lovelace" }}>
            <AuroraText
              className="font-lovelace"
              colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
            >
              tools
            </AuroraText>
          </span>{" "}
          i use
        </span>
      </h2>

      <div className="mt-1 flex flex-wrap gap-6 justify-center">
        {tools.map((tool) => (
          <div
  key={tool.name}
  onClick={() => window.open(tool.url, "_blank")}
  className={`cursor-pointer h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 group md:hover:-translate-y-3 md:hover:border-blue-600`}
>

            <div
              className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
              style={{
                boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset",
              }}
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="mt-4">{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
