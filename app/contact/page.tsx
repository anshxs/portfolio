"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { Mail, Phone, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="mx-auto min-h-screen pt-40 max-w-xl px-6 py-24 text-center">
      <h2
        className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center z-30 mb-0 md:mb-0 w-full -translate-y-6 md:-translate-y-10"
        style={{
          textShadow:
            "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
        }}
      >
        {/* <p
                style={{ fontFamily: "marlin" }}
                className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm"
              >
                Let's
              </p> */}
        <span style={{ fontFamily: "marlin" }}>
          Let's{" "}
          <span style={{ fontFamily: "lovelace" }}>
            <AuroraText
              className="font-lovelace"
              colors={["#ff3b52", "#3b3bff", "#7c30ff", "#FF0080"]}
            >
              Connect
            </AuroraText>
          </span>
        </span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Whether you want to collaborate, chat tech, or just say hi — I’d love to
        hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Box */}
        <div
          className="h-32 rounded-xl hover:border-blue-600 hover:border-dashed  border overflow-hidden cursor-pointer transition"
          onClick={() => (window.location.href = "mailto:ansh@example.com")}
        >
          {/* Top 40% Gradient */}
          <div className="h-[40%] bg-gradient-to-r from-blue-300/40 to-transparent flex items-center px-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-blue-700 mb-1" />
              <p className="text-black font-semibold">Email</p>
            </div>
          </div>
          {/* Bottom 60% */}
          <div className="h-[60%] flex flex-col -ml-8 justify-center">
            <p className="text-lg font-medium break-words">ansh@example.com</p>
            <p className="text-sm text-muted-foreground mt-1">
              Send me an email directly
            </p>
          </div>
        </div>

        {/* Book a Call Box */}
        <div
          data-cal-namespace="30min"
          data-cal-link="anshsx/30min"
          data-cal-config='{"layout":"month_view","theme":"light"}'
          className="h-32 rounded-xl border hover:border-pink-600 hover:border-dashed overflow-hidden cursor-pointer transition"
        >
          {/* Top 40% Gradient */}
          <div className="h-[40%] bg-gradient-to-r from-pink-300/40 to-transparent flex items-center px-6">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-pink-700 mb-1" />
              <p className="text-black font-semibold">Book a Call</p>
            </div>
          </div>
          {/* Bottom 60% */}
          <div className="h-[60%] -ml-8 flex flex-col justify-center">
            <p className="text-lg font-medium break-words">
              Schedule a time slot
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Book a call on my calendar
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-6 text-muted-foreground">
        <Link href="https://github.com/anshxs" target="_blank">
          <Github className="h-5 w-5 hover:text-black dark:hover:text-white" />
        </Link>
        <Link href="https://x.com/anshsxa" target="_blank">
          <Twitter className="h-5 w-5 hover:text-sky-500" />
        </Link>
        <Link href="https://instagram.com/ansh_xs" target="_blank">
          <Instagram className="h-5 w-5 hover:text-pink-500" />
        </Link>
      </div>
    </section>
  );
}
