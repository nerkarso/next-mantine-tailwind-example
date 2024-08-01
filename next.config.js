/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: '*' }],
    unoptimized: true,
  },
};

module.exports = nextConfig;
