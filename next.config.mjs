/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,         // Target .svg files
      use: ['@svgr/webpack'], // Use @svgr/webpack to handle SVGs as React components
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  }
};

export default nextConfig;
