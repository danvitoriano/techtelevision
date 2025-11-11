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
      {
        protocol: 'https',
        hostname: 'splendid-fish-5d9df6f8db.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'splendid-fish-5d9df6f8db.media.strapiapp.com',
        pathname: '/**',
      },
    ],
    // Desabilita otimização apenas para desenvolvimento local
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
