/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Ensure we handle static files correctly
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 