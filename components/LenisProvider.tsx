// LenisProvider.tsx
"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        lerp: 0.1, // adjust for more/less smoothness
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      });
    }
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
