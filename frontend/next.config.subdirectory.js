/** @type {import('next').NextConfig} */
// Configuration for deploying to subdirectory (e.g., https://example.com/personinfo/)
const nextConfig = {
    output: 'export',
    
    // Set base path for subdirectory deployment
    basePath: '/personinfo',
    
    images: {
        unoptimized: true,
    },
    
    trailingSlash: true,
};

module.exports = nextConfig;
