/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // Ensure we handle static files correctly
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 