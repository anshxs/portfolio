// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // allows any domain, disables built-in optimization
  },
}

export default nextConfig
