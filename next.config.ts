// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,

    // ⬅ Aquí se añade la configuración 'images'
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/api/qr/**',
            },
        ],
    },
};

export default nextConfig;