import Image from "next/image";
import Link from "next/link";
import { AuroraText } from "./magicui/aurora-text";

const socialLinks = [
  { name: "linkedin", href: "https://www.linkedin.com/in/anshsx" },
  { name: "email", href: "mailto:anshsxa@gmail.com" },
  { name: "github", href: "https://github.com/anshxs" },
  { name: "instagram", href: "https://instagram.com/ansh_xs" },
  { name: "whatsapp", href: "https://wa.me/917006860750" }
];

export default function Footer() {
  return (
    <footer className="text-center py-16 bg-secondary px-4">
      <h2
        style={{ fontFamily: "marlin" }}
        className="text-3xl font-bold text-neutral-900 dark:text-white"
      >
        Let's{" "}
        <span style={{ fontFamily: "lovelace" }}>
          <AuroraText
            className="font-lovelace"
            colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
          >
            keep
          </AuroraText>
        </span>{" "}
        in Touch
      </h2>
      <p
        style={{ fontFamily: "marlin" }}
        className="mt-4 text-neutral-500 max-w-2xl mx-auto"
      >
        Stay updated on my latest projects, insights, and offerings. Whether you
        have questions, need advice, or just want to chat, don't hesitate to
        reach out!
      </p>

      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-neutral-700 dark:text-neutral-300">
        {socialLinks.map((link, idx) => (
          <span key={idx} className="px-3 border-r last:border-none">
            <Link style={{ fontFamily: "marlin" }} href={link.href}>
              {link.name}
            </Link>
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

      <p
        style={{ fontFamily: "marlin" }}
        className="mt-4  text-neutral-500 text-sm"
      >
        © 2025 — Built with love, open source, and inspiration from
        <a
          href="https://www.aleksandarpajic.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 italic mx-1"
        >
          Aleksandar Pajic
        </a>
        &
        <a
          href="https://aayushbharti.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600  italic mx-1"
        >
          Aayush Bharti
        </a>
        .
      </p>

      <p
        style={{ fontFamily: "marlin" }}
        className="text-blue-600 cursor-pointer mt-2 font-bold"
      >
        anshsx.me
      </p>
    </footer>
  );
}
