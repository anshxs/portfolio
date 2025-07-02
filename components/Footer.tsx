import Image from "next/image";
import Link from "next/link";
import { AuroraText } from "./magicui/aurora-text";

const socialLinks = [
  { name: "linkedin", href: "#" },
  { name: "email", href: "mailto:you@example.com" },
  { name: "upwork", href: "#" },
  { name: "github", href: "https://github.com" },
  { name: "dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="text-center py-16 bg-secondary px-4">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
        Let's <span style={{fontFamily: 'lovelace'}}><AuroraText className="font-lovelace" colors={["#ff3b52","#3b3bff","#7c30ff","#FF0080",   ]}>keep</AuroraText>
                </span> in Touch
      </h2>
      <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
        Stay updated on my latest projects, insights, and offerings. Whether you have
        questions, need advice, or just want to chat, don't hesitate to reach out!
      </p>

      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-neutral-700 dark:text-neutral-300">
        {socialLinks.map((link, idx) => (
          <span key={idx} className="px-3 border-r last:border-none">
            <Link href={link.href}>{link.name}</Link>
          </span>
        ))}
      </div>

      <div className="mt-10">
        <Image
          src="/sign.png"
          alt="Signature"
          width={120}
          height={60}
          className="mx-auto"
        />
      </div>

      <p className="mt-4 italic text-neutral-500 text-sm">
        Copyright © 2025 — Made by Aleksandar
      </p>
      <p className="text-neutral-800 dark:text-white mt-2 font-medium">
        aleksandarpajic.co
      </p>
    </footer>
  );
}
