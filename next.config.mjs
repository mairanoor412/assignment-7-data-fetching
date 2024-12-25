/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com'], // Add the domain from which you're fetching images
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};


export default nextConfig;
