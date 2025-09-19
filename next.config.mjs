/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.dell.com',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
