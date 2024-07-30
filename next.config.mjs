import { protocol } from 'socket.io-client';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'raw.githubusercontent.com',
              port: '',
              pathname: '/LeonardSSH/**',
            },
            {
                protocol: 'https',
                hostname: 'https://skillicons.dev/',
                port: '',
                pathname: '/**',
            }
        ],
    }
};

export default nextConfig;
