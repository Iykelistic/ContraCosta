/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid flaky filesystem cache chunk corruption on some Windows setups.
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
