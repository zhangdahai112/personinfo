/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static export (no SSR)
    output: 'personinfo',
    
    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },
    
    // Optional: Configure base path if deploying to subdirectory
    // basePath: '/personinfo',
    
    // Optional: Configure asset prefix for CDN
    // assetPrefix: 'https://cdn.example.com',
    
    // Note: rewrites() is not supported in static export mode
    // API calls will need to use full backend URL or environment variables
};

module.exports = nextConfig;
