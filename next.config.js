/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mithun-three.vercel.app"], // Domain without https://
  },
  env: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
  experimental: {
    serverActions: true, // Required for your form submission
  },
  // Optional: Add if you need CORS headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;