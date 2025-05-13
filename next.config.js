/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"], // Add any domains you'll load images from
  },
  output: 'standalone',
  experimental: {
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig;
