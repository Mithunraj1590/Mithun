/** @type {import('next').NextConfig} */
const apiUrl = process.env.API_URL;
const nextConfig = {
  images: {
    domains: ["https://mithun-omega.vercel.app/"],
},
env: {
    NEXT_PUBLIC_API_ENDPOINT: apiUrl,
},


}
const withPWA = require("next-pwa");
module.exports = withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
  });
 
  module.exports = nextConfig
