/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "open-hr.sgp1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "open-hr.sgp1.cdn.digitaloceanspaces.composts",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "content-hub-backend.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
