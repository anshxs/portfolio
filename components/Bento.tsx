"use client";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  CheckIcon,
  CopyIcon,
  HeartHandshake,
  MapPin,
  PanelsTopLeft,
  Share2Icon,
} from "lucide-react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import MagicUIControlledGlobe from "./Globe";
import { MarqueeDemo } from "./TechBento";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Ripple } from "./magicui/ripple";
import { Ripple2 } from "./magicui/ripple-pink";
import confetti from "canvas-confetti";

export function BentoDemo() {
  const [copied, setCopied] = useState(false);
  const email = "anshsxa@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Blue success toast using Sonner
    toast("Email copied to clipboard!", {
      description: "You can now paste it anywhere.",
      style: {
        background: "#001effbf",
        color: "#ffffff",
        border: '1px solid #0c5ad9'
      },
    });

    // Trigger confetti side cannons
    triggerSideCannons();

    // Reset icon after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerSideCannons = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };
  const files = [
  {
    name: "ReactJS",
    body: "Experienced in building dynamic, component-based web applications with ReactJS, focusing on performance and scalability.",
  },
  {
    name: "NextJS",
    body: "Proficient in developing server-side rendered and static websites using Next.js, optimizing for SEO and performance.",
  },
  {
    name: "TypeScript",
    body: "Skilled in writing strongly typed, maintainable code with TypeScript for both frontend and backend applications.",
  },
  {
    name: "Tailwind CSS",
    body: "Expert in crafting responsive and modern user interfaces quickly with Tailwind CSS utility-first framework.",
  },
  {
    name: "Python",
    body: "Capable of developing backend services, data analysis scripts, and automation tools with Python.",
  },
  {
    name: "Dart",
    body: "Proficient in using Dart programming language to build scalable and cross-platform applications.",
  },
  {
    name: "Flutter",
    body: "Experienced in creating high-performance, cross-platform mobile apps using Flutter with responsive UI designs.",
  },
  {
    name: "JavaScript",
    body: "Strong foundation in JavaScript for building interactive, dynamic, and functional web applications.",
  },
  {
    name: "HTML",
    body: "Well-versed in semantic HTML for building accessible and structured web content.",
  },
  {
    name: "CSS",
    body: "Experienced in styling web applications with modern CSS, ensuring responsive and visually appealing layouts.",
  },
  {
    name: "Motion",
    body: "Skilled in implementing smooth animations and transitions to enhance user experience using libraries like Framer Motion.",
  },
  {
    name: "Supabase",
    body: "Proficient in using Supabase for backend services, authentication, and database management in modern applications.",
  },
  {
    name: "Firebase",
    body: "Experienced with Firebase for real-time databases, authentication, hosting, and cloud functions.",
  },
  {
    name: "PostgreSQL",
    body: "Knowledgeable in designing, querying, and optimizing relational databases using PostgreSQL.",
  },
  {
    name: "Git",
    body: "Proficient in version control using Git for efficient collaboration and code management.",
  },
  {
    name: "GitHub",
    body: "Experienced in using GitHub for repository hosting, collaboration, and project management workflows.",
  },
  {
    name: "Vercel",
    body: "Skilled in deploying and hosting modern web applications on Vercel with seamless CI/CD pipelines.",
  },
  {
    name: "Clerk",
    body: "Proficient in integrating Clerk for user authentication, identity management, and secure access control.",
  },
];


  const features = [
    {
      Icon: HeartHandshake,
      name: "Collaboration",
      description:
        "I prioritize client collaboration, fostering open communication",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute flex h-[300px] w-full flex-col">
          <div className="relative h-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
            <svg
              className="absolute top-0 left-1/2 -translate-x-1/2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]"
              width="704"
              height="250"
              viewBox="0 0 637 250"
            >
              <g clipPath="url(#clip0_170_308)">
                <g filter="url(#filter0_i_170_308)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237ZM-30.1683 59.1027L-85.3462 114.34L-91 120L-85.3462 125.66L-30.1683 180.897C3.42807 214.53 57.8986 214.53 91.495 180.897C102.486 169.894 109.882 156.654 113.681 142.641C117.481 156.654 124.876 169.894 135.868 180.897C169.464 214.53 223.935 214.53 257.531 180.897L312.709 125.66L318.363 120L312.709 114.34L257.531 59.1027C223.935 25.47 169.464 25.47 135.868 59.1027C124.876 70.106 117.481 83.3459 113.681 97.359C109.882 83.3459 102.486 70.106 91.495 59.1027C57.8986 25.47 3.42807 25.47 -30.1683 59.1027ZM251.877 175.237C221.403 205.744 171.995 205.744 141.522 175.237C111.048 144.731 111.048 95.2694 141.522 64.7626C171.995 34.2558 221.403 34.2558 251.877 64.7626L307.055 120L251.877 175.237ZM385.118 175.237C415.592 205.744 465 205.744 495.474 175.237C525.948 144.731 525.948 95.2694 495.474 64.7626C465 34.2558 415.592 34.2558 385.118 64.7626L329.94 120L385.118 175.237ZM379.464 59.1027L324.287 114.34L318.633 120L324.287 125.66L379.464 180.897C413.061 214.53 467.531 214.53 501.128 180.897C511.657 170.356 518.887 157.762 522.816 144.403C526.746 157.762 533.975 170.356 544.505 180.897C578.101 214.53 632.572 214.53 666.168 180.897L721.346 125.66L727 120L721.346 114.34L666.168 59.1027C632.572 25.47 578.101 25.47 544.505 59.1027C533.975 69.6438 526.746 82.2376 522.816 95.5975C518.887 82.2376 511.657 69.6438 501.128 59.1027C467.531 25.47 413.061 25.47 379.464 59.1027ZM550.159 175.237C580.633 205.744 630.041 205.744 660.514 175.237L715.692 120L660.514 64.7626C630.041 34.2558 580.633 34.2558 550.159 64.7626C519.685 95.2694 519.685 144.731 550.159 175.237Z"
                    fill="#2A2A2A"
                    fillOpacity="0.3"
                  ></path>
                </g>
                <mask id="path-2-inside-1_170_308" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M530.935 62.0924C527.084 67.0776 518.876 67.0706 515.032 62.0796C512.556 58.8646 509.846 55.772 506.902 52.8249C469.842 15.725 409.756 15.725 372.696 52.8249L362.342 63.1907C359.509 66.0262 355.041 66.2786 351.611 64.2065C341.932 58.3606 330.605 55 318.5 55C306.004 55 294.338 58.581 284.458 64.7802C281.014 66.9409 276.466 66.7264 273.593 63.8501L262.942 53.1878C226.082 16.2884 166.321 16.2884 129.462 53.1878C126.674 55.9787 124.097 58.9007 121.73 61.9341C117.882 66.8675 109.765 66.8619 105.928 61.9195C88.6146 39.6164 61.5624 25.266 31.1621 25.266C-21.1017 25.266 -63.4698 67.6799 -63.4698 120C-63.4698 172.32 -21.1017 214.734 31.1621 214.734C61.5623 214.734 88.6146 200.384 105.928 178.081C109.765 173.138 117.882 173.133 121.73 178.066C124.097 181.099 126.674 184.021 129.462 186.812C166.321 223.712 226.082 223.712 262.942 186.812L273.593 176.15C276.466 173.274 281.014 173.059 284.458 175.22C294.338 181.419 306.004 185 318.5 185C330.605 185 341.932 181.639 351.611 175.793C355.041 173.721 359.509 173.974 362.342 176.809L372.696 187.175C409.756 224.275 469.842 224.275 506.902 187.175C509.846 184.228 512.556 181.135 515.032 177.92C518.876 172.929 527.084 172.922 530.935 177.908C548.243 200.309 575.356 214.734 605.835 214.734C658.099 214.734 700.467 172.32 700.467 120C700.467 67.6799 658.099 25.266 605.835 25.266C575.356 25.266 548.243 39.6906 530.935 62.0924Z"
                  ></path>
                </mask>
                <path
                  d="M506.902 52.8249L506.194 53.5316L506.194 53.5316L506.902 52.8249ZM372.696 52.8249L371.989 52.1181L371.989 52.1181L372.696 52.8249ZM262.942 53.1878L262.234 53.8945L262.234 53.8945L262.942 53.1878ZM129.462 53.1878L128.754 52.4811L128.754 52.4811L129.462 53.1878ZM129.462 186.812L128.754 187.519L128.754 187.519L129.462 186.812ZM262.942 186.812L262.234 186.106L262.234 186.106L262.942 186.812ZM372.696 187.175L371.989 187.882L371.989 187.882L372.696 187.175ZM506.902 187.175L507.609 187.882L507.609 187.882L506.902 187.175ZM515.032 177.92L515.824 178.531L515.032 177.92ZM530.935 177.908L531.726 177.296L530.935 177.908ZM351.611 175.793L352.128 176.649L351.611 175.793ZM362.342 176.809L363.049 176.103L362.342 176.809ZM273.593 176.15L272.885 175.443L273.593 176.15ZM284.458 175.22L283.926 176.067L284.458 175.22ZM515.032 62.0796L515.824 61.4694L515.032 62.0796ZM530.935 62.0924L531.726 62.7038L530.935 62.0924ZM105.928 178.081L105.138 177.467L105.928 178.081ZM121.73 178.066L122.519 177.451L121.73 178.066ZM284.458 64.7802L284.989 65.6273L284.458 64.7802ZM273.593 63.8501L274.3 63.1433L273.593 63.8501ZM105.928 61.9195L106.718 61.3063L105.928 61.9195ZM362.342 63.1907L363.049 63.8975L362.342 63.1907ZM351.611 64.2065L352.128 63.3506L351.611 64.2065ZM507.609 52.1181C510.583 55.0957 513.322 58.2206 515.824 61.4694L514.24 62.6898C511.79 59.5087 509.108 56.4483 506.194 53.5316L507.609 52.1181ZM371.989 52.1181C409.439 14.6273 470.159 14.6273 507.609 52.1181L506.194 53.5316C469.525 16.8228 410.073 16.8228 373.404 53.5316L371.989 52.1181ZM361.634 62.484L371.989 52.1181L373.404 53.5316L363.049 63.8975L361.634 62.484ZM318.5 54C330.793 54 342.297 57.4132 352.128 63.3506L351.094 65.0625C341.566 59.308 330.418 56 318.5 56V54ZM283.926 63.9331C293.961 57.6371 305.81 54 318.5 54V56C306.198 56 294.715 59.5249 284.989 65.6273L283.926 63.9331ZM263.649 52.4811L274.3 63.1433L272.885 64.5568L262.234 53.8945L263.649 52.4811ZM128.754 52.4811C166.004 15.1906 226.399 15.1906 263.649 52.4811L262.234 53.8945C225.766 17.3861 166.638 17.3861 130.169 53.8945L128.754 52.4811ZM120.942 61.3191C123.333 58.2536 125.937 55.3009 128.754 52.4811L130.169 53.8945C127.41 56.6565 124.86 59.5479 122.519 62.5492L120.942 61.3191ZM31.1621 24.266C61.8846 24.266 89.2234 38.7699 106.718 61.3063L105.138 62.5327C88.0058 40.4629 61.2402 26.266 31.1621 26.266V24.266ZM-64.4698 120C-64.4698 67.1286 -21.655 24.266 31.1621 24.266V26.266C-20.5484 26.266 -62.4698 68.2311 -62.4698 120H-64.4698ZM31.1621 215.734C-21.655 215.734 -64.4698 172.871 -64.4698 120H-62.4698C-62.4698 171.769 -20.5484 213.734 31.1621 213.734V215.734ZM106.718 178.694C89.2234 201.23 61.8846 215.734 31.1621 215.734V213.734C61.2401 213.734 88.0058 199.537 105.138 177.467L106.718 178.694ZM128.754 187.519C125.937 184.699 123.333 181.746 120.942 178.681L122.519 177.451C124.86 180.452 127.41 183.344 130.169 186.106L128.754 187.519ZM263.649 187.519C226.399 224.809 166.004 224.809 128.754 187.519L130.169 186.106C166.638 222.614 225.766 222.614 262.234 186.106L263.649 187.519ZM274.3 176.857L263.649 187.519L262.234 186.106L272.885 175.443L274.3 176.857ZM318.5 186C305.81 186 293.961 182.363 283.926 176.067L284.989 174.373C294.715 180.475 306.198 184 318.5 184V186ZM352.128 176.649C342.297 182.587 330.793 186 318.5 186V184C330.418 184 341.566 180.692 351.094 174.937L352.128 176.649ZM371.989 187.882L361.634 177.516L363.049 176.103L373.404 186.468L371.989 187.882ZM507.609 187.882C470.159 225.373 409.439 225.373 371.989 187.882L373.404 186.468C410.073 223.177 469.525 223.177 506.194 186.468L507.609 187.882ZM515.824 178.531C513.322 181.779 510.583 184.904 507.609 187.882L506.194 186.468C509.108 183.552 511.79 180.491 514.24 177.31L515.824 178.531ZM605.835 215.734C575.033 215.734 547.632 201.155 530.144 178.519L531.726 177.296C548.853 199.464 575.679 213.734 605.835 213.734V215.734ZM701.467 120C701.467 172.871 658.652 215.734 605.835 215.734V213.734C657.545 213.734 699.467 171.769 699.467 120H701.467ZM605.835 24.266C658.652 24.266 701.467 67.1286 701.467 120H699.467C699.467 68.2311 657.545 26.266 605.835 26.266V24.266ZM530.144 61.481C547.632 38.8448 575.033 24.266 605.835 24.266V26.266C575.679 26.266 548.853 40.5363 531.726 62.7038L530.144 61.481ZM514.24 177.31C518.484 171.8 527.474 171.792 531.726 177.296L530.144 178.519C526.693 174.053 519.269 174.059 515.824 178.531L514.24 177.31ZM351.094 174.937C354.862 172.662 359.847 172.897 363.049 176.103L361.634 177.516C359.171 175.051 355.221 174.781 352.128 176.649L351.094 174.937ZM272.885 175.443C276.134 172.191 281.207 172 284.989 174.373L283.926 176.067C280.82 174.118 276.798 174.356 274.3 176.857L272.885 175.443ZM515.824 61.4694C519.269 65.9413 526.693 65.9475 530.144 61.481L531.726 62.7038C527.474 68.2078 518.484 68.1999 514.24 62.6898L515.824 61.4694ZM105.138 177.467C109.375 172.009 118.27 172.004 122.519 177.451L120.942 178.681C117.494 174.261 110.154 174.267 106.718 178.694L105.138 177.467ZM284.989 65.6273C281.207 68.0001 276.134 67.8087 272.885 64.5568L274.3 63.1433C276.798 65.6441 280.82 65.8818 283.926 63.9331L284.989 65.6273ZM122.519 62.5492C118.27 67.996 109.375 67.9906 105.138 62.5327L106.718 61.3063C110.154 65.7332 117.494 65.739 120.942 61.3191L122.519 62.5492ZM363.049 63.8975C359.847 67.103 354.862 67.3383 351.094 65.0625L352.128 63.3506C355.221 65.2188 359.171 64.9494 361.634 62.484L363.049 63.8975Z"
                  fill="#505050"
                  fillOpacity="0.2"
                  mask="url(#path-2-inside-1_170_308)"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_i_170_308"
                  x="-91"
                  y="33.8782"
                  width="818"
                  height="173.744"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="0.75"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_170_308"
                  ></feBlend>
                </filter>
                <clipPath id="clip0_170_308">
                  <rect
                    width="704"
                    height="250"
                    fill="white"
                    transform="translate(-34)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div className="relative mt-[46px]">
              <svg
                className="mx-auto"
                width="148"
                height="148"
                viewBox="0 0 148 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_0_1)">
                  <rect
                    x="16"
                    y="16"
                    width="116"
                    height="116"
                    rx="58"
                    fill="#2A2A2A"
                  ></rect>
                  <rect
                    className="stroke-[#494949] transition-colors delay-200 duration-500 group-hover:stroke-amber-500 stroke-3 border-2 border-gray-400"
                    x="16.75"
                    y="16.75"
                    width="114.5"
                    height="114.5"
                    rx="57.25"
                    stroke="#494949"
                    strokeWidth="1.5"
                  ></rect>
                </g>
              </svg>
              <img
                className="absolute bg-amber-500 top-1/2 left-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform rounded-full"
                alt="Ansh Sharma"
                src="/profile.png"
              />
            </div>
            <span className="hidden lg:block lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {/* <div
              className="absolute w-12 h-12 p-1 z-10"
              style={{ top: "55%", left: "28%", opacity: 1 }}
            >
              <div className="rounded-full border border-white/95 bg-gray-200 w-12 h-12 p-1">
                <img
                  className="rounded-full"
                  alt="Connection"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                />
              </div>
            </div> */}

              <div
                className="absolute w-16 h-16 p-1 z-10"
                style={{ top: "53%", left: "63%", opacity: 1 }}
              >
                <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-16 h-16 p-1">
                  <img
                    className="rounded-full"
                    alt="Connection"
                    src="https://randomuser.me/api/portraits/men/7.jpg"
                  />
                </div>
              </div>

              <div
                className="absolute w-14 h-14 p-1 z-10"
                style={{ top: "4%", left: "32%", opacity: 1 }}
              >
                <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-14 h-14 p-1">
                  <img
                    className="rounded-full"
                    alt="Connection"
                    src="https://randomuser.me/api/portraits/women/24.jpg"
                  />
                </div>
              </div>

              <div
                className="absolute w-10 h-10 p-1 z-10"
                style={{ top: "8%", left: "78%", opacity: 1 }}
              >
                <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-10 h-10 p-1">
                  <img
                    className="rounded-full"
                    alt="Connection"
                    src="https://randomuser.me/api/portraits/women/35.jpg"
                  />
                </div>
              </div>

              <div
                className="absolute w-9 h-9 p-1 z-10"
                style={{ top: "7%", left: "11%", opacity: 1 }}
              >
                <div className="rounded-full border border-white/5 bg-[#2A2A2A] w-9 h-9 p-1">
                  <img
                    className="rounded-full"
                    alt="Connection"
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                  />
                </div>
              </div>
            </span>
          </div>
        </div>
      ),
    },
    {
      className: "col-span-3 lg:col-span-1 row-span-2",
      background: (
        <MarqueeDemo />
        //   <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
      ),
    },
    {
      className: "col-span-3 lg:col-span-1 row-span-2",
      background: (
        <MagicUIControlledGlobe />
        //   <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className="w-full max-w-xs mx-auto p-4 rounded-xl justify-center mt-8 flex flex-col items-center space-y-3">
          <div className="-z-10 ">
            <Ripple2 />
          </div>

          <img
            className="top-1/2 left-1/2 h-[150px] w-[150px] animate-bounce"
            alt="Ansh Sharma"
            src="/heart.png"
          />

          <Button
            onClick={handleCopy}
            variant="outline"
            style={{fontFamily: 'marlin'}}
            className="flex items-center space-x-2 text-sm"
          >
            {copied ? (
              <CheckIcon className="w-4 h-4 text-green-500" />
            ) : (
              <CopyIcon className="w-4 h-4" />
            )}
            <span>{email}</span>
          </Button>
        </div>
      ),
    },
    {
      Icon: PanelsTopLeft,
      name: "The Inside Scoop",
      description: "Currently Building an eSports Tournament App",
      href: "#",
      className: "col-span-3 lg:col-span-2",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-pink-600/[.7] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption style={{fontFamily: 'marlin'}} className="text-sm font-bold dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote style={{fontFamily: 'marlin'}} className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      ),
    },
  ];

  return (
    <BentoGrid className="mt-20">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
