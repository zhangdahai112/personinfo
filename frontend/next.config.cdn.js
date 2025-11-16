/** @type {import('next').NextConfig} */
// Configuration for CDN deployment with absolute paths
const nextConfig = {
    output: 'export',
    
    // Set asset prefix to CDN URL or absolute domain
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || 'https://cdn.example.com',
    
    images: {
        unoptimized: true,
    },
    
    trailingSlash: true,
};

module.exports = nextConfig;
