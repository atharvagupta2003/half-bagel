/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/half-bagel",
  assetPrefix: "/half-bagel",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
