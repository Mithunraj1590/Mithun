/** @type {import('next').NextConfig} */
const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;
const nextConfig = {
  images: {
    domains: ["https://db-mithunraj1590s-projects.vercel.app"],
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
