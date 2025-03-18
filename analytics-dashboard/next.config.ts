// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Optional, enables additional checks and warnings
  swcMinify:true,
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "**",
      }
    ]
  }
};

export default nextConfig;
