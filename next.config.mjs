/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper static asset handling
  trailingSlash: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Target .svg files
      use: ["@svgr/webpack"], // Use @svgr/webpack to handle SVGs as React components
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },

  // Configure headers for static assets
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
