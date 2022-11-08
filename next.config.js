/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "honeycomb.io",
        port: "",
        pathname: "/",
      },
    ],
  },

  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
