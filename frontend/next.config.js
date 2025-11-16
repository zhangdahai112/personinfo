/** @type {import('next').NextConfig} */
// Dynamic basePath configuration
// Development: no basePath (root path)
// Production: uses /personinfo basePath
const nextConfig = {
    output: 'export',

      // Set asset prefix to CDN URL or absolute domain
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || 'http://localhost:3000',
    
    images: {
        unoptimized: true,
    },
    
    trailingSlash: true,
};

module.exports = nextConfig;
