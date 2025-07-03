import Image from "next/image";
import Link from "next/link";

const tools = [
//   {
//     name: "Safari",
//     src: "https://img.icons8.com/color/480/safari--v1.png",
//     delay: 200,
//   },
//   {
//     name: "Xcode",
//     src: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-xcode-is-an-integrated-development-environment-for-macos-logo-tritone-tal-revivo.png",
//     delay: 100,
//   },
{ name: "Claude", src: "https://cdn.simpleicons.org/claude", delay: 100 },
  {
    name: "VSCode",
    src: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/vscode.png",
    delay: 0,
    large: true,
  },
  
  {
    name: "ChatGPT",
    src: "https://cdn.simpleicons.org/openai/black",
    delay: 200,
  },
];

export default function CardUses() {
  return (
    <Link
      href="https://code.visualstudio.com/"
      className="group relative flex flex-col justify-between rounded-xl col-span-12 h-[300px] md:col-span-12 md:row-span-6 lg:col-span-4"
    >
      <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-secondary">
        <div className="absolute right-4 bottom-4 z-[999] flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-black/15 opacity-0 transition-all duration-300 group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100 dark:bg-white/15">
          <ArrowIcon />
        </div>

        <div className="size-full relative">
          <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-bg-primary to-transparent group-hover:from-bg-white z-20" />
          <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-bg-primary to-transparent group-hover:from-bg-white z-20" />
          <div className="mt-10 md:mt-12  flex items-center justify-center gap-3 transition-all duration-500 ease-in-out">
            {tools.map(({ name, src, delay, large }) => (
              <div
                key={name}
                className={`group inline-block text-center transition-all duration-500 delay-${delay} ${
                  large
                    ? "size-[110px] md:size-[130px]"
                    : "size-[90px] md:size-[100px]"
                } group-hover:-translate-y-6`}
              >
                <div className="rounded-[20px] border-2 p-2 group-hover:border-indigo-400">
                  <div className="grid h-full place-items-center rounded-xl border-2 p-4 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E] shadow-inner">
                    <Image src={src} alt={name} width={60} height={60} />
                  </div>
                </div>
              </div>
            ))}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-secondary"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-secondary"></div>
          </div>
        </div>

        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6">
          <h3 style={{fontFamily: 'marlin'}} className="max-w-lg text-neutral-400">Uses</h3>
          <p style={{fontFamily: 'marlin'}} className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            Check out my favorite tools and spots around the web.
          </p>
        </div>
        
        {/* <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}
        {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" /> */}
      </div>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-6 w-6 text-neutral-700 dark:text-neutral-200"
      viewBox="0 0 24 24"
      fill="none"
    >
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
