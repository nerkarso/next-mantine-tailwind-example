/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        turbotrace: {
            logDetail: true
        }
    }
};

module.exports = nextConfig;
