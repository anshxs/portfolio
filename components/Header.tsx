"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {Github, Globe, Instagram, MapPin, Star} from 'lucide-react'
import { FaGithub } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function Header() {
  const [time, setTime] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Get IST time manually
      const istOffset = 5.5 * 60; // IST offset in minutes
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + istOffset * 60000);

      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();

      // Format time as HH:MM
      const formatted = istDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(formatted);

      // Update icon color based on time range
      setIsDaytime(hours >= 8 && hours < 23);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full flex justify-between items-center py-2 px-3 md:px-8 md:fixed md:z-20 bg-transparent">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-center p-2 font-bold cursor-pointer rounded-md bg-gray-100" onClick={()=>{router.push('https://github.com/anshxs')}}>
          <Github size={12} fill="black" className="hover:animate-spin" />
        </div>
        <span className="inline-block w-7 h-7 bg-gray-100 rounded-md p-[4px]">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-transparent stroke-[3]">
        <defs>
          <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="40%" stopColor="#d62976" />
            <stop offset="70%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <Instagram stroke="url(#instaGradient)" />
      </svg>
    </span>
      </div>

      {/* Right: Location + Timezone + Time */}
      <div className="flex items-center gap-2 text-xs font-medium uppercase text-gray-800">
        {/* Mobile: Combined */}
        <div className="flex md:hidden items-center px-2 py-1 rounded-md bg-gray-100">
          <MapPin size={12}/>
          India (UTC+5:30)
        </div>

        {/* Desktop: Separate */}
        <div className="hidden md:flex items-center px-2 py-1 gap-1 rounded-md bg-gray-100">
            <MapPin size={12}/>
          India
        </div>
        <div className="hidden md:flex items-center px-2 py-1 gap-1 rounded-md bg-gray-100">
            <Globe size={12}/>
          UTC+5:30
        </div>

        {/* Time */}
        <div className="flex items-center px-2 py-1 rounded-md bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={`mr-1 ${isDaytime ? "text-green-600" : "text-red-500"}`}
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H147.31l26.35,26.34a8,8,0,0,1-11.32,11.32l-40-40A8,8,0,0,1,128,120h56A8,8,0,0,1,192,128Z" />
          </svg>
          {time}
        </div>
      </div>
    </header>
  );
}
