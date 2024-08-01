/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: {
    remotePatterns: [{ hostname: '*' }],
    unoptimized: true,
  },
};

module.exports = nextConfig;
