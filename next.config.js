/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
