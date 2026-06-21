/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'protomont.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;