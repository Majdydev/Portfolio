/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"], // Add any domains you'll load images from
  },
};

module.exports = nextConfig;
