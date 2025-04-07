/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  images: {
    unoptimized: true
  },
  // Ensure we handle static files correctly
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 