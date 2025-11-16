/** @type {import('next').NextConfig} */
// Configuration for deploying to root domain (e.g., https://example.com/)
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
