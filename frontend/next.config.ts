import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
    // Desabilita otimização apenas para desenvolvimento local
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
