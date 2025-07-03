'use client';

import Image from 'next/image';
import { ArrowUpRight, BookHeart, Github, Linkedin, Send } from 'lucide-react';

const socials = [
  {
    href: 'https://linkedin.com/in/iaayushbharti',
    label: 'LinkedIn',
    icon: <Linkedin className="text-black dark:text-neutral-300" size={20} />,
  },
  {
    href: 'https://t.me/aayush_notes',
    label: 'Telegram',
    icon: (
      <Send
        size={20}
        className="text-black dark:text-neutral-300"
      />
    ),
  },
  {
    href: 'https://github.com/aayushbharti',
    label: 'GitHub',
    icon: <Github className="text-black dark:text-neutral-300" size={20} />,
  },
  {
    href: 'https://aayushbharti.in/guestbook',
    label: 'Guestbook',
    icon: <BookHeart className="stroke-1 text-black dark:text-neutral-300" size={20} />,
  },
  {
    href: 'https://x.com/iaayushbharti',
    label: 'X (Twitter)',
    icon: (
      <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" className="text-black dark:text-neutral-300" height="20" width="20">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    href: 'https://bsky.app/profile/aayushbharti.bsky.social',
    label: 'BlueSky',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-black dark:text-neutral-300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.90172 3.06907C6.96538 4.62164 9.18496 7.76969 10 9.45892C10.815 7.76969 13.0346 4.62164 15.0983 3.06907C16.5873 1.94881 19 1.08201 19 3.84022C19 4.39105 18.6848 8.46765 18.5 9.12954C17.8575 11.4304 15.5162 12.0173 13.4335 11.6621C17.0739 12.283 18 14.3396 16 16.3962C12.2016 20.3021 10.5407 15.4162 10.1151 14.1643C10.037 13.9348 10.0005 13.8274 10 13.9187C9.99946 13.8274 9.96295 13.9348 9.88493 14.1643C9.45934 15.4162 7.79839 20.3021 4 16.3962C2 14.3396 2.92606 12.283 6.56647 11.6621C4.48379 12.0173 2.14254 11.4304 1.5 9.12954C1.31517 8.46765 1 4.39105 1 3.84022C1 1.08201 3.41271 1.94881 4.90172 3.06907Z" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProfilePage() {
  return (
    <main style={{fontFamily: 'marlin'}} className="relative mx-auto w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-[-1] h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80"
        style={{
          maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)',
          opacity: 1,
        }}
      >
        <Image
          alt="crumpled paper texture"
          fill
          className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none"
          src="/download.avif"
          sizes="100vw"
        />
      </div>

      <section className="mx-auto w-full max-w-7xl overflow-x-hidden">
        <div className="relative mx-auto min-h-screen max-w-lg overflow-x-hidden px-4">
          <div className="relative mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden pt-24 pb-6">
            <Image
              src="/profile.png"
              width={90}
              height={90}
              alt="Aayush Bharti's Profile Picture"
              className="rounded-full bg-gray-200 border-2"
            />
            <h1 className="text-xl font-semibold">Aayush Bharti</h1>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
              <span className="rounded-full px-2 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-500">Developer</span>
              <span className="rounded-full px-2 py-1 bg-green-500/10 text-green-700 dark:text-green-500">Freelancer</span>
              <span className="rounded-full px-2 py-1 bg-violet-500/10 text-violet-700 dark:text-violet-500">Problem Solver</span>
            </div>
          </div>

          {/* Website + Email Buttons */}
          <div className="mx-auto mb-4 flex w-fit gap-x-2 md:text-sm">
            <a
              href="https://anshsx.me"
              target="_blank"
              rel="noreferrer"
              className="group relative flex w-fit items-center justify-between rounded-full bg-black text-white opacity-90 hover:bg-black/80 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300"
            >
              <span className="pl-4 text-base font-light">Website</span>
              <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                  <ArrowUpRight className="size-5" />
                  <ArrowUpRight className="mb-1 size-5 -translate-x-4" />
                </div>
              </div>
            </a>

            <a
              href="mailto:anshsxa@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group relative flex w-fit items-center justify-between rounded-full bg-black/20 text-black opacity-90 hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
            >
              <span className="pl-4 text-base font-light">anshsxa@gmail.com</span>
              <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                  <ArrowUpRight className="size-5" />
                  <ArrowUpRight className="mb-1 size-5 -translate-x-4" />
                </div>
              </div>
            </a>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-4 py-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-white-3 bg-white-2 relative flex h-14 w-full items-center justify-center rounded-xl border px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              >
                <div className="absolute left-8">{item.icon}</div>
                <div className="text-neutral-800 dark:text-neutral-200">{item.label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
