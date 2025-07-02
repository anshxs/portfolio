'use client';

import { useRef, useState, useMemo } from 'react';
import { useSpring } from '@react-spring/web';
import { cn } from '@/lib/utils';
import { Globe } from './magicui/globe';

const LOCATIONS = {
  uk: { lat: 55.3781, lng: -3.436, label: '🇬🇧 UK' },
  india: { lat: 20.5937, lng: 78.9629, label: '🇮🇳 India' },
  usa: { lat: 37.0902, lng: -95.7129, label: '🇺🇸 USA' },
};

export default function MagicUIControlledGlobe() {
  const [selected, setSelected] = useState<keyof typeof LOCATIONS>('india');
  const coords = LOCATIONS[selected];

  // Convert lat/lng to radians
  const thetaTarget = useMemo(() => (coords.lat / 180) * Math.PI, [coords]);

  // Track current phi across renders
  const currentPhi = useRef((LOCATIONS['india'].lng / 180) * Math.PI);

  // Calculate phiTarget: always rotate left to right (eastward)
  const phiTarget = useMemo(() => {
    let newPhi = (coords.lng / 180) * Math.PI;

    // Ensure eastward (left to right) rotation by increasing phi
    while (newPhi < currentPhi.current) {
      newPhi += 2 * Math.PI;
    }

    currentPhi.current = newPhi;
    return newPhi;
  }, [coords]);

  const globeRef = useRef<{ phi: number; theta: number }>({
    phi: phiTarget,
    theta: thetaTarget,
  });

  const [springs] = useSpring(() => ({
    phi: phiTarget,
    theta: thetaTarget,
    config: { tension: 120, friction: 30 },
    onChange: {
      phi: (v) => (globeRef.current.phi = v.value),
      theta: (v) => (globeRef.current.theta = v.value),
    },
  }));

  // Animate on selection
  springs.phi.start({ to: phiTarget });
  springs.theta.start({ to: thetaTarget });

  return (
    <div className="flex flex-col items-center space-y-6 px-4 py-10">
      {/* Gradient Heading */}
      <h1 className="text-2xl text-center font-bold tracking-tighter select-none bg-gradient-to-b from-[#0012dbbb] to-[#004cffc1] bg-clip-text text-transparent">
        I’m flexible with time zone communications
      </h1>

      {/* Country Tabs */}
      <div className="flex gap-4">
        {Object.entries(LOCATIONS).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setSelected(key as keyof typeof LOCATIONS)}
            className={cn(
              'rounded-lg px-3 py-1 text-sm font-medium border transition',
              selected === key
                ? 'bg-blue-600 text-white border-blue-700'
                : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Globe */}
      <div className="relative w-full max-w-[500px] aspect-square">
        <Globe
          config={{
            width: 800,
            height: 800,
            devicePixelRatio: 2,
            phi: 0, // dummy, will be overridden below
            theta: 0, // dummy, overridden below
            onRender: (state) => {
              state.phi = globeRef.current.phi;
              state.theta = globeRef.current.theta;
            },
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [1, 0.3, 0.1],
            glowColor: [1, 1, 1],
            markers: [{ location: [coords.lat, coords.lng], size: 0.1 }],
          }}
        />
      </div>
    </div>
  );
}
